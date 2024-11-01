// Chat.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, receiveMessage } from '../store/slices/chatSlice'; // Import receiveMessage action
import socket from '../socket'; // Import the socket instance

const Chat = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('messageReceived', (message) => {
      dispatch(receiveMessage(message));
    });

    return () => {
      socket.off('messageReceived');
    };
  }, [dispatch]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit('sendMessage', input);
      dispatch(sendMessage(input));
      setInput('');
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg h-80 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Chat</h2>
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div key={index} className="p-2 border-b border-gray-200">
              {msg.text || msg}
            </div>
          ))
        ) : (
          <div className="text-gray-500 text-center">No messages yet.</div>
        )}
      </div>
      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message here..."
        />
        <button
          type="submit"
          className="ml-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
