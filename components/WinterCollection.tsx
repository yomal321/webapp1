import React from "react";

function WinterCollection() {
  return (
    <div>
      {/* Winter Collection Section */}
      <section className=" container-fluid   py-12 bg-white mx-3 mb-0 pb-0">
        <div className=" mx-auto grid md:grid-cols-2 items-center gap-8">
          <div className="relative">
            <img
              src="/images/page3.jpg"
              alt="Winter Collection"
              className="w-full h-full object-cover"
            />
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
            <div className="flex justify-center flex-wrap">
              <button className="bg-white text-black px-6 py-3 border rounded hover:bg-black hover:text-white mx-2 my-2">
                Shop the Collection
              </button>
              <button className="bg-white text-black px-6 py-3 border rounded hover:bg-black hover:text-white mx-2 my-2">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar */}
      <section className="mt-0 py-0 my-0 bg-white">
        <div className=" mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
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
