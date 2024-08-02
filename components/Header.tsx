import React from "react";

function Header() {
  return (
    <main className="container-fluid mx-auto py-0 text-center">
      <div className="relative">
        <img
          src="/images/bg3.jpg"
          alt="Fashion"
          className="w-full h-full object-cover container-fluid"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center">
          <p className="text-sm md:text-xl text-white mt-4">
            This month from $29
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Summer <br />
            Overcoat
          </h1>
          <button className="hover:bg-gray-500 mt-6 px-4 py-2 md:px-8 md:py-3 text-white text-sm md:text-lg font-semibold rounded-lg border-2">
            <a href="#" className="rounded-xl">
              Shop Collection
            </a>
          </button>
        </div>
      </div>
    </main>
  );
}

export default Header;
