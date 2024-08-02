import React from "react";

function PhotoBar() {
  return (
    <div>
      <section className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-0">
          <div>
            <img
              src="/images/pb1.jpg"
              className="w-full h-32 sm:h-48 object-cover"
              alt=""
            />
          </div>
          <div>
            <img
              src="/images/pb2.jpg"
              className="w-full h-32 sm:h-48 object-cover"
              alt=""
            />
          </div>
          <div>
            <img
              src="/images/pb3.jpg"
              className="w-full h-32 sm:h-48 object-cover"
              alt=""
            />
          </div>
          <div>
            <img
              src="/images/pb4.jpg"
              className="w-full h-32 sm:h-48 object-cover"
              alt=""
            />
          </div>
          <div>
            <img
              src="/images/pb5.jpg"
              className="w-full h-32 sm:h-48 object-cover"
              alt=""
            />
          </div>
          <div>
            <img
              src="/images/pb6.jpg"
              className="w-full h-32 sm:h-48 object-cover"
              alt=""
            />
          </div>
          <div>
            <img
              src="/images/pb7.jpg"
              className="w-full h-32 sm:h-48 object-cover"
              alt=""
            />
          </div>
          <div>
            <img
              src="/images/pb8.jpg"
              className="w-full h-32 sm:h-48 object-cover"
              alt=""
            />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-75 px-4 sm:px-6 py-1 sm:py-2 rounded-md shadow-md">
            <span className="text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl">
              Hongo fashion
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PhotoBar;
