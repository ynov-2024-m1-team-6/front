"use client";
import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Modal from "@/components/modalUser";
import UserService from "@/services/userService";
import { Command } from "@/models/command";

const CommandsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [showModal, setShowModal] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState<Command | null>(null);
  const [commands, setCommands] = useState<Command[]>([]);

  useEffect(() => {
    const getCommands = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/admin`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${UserService.getToken()}`,
        },
      });
      const commands = await res.json();
      setCommands(commands.data);
    };
    getCommands();
  }, []);

  const filteredCommands =
    searchTerm.length === 0
      ? commands
      : commands.filter((command) => {
          command.number.toLowerCase().includes(searchTerm.toLowerCase());
        });

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
              <th className="p-3">Id</th>
              <th className="p-3">Numéro</th>
              <th className="p-3">Statut</th>
              <th className="p-3">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredCommands &&
              filteredCommands.map((command) => (
                <tr key={command.id} className="hover:bg-gray-100 group">
                  <td className="p-3 whitespace-nowrap">{command.id}</td>
                  <td className="p-3 whitespace-nowrap">{command.number}</td>
                  <td className="p-3 whitespace-nowrap">{command.status}</td>
                  <td className="p-3 whitespace-nowrap">
                    {command.date?.toDateString() ?? "non défini"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {/* <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          userData={selectedCommand!}
        /> */}
      </div>
    </div>
  );
};

export default CommandsPage;
