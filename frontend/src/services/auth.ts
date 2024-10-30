import axios from 'axios';

interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  token: string;
}

export class AuthService {
  static async loginWithGoogle(): Promise<void> {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`;
  }

  static async handleGoogleCallback(code: string): Promise<AuthResponse> {
    const response = await axios.post('/api/auth/google/callback', { code });
    return response.data;
  }

  static async logout(): Promise<void> {
    await axios.post('/api/auth/logout');
    window.location.href = '/login';
  }

  static async checkSession(): Promise<AuthResponse | null> {
    try {
      const response = await axios.get('/api/auth/session');
      return response.data;
    } catch (error) {
      return null;
    }
  }
}