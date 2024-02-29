"use client";

import { User } from "@/models/user";
import { jwtDecode } from "jwt-decode";

const currentUser = (): User | null => {
  try {
    if (localStorage) {
      const token = localStorage.getItem("token");
      if (!token || token === undefined || token === "undefined") {
        return null;
      }
      return jwtDecode<User>(token);
    }
    return null;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

const isAdmin = (): boolean => {
  const user = currentUser();
  if (user?.isAdmin) {
    return true;
  }
  return false;
};

const getToken = (): string | null => {
  if (localStorage) {
    return localStorage.getItem("token");
  }
  return null;
};

const logout = () => {
  localStorage.removeItem("token");
};

const UserService = { currentUser, isAdmin, getToken, logout };
export default UserService;
