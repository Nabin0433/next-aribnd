import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";
const search = ({ searchRel }) => {
  const router = useRouter();
  const { location, startDate, endDate, guests } = router?.query;
  const formatestartDate = format(new Date(startDate ?? 0), "dd MMMM yy");
  const formatesetEndDate = format(new Date(endDate ?? 0), "dd MMMM yy");
  const range = `${formatestartDate} - ${formatesetEndDate}`;
  return (
    <div>
      <Header placeholder={`${location}|${range}|${guests}guests`} />
      <main className="flex">
        <section className="flex-grow pt-16 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {guests} guests{" "}
          </p>
          <h1 className="text-3xl mt-2 font-semibold mb-6">
            Stay in {location}
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexible</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>
          <div className="flex flex-col">
            {searchRel?.map((item, index) => (
              <InfoCard item={item} key={index} />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map data={searchRel} />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default search;

export async function getServerSideProps() {
  const searchRel = await fetch("https://links.papareact.com/isz").then((res) =>
    res.json()
  );
  return {
    props: {
      searchRel,
    },
  };
}
