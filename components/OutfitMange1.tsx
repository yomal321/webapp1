import React from "react";
import { FaHeart, FaStar, FaStarHalf } from "react-icons/fa";

function OutfitMange1() {
  return (
    <div>
      <section className="container mt-8 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded">
          {/* Image Gallery */}
          <div className="md:col-span-1 flex flex-col items-center md:items-end">
            <div className="grid grid-cols-5 md:grid-rows-5 md:grid-cols-1 gap-4">
              <img
                src="/images/pb7.jpg"
                className="w-24 h-24 object-cover"
                alt=""
              />
              <img
                src="/images/pb7.jpg"
                className="w-24 h-24 object-cover"
                alt=""
              />
              <img
                src="/images/pb7.jpg"
                className="w-24 h-24 object-cover"
                alt=""
              />
              <img
                src="/images/pb7.jpg"
                className="w-24 h-24 object-cover"
                alt=""
              />
              <img
                src="/images/pb7.jpg"
                className="w-24 h-24 object-cover"
                alt=""
              />
            </div>
          </div>

          {/* Main Image */}
          <div className="w-full md:col-span-1 flex justify-center">
            <img
              src="/images/page4.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Product Details */}
          <div className="bg-gray-100 p-6 md:col-span-1 font-bold">
            <h5 className="text-2xl font-bold mb-4">Embellished Hoodie</h5>
            <div className="flex flex-col md:flex-row items-center mb-4">
              <div className="flex text-yellow-500 mr-2">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half"></i>
              </div>
              <p className="text-gray-600 text-sm ml-2">SKU: HN-494875</p>
              <button className="ml-auto bg-green-100 text-green-800 px-2 py-1 rounded border border-green-300">
                In Stock
              </button>
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-4">$18.99</p>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipispossimus?
              Beataeinctio alias, officia velit deserunt porro.
            </p>
            <p className="text-red-600 font-bold mb-4">
              Hurry! Only 25 items left in stock
            </p>
            <hr className="mb-4" />

            {/* Color Selection */}
            <div className="mb-4">
              <p className="font-semibold mb-2">Color: Green</p>
              <div className="flex space-x-2">
                <span className="w-6 h-6 bg-green-500 rounded-full inline-block"></span>
                <span className="w-6 h-6 bg-gray-500 rounded-full inline-block"></span>
                <span className="w-6 h-6 bg-blue-500 rounded-full inline-block"></span>
                <span className="w-6 h-6 bg-brown-500 rounded-full inline-block"></span>
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <p className="font-semibold mb-2">Size: M</p>
              <div className="flex space-x-4">
                <button className="w-8 h-8 border border-black rounded-full flex items-center bg-white text-black justify-center hover:bg-black hover:text-white">
                  M
                </button>
                <button className="w-8 h-8 border border-black rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white">
                  L
                </button>
                <a href="#" className="text-blue-600 underline">
                  Size guide
                </a>
              </div>
            </div>

            {/* Quantity Selection */}
            <div className="mb-4 flex items-center space-x-4 font-bold">
              <button className="w-8 h-8 border border-gray-300 rounded-full hover:bg-black hover:text-white">
                -
              </button>
              <p className="text-lg">1</p>
              <button className="w-8 h-8 border border-gray-300 rounded-full hover:bg-black hover:text-white">
                +
              </button>
              <button className="bg-white text-black border border-black px-6 py-2 rounded hover:bg-black hover:text-white">
                Add to cart
              </button>
              <button className="border px-2 py-2 hover:bg-black hover:text-white rounded-full">
                <FaHeart />
              </button>
            </div>

            {/* Add to Cart and Buy Now Buttons */}
            <div className="flex space-x-4 font-bold">
              <button className="bg-black w-full text-white px-6 py-2 rounded">
                Buy it now
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="container mx-auto px-4 py-8 font-bold">
          <div className="border-b border-gray-200 mb-8">
            <nav
              className="flex space-x-4 justify-center font-bold"
              aria-label="Tabs"
            >
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium"
              >
                Product description
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium"
              >
                Additional information
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium"
              >
                Shipping & return
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium"
              >
                Product reviews
              </a>
            </nav>
          </div>

          {/* Product Description Section */}
          <div className="mb-8 mx-4 container flex flex-col md:flex-row items-center font-semibold">
            <div className="md:w-1/2 pl-0 md:pl-8">
              <h2 className="text-2xl font-bold mb-4">
                The latest fashion trends product
              </h2>
              <p className="text-gray-500 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium doloremque libero maxime eligendi quisquam natus
                dolore nemo nesciunt. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-500 mb-4">
                <li>Made from soft and durable 100% organic cotton twill</li>
                <li>Classic collar style with button-up front closure</li>
                <li>Color options: black, white, navy blue, olive green</li>
                <li>
                  Perfect for casual wear or dressing up for special occasions
                </li>
                <li>Available in sizes from S to XL for a perfect fit</li>
              </ul>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0">
              <img
                src="/images/page2.jpg"
                alt="Product Image"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Related products
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-4">
            {/* Product 1 */}
            <div className="relative bg-white p-4 rounded-md border hover:shadow-lg transition-shadow duration-300">
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                SALE
              </span>
              <img
                src="/images/men1.jpg"
                alt="Abstract shirt"
                className="w-full h-auto mb-4 rounded hover:scale-105 transition-transform duration-300"
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

            {/* Product 2 */}
            <div className="relative bg-white p-4 rounded-md border hover:shadow-lg transition-shadow duration-300">
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                SALE
              </span>
              <img
                src="/images/men1.jpg"
                alt="Abstract shirt"
                className="w-full h-auto mb-4 rounded hover:scale-105 transition-transform duration-300"
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

            {/* Additional products can be added here following the same structure */}
            
            <div className="relative bg-white p-4 rounded-md border hover:shadow-lg transition-shadow duration-300">
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                SALE
              </span>
              <img
                src="/images/men1.jpg"
                alt="Abstract shirt"
                className="w-full h-auto mb-4 rounded hover:scale-105 transition-transform duration-300"
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default OutfitMange1;
