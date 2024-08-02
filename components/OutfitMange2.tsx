import React from "react";

function Outfitmange2() {
  return (
    <div className="container-fluid mx-auto px-4 py-6">
      <section className="container-fluid mt-6">
        <div className="relative">
          <img
            src="/images/men1 (3).jpg"
            className="object-cover w-full h-64"
            alt="Men"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <p className="text-5xl text-center text-white p-2 rounded">Men</p>
          </div>
        </div>

        <div className="mx-auto my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            <div className="relative">
              <img
                src="/images/men2.jpg"
                className="object-cover w-full h-64"
                alt="Men"
              />
              <div className="absolute inset-0 flex justify-center items-center mt-28">
                <button className="bg-white text-black text-center p-2 rounded w-16 hover:bg-gray-500 hover:text-white">
                  Men
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/kids.jpg"
                className="object-cover w-full h-64"
                alt="Kids"
              />
              <div className="absolute inset-0 flex justify-center items-center mt-28">
                <button className="bg-white text-black text-center p-2 px-6 rounded hover:bg-gray-500 hover:text-white">
                  Kids
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/women1.jpg"
                className="object-cover w-full h-64"
                alt="Women"
              />
              <div className="absolute inset-0 flex justify-center items-center mt-28">
                <button className="bg-white text-black text-center p-2 rounded hover:bg-gray-500 hover:text-white">
                  Women
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/pb6.jpg"
                className="object-cover w-full h-64"
                alt="New arrivals"
              />
              <div className="absolute inset-0 flex justify-center items-center mt-28">
                <button className="bg-white text-black text-center p-2 rounded hover:bg-gray-500 hover:text-white">
                  New arrivals
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/pb7.jpg"
                className="object-cover w-full h-64"
                alt="Accessories"
              />
              <div className="absolute inset-0 flex justify-center items-center mt-28">
                <button className="bg-white text-black text-center p-2 rounded hover:bg-gray-500 hover:text-white">
                  Accessories
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/pb8.jpg"
                className="object-cover w-full h-64"
                alt="Best sellers"
              />
              <div className="absolute inset-0 flex justify-center items-center mt-28">
                <button className="bg-white text-black text-center p-2 rounded hover:bg-gray-500 hover:text-white">
                  Best sellers
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sidebar and Main Content */}
      <div className="flex flex-wrap">
        {/* Sidebar Start */}
        <aside className="w-full md:w-1/4 lg:w-1/5 p-4">
          <h2 className="text-2xl font-bold mb-4">Collection</h2>
          <ul className="mb-4 font-bold text-bold text-gray-500">
            <li>
              <a
                href="#"
                className="block py-2 hover:text-bold hover:text-black"
              >
                New arrivals
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 hover:text-bold hover:text-black"
              >
                Accessories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 hover:text-bold hover:text-black"
              >
                Best sellers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 hover:text-bold hover:text-black"
              >
                Women
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 hover:text-bold hover:text-black"
              >
                Kids
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-4">Filter by</h2>

          {/* Size Filter */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex flex-wrap text-gray-500">
              <button className="border px-3 py-1 mr-2 mb-2 rounded-full hover:bg-black hover:text-white">
                S
              </button>
              <button className="border px-3 py-1 mr-2 mb-2 rounded-full hover:bg-black hover:text-white">
                M
              </button>
              <button className="border px-3 py-1 mr-2 mb-2 rounded-full hover:bg-black hover:text-white">
                L
              </button>
              <button className="border px-3 py-1 mr-2 mb-2 rounded-full hover:bg-black hover:text-white">
                XL
              </button>
              <button className="border px-3 py-1 mr-2 mb-2 rounded-full hover:bg-black hover:text-white">
                XXL
              </button>
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Color</h3>
            <div className="flex flex-wrap">
              <button className="w-8 h-8 bg-red-500 rounded-full mr-2 mb-2"></button>
              <button className="w-8 h-8 bg-blue-500 rounded-full mr-2 mb-2"></button>
              <button className="w-8 h-8 bg-green-500 rounded-full mr-2 mb-2"></button>
              <button className="w-8 h-8 bg-brown-500 rounded-full mr-2 mb-2"></button>
              <button className="w-8 h-8 bg-black rounded-full mr-2 mb-2"></button>
              <button className="w-8 h-8 bg-white border border-black rounded-full mr-2 mb-2"></button>
              <button className="w-8 h-8 bg-yellow-500 rounded-full mr-2 mb-2"></button>
              <button className="w-8 h-8 bg-gray-500 rounded-full mr-2 mb-2"></button>
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Price</h3>
            <input type="range" min="0" max="100" className="w-full" />
            <p className="text-gray-500">Price : $0.00 - $28.00</p>
          </div>

          {/* Brand Filter */}
          <div>
            <h2 className="text-xl font-bold mb-4">Brand</h2>
            <ul className="mb-4 font-bold text-gray-500">
              <li className="mb-2">
                <input
                  type="checkbox"
                  id="acme"
                  name="brand"
                  value="acme"
                  className="mr-2"
                />
                <label
                  htmlFor="acme"
                  className="hover:text-bold hover:text-black"
                >
                  Acme (04)
                </label>
              </li>
              <li className="mb-2">
                <input
                  type="checkbox"
                  id="aritziahurry"
                  name="brand"
                  value="aritziahurry"
                  className="mr-2"
                />
                <label
                  htmlFor="aritziahurry"
                  className="hover:text-bold hover:text-black"
                >
                  AritziaHurry (01)
                </label>
              </li>
              <li className="mb-2">
                <input
                  type="checkbox"
                  id="aurarts"
                  name="brand"
                  value="aurarts"
                  className="mr-2"
                />
                <label
                  htmlFor="aurarts"
                  className="hover:text-bold hover:text-black"
                >
                  Aurarts (02)
                </label>
              </li>
              <li className="mb-2">
                <input
                  type="checkbox"
                  id="nike"
                  name="brand"
                  value="nike"
                  className="mr-2"
                />
                <label
                  htmlFor="nike"
                  className="hover:text-bold hover:text-black"
                >
                  Nike (03)
                </label>
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Availability</h2>
            <ul className="mb-4 font-bold text-gray-500">
              <li className="mb-2">
                <input
                  type="radio"
                  id="in_stock"
                  name="availability"
                  value="in_stock"
                  className="mr-2"
                />
                <label
                  htmlFor="in_stock"
                  className="hover:text-bold hover:text-black"
                >
                  In stock (15)
                </label>
              </li>
              <li className="mb-2">
                <input
                  type="radio"
                  id="out_of_stock"
                  name="availability"
                  value="out_of_stock"
                  className="mr-2"
                />
                <label
                  htmlFor="out_of_stock"
                  className="hover:text-bold hover:text-black"
                >
                  Out of stock (01)
                </label>
              </li>
            </ul>

            <h2 className="text-xl font-bold mb-4">Tag</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="border px-2 py-1 rounded">Classic</span>
              <span className="border px-2 py-1 rounded">Cloth</span>
              <span className="border px-2 py-1 rounded">Cotton</span>
              <span className="border px-2 py-1 rounded">Fashion</span>
              <span className="border px-2 py-1 rounded">Luxury</span>
              <span className="border px-2 py-1 rounded">Stylish</span>
            </div>

            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold">Popular product</h2>
              <div>
                <button className="p-2">
                  <i className="fas fa-arrow-left"></i>
                </button>
                <button className="p-2">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            <div className="relative bg-white p-4 rounded-md overflow-hidden">
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                SALE
              </span>
              <img
                src="/images/men1.jpg"
                alt="Abstract shirt"
                className="w-full h-auto mb-4 rounded"
              />
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {/* Star Ratings */}
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half"></i>
                </div>
                <p className="text-lg font-semibold">Abstract shirt</p>
                <p className="text-gray-500 line-through">$25.00</p>
                <p className="text-green-600 font-bold">$16.66</p>
              </div>
            </div>
          </div>
        </aside>
        {/* Sidebar End */}

        {/* Main Content */}
        <div className="w-full md:w-3/4 lg:w-4/5 p-4">
          {/* Sort bar start */}
          <div className="flex justify-end items-center space-x-2 p-4">
            <p className="font-bold text-3xl">Sort:</p>
            <select className="rounded border-gray-300 focus:ring-indigo-500 p-2 bg-none">
              <option value="Best selling" className="text-bold">
                Best selling
              </option>
              <option value="ascending" className="text-bold">
                Ascending
              </option>
              <option value="descending" className="text-bold">
                Descending
              </option>
            </select>
          </div>
          {/* Sort bar end */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Product Card */}
            <div className="relative bg-white p-4 border rounded-md overflow-hidden">
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                SALE
              </span>
              <img
                src="/images/men1.jpg"
                alt="Abstract shirt"
                className="w-full h-auto mb-4 rounded"
              />
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {/* Star Ratings */}
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half"></i>
                </div>
                <p className="text-lg font-semibold">Abstract shirt</p>
                <p className="text-gray-500 line-through">$25.00</p>
                <p className="text-green-600 font-bold">$16.66</p>
                <div className="flex justify-center mt-2 space-x-2">
                  <button className="w-4 h-4 bg-yellow-500 rounded-full inline-block"></button>
                  <button className="w-4 h-4 bg-gray-500 rounded-full inline-block"></button>
                  <button className="w-4 h-4 bg-blue-500 rounded-full inline-block"></button>
                </div>
              </div>
            </div>
            {/* Add more product cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outfitmange2;
