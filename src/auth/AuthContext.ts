import { createContext } from "react";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthMe {
  userId: number;
  email: string;
  name: string;
}

interface AuthContextType {
  user: AuthMe | null;
  setUser: (user: AuthMe | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
