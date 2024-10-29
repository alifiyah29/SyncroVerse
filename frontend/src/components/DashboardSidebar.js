import React from 'react';

const DashboardSidebar = () => {
  return (
    <div className="bg-white w-64 p-4 shadow-md">
      <h2 className="text-lg font-bold">Active Documents</h2>
      <ul className="mt-2">
        <li className="p-2 hover:bg-gray-200 rounded">Document 1</li>
        <li className="p-2 hover:bg-gray-200 rounded">Document 2</li>
        <li className="p-2 hover:bg-gray-200 rounded">Document 3</li>
      </ul>
      <h2 className="text-lg font-bold mt-6">Notifications</h2>
      <ul className="mt-2">
        <li className="p-2 hover:bg-gray-200 rounded">Notification 1</li>
        <li className="p-2 hover:bg-gray-200 rounded">Notification 2</li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
