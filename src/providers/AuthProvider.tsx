"use client";

import { createContext, FC, ReactNode, useContext, useState } from "react";

interface IAuthContext {
  user: unknown;
  setUser: (data: unknown) => void;
  isLoggedIn: boolean;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as IAuthContext);

export const AuthProvider: FC<AuthContextProviderProps> = ({ children }) => {
  // const queryClient = useQueryClient();
  const [user, setUser] = useState<unknown>(null);

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
