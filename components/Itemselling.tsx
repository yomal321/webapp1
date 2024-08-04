import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

function Itemselling() {
  return (
    <section className="p-4">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold">Featured Products</h3>
        <p className="text-gray-600">Follow the most popular trends</p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center content-center">
        {/* Product 1 */}
        <div className="relative bg-white p-4 rounded-md border hover:shadow-lg  hover:scale-105 transition-transform duration-300">
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
          <img
            src="/images/men1.jpg"
            alt="Abstract shirt"
            className="w-full h-auto mb-4 rounded "
          />
          <div className="text-center">
            <div className="flex justify-center mb-2">
              {/* Star Ratings */}
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStarHalf className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
            </div>
            <p className="text-lg font-semibold">Abstract shirt</p>
            <p className="text-gray-500 line-through">$25.00</p>
            <p className="text-green-600 font-bold">$16.66</p>
            <div className="flex justify-center mt-2 space-x-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
              <span className="w-4 h-4 bg-gray-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
              <span className="w-4 h-4 bg-blue-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="bg-gray-400 text-black p-2 font-bold rounded hover:bg-gray-500  hover:scale-90 transition-transform duration-300">
              Add to cart
            </button>
            <button className="bg-gray-400 text-black p-2 font-bold rounded hover:bg-gray-500 hover:scale-90 transition-transform duration-300">
              Buy now
            </button>
          </div>
        </div>

        {/* Product 2 */}
        <div className="relative bg-white p-4 rounded-md border hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
          <img
            src="/images/men1.jpg"
            alt="Abstract shirt"
            className="w-full h-auto mb-4 rounded "
          />
          <div className="text-center">
            <div className="flex justify-center mb-2">
              {/* Star Ratings */}
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStarHalf className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
            </div>
            <p className="text-lg font-semibold">Abstract shirt</p>
            <p className="text-gray-500 line-through">$25.00</p>
            <p className="text-green-600 font-bold">$16.66</p>
            <div className="flex justify-center mt-2 space-x-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
              <span className="w-4 h-4 bg-gray-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
              <span className="w-4 h-4 bg-blue-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="bg-gray-400 text-black p-2 font-bold rounded hover:bg-gray-500 hover:scale-90 transition-transform duration-300">
              Add to cart
            </button>
            <button className="bg-gray-400 text-black p-2 font-bold rounded hover:bg-gray-500 hover:scale-90 transition-transform duration-300">
              Buy now
            </button>
          </div>
        </div>

        {/* Product 3 */}
        <div className="relative bg-white p-4 rounded-md border hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
          <img
            src="/images/men1.jpg"
            alt="Abstract shirt"
            className="w-full h-auto mb-4 rounded "
          />
          <div className="text-center">
            <div className="flex justify-center mb-2">
              {/* Star Ratings */}
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStarHalf className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
            </div>
            <p className="text-lg font-semibold">Abstract shirt</p>
            <p className="text-gray-500 line-through">$25.00</p>
            <p className="text-green-600 font-bold">$16.66</p>
            <div className="flex justify-center mt-2 space-x-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
              <span className="w-4 h-4 bg-gray-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
              <span className="w-4 h-4 bg-blue-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="bg-gray-400 text-black p-2 font-bold rounded hover:bg-gray-500 hover:scale-90 transition-transform duration-300">
              Add to cart
            </button>
            <button className="bg-gray-400 text-black p-2 font-bold rounded hover:bg-gray-500 hover:scale-90 transition-transform duration-300">
              Buy now
            </button>
          </div>
        </div>

        {/* Product 4 */}
        <div className="relative bg-white p-4 rounded-md border hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
          <img
            src="/images/men1.jpg"
            alt="Abstract shirt"
            className="w-full h-auto mb-4 rounded "
          />
          <div className="text-center">
            <div className="flex justify-center mb-2">
              {/* Star Ratings */}
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStarHalf className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
            </div>
            <p className="text-lg font-semibold">Abstract shirt</p>
            <p className="text-gray-500 line-through">$25.00</p>
            <p className="text-green-600 font-bold">$16.66</p>
            <div className="flex justify-center mt-2 space-x-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
              <span className="w-4 h-4 bg-gray-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
              <span className="w-4 h-4 bg-blue-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="bg-gray-400 text-black p-2 font-bold rounded hover:bg-gray-500 hover:scale-90 transition-transform duration-300">
              Add to cart
            </button>
            <button className="bg-gray-400 text-black p-2 font-bold rounded hover:bg-gray-500 hover:scale-90 transition-transform duration-300">
              Buy now
            </button>
          </div>
        </div>

        {/* Product 5 */}
        <div className="relative bg-white p-4 rounded-md border hover:shadow-lg hover:scale-105 transition-transform duration-300">
          <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
            SALE
          </span>
          <img
            src="/images/men1.jpg"
            alt="Abstract shirt"
            className="w-full h-auto mb-4 rounded "
          />
          <div className="text-center">
            <div className="flex justify-center mb-2">
              {/* Star Ratings */}
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStar className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
              <FaStarHalf className="text-yellow-500 hover:scale-125 transition-transform duration-300" />
            </div>
            <p className="text-lg font-semibold">Abstract shirt</p>
            <p className="text-gray-500 line-through">$25.00</p>
            <p className="text-green-600 font-bold">$16.66</p>
            <div className="flex justify-center mt-2 space-x-2">
              <span className="w-4 h-4 bg-yellow-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
              <span className="w-4 h-4 bg-gray-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
              <span className="w-4 h-4 bg-blue-500 rounded-full inline-block hover:scale-125 transition-transform duration-300"></span>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 gap-2">
            <button className="bg-gray-400 text-black p-2 font-bold rounded hover:bg-gray-500 hover:scale-90 transition-transform duration-300">
              Add to cart
            </button>
            <button className="bg-gray-400 text-black p-2 font-bold rounded hover:bg-gray-500   hover:scale-90 transition-transform duration-300">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Itemselling;
