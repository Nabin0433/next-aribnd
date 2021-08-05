import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:[500px] xl:[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        alt="Banner"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-md text-base md:text-xl lg:text-xl">Find Your Own Way !!</p>
        <button className="py-4 px-10 border-2 text-purple-500 bg-white shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150">
          Find Here
        </button>
      </div>
    </div>
  );
};

export default Banner;
