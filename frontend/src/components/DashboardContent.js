import React from 'react';
import DocumentEditor from './DocumentEditor'; // Import the DocumentEditor

const DashboardContent = () => {
  return (
    <div className="flex-1 p-4">
      <h2 className="text-xl font-bold">User Activity</h2>
      <div className="mt-4 bg-white p-4 shadow-md rounded">
        <p>No recent activity.</p>
      </div>
      
      {/* Add Document Editor here */}
      <DocumentEditor />
    </div>
  );
};

export default DashboardContent;