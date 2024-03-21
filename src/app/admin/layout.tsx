"use client";

import React, { useEffect, useState } from "react";
import { FiHome, FiUsers, FiTable } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import UserService from "@/services/userService";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setIsAdmin(UserService.isAdmin());
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading && !isAdmin) {
      router.push("/");
    }
  }, [isAdmin, router, isLoading]);

  const pathname = usePathname();

  return isAdmin ? (
    <div className="flex h-screen bg-gray-100  overflow-hidden">
      <div className="bg-whitetext-black w-64 border-r-2 border-gray-600 border">
        <div className="p-5 font-semibold">Uber Bagarre</div>
        <ul>
          <li>
            <a href="/admin/dashboard">
              <p
                className={`flex text items-center justify-start p-4 rounded-lg m-2 ${
                  pathname == "/admin/dashboard"
                    ? "text-white bg-black"
                    : "bg-slate-300"
                }`}
              >
                <FiTable className="mr-2" />
                <span>Dashboard</span>
              </p>
            </a>
          </li>
          <li>
            <a href="/admin/product">
              <p
                className={`flex text items-center justify-start p-4 rounded-lg m-2 ${
                  pathname == "/admin/product"
                    ? "text-white bg-black"
                    : "bg-slate-300"
                }`}
              >
                <FiHome className="mr-2" />
                <span>Produits</span>
              </p>
            </a>
          </li>
          <li>
            <a href="/admin/users">
              <p
                className={`flex items-center justify-start p-4 rounded-lg m-2 ${
                  pathname == "/admin/users"
                    ? "text-white bg-black"
                    : "bg-slate-300 text-black"
                }`}
              >
                <FiUsers className="mr-2" />
                <span>Utilisateurs</span>
              </p>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex-1 p-5 overflow-y-auto">{children}</div>
    </div>
  ) : (
    <></>
  );
};

export default Layout;
