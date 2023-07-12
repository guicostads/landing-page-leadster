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
      <nav className="flex items-center justify-center gap-2 p-3 border-t-2 mt-10">
        <span>Página:</span>
        <ul className="flex gap-2">
          <li
            id="1"
            className={
              activePage === "1"
                ? "border-2 border-solid border-blue-500 text-blue-500 rounded px-2 font-medium"
                : "font-medium cursor-pointer px-2 hover:border-2 hover:border-solid hover:border-blue-500 hover:text-blue-500 hover:rounded"
            }
            onClick={() => handleActivePage("1")}
          >
            1
          </li>
          <li
            id="2"
            className={
              activePage === "2"
                ? "border-2 border-solid border-blue-500 text-blue-500 rounded px-2 font-medium"
                : "font-medium cursor-pointer px-2 hover:border-2 hover:border-solid hover:border-blue-500 hover:text-blue-500 hover:rounded"
            }
            onClick={() => handleActivePage("2")}
          >
            2
          </li>
          <li
            id="3"
            className={
              activePage === "3"
                ? "border-2 border-solid border-blue-500 text-blue-500 rounded px-2 font-medium"
                : "font-medium cursor-pointer px-2 hover:border-2 hover:border-solid hover:border-blue-500 hover:text-blue-500 hover:rounded"
            }
            onClick={() => handleActivePage("3")}
          >
            3
          </li>
          <li
            id="4"
            className={
              activePage === "4"
                ? "border-2 border-solid border-blue-500 text-blue-500 rounded px-2 font-medium"
                : "font-medium cursor-pointer px-2 hover:border-2 hover:border-solid hover:border-blue-500 hover:text-blue-500 hover:rounded"
            }
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
