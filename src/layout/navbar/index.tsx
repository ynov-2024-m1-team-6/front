"use client";

import { User } from "@/models/user";
import UserService from "@/services/userService";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import Modal from "@/components/modalNavbar";

function NavBar() {
  const admin = UserService.isAdmin();
  const [user, setUser] = useState<User | null>();
  const router = useRouter();

  useEffect(() => {
    try
    {
      const user = UserService.currentUser();
      setUser(user);
    }
    catch (error)
    {
      setUser(null);
    }
  }, []);

  const logout = () => {
    UserService.logout();
    router.push("/login");
  };

  return (
    <div className="h-[100px] border-b-2 border-bottom border-black flex justify-between items-center text-black px-8 ">
      <div className="flex gap-8 p-4">
        <a href="/product">Store</a>
        <a href="/contact">Contact</a>
      </div>
      <a href="/" className="flex-1 text-center text-3xl font-bold">
        Uber Bagare
      </a>
      <div className="flex items-center gap-10">
        <div className="h-[50px] min-w-28 px-4 flex rounded-3xl bg-neutral-200 ">
          <button className="flex flex-row items-center gap-2">
            <Image src="/search.svg" alt="Icon 1" width={24} height={24} />
            <p className="text-[#0D0D0D]">Search</p>
          </button>
        </div>
        
        {user ? (
          <div className="flex gap-8">
            <a href="/wishlist" className="flex items-center">
              <Image
                className="cursor-pointer"
                src="/heart.svg"
                alt="Icon 3"
                width={24}
                height={24}
              />
            </a>
            <Image src="/bag.svg" alt="Icon 2" width={24} height={24} />
            {admin ? (
            <div className="h-[50px] w-[50px] flex bg-slate-300 p-3 rounded-full">
              <a href="/admin">
              <Image src="/user.svg" alt="Icon 1" width={24} height={24} />
              </a>
            </div>
            ):null}
            <div className="h-[50px] w-[50px] flex bg-red-500 p-3 rounded-full">
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
        ) }
      </div>
    </div>
  );
}

export default NavBar;
