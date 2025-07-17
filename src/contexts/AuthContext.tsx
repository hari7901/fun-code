import { createContext, useState, useEffect, type ReactNode } from "react";
import { authService, type User } from "../services/authService";

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User, accessToken: string, refreshToken: string) => void;
  logout: () => void;
  checkAuthStatus: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuthStatus = () => {
    try {
      const storedUser = authService.getUser();
      const accessToken = authService.getAccessToken();

      if (storedUser && accessToken) {
        setUser(storedUser);
      } else {
        // Clear any stale data
        authService.clearTokens();
        setUser(null);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      authService.clearTokens();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = (userData: User, accessToken: string, refreshToken: string) => {
    authService.saveTokens(accessToken, refreshToken);
    authService.saveUser(userData);
    setUser(userData);
  };

  const logout = async () => {
    try {
      const refreshToken = authService.getRefreshToken();
      if (refreshToken) {
        await authService.logout(refreshToken);
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      authService.clearTokens();
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    checkAuthStatus,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
