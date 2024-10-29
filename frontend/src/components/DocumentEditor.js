import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveDocument } from '../store/slices/documentSlice'; // Import saveDocument action

const DocumentEditor = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');;

  const handleSaveDocument = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(saveDocument(content)); // Dispatch action to save document
      setContent(''); // Clear content field
    }
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Document Editor</h2>
      <form onSubmit={handleSaveDocument}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
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
