import React from 'react';
import Layout from '../components/Layout';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardContent from '../components/DashboardContent';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="flex">
        <DashboardSidebar />
        <DashboardContent />
      </div>
    </Layout>
  );
};

export default Dashboard;
