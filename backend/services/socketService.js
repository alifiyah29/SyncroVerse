class SocketService {
    constructor(io) {
      this.io = io;
      this.documentRooms = new Map(); // Track active document rooms
      this.setupSocketHandlers();
    }
  
    setupSocketHandlers() {
      this.io.on('connection', (socket) => {
        console.log('New client connected');
  
        // Join document room
        socket.on('joinDocument', (documentId) => {
          this.handleJoinDocument(socket, documentId);
        });
  
        // Handle document updates
        socket.on('documentUpdate', (data) => {
          this.handleDocumentUpdate(socket, data);
        });
  
        // Handle cursor position updates
        socket.on('cursorMove', (data) => {
          this.handleCursorMove(socket, data);
        });
  
        socket.on('disconnect', () => {
          this.handleDisconnect(socket);
        });
      });
    }
  
    handleJoinDocument(socket, documentId) {
      socket.join(`doc:${documentId}`);
      
      if (!this.documentRooms.has(documentId)) {
        this.documentRooms.set(documentId, new Set());
      }
      
      this.documentRooms.get(documentId).add(socket.id);
      
      // Broadcast user joined to others in the room
      socket.to(`doc:${documentId}`).emit('userJoined', {
        userId: socket.userId,
        timestamp: Date.now()
      });
    }
  
    handleDocumentUpdate(socket, data) {
      const { documentId, content, cursorPosition } = data;
      
      // Broadcast update to all clients in the room except sender
      socket.to(`doc:${documentId}`).emit('documentUpdated', {
        content,
        cursorPosition,
        userId: socket.userId,
        timestamp: Date.now()
      });
    }
  
    handleCursorMove(socket, data) {
      const { documentId, position } = data;
      
      socket.to(`doc:${documentId}`).emit('cursorMoved', {
        userId: socket.userId,
        position,
        timestamp: Date.now()
      });
    }
  
    handleDisconnect(socket) {
      // Clean up document rooms
      this.documentRooms.forEach((clients, documentId) => {
        if (clients.has(socket.id)) {
          clients.delete(socket.id);
          if (clients.size === 0) {
            this.documentRooms.delete(documentId);
          }
        }
      });
    }
  }
  
  module.exports = SocketService;