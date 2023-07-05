"use client";

import React from "react";
import Link from "next/link";

export const VideosNav = () => {
  return (
    <div className="pb-5  mb-10 border-b-2 border-solid border-b-gray-300/[.55]">
      <nav>
        <ul className="flex gap-4 w-full">
          <li className="border border-solid p-2 rounded-2xl">
            <Link href="/">Agências</Link>
          </li>
          <li className="border border-solid p-2 rounded-2xl">
            <Link href="/agenciasTab">Chatbot</Link>
          </li>
          <li className="border border-solid p-2 rounded-2xl">
            <Link href="/">Marketing digital</Link>
          </li>
          <li className="border border-solid p-2 rounded-2xl">
            <Link href="/">Mídia paga</Link>
          </li>
        </ul>
      </nav>
      <div></div>
    </div>
  );
};
