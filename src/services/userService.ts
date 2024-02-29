import { User } from "@/models/user";
import { jwtDecode } from "jwt-decode";

const currentUser = (): User | null => {
  if (localStorage) {
    const token = localStorage.getItem("token");
    if (!token) {
      return null;
    }
    return jwtDecode<User>(token);
  }
  return null;
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
