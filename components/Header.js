import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <header className="grid sticky top-0 z-50 grid-cols-3 bg-white shadow-md p-4 md:px-10">
      <div className="h-10 relative flex items-center cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          alt="Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full md:shadow-md">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-6 bg-transparent flex-grow outline-none placeholder-gray-400 text-gray-600"
          type="text"
          placeholder="search"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:mx-2 hidden md:inline-flex text-white bg-red-400 rounded-full p-2 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="flex items-center justify-end space-x-4 text-gray-600">
        <p className="hidden md:inline cursor-pointer">Become a host </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="flex items-center justify-end border-2 rounded-full space-x-4 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
