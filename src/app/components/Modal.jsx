"use client";

import { useState } from "react";

const Modal = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 cursor-pointer text-9x1 border border-solid border-gray-400 px-2"
            >
              <span>X</span>
            </div>
            <iframe
              className="w-full h-64"
              src={videoUrl}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
