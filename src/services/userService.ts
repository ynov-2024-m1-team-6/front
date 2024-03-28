"use client";

import { User } from "@/models/user";
import { jwtDecode } from "jwt-decode";

const currentUser = (): User | null => {
  try {
    if (typeof window !== "undefined") {
      const token = UserService.getToken();
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
  try {
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

const getMe = async (): Promise<User | null> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${UserService.getToken()}`,
      },
    });

    const responseJson = await response.json();
    if (!response.ok) {
      return null;
    }
    return responseJson.data as User;
  } catch (error) {
    throw error;
  }
};

const UserService = { currentUser, isAdmin, getToken, logout, getMe };
export default UserService;
