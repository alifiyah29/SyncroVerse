// src/components/DocumentEditor.js

import React from 'react';

const DocumentEditor = () => {
  return (
    <div className="bg-white p-4 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Document Editor</h2>
      <textarea
        className="w-full h-64 p-2 border border-gray-300 rounded-md"
        placeholder="Start writing your document here..."
      />
    </div>
  );
};

export default DocumentEditor;
