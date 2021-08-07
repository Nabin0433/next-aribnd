import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmaillCard from "../components/SmaillCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const item = {
  img: "https://links.papareact.com/4cj",
  title: "The Greatest Outdoors",
  dis: "WishLists curated by Aribnb.",
  btn: "Get Inspired",
};

export default function Home({ exploreData, cartData }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header placeholder="search" />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="mt-8">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item, index) => (
              <SmaillCard key={index} item={item} id={index} />
            ))}
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-4xl font-semibold py-8">Live Anyware</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cartData?.map((item, index) => (
              <MediumCard key={index} item={item} id={index} />
            ))}
          </div>
        </section>
        <section className="mt-0 md:mt-8">
          <LargeCard item={item} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cartData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );
  return {
    props: {
      exploreData,
      cartData,
    },
  };
}
