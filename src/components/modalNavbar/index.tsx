import React from 'react';
import { FaUser } from 'react-icons/fa';

function ModalNavbar() {
  return (
    <div className="mt-72 h-[300px] w-[200px] bg-gray-300 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
            <div className="h-[80px] w-[80px] rounded-full bg-red-200 p-4">
                <FaUser size={40} />
            </div>
            <div className="ml-4">
                <p>John Doe</p>
            </div>
        </div>
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default ModalNavbar;