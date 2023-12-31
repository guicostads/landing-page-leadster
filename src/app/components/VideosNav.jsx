"use client";

import React from "react";
import Link from "next/link";

export const VideosNav = () => {
  return (
    <div className="pb-5 mb-10 border-b-2 border-solid border-b-gray-300/[.55] w-full min-w-full">
      <nav className="flex justify-between">
        <ul className="flex gap-4 max-md:gap-2 w-fit">
          <li className=" border border-solid px-2 py-0.5 text-sm max-md:text-xs rounded-2xl hover:bg-blue-500 hover:text-white grid items-center ">
            <Link href="/">Agências</Link>
          </li>
          <li className="border border-solid p-2 text-sm max-md:text-xs rounded-2xl hover:bg-blue-500 hover:text-white grid items-center">
            <Link href="/pages/chatbotTab">Chatbot</Link>
          </li>
          <li className="border border-solid p-2 text-sm  max-md:text-xs rounded-2xl hover:bg-blue-500 hover:text-white grid items-center whitespace-nowrap">
            <Link href="/pages/marketingTab">Marketing digital</Link>
          </li>
          <li className="border border-solid p-2  text-sm max-md:text-xs rounded-2xl hover:bg-blue-500 hover:text-white grid items-center whitespace-nowrap">
            <Link href="/pages/midiaTab">Mídia paga</Link>
          </li>
        </ul>
        <div className="flex items-center ml-2">
          <p className="whitespace-nowrap mr-2 max-md:text-xs">ordenar por:</p>
          <select className="border px-2 py-1 text-sm max-md:text-xs font-normal cursor-pointer outline-none rounded-md">
            <option value="">Data de publicação</option>
            <option value="">Título</option>
            <option value="">Mais acessados</option>
          </select>
        </div>
      </nav>
    </div>
  );
};
