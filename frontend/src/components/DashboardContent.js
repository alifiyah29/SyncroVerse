import React from 'react';
import DocumentEditor from './DocumentEditor';
import Chat from './Chat';
import { useSelector } from 'react-redux';

const DashboardContent = () => {
  const user = useSelector((state) => state.user); // Get user data from Redux state

  return (
    <div className="flex-1 p-4">
      <h2 className="text-xl font-bold">User Activity</h2>
      <div className="mt-4 bg-white p-4 shadow-md rounded">
        <p>{user.name ? `${user.name}'s Activity` : 'No user logged in.'}</p>
      </div>
      <DocumentEditor />
      <Chat />
    </div>
  );
};

export default DashboardContent;
