import { useRouter } from "next/dist/client/router";

const Modal = () => {
  const router = useRouter();
  return (
    <div className="space-y-8">
      <p
        className="font-medium text-lg hover:text-gray-500 cursor-pointer"
        onClick={() => router.push("/register")}
      >
        Sign Up
      </p>
      <p
        className="hover:text-gray-500 cursor-pointer"
        onClick={() => router.push("/login")}
      >
        Log in
      </p>
      <hr />
      <p
        className="hover:text-gray-500 cursor-pointer"
        onClick={() => router.push("/login")}
      >
        Host Your Home
      </p>
      <p
        className="hover:text-gray-500 cursor-pointer"
        onClick={() => router.push("/login")}
      >
        Host Your experience
      </p>
      <p
        className="hover:text-gray-500 cursor-pointer"
        onClick={() => router.push("/login")}
      >
        Help
      </p>
    </div>
  );
};

export default Modal;
