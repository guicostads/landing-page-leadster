"use client";

import { useState } from "react";

const Pages = () => {
  const [activePage, setActivePage] = useState("1");

  const handleActivePage = (page) => {
    setActivePage(page);
  };
  // border-2 border-solid border-blue-500 text-blue-500 rounded

  return (
    <>
      <nav className="flex items-center justify-center gap-2 pt-3 px-5 border-t-2 mt-10">
        <span>Página</span>
        <ul className="flex items-center justify-center gap-2">
          <li
            id="1"
            className={`cursor-pointer px-2 transition-colors ${
              activePage === "1"
                ? "border border-solid border-blue-500 text-blue-500 rounded"
                : "hover:border hover:border-solid hover:border-blue-500 hover:text-blue-500 hover:rounded"
            }`}
            onClick={() => handleActivePage("1")}
          >
            1
          </li>
          <li
            id="2"
            className={`cursor-pointer px-2 transition-colors ${
              activePage === "2"
                ? "border border-solid border-blue-500 text-blue-500 rounded"
                : "hover:border hover:border-solid hover:border-blue-500 hover:text-blue-500 hover:rounded"
            }`}
            onClick={() => handleActivePage("2")}
          >
            2
          </li>
          <li
            id="3"
            className={`cursor-pointer px-2 transition-colors ${
              activePage === "3"
                ? "border border-solid border-blue-500 text-blue-500 rounded"
                : "hover:border hover:border-solid hover:border-blue-500 hover:text-blue-500 hover:rounded"
            }`}
            onClick={() => handleActivePage("3")}
          >
            3
          </li>
          <li
            id="4"
            className={`cursor-pointer  px-2 transition-colors ${
              activePage === "4"
                ? "border border-solid border-blue-500 text-blue-500 rounded"
                : "hover:border hover:border-solid hover:border-blue-500 hover:text-blue-500 hover:rounded"
            }`}
            onClick={() => handleActivePage("4")}
          >
            4
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pages;
