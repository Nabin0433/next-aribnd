import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";

const profile = () => {
  return (
    <div>
      <Header placeholder="Search Here" />
      <main className="flex flex-col items-center justify-center">
        <div className="relative md:h-80 h-60 mb-16">
          <div className="w-screen">
            <Image
              src="/assets/banner.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              alt="Nabin"
            />
          </div>
          <div className="absolute left-[150px] md:left-1/2 -bottom-10 h-20 w-20 cursor-pointer hover:scale-125 transition duration-200 active:scale-90">
            <Image
              className="absolute rounded-full animate-pulse "
              src="/assets/profile.png"
              layout="fill"
              objectFit="cover"
              objectPosition="top"
              alt="Nabin"
            />
          </div>
        </div>
        <div className="flex-grow flex shadow-lg w-screen md:px-80 space-y-2 px-10 md:pb-40 pb-10 md:mt-20">
          <div>
            <h2 className="text-2xl font-bold ">Me : </h2>
            <p className="font-bold font-serif">Nabin Karki</p>
            <p>Nepal,Kathmandu</p>
            <p>Web Developer</p>
            <p>Nabin0433@gmail.com</p>
            <p>+977-9824317734</p>
          </div>
          <div className="hidden lg:flex justify-end space-x-10 flex-grow ">
            <div className="shadow-md hover:shadow-xl w-40 h-40 relative cursor-pointer hover:-hue-rotate-15 active:scale-90 transition duration-150 rounded-3xl">
              <Image
                className="rounded-3xl"
                src="/assets/banner.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                alt="Nabin"
              />
            </div>
            <div className="shadow-md hover:shadow-xl w-40 h-40 relative cursor-pointer hover:-hue-rotate-30 active:scale-90 transition duration-150  rounded-3xl">
              <Image
                className="rounded-3xl"
                src="/assets/banner.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                alt="Nabin"
              />
            </div>
            <div className="shadow-md hover:shadow-xl w-40 h-40 relative cursor-pointer hover:-hue-rotate-60 active:scale-90 transition duration-150 rounded-3xl">
              <Image
                className="rounded-3xl"
                src="/assets/banner.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                alt="Nabin"
              />
            </div>
            <div className="shadow-md hover:shadow-xl w-40 h-40 relative cursor-pointer hover:-hue-rotate-90 active:scale-90 transition duration-150 rounded-3xl">
              <Image
                className="rounded-3xl"
                src="/assets/banner.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                alt="Nabin"
              />
            </div>
            <div className="shadow-md hover:shadow-xl w-40 h-40 relative cursor-pointer hover:-hue-rotate-90 active:scale-90 transition duration-150 rounded-3xl ">
              <Image
                className="rounded-3xl"
                src="/assets/banner.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="bottom"
                alt="Nabin"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default profile;
