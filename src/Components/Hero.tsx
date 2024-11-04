
import APPLE from "../images/apple.png";
import PHONE from "../images/phone.png";

function Hero() {
  return (
    <div className="w-full">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-2 mx-auto flex flex-col">
          <div className="lg:w-full mx-auto">
            <div className="flex flex-col sm:flex-row p-9">
              <div className="text-start sm:pr-8 sm:py-8">
                <ul className="text-black">
                  <li className="p-2 flex center"> Woman’s Fashion      <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2 mt-1"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg> </li>
                  <li className="p-2 flex "> Men’s Fashion     <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2 mt-1 flex justify-end"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg></li>
                  <li className="p-2"> Electronics</li>
                  <li className="p-2">Home & Lifestyle</li>
                  <li className="p-2">Medicine</li>
                  <li className="p-2">Sports & Outdoor</li>
                  <li className="p-2">Baby’s & Toys</li>
                  <li className="p-2">Groceries & Pets</li>
                  <li className="p-2">Health & Beauty</li>
                  



                </ul>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-8 sm:mt-0 text-center sm:text-left">
                
                <div>
                  <div className="bg-black p-12 flex flex-row justify-between">                
                    <div>
                      <div className="flex flex-row mb-4">
                      <img src={APPLE} className="mr-4" width={40} alt="apple" />
                       <p className="text-white flex items-center text-md">
                       iPhone 14 Series
                        </p>
                        </div>
                      <p className="leading-relaxed text-white text-5xl pb-4">
                        Up to 10% <br /> off Voucher
                      </p>
                      <button className="text-white inline-flex items-center hover:border-b-2">
                        Shop Now
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                    <div className="">
                      <img src={PHONE} className="w-130" alt="iPhone" />
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
