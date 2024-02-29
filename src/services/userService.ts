import { User } from "@/models/user";
import { jwtDecode } from "jwt-decode";

const currentUser = (): User | null => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return jwtDecode<User>(token);
};

const UserService = { currentUser };
export default UserService;
