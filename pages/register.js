import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import Image from "next/image";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setaddress] = useState("");

  const router = useRouter();
  return (
    <div>
      <Header placeholder="search" />
      <main className="w-screen h-screen flex flex-col justify-center items-center bg-gray-800">
        <div className="shadow-lg bg-white space-y-8 flex flex-col py-8 px-16 w-screen lg:w-[400px] h-screen md:h-[600px] lg:rounded-2xl">
          <h2 className="text-3xl mb-8 font-bold border-b pb-4">Register</h2>
          <input
            className="pl-4 text-gray-400 outline-none border rounded-2xl border-red-400 hover:border-red-600 active:border-red-800 h-12"
            type="text"
            placeholder="FullName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="pl-4 text-gray-400 outline-none border rounded-2xl border-red-400 hover:border-red-600 active:border-red-800 h-12"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="pl-4 text-gray-400 outline-none border rounded-2xl border-red-400 hover:border-red-600 active:border-red-800 h-12"
            type="email"
            placeholder="Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="pl-4 text-gray-400 outline-none border rounded-2xl border-red-400 hover:border-red-600 active:border-red-800 h-12"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-gray-400 font-medium flex items-center space-x-4">
            <input type="checkbox" name="" id="" />
            <span> terms and condition</span>
          </p>
          <button
            disabled={!password || !email}
            onClick={() => router.push("/")}
            className="border rounded-3xl py-3 px-4 font-semibold bg-gray-100 active:shadow-xl transition duration-150 transform active:scale-95 hover:shadow-lg shadow-sm"
          >
            Submit
          </button>
          <div className="flex justify-around">
            <div className="relative w-12 h-12 rounded-full p-2 cursor-pointer hover:shadow-lg active:scale-95 transition duration-150">
              <GoogleLogin
                clientId="771889502759-34r8jah4njra6g11gs18j00ko9rocm1j.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Image
                    className="rounded-full"
                    onClick={renderProps.onClick}
                    src="/assets/google.png"
                    alt="google"
                    layout="fill"
                    objectFit="contain"
                  />
                )}
                buttonText="Login"
                onSuccess={() => console.log(responseGoogle)}
                onFailure={() => console.log(responseGoogle)}
                cookiePolicy={"single_host_origin"}
              />
            </div>
            <div className="relative w-12 h-12 rounded-full p-2 cursor-pointer hover:shadow-lg active:scale-95 transition duration-150">
              <FacebookLogin
                appId="243170287453046"
                callback={(responseFacebook) => console.log(responseFacebook)}
                render={(renderProps) => (
                  <Image
                    className="rounded-full"
                    onClick={renderProps.onClick}
                    src="/assets/facebook.png"
                    alt="google"
                    layout="fill"
                    objectFit="contain"
                  />
                )}
              />
            </div>
            <div className="relative w-12 h-12 rounded-full p-2 cursor-pointer hover:shadow-lg active:scale-95 transition duration-150">
              <Image
                className="rounded-full"
                src="/assets/github.png"
                alt="google"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
