import { useRouter } from "next/dist/client/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Image from "next/image";

const Product = () => {
  const router = useRouter();
  const { img, location, distance, title } = router?.query;
  return (
    <div>
      <Header placeholder="Search Products" />
      <main className="p-2 space-y-3">
        <div className="block lg:flex justify-start mt-8 lg:mt-20">
          <div className="relative h-[380px] lg:min-w-[600px] lg:mt-20">
            <Image
              className="lg:rounded-3xl hover:scale-105 transition duration-150"
              src={img ?? "/assets/profile.png"}
              layout="fill"
              objectFit="contain"
              objectPosition="top"
            />
          </div>
          <div>
            <h3 className="font-bold text-2xl">
              Details : {location ?? title}
            </h3>
            {distance && (
              <p className="font-semibold text-lg my-4">
                Distance : {distance}
              </p>
            )}
            <p className="font-base text-md font-serif break-words mb-10">
              Conrad Hilton founded the hotel chain in 1919, when he bought his
              first property, the Mobley Hotel, in Cisco, Texas.[11] The first
              hotel to bear the Hilton name was the Dallas Hilton, a high-rise
              that opened in Dallas, Texas, in 1925.[12] In 1954, at the Caribe
              Hilton Hotel's Beachcomber Bar in San Juan, Puerto Rico, Ramon
              "Monchito" Marrero reportedly created the Piña Colada.[13] In June
              1955, Hilton opened the first post–World War II property in
              Istanbul, Turkey, and it is the longest operating Hilton Hotel
              outside the United States.[14][15] The Conrad Hilton Hotel in
              Chicago figured prominently in the 1968 Democratic Convention
              police riot[16] that occurred on Michigan Avenue and across the
              street in Grant Park on August 28. During the riot the
              demonstrators took up the chant "The whole world is watching", and
              the hotel's doors were locked for the first time in its history.
              The hotel suffered minor damage as a result of the violence, and a
              couple of street level windows gave way under the weight of dozens
              of protesters being pushed up against them by the police. John
              Lennon and Yoko Ono held their first Bed-In for Peace between
              March 25 and 31, 1969, at the Amsterdam Hilton, in Room 902
              (renumbered to Room 702 during renovation). This room became a
              popular tourist destination.[17] In the London Hilton bombing of
              September 1975, a bomb exploded in the lobby of the London Hilton
              on Park Lane killing two people and injuring 63. With construction
              on the Beirut Hilton finished, the hotel was scheduled to open on
              April 14, 1975, but the Lebanese Civil War erupted exactly one day
              before the April 13 Grand Opening date. The hotel never opened and
              was severely damaged during the war, and the building was
              demolished in the late 1990s. However, a different hotel was
              established later, under the name "Hilton Beirut Grand Habtoor",
              in the nearby eastern suburb. Later on,[when?] the Hilton Chain
              bought the Metropolitan hotel directly facing the Grand Habtoor
              and renamed it "Hilton Metropolitan".[18] On February 13, 1978,
              the Sydney Hilton Hotel was the site of one of the few terrorist
              incidents on Australian soil, when a bomb blast killed three
              people (two council workers and a policeman). The Hilton Nicosia
              in Nicosia, Cyprus, was the scene of the assassination of Youssef
              Sebai, an Egyptian newspaper editor and friend of Egyptian
              President Anwar El Sadat, on February 19, 1978. The assassination
              and the hijacking of a Cyprus Airways DC-8 at Larnaca Airport led
              to the Egyptian raid on Larnaca International Airport by Egyptian
              forces. The intervention by the Egyptians led to the deterioration
              of relations between Cyprus and Egypt. In 1989, Hilton established
              the Hilton Honors program, Hilton's guest loyalty program.[19] On
              October 24, 1999, the four double columns of the left hand side of
              the then modern Barbados Hilton in Needham's Point, St. Michael,
              was collapsed and imploded inwards in just ten to fifteen seconds
              when the earthquake had rocked Barbados. It was later demolished
              in May 2005 after they constructed the new Barbados Hilton in
              January 2005. In 2004, Hilton Hotels opened their new Kuala Lumpur
              property in KL Sentral, directly opposite the main entrance to the
              Sentral Terminal, as the replacement for their former premises in
              Jalan Sultan Ismail. The latter was the first internationally-run
              hotel in the city when opening in 1973, and changed management in
              2002 (renamed Crowne Plaza Mutiara) before being demolished in
              2015 for a (currently on hold) mixed-use development. In 2009, the
              company relocated its global headquarters from Beverly Hills,
              California to McLean, Virginia. In 2009 Hilton opened Canada's
              tallest hotel at 58 stories, in Niagara Falls, Ontario. In late
              2010, Hilton announced a name change of the Hilton Hotels brand to
              Hilton Hotels & Resorts along with a new logo design, as part of a
              rebranding effort for the flagship brand.[20] In March 2013,
              Hilton announced that it would be entering Burma for the first
              time with the construction of a 300-room hotel in Yangon.[21] In
              2015, approximately 20 Hilton Hotels & Resorts properties were
              inducted into the Historic Hotels of America organization. Among
              these hotels were Hilton Fort Worth, which hosted John F.
              Kennedy's final speech, and Hilton Hawaiian Village Waikiki Beach
              Resort, the setting of the film Blue Hawaii.[22] In 2016, Hilton
              N’Djamena opened in Chad. It was the brand's first property in the
              country and the 100th country Hilton began operations in
              worldwide.[23] In June 2016, Hilton opened their first hotel in
              Estonia and in the Baltic states.[24] In 2017, Hilton announced
              that it will remain the sponsor for McLaren until 2021. Hilton is
              one of the oldest sponsor of F1 series and is sponsoring McLaren
              since 2005.[25] In October 2017, Hilton announced it had committed
              a total of $50m (£37.8m) over five years to its Hilton Africa
              Growth Initiative to support the continued expansion of its
              Sub-Saharan African portfolio. In March 2018, Hilton opened their
              first hotel in Serbia. It is a four-star hotel located in
              Belgrade.[26][27] In late 2019, Hilton opened their first hotel in
              Gulshan, Dhaka, Bangladesh. It was designed by Mustapha Khalid
              Palash.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default Product;
