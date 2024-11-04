import P5 from "../images/P5.png";
import Women from "../images/women.png";
import Perfume from "../images/perfume.png";
import Speakers from "../images/speakers.png";



function Gallery() {
  return (
    <>
          <section className="text-gray-600 body-font ">
          <div className=" container px-16 flex flex-col w-full mb-8">
          <div className="lg:w-1/2 w-full mb-6 flex items-center">
            <div className="h-12 w-6 bg-[#DB4444] rounded"></div>
            <h1 className="sm:text-xl text-[12px] font-bold title-font mb-2 text-[#DB4444] mx-2 my-3 text-center">
            Featured
            </h1>
          </div>
          <h1 className="text-3xl text-black my-4">New Arrival</h1>
        </div>
        <div className="container px-16 py-2 mx-auto flex flex-wrap mb-5">
          <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                          <img alt="feature" className="object-contain object-center h-full w-full bg-black" src={ P5} />
    </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  className="w-full h-full object-contain object-center block"
                  src={Women}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-contain h-full object-center block"
                  src={Perfume}
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img
                  alt="gallery"
                  className="w-full object-contain  h-full object-center block"
                  src={Speakers}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
