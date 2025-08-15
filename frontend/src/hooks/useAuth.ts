import { useState, useCallback } from 'react';
import { User } from '@/types';
import { apiClient } from '@/utils/api';
import { useUserContext } from '@/contexts/UserContext';

interface UseAuthReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (userData: any) => Promise<void>;
  updateUser: (userData: Partial<User>) => void;
}

export const useAuth = (): UseAuthReturn => {
  const { user, setUser, updateUser: updateUserContext } = useUserContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiClient.post<{ user: User; token: string }>('/api/auth/login', {
        email,
        password,
      });
      
      const { user: userData, token } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('authToken', token);
      
      setUser(userData);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setUser]);

  const logout = useCallback(() => {
    localStorage.removeItem('authToken');
    setUser(null);
    setError(null);
    
    // Redirect to login page
    window.location.href = '/login';
  }, [setUser]);

  const signup = useCallback(async (userData: any) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiClient.post<{ user: User; token: string }>('/api/auth/signup', userData);
      
      const { user: newUser, token } = response.data;
      
      // Store token in localStorage
      localStorage.setItem('authToken', token);
      
      setUser(newUser);
      setError(null);
    } catch (err: any) {
      setError(err.message || 'Signup failed');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setUser]);

  const updateUser = useCallback((userData: Partial<User>) => {
    updateUserContext(userData);
  }, [updateUserContext]);

  return {
    user,
    loading,
    error,
    login,
    logout,
    signup,
    updateUser,
  };
};
