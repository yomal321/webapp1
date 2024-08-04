import React from "react";

function ShoppingContent() {
  return (
    <section className="p-2 container  mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Grid (2 columns wide on medium screens and larger) */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-1 sm:col-span-2 relative">
            <img
              src="/images/page2.jpg"
              alt="Summer Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white items-end justify-end">
              <h2 className="text-lg md:text-xl text-black font-bold">
                LATEST DESIGN
              </h2>
              <p className="text-xl md:text-2xl text-black">
                Summer collection
              </p>
              <button
                className="mt-2 px-4 py-2 bg-transparent text-white rounded border border-gray-300 hover:bg-black"
                id="btn"
              >
                Shop now
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/page1 (1).jpg"
              alt="Men's Hoodies"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-lg md:text-xl font-bold">HOT SEASON</p>
              <p className="text-xl md:text-2xl">Men's hoodies</p>
              <button
                className="mt-2 px-4 py-2 bg-transparent text-white rounded border border-gray-300 hover:bg-sky-700 hover:bg-black"
                id="btn"
              >
                Shop now
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/page3.jpg"
              alt="Sale"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-yellow-400 p-4">
              <p className="text-lg md:text-xl font-bold">LIMITED OFFER</p>
              <p className="text-xl md:text-2xl">SALE</p>
              <p className="text-md md:text-lg">SAVE UP TO 30% OFF</p>
              <button
                className="mt-2 px-4 py-2 bg-transparent text-white rounded border border-gray-300 hover:bg-black"
                id="btn"
              >
                Shop now
              </button>
            </div>
          </div>
        </div>
        {/* Right Image (1 column wide on medium screens and larger) */}
        <div className="relative">
          <img
            src="/images/page4.jpg"
            alt="Women's Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white">
            <p className="text-lg md:text-xl font-bold">UP TO 20% OFF</p>
            <p className="text-xl md:text-2xl">Women's collection</p>
            <button
              className="mt-2 px-4 py-2 bg-transparent text-black rounded border border-gray-300 hover:bg-black hover:text-white"
              id="btn"
            >
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShoppingContent;
