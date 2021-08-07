import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const MediumCard = ({ item, id }) => {
  const { img, title } = item;
  const router = useRouter();

  return (
    <div
      className="rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out "
      onClick={() =>
        router.push({
          pathname: "/product/" + id,
          query: {
            title: title,
            img: img,
          },
        })
      }
    >
      <div className="relative w-80 h-80">
        <Image
          src={img}
          alt="nabin-aribnd-clone"
          layout="fill"
          className="rounded-lg"
        />
      </div>
      <h3 className="text-gray-500 mt-3 text-2xl md:text-3xl">{title}</h3>
    </div>
  );
};

export default MediumCard;
