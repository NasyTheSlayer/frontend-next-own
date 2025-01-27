"use client";

import { useQueryClient } from "@tanstack/react-query";
import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IAuthContext {
  user: any;
  setUser: (data: any) => void;
  isLoggedIn: boolean;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
