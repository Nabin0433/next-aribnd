import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

const registerHost = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <Header placeholder="Search" />
      <main>
        <div className="h-screen flex flex-col lg:flex-row bg-graay-200">
          <div className="flex-1 bg-black relative flex flex-col justify-center items-center text-white h-screen">
            <p className="text-4xl lg:text-6xl font-bold">Hosting </p>
            <p className="text-4xl lg:text-6xl font-bold">makes Airbnb,</p>
            <p className="text-4xl lg:text-6xl font-bold"> Airbnb</p>
            <p className="absolute lg:bottom-40 bottom-4 hover:bg-gray-600 bg-black p-4 rounded-full active:scale-95 hover:shadow-lg transition duration-150">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </p>
          </div>
          <div className="flex-1 relative h-screen">
            <Image
              src={!active ? "/assets/hosting.png" : "/assets/hosting-2.png"}
              alt="hosting"
              layout="fill"
              objectFit="contain"
            />
            <button className=" absolute lg:bottom-32 bottom-2 right-10  rounded-lg py-3 px-8 font-semibold text-xl bg-red-400 text-white active:shadow-xl transition duration-150 transform active:scale-95 hover:shadow-lg shadow-sm">
              Try Hosting
            </button>
            {!active && (
              <p
                className="absolute lg:bottom-32 bottom-2 left-4 active:scale-95 hover:shadow-lg transition duration-150 rounded-full"
                onClick={() => setActive(!active)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </p>
            )}
            {active && (
              <p
                className="absolute lg:bottom-32 bottom-2 left-4 active:scale-95 hover:shadow-lg transition duration-150 rounded-full"
                onClick={() => setActive(!active)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </p>
            )}
          </div>
        </div>
        <div className="relative">
          <div className="h-[600px] bg-white lg:ml-40 mt-32 lg:mt-60 ml-4">
            <p className="text-4xl lg:text-6xl font-bold">You can host</p>
            <p className="text-4xl lg:text-6xl font-bold">anything, anywhere</p>
          </div>
          <div className="absolute top-[450px] lg:top-[300px] flex space-x-10 lg:mx-60 mx-2">
            <div className="max-w-[350px] lg:max-w-[1600px] flex overflow-scroll scrollbar-hide space-x-8">
              {Array(7)
                .fill("")
                .map((_, index) => (
                  <div
                    key={index}
                    className="lg:min-w-[500px] min-w-[250px] h-[250px] lg:h-[500px] bg-white relative rounded-lg hover:scale-90 active:scale-80 transition duration-150 p-1"
                  >
                    <Image
                      className="rounded-lg"
                      src={`/assets/p-${index}.png`}
                      alt="pic"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="bg-black h-[800px] lg:h-[1000px] flex flex-col justify-center items-center">
            <div className="mx-auto">
              <p className="text-3xl text-white lg:text-6xl font-bold text-center my-4">
                Host entire place for 4 guests
              </p>
              <p className="text-3xl text-white lg:text-6xl font-bold text-center my-4">
                in Nepal
              </p>
              <p className="text-3xl text-white lg:text-6xl font-bold text-center my-4">
                and earn up to $100/month
              </p>
              <p className="text-md text-white my-8 font-semibold text-center">
                How we estimate your earnings potential
              </p>
            </div>
            <div className="flex">
              <div className="relative w-40 h-40 lg:w-80 lg:h-80 hover:scale-90 active:scale-80 transition duration-150">
                <Image
                  className="rounded-lg"
                  src={`/assets/p-${4}.png`}
                  alt="pic"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="relative w-40 h-40 lg:w-80 lg:h-80 hover:scale-90 active:scale-80 transition duration-150">
                <Image
                  className="rounded-lg"
                  src={`/assets/p-${1}.png`}
                  alt="pic"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default registerHost;
