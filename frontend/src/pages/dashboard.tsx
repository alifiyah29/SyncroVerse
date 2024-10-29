import React from 'react';
import Layout from '../components/Layout';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardContent from '../components/DashboardContent';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="flex min-h-screen bg-gray-50">
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </Layout>
  );
};

export default Dashboard;
