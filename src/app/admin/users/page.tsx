"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiEdit2, FiTrash2, FiSearch } from "react-icons/fi";
import Modal from "@/components/modalUser";

export interface User {
  id: number;
  firstName: string;
  name: string;
  mail: string;
  adress: string;
  zipCode: string;
  city: string;
}

const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [usersData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("https://back-office-mkrp.onrender.com/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const usersData = await res.json();
      console.log(usersData);
      return setUserData(usersData.data);
    };
    getUser();
  }, [usersData]);

  const filteredUsers =
    searchTerm.length === 0
      ? usersData
      : usersData.filter(
          (user) =>
            user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.mail.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.adress.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.zipCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.city.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const handleEditUser = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div className="p-5">
      <div className="mb-5 flex items-center gap-2">
        <FiSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher..."
          className="p-2 border border-gray-300 rounded-lg flex-1"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto rounded-lg border border--2">
        <table className="w-full text-left rounded-lg overflow-hidden">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3">Nom</th>
              <th className="p-3">Prénom</th>
              <th className="p-3">Adresse Mail</th>
              <th className="p-3">Adresse</th>
              <th className="p-3">Code Postal</th>
              <th className="p-3">Ville</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100 group">
                <td className="p-3 whitespace-nowrap">{user.name}</td>
                <td className="p-3 whitespace-nowrap">{user.firstName}</td>
                <td className="p-3 whitespace-nowrap">{user.mail}</td>
                <td className="p-3 whitespace-nowrap">{user.adress}</td>
                <td className="p-3 whitespace-nowrap">{user.zipCode}</td>
                <td className="p-3 whitespace-nowrap">{user.city}</td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      className="p-2 text-blue-500 hover:text-blue-700 hover:bg-gray-300 rounded-full relative"
                      onClick={() => handleEditUser(user)}
                    >
                      <span className="flex items-center justify-center">
                        <FiEdit2 />
                      </span>
                    </button>
                    <button className="p-2 text-red-500 hover:text-red-700 hover:bg-gray-300 rounded-full relative">
                      <span className="flex items-center justify-center">
                        <FiTrash2 />
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          userData={
            selectedUser as {
              lastName?: string;
              name?: string;
              mail?: string;
              adress?: string;
              zipCode?: string;
              city?: string;
            }
          }
        />
      </div>
    </div>
  );
};

export default UsersPage;
