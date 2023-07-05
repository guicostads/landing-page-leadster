"use client";

import React from "react";
import Link from "next/link";

export const VideosNav = () => {
  return (
    <nav>
      <ul className="flex space-between w-full">
        <li className="border border-solid p-1">
          <Link href="/">Agências</Link>
        </li>
        <li className="border border-solid p-1">
          <Link href="/agencias">Chatbot</Link>
        </li>
        <li className="border border-solid p-1">
          <Link href="/">Marketing digital</Link>
        </li>
        <li className="border border-solid p-1">
          <Link href="/">Mídia paga</Link>
        </li>
      </ul>
    </nav>
  );
};
