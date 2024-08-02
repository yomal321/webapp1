import React from "react";

function Countdown() {
  return (
    <div>
      <section className="mt-0 relative">
        <div className="container-fluid">
          <div className="relative max-h-100">
            <img
              src="/images/countdown.jpg"
              className="object-cover max-h-80 w-full"
              alt="Countdown Image"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-black p-4">
              <p className="text-xs sm:text-sm md:text-base">
                GET 30% OFF ON YOUR ORDER
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Deal of the day!
              </h2>
              <div className="flex mt-4 space-x-2 sm:space-x-4 text-center">
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    201
                  </p>
                  <p className="text-xs sm:text-sm md:text-base">DAYS</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    22
                  </p>
                  <p className="text-xs sm:text-sm md:text-base">HOURS</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    14
                  </p>
                  <p className="text-xs sm:text-sm md:text-base">MINUTES</p>
                </div>
                <div>
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold">
                    53
                  </p>
                  <p className="text-xs sm:text-sm md:text-base">SECONDS</p>
                </div>
              </div>
              <button className="mt-4 bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white">
                <a href="#" className="">
                  Shop collection
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Countdown;
