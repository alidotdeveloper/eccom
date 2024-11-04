import { Link } from "react-router-dom";
import LOGO from "../images/Logo.png";
import WISHLIST from "../images/Wishlist.png";
import CART from "../images/cart.png";
import Topbar from "./Topbar";

const Header: React.FC = () => {
  let Auth = false;
  return (
    <>
      <Topbar />
      <header className="text-gray-600 body-font border-b-2 border-gray-200 md:px-14">
        <div className="container mx-auto flex  flex-wrap p-3 flex-row  md:flex-row justify-between items-center">
          <Link to="/">
            <img src={LOGO} width={150} />{" "}
          </Link>

          <nav className="md:ml-20 md:flex flex-wrap items-center text-base justify-center hidden">
            <Link
              to="/"
              className="mr-10 text-black font-normal font-family-poopins  hover:border-b-2 hover:border-black"
            >
              Home
            </Link>
            <Link
              to=""
              className="mr-10   text-black font-normal hover:border-b-2 hover:border-black"
            >
              Contact
            </Link>
            <a className="mr-10  text-black font-normal hover:border-b-2 hover:border-black">
              About
            </a>

            {Auth ? (
              <button className="text-black font-normal hover:border-b-2 hover:border-black ">
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className=" mr-10  text-black font-normal  hover:border-b-2 hover:border-black"
              >
                Login
              </Link>
            )}
          </nav>
          <nav className="md:ml-auto flex  items-center text-base justify-center ">
            <form className="max-w-lg mx-auto">
              <label className="mb-2 text-sm font-medium text-black sr-only dark:text-black">
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="default-search"
                  className=" px-32 py-3 hidden w-full   xl:block    p-4 ps-3 text-sm text-black border bg-gray-200
            dark:placeholder-gray-400 "
                  placeholder="What you are looking for"
                  required
                />
                <div className="absolute inset-y-0 end-4 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-black "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
            </form>

            <Link to="/wishlist" className="mx-3   text-black font-semibold ">
              <button className="rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center text-white-500  hover:text-white ">
                <img src={WISHLIST} width={30} height={30} />
              </button>
            </Link>
            <Link
              to="/cart"
              className="   text-black font-semibold hover:text-gray-700"
            >
              <button className="rounded-full w-10 h-10  p-0 border-0 inline-flex items-center justify-center text-white-500  hover:text-white ">
                <img src={CART} width={30} height={30} />
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
