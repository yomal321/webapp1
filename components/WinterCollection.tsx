import React from "react";

function WinterCollection() {
  return (
    <div className="bg-white">
      {/* Winter Collection Section */}
      <section className="container mx-auto py-12 px-4 ">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="relative flex justify-center items-center">
            <img
              src="/images/page3.jpg"
              alt="Winter Collection"
              className="w-full h-auto object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm font-medium text-gray-700">
                  NEW ARRIVAL
                </span>
                <span className="text-lg font-bold text-gray-900">
                  DESIGNER COLLECTION
                </span>
              </div>
            </div>
          </div>
          <div className="text-left px-6">
            <h2 className="text-3xl font-bold text-black mb-4">
              New Arrival
              <br /> Winter Collection
            </h2>
            <p className="text-gray-400 mb-6 font-semibold">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry. Lorem ipsum has been standard dummy text. Lorem ipsum
              has been standard.
            </p>
            <div className="flex justify-start flex-wrap">
              <button className="bg-black text-white px-6 py-3 border rounded hover:bg-white hover:text-black mx-2 my-2">
                Shop the Collection
              </button>
              <button className="bg-black text-white px-6 py-3 border rounded hover:bg-white hover:text-black mx-2 my-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="py-4 bg-white">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex justify-center items-center">
            <img
              src="/images/logo1.jpg"
              alt="Logo 1"
              className="max-w-full max-h-20 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/logo2.jpg"
              alt="Logo 2"
              className="max-w-full max-h-20 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/logo3.jpg"
              alt="Logo 3"
              className="max-w-full max-h-20 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src="/images/logo4.jpg"
              alt="Logo 4"
              className="max-w-full max-h-20 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default WinterCollection;
