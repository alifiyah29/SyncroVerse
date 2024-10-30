import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthService } from '../services/auth';

// Define the User type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null); // Set the type for user
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const session = await AuthService.checkSession();
      if (session?.user) {
        setUser(session.user); // Type is now known, so this should work
      } else {
        router.push('/login');
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading };
};
