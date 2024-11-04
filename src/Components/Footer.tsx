import { Link } from "react-router-dom";
import LOGO from "../images/Logo-white.png";

function Footer() {
  return (
    <>
      <footer className="text-white body-font bg-black">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 ml-3 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <img className=" w-24 text-white mb-3" src={LOGO} />
            </a>
            <p className="mt-2  text-md text-white mb-3">Subscribe</p>
            <p className="mt-2  text-md text-white mb-3">
              Get 10% off your first order
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3 ">
                Support
              </h2>
              <nav className="list-none mb-10 ">
                <li className="mb-2">
                  <a className="text-white  ">
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                  </a>
                </li>
                <li className="mb-2">
                  <a className="text-white ">exclusive@gmail.com</a>
                </li>
                <li className="mb-2">
                  <a className="text-white ">+88015-88888-9999</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3 ">
                Accounts
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-2">
                  <Link to={'/admin'} className="text-white ">Dashboard </Link>
                </li>
                <li className="mb-2">
                  <a className="text-white ">Login / Register</a>
                </li>
                <li className="mb-2">
                  <a className="text-white ">Cart</a>
                </li>
                <li className="mb-2">
                  <a className="text-white ">Wishlist</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                Quick Link
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-white ">Privacy Policy</a>
                </li>
                <li className="mb-2">
                  <a className="text-white ">Terms Of Use</a>
                </li>
                <li className="mb-2">
                  <a className="text-white ">FAQ</a>
                </li>
                <li className="mb-2">
                  <a className="text-white ">Contact</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-white hover:text-gray-800">First Link</a>
                </li>
                <li className="mb-2">
                  <a className="text-white hover:text-gray-800">Second Link</a>
                </li>
                <li className="mb-2">
                  <a className="text-white hover:text-gray-800">Third Link</a>
                </li>
                <li className="mb-2">
                  <a className="text-white hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black border-gray-400 border-t-2">
          <div className="container mx-auto py-4 px-5 flex justify-center flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © Copyright Rimel 2022. All right reserved 
             
            </p>
      
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
