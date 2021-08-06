import Image from "next/image";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

const Header = ({ placeholder }) => {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(Date.now());
  const [endDate, setEndDate] = useState(Date.now());
  const [guests, setGuests] = useState(1);
  const router = useRouter();
  const searchrRanges = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleDateRnge = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };
  return (
    <header className="grid sticky top-0 z-50 grid-cols-3 bg-white shadow-md p-4 md:px-10">
      <div
        onClick={() => router.push("/")}
        className="h-10 relative flex items-center cursor-pointer my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          alt="Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center md:border-2 rounded-full md:shadow-md truncate">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-6 bg-transparent flex-grow outline-none placeholder-gray-400 text-gray-600"
          type="text"
          placeholder={placeholder}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 md:mx-2 hidden md:inline-flex text-white bg-red-400 rounded-full p-2 cursor-pointer active:scale-90 transition duration-150 hover:bg-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={() => {
            if ((search, startDate, endDate, guests)) {
              router.push({
                pathname: "/search",
                query: {
                  location: search,
                  startDate: startDate.toISOString(),
                  endDate: endDate.toISOString(),
                  guests,
                },
              });
            }
          }}
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
          className="h-6 w-6 cursor-pointer hover:text-red-400 active:scale-90 transition duration-150 hover:animate-spin"
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
            className="h-6 w-6 cursor-pointer hover:text-red-400 active:scale-90 transition duration-150"
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
            onClick={() => router.push("/profile")}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer hover:text-red-400 active:scale-90 transition duration-150"
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
      {search && (
        <div className="flex flex-col w-[300px] lg:w-[600px] overflow-scroll col-span-3 mx-auto">
          <DateRangePicker
            ranges={[searchrRanges]}
            mindate={Date.now()}
            rangeColors={["#fd5b61"]}
            onChange={handleDateRnge}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <input
              className="w-12 pl-2 text-lg outline-none text-red-400"
              value={guests}
              type="number"
              min={1}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <button
              className="flex-grow text-gray-500"
              onClick={() => setSearch("")}
            >
              Cancel
            </button>
            <button
              className="flex-grow text-red-500"
              disabled={!search || !startDate || !endDate || !guests}
              onClick={() =>
                router.push({
                  pathname: "/search",
                  query: {
                    location: search,
                    startDate: startDate.toISOString(),
                    endDate: endDate.toISOString(),
                    guests,
                  },
                })
              }
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
