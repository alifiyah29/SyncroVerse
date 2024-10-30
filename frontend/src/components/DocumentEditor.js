import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDocument } from '../store/slices/documentSlice';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000'); // Ensure this matches your backend URL

const DocumentEditor = ({ documentId }) => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');

  useEffect(() => {
    // Listen for document updates from other clients
    socket.on('documentUpdated', (updatedDocument) => {
      if (updatedDocument._id === documentId) {
        setContent(updatedDocument.content); // Update content in editor
      }
    });

    // Clean up the socket listener on unmount
    return () => {
      socket.off('documentUpdated');
    };
  }, [documentId]);

  const handleChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);

    // Emit the document update to the server for real-time collaboration
    socket.emit('editDocument', { _id: documentId, content: newContent });
  };

  const handleSaveDocument = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(addDocument({ _id: documentId, content })); // Dispatch action to save document in Redux
      // Optionally clear content or display a save confirmation
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
