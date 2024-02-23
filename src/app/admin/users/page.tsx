'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi';

const usersData = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', address: '123 Main St', zipCode: '12345', city: 'Anytown' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'jane.doe@example.com', address: '456 Elm St', zipCode: '67890', city: 'Sometown' },
    { id: 3, firstName: 'Tom', lastName: 'Smith', email: 'tom.smith@example.com', address: '789 Oak St', zipCode: '54321', city: 'Othertown' },
    { id: 4, firstName: 'Alice', lastName: 'Johnson', email: 'alice.johnson@example.com', address: '10 Pine St', zipCode: '98765', city: 'Newville' },
    { id: 5, firstName: 'Bob', lastName: 'Williams', email: 'bob.williams@example.com', address: '55 Cedar Ave', zipCode: '45678', city: 'Westtown' },
    { id: 6, firstName: 'Sarah', lastName: 'Taylor', email: 'sarah.taylor@example.com', address: '22 Maple St', zipCode: '13579', city: 'Eastville' },
    { id: 7, firstName: 'Michael', lastName: 'Brown', email: 'michael.brown@example.com', address: '77 Walnut Ln', zipCode: '24680', city: 'Southtown' },
    { id: 8, firstName: 'Emma', lastName: 'Garcia', email: 'emma.garcia@example.com', address: '33 Birch St', zipCode: '97531', city: 'Westville' },
    { id: 9, firstName: 'David', lastName: 'Martinez', email: 'david.martinez@example.com', address: '44 Oak St', zipCode: '75319', city: 'Northtown' },
    { id: 10, firstName: 'Olivia', lastName: 'Lopez', email: 'olivia.lopez@example.com', address: '66 Elm Ave', zipCode: '31245', city: 'Southville' },
    { id: 11, firstName: 'James', lastName: 'Wilson', email: 'james.wilson@example.com', address: '88 Pine Rd', zipCode: '89563', city: 'Easttown' },
    { id: 12, firstName: 'Sophia', lastName: 'Anderson', email: 'sophia.anderson@example.com', address: '121 Cedar Dr', zipCode: '45612', city: 'Westtown' },
    { id: 13, firstName: 'Liam', lastName: 'Gonzalez', email: 'liam.gonzalez@example.com', address: '101 Oakwood Ln', zipCode: '98765', city: 'Northville' },
    { id: 14, firstName: 'Charlotte', lastName: 'Rodriguez', email: 'charlotte.rodriguez@example.com', address: '232 Maple Rd', zipCode: '36985', city: 'Southtown' },
    { id: 15, firstName: 'Ethan', lastName: 'Perez', email: 'ethan.perez@example.com', address: '44 Walnut St', zipCode: '78543', city: 'Westville' },
    { id: 16, firstName: 'Amelia', lastName: 'Nguyen', email: 'amelia.nguyen@example.com', address: '99 Birch Ave', zipCode: '12398', city: 'Northtown' },
    { id: 17, firstName: 'Aiden', lastName: 'Gomez', email: 'aiden.gomez@example.com', address: '77 Elmwood Dr', zipCode: '65432', city: 'Southtown' },
    { id: 18, firstName: 'Mia', lastName: 'Cruz', email: 'mia.cruz@example.com', address: '12 Oak Ln', zipCode: '78596', city: 'Easttown' },
    { id: 19, firstName: 'Carter', lastName: 'Torres', email: 'carter.torres@example.com', address: '33 Pine Ave', zipCode: '15963', city: 'Westtown' },
    { id: 20, firstName: 'Harper', lastName: 'Reyes', email: 'harper.reyes@example.com', address: '55 Cedar Rd', zipCode: '36985', city: 'Northtown' },
    { id: 21, firstName: 'Sebastian', lastName: 'Hernandez', email: 'sebastian.hernandez@example.com', address: '77 Maple Ln', zipCode: '78541', city: 'Southtown' },
    { id: 22, firstName: 'Evelyn', lastName: 'Kim', email: 'evelyn.kim@example.com', address: '101 Elm St', zipCode: '12345', city: 'Easttown' },
    { id: 23, firstName: 'Mateo', lastName: 'Nguyen', email: 'mateo.nguyen@example.com', address: '22 Walnut Dr', zipCode: '75319', city: 'Westtown' },
    { id: 24, firstName: 'Abigail', lastName: 'Patel', email: 'abigail.patel@example.com', address: '44 Pine St', zipCode: '45632', city: 'Northtown' },
    { id: 25, firstName: 'Lucas', lastName: 'Hernandez', email: 'lucas.hernandez@example.com', address: '66 Cedar Rd', zipCode: '78541', city: 'Southtown' },
    { id: 26, firstName: 'Avery', lastName: 'Li', email: 'avery.li@example.com', address: '88 Elm Ave', zipCode: '98765', city: 'Easttown' },
    { id: 27, firstName: 'Camila', lastName: 'Gonzalez', email: 'camila.gonzalez@example.com', address: '121 Oakwood Dr', zipCode: '36985', city: 'Westtown' },
    { id: 28, firstName: 'Jackson', lastName: 'Chen', email: 'jackson.chen@example.com', address: '232 Maple St', zipCode: '12345', city: 'Northtown' },
    { id: 29, firstName: 'Scarlett', lastName: 'Wang', email: 'scarlett.wang@example.com', address: '44 Cedar Ave', zipCode: '75319', city: 'Southtown' },
    { id: 30, firstName: 'Emily', lastName: 'Brown', email: 'emily.brown@example.com', address: '99 Oakwood Dr', zipCode: '54321', city: 'Northville' }
  ];
  
const UsersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');


  const filteredUsers = searchTerm.length === 0 ? usersData : usersData.filter(user =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())  ||
    user.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.zipCode.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.city.toLowerCase().includes(searchTerm.toLowerCase())
  );


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
                <td className="p-3 whitespace-nowrap">{user.lastName}</td>
                <td className="p-3 whitespace-nowrap">{user.firstName}</td>
                <td className="p-3 whitespace-nowrap">{user.email}</td>
                <td className="p-3 whitespace-nowrap">{user.address}</td>
                <td className="p-3 whitespace-nowrap">{user.zipCode}</td>
                <td className="p-3 whitespace-nowrap">{user.city}</td>
                <td className="p-3">
                  <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <button className="p-2 text-blue-500 hover:text-blue-700 hover:bg-gray-300 rounded-full relative">
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
      </div> 
    </div>
  );
};

export default UsersPage;
