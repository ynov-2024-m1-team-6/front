import { User } from "@/models/user";
import { jwtDecode } from "jwt-decode";

const currentUser = (): User | null => {
  const token = localStorage.getItem("token");
  if (!token || token === undefined || token === "undefined") {
    return null;
  }
  return jwtDecode<User>(token);
};

const isAdmin = (): boolean => {
  const user = currentUser();
  if (user?.isAdmin) {
    return true;
  }
  return false;
};

const UserService = { currentUser, isAdmin };
export default UserService;
