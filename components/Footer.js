const Footer = () => {
  return (
    <footer className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 xl:gap-y-0 bg-gray-100 text-gray-500 px-12 md:pl-20 lg:pl-[150px] 2xl:pl-[330px] py-14">
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p className="hover:text-gray-900 cursor-pointer">How we Works</p>
        <p className="hover:text-gray-900 cursor-pointer">News Room</p>
        <p className="hover:text-gray-900 cursor-pointer">Investors</p>
        <p className="hover:text-gray-900 cursor-pointer">Aribnb Plus</p>
        <p className="hover:text-gray-900 cursor-pointer">Aribnb Luxe</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p className="hover:text-gray-900 cursor-pointer">Accessibility</p>
        <p className="hover:text-gray-900 cursor-pointer">
          This is not a real side
        </p>
        <p className="hover:text-gray-900 cursor-pointer">How we Works</p>
        <p className="hover:text-gray-900 cursor-pointer">How we Works</p>
        <p className="hover:text-gray-900 cursor-pointer">How we Works</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p className="hover:text-gray-900 cursor-pointer">How we Works</p>
        <p className="hover:text-gray-900 cursor-pointer">How we Works</p>
        <p className="hover:text-gray-900 cursor-pointer">Nabin0433</p>
        <p className="hover:text-gray-900 cursor-pointer">Clone Aribnb</p>
        <p className="hover:text-gray-900 cursor-pointer">Pretty Fun</p>
      </div>
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">CONTACT</h5>
        <p className="hover:text-gray-900 cursor-pointer">How we Works</p>
        <p className="hover:text-gray-900 cursor-pointer">How we Works</p>
        <p className="hover:text-gray-900 cursor-pointer">Nabin Karki</p>
        <p className="hover:text-gray-900 cursor-pointer">How we Works</p>
        <p className="hover:text-gray-900 cursor-pointer">How we Works</p>
      </div>
      <p className="text-center mt-16 mx-auto">
        {" "}
        Copyright 2021 : NABIN KARKI{" "}
      </p>
    </footer>
  );
};

export default Footer;
