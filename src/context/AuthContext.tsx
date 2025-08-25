"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type User = {
  name: string;
  email: string;
  password: string;
  location?: string;
};

type AuthContextType = {
  user: User | null;
  signup: (user: Omit<User, "location">) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) setUser(JSON.parse(currentUser));
  }, []);

  const signup = (newUser: Omit<User, "location">) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.some(u => u.email === newUser.email)) {
      alert("Email already exists!");
      return;
    }

    const location = "Unknown";
    const userWithLocation: User = { ...newUser, location };
    users.push(userWithLocation);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(userWithLocation));
    setUser(userWithLocation);
  };

  const login = (email: string, password: string) => {
    const users: User[] = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = users.find(u => u.email === email && u.password === password);

    if (!foundUser) {
      alert("Invalid email or password");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    setUser(foundUser);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
    window.location.href = "/auth/login";
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
