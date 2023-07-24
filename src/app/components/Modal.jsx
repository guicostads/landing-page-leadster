"use client";

import { useState } from "react";
import Thumb from "@/app/images/thumbnail.png";
import Image from "next/image";

const Modal = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="max-md:w-9/12">
      <div
        onClick={openModal}
        className="bg-transparent drop-shadow-xl text-white cursor-pointer transform transition-transform w-full hover:scale-105"
      >
        <Image
          src={Thumb}
          alt="thumbnail"
          className="transition-opacity opacity-0 duration-[1s] rounded-t-lg w-full h-auto"
          quality={100}
          priority={true}
          onLoadingComplete={(image) => image.classList.remove("opacity-0")}
        />
        <h3 className="bg-white text-black  py-4 px-2.5 text-sm max-md:text-xs font-semibold rounded-b-lg text-center">
          Como aumentar a geração de Leads ft. Traktor
        </h3>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 w-full">
          <div className="bg-white rounded-lg p-8 shadow-lg w-[30rem] h-[30rem]">
            <div
              onClick={closeModal}
              className="absolute top-2 right-4 text-gray-600 cursor-pointer text-9x1 border border-solid border-gray-400 px-2"
            >
              <span>X</span>
            </div>
            <iframe
              className="w-full h-64 aspect-video"
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
