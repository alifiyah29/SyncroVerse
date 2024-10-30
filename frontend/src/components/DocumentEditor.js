import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDocument } from '../store/slices/documentSlice';
import socket from '../socket'; // Import Socket.io client

const DocumentEditor = ({ documentId }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  useEffect(() => {
    // Listen for document updates
    socket.on('documentUpdated', (updatedDocument) => {
      if (updatedDocument._id === documentId) {
        setContent(updatedDocument.content); // Update content with the received document
      }
    });

    // Clean up the socket listener on unmount
    return () => {
      socket.off('documentUpdated');
    };
  }, [documentId]);

  const handleChange = (e) => {
    const { value } = e.target;
    setContent(value);

    // Emit the document update to the server
    socket.emit('documentUpdated', { _id: documentId, content: value });
  };

  const handleSaveDocument = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(addDocument(content)); // Dispatch action to save document
      setContent(''); // Clear content field
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Document Editor</h2>
      <form onSubmit={handleSaveDocument}>
        <textarea
          value={content}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows="10"
          placeholder="Write your document here..."
        />
        <button
          type="submit"
          className="mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Save Document
        </button>
      </form>
    </div>
  );
};

export default DocumentEditor;
