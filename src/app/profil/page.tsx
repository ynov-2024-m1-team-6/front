"use client";

import React, { useEffect, useState } from "react";
import Image from "../../../node_modules/next/image";
import { useRouter } from "../../../node_modules/next/navigation";

import User from "p/img/user.png";
import NavBar from "@/layout/navbar";

export default function Index() {
  const [valide, setValide] = useState(false);

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex justify-center">
        <div className="min-h-scren w-4/5 bg-gray-100 p-6">
          <h1 className="flex text-2xl font-bold p-3 my-3">Profil</h1>
          <div className="flex flex-row items-center h-[100px] gap-x-6 w-4/5 p-3">
            <div className="rounded-full bg-red-200 h-[80px] w-[80px] flex ">
              <Image src={User} alt="User Icon" />
            </div>
            <div className="flex flex-col justify-center  gap-y-2">
              <p>Bienvenue dans votre Profil</p>
              <p className="text-sm font-bold italic flex justify-items-start">
                Username
              </p>
            </div>
            <button className="bg-black hover:bg-white text-white hover:text-black border-black font-bold py-2 px-4 rounded flex ml-8">
              Edit Profil
            </button>
          </div>
          <div className="flex items-center justify-center h-4/5 p-3">
            <form className="p-2 judtify-center w-full" onSubmit={(e) => {}}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                    Nom
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                    </div>
                    <input
                      className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      type="text"
                      placeholder="Doe"
                      id="name"
                      defaultValue=""
                      required
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Prenom
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                      </svg>
                    </div>
                    <input
                      className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      type="text"
                      required
                      placeholder="Jane"
                      id="firstName"
                      defaultValue=""
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                    </div>
                    <input
                      className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      type="email"
                      placeholder="votre@email.com"
                      required
                      id="mail"
                      defaultValue=""
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="w-full px-3 mt-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                    </div>
                    <input
                      className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      type="text"
                      placeholder="Entrez l'address"
                      id="adress"
                      defaultValue=""
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="w-full px-3 mt-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Code Postal
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                    </div>
                    <input
                      className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      type="text"
                      id="zipcode"
                      defaultValue=""
                      onChange={() => {}}
                      placeholder="Entrez le code postal"
                    />
                  </div>
                </div>
                <div className="w-full px-3 mt-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Ville
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                      </svg>
                    </div>
                    <input
                      className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      type="text"
                      placeholder="Entrez le code postal"
                      id="city"
                      defaultValue=""
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className="w-full px-3 mt-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Numero de Telephone
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="phoneNumber"
                      aria-describedby="helper-text-explanation"
                      className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="123-456-7890"
                      defaultValue=""
                      onChange={() => {}}
                    />
                  </div>
                </div>
              </div>

              {/*<!--Submit button-->*/}
              <div className="my-4 mx-6 p-4 flex justify-center">
                <button
                  className="w-[300px] bg-black hover:bg-white flex items-center justify-center border border-black text-white hover:text-black font-bold py-2 px-4 rounded"
                  onClick={() => {
                    //     updateData(formData.id);
                  }}
                >
                  Enregistrer
                </button>
              </div>
              {valide && (
                <div className="h-[40px] flex items-center justify-center bg-green-500  bg-opacity-25 rounded mb-10">
                  <p className="text-center text-green-500">
                    Modification Enregistrer
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
