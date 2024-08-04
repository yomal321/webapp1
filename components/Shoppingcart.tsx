import React from "react";
import {
  FaShippingFast,
  FaPhone,
  FaComments,
  FaGift,
  FaSearch,
} from "react-icons/fa";
import { FaBagShopping, FaGear, FaUser } from "react-icons/fa6";

function ShoppingBag() {
  return (
    <div className="bg-yellow-300 min-h-screen">
      <div className="container mx-auto py-12">
        {/* Header */}
        <header className="bg-white p-4 m-4 flex flex-col md:flex-row items-center justify-between rounded-3xl">
          <div className="flex items-center w-full md:w-auto mb-4 md:mb-0">
            <img
              src="/images/logo11.png"
              alt="Logo"
              className="h-8 w-8 mr-2 rounded-xl"
            />
            <div className="relative flex items-center w-full md:w-auto">
              <input
                type="text"
                placeholder="Search..."
                className="p-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 w-full md:w-96"
              />
              <button className="absolute right-2 p-3" aria-label="Search">
                <FaSearch />
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="focus:outline-none" aria-label="Shopping Bag">
              <FaBagShopping />
            </button>
            <button className="focus:outline-none" aria-label="User">
              <FaUser />
            </button>
            <button className="focus:outline-none" aria-label="Settings">
              <FaGear />
            </button>
          </div>
        </header>
        {/* Header end */}

        <h1 className="text-2xl font-bold mb-4 ml-4">Shopping Bag</h1>
        <p className="text-gray-600 mb-6 ml-4">
          <span className="text-xl font-bold ml-4">2 items </span>in your bag.
        </p>
        <div className="flex justify-between items-center px-4">
          <div></div>
          {/* Back button */}
          <div className="mr-3">
            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
              <a href="./">Back</a>
            </button>
          </div>
          {/* Back button end */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 rounded-full mx-4">
          {/* Product List */}
          <div className="md:col-span-2 bg-white p-6 rounded shadow-sm">
            <div className="flex justify-between font-bold font-serif py-3">
              <div>
                <p>Product</p>
              </div>
              <div className="flex">
                <p className="">
                  <span className="px-4 mr-4">Price</span>
                  <span className="px-4">Qty</span>
                  <span className="px-4">Total </span>
                </p>
              </div>
            </div>
            {/* Product 1 */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-4 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4 sm:mb-0">
                <img
                  src="/images/pb1.jpg"
                  alt="Floral Print Wrap Dress"
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div>
                  <h2 className="font-semibold text-lg">
                    Floral Print Wrap Dress
                  </h2>
                  <p className="text-gray-500">Women</p>
                  <p className="text-gray-500">Color: Blue</p>
                  <p className="text-gray-500">Size: 42</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center">
                <p className="text-gray-700 px-3">$20.50</p>
                <div className="flex items-center ml-4">
                  <button className="bg-gray-200 px-3 py-1 rounded-full">
                    -
                  </button>
                  <p className="px-3">2</p>
                  <button className="bg-gray-200 px-3 py-1 rounded-full">
                    +
                  </button>
                </div>
                <p className="text-orange-500 ml-4 px-3">$41.00</p>
              </div>
            </div>
            {/* Product 2 */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b pb-4 mb-4 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4 sm:mb-0">
                <img
                  src="/images/pb2.jpg"
                  alt="Floral Print Wrap Dress"
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div>
                  <h2 className="font-semibold text-lg">
                    Floral Print Wrap Dress
                  </h2>
                  <p className="text-gray-500">Women</p>
                  <p className="text-gray-500">Color: Blue</p>
                  <p className="text-gray-500">Size: 42</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center">
                <p className="text-gray-700 px-3">$30.50</p>
                <div className="flex items-center ml-4">
                  <button className="bg-gray-200 px-3 py-1 rounded-full">
                    -
                  </button>
                  <p className="px-3">1</p>
                  <button className="bg-gray-200 px-3 py-1 rounded-full">
                    +
                  </button>
                </div>
                <p className="text-orange-500 ml-4 px-3">$30.50</p>
              </div>
            </div>
            {/* Product 3 */}
            <div className="flex flex-col sm:flex-row items-center justify-between pb-4 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4 sm:mb-0">
                <img
                  src="/images/pb2.jpg"
                  alt="Floral Print Wrap Dress"
                  className="w-20 h-20 object-cover rounded mr-4"
                />
                <div>
                  <h2 className="font-semibold text-lg">
                    Floral Print Wrap Dress
                  </h2>
                  <p className="text-gray-500">Women</p>
                  <p className="text-gray-500">Color: Blue</p>
                  <p className="text-gray-500">Size: 42</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center">
                <p className="text-gray-700 px-3">$30.50</p>
                <div className="flex items-center ml-4">
                  <button className="bg-gray-200 px-3 py-1 rounded-full">
                    -
                  </button>
                  <p className="px-3">1</p>
                  <button className="bg-gray-200 px-3 py-1 rounded-full">
                    +
                  </button>
                </div>
                <p className="text-orange-500 ml-4 px-3">$30.50</p>
              </div>
            </div>
          </div>

          {/* Calculated Shipping & Summary */}
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h2 className="font-semibold text-lg mb-4">Calculated Shipping</h2>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">Country</label>
              <select className="w-full p-2 border rounded">
                <option>Country</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 mb-2">State / City</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="ZIP Code"
              />
            </div>
            <button className="w-full bg-black text-white py-2 rounded-full mb-4">
              Update
            </button>

            <h2 className="font-semibold text-lg mb-4">Coupon Code</h2>
            <p className="text-gray-500 mb-2">
              Enter your coupon code if you have one.
            </p>
            <input
              type="text"
              className="w-full p-2 border rounded mb-4"
              placeholder="Coupon Code"
            />
            <button className="w-full bg-black text-white py-2 rounded-full mb-4">
              Apply
            </button>

            <div className="bg-orange-200 p-4 rounded-3xl">
              <h2 className="font-semibold text-lg mb-2">Cart Total</h2>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Cart Subtotal</span>
                <span>$71.50</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Design by Fluttertop</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Discount</span>
                <span>-$4.00</span>
              </div>
              <div className="flex justify-between text-gray-800 font-bold">
                <span>Cart Total</span>
                <span>$67.50</span>
              </div>
              <button className="w-full text-black bg-white py-2 rounded-full mt-4 font-bold">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo bar */}
      <div className="py-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Service 1 */}
          <div className="flex items-center bg-white p-4 rounded-lg ml-3 shadow-sm">
            <div className="p-3 bg-pink-100 rounded-full">
              <FaShippingFast className="text-pink-500" size={24} />
            </div>
            <div className="ml-4">
              <h2 className="font-semibold text-lg">Free Shipping</h2>
              <p className="text-gray-500">When you spend $50+</p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaPhone className="text-yellow-500" size={24} />
            </div>
            <div className="ml-4">
              <h2 className="font-semibold text-lg">Call Us Anytime</h2>
              <p className="text-gray-500">+34 555 5555</p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
            <div className="p-3 bg-green-100 rounded-full">
              <FaComments className="text-green-500" size={24} />
            </div>
            <div className="ml-4">
              <h2 className="font-semibold text-lg">Chat With Us</h2>
              <p className="text-gray-500">We offer 24-hour chat support</p>
            </div>
          </div>
          {/* Service 4 */}
          <div className="flex items-center bg-white p-4 rounded-lg mr-3 shadow-sm">
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaGift className="text-yellow-500" size={24} />
            </div>
            <div className="ml-4">
              <h2 className="font-semibold text-lg">Gift Cards</h2>
              <p className="text-gray-500">For your loved one, in any amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingBag;
