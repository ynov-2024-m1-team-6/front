import { User } from "@/models/user";
import { jwtDecode } from "jwt-decode";

const currentUser = (): User | null => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return jwtDecode<User>(token);
};

const isAdmin = (): boolean => {
  if (currentUser()?.isAdmin) {
    return true;
  }
  return false;
};

const UserService = { currentUser, isAdmin };
export default UserService;
