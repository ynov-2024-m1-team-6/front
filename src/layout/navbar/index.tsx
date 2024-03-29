"use client";

import { User } from "@/models/user";
import UserService from "@/services/userService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import Modal from "@/components/modalNavbar";
import { useAppSelector } from "@/redux/hooks";

function NavBar() {
  const admin = UserService.isAdmin();
  const [user, setUser] = useState<User | null>();
  const router = useRouter();
  const cart = useAppSelector((state: any) => state.panier.items);

  useEffect(() => {
    try {
      const user = UserService.currentUser();
      setUser(user);
    } catch (error) {
      setUser(null);
    }
  }, []);

  const logout = () => {
    UserService.logout();
    router.push("/login");
  };

  return (
    <div className="h-[75px] border-b-2 border-bottom border-black flex justify-between items-center text-black px-8 ">
      <div className="flex gap-8 p-4">
        <a href="/product">Store</a>
        <a href="/contact">Contact</a>
      </div>
      <a href="/" className="flex-1 text-center text-3xl font-bold">
        Uber Bagare
      </a>
      <div className="flex items-center gap-10">
        {user ? (
          <div className="flex gap-5">
            <a href="/wishlist" className="flex items-center">
              <Image
                className="cursor-pointer"
                src="/heart.svg"
                alt="Icon 3"
                width={24}
                height={24}
              />
            </a>
            <a href="/cart" className="relative flex items-center">
              <Image src="/bag.svg" alt="Icon 2" width={24} height={24} />
              {cart.length > 0 && (
                <div className="absolute h-4 w-4 bg-red-500 rounded-full bottom-2 -right-1 flex items-center justify-center">
                  <p className="text-xs text-white">{cart.length}</p>
                </div>
              )}
            </a>
            <div className="h-[50px] w-[50px] flex bg-slate-300 p-3 rounded-full">
              <a href="/profil">
                <Image src="/user.svg" alt="Icon 1" width={24} height={24} />
              </a>
            </div>{" "}
            {admin ? (
              <div className="flex bg-slate-300 p-3 rounded-full">
                <a href="/admin">Admin</a>
              </div>
            ) : (
              ""
            )}
            <div className="h-[50px] w-[50px] flex bg-red-500 justify-center items-center p-3 rounded-full">
              <IoIosLogOut
                className="flex items-center cursor-pointer"
                onClick={() => logout()}
                width={24}
                height={24}
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <a href="/login">
              <div className="h-[50px] min-w-16 px-4 flex rounded-xl items-center text-white black-600 bg-slate-950">
                <p>Login</p>
              </div>
            </a>
            <a href="/register">
              <div className="h-[50px] min-w-16 px-4 flex rounded-xl items-center  text-white bg-slate-950">
                <p>Register</p>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
