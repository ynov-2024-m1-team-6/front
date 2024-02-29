import React, { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  productData: {
    username?: string;
    description?: string;
    price?: number;
    height?: number;
    weight?: number;
    ratio?: string;
  };
}

const ModalUser = ({ onClose, isOpen, productData }: Props) => {
  interface Props {
    isOpen: boolean;
    onClose: () => void;
    productData: {
      username?: string;
      description?: string;
      price?: number;
      height?: number;
      weight?: number;
      ratio?: string;
    };
  }

  const [valide, setValide] = useState(false);

  const closeModal = () => {
    onClose();
  };

  if (!isOpen || !productData) return null;

  const {
    username = "",
    description = "",
    price = 0,
    height = "",
    weight = "",
    ratio = "",
  } = productData;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="w-[700px] h-[800px] bg-white p-4 rounded-md modal_content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-neutral-200 p-4 dark:border-neutral-500">
          <h5
            className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-800"
            id="leftBottomModalLabel"
          >
            Product&apos;s Informations
          </h5>
          <button
            type="button"
            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none place-self-end"
            data-te-modal-dismiss
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-start px-6 py-4 space-y-4 h-full">
          <div className="relative flex-auto p-4" data-te-modal-body-ref>
            <form className="p-2 judtify-center" onSubmit={(e) => {}}>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
                    Username
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="mcGregor"
                    id="username"
                    defaultValue={username}
                    required
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Prenom
                  </label>
                  <input
                    className="appearance-none block w-full border bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    required
                    placeholder="Blablabla..."
                    id="description"
                    defaultValue={description}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    placeholder="150$"
                    required
                    id="price"
                    defaultValue={price}
                  />
                </div>
                <div className="w-full px-3 mt-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Address
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    placeholder="185cm"
                    id="height"
                    defaultValue={height}
                  />
                </div>
                <div className="w-full px-3 mt-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Code Postal
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="number"
                    id="weight"
                    defaultValue={weight}
                    placeholder="95kg"
                  />
                </div>
                <div className="w-full px-3 mt-6">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Ville
                  </label>
                  <input
                    className="appearance-none block w-full bg-transparent-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="2V/4D"
                    id="ratio"
                    defaultValue={ratio}
                  />
                </div>
              </div>

              {/*<!--Submit button-->*/}
              <div className="my-4 mx-6 p-4 flex justify-center">
                <button
                  type="submit"
                  className="w-[300px] bg-black hover:bg-white border border-black text-white hover:text-black font-bold py-2 px-4 rounded"
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
    </div>
  );
};

export default ModalUser;
