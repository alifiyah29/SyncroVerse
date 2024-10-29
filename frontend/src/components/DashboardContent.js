import React from 'react';

const DashboardContent = () => {
  return (
    <div className="flex-1 p-4">
      <h2 className="text-xl font-bold">User Activity</h2>
      <div className="mt-4 bg-white p-4 shadow-md rounded">
        <p>No recent activity.</p>
      </div>
    </div>
  );
};

export default DashboardContent;
