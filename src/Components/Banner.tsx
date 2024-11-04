import Product from "../images/product.png";
function Banner() {
  return (
    <>
    <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto md:px-24">
            <div className="flex flex-wrap -mx-4 -mb-10 bg-black pt-20">
                <div className="w-full md:w-1/2 mb-10 px-4 md:px-8">
                    <h2 className="title-font text-2xl font-medium text-[#00FF66] mt-6 mb-3">
                        Categories
                    </h2>
                    <p className="leading-relaxed text-3xl md:text-5xl text-white font-sans font-semibold mb-4">
                        Enhance Your Music Experience
                    </p>
                    <button className="mx-auto mt-6 text-white bg-[#00FF66] hover:bg-[#00ff66e2] border-0 py-2 md:py-4 px-8 md:px-14 focus:outline-none rounded">
                        Button
                    </button>
                </div>
                <div className="w-full md:w-1/2 mb-10 px-4 py-2 md:py-18">
                    <div className="overflow-hidden">
                        <img
                            alt="content"
                            className="object-contain object-center h-full w-full"
                            src={Product}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
            
           
    </>
  );
}

export default Banner;
