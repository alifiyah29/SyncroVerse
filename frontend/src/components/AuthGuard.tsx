import React from 'react';
import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from './LoadingSpinner';

interface AuthGuardProps {
  children: React.ReactNode;
  requiredRole?: string[];
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return null;
  }

  if (requiredRole && !requiredRole.includes(user.role)) {
    return <div>Access Denied</div>;
  }

  return <>{children}</>;
};

export default AuthGuard;