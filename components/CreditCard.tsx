import React from "react";

function CreditCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-200 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Progress Bar */}
        <div className="flex justify-around items-center mb-8">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
              1
            </div>
            <span className="ml-2 text-gray-700">Cart</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
              2
            </div>
            <span className="ml-2 text-gray-700">Delivery</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
              3
            </div>
            <span className="ml-2 text-gray-700">Payment</span>
          </div>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
              4
            </div>
            <span className="ml-2 text-gray-500">Confirmation</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Payment Information */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                  Cardholder Name
                </label>
                <input
                  placeholder=" Cardholder Name"
                  type="text"
                  className="p-2  border border-gray-300 focus:outline-none focus:border-gray-500 w-full rounded-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Card Number</label>
                <input
                  placeholder="Card number "
                  type="text"
                  className="p-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 w-fullb "
                />
              </div>
              <div className="flex mb-4">
                <div className="mr-2 w-1/2">
                  <label className="block text-gray-700 mb-2">Exp. Date</label>
                  <div className="flex">
                    <select className="p-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 w-full mr-2">
                      <option value="Month">Month</option>
                      {/* Add month options here */}
                    </select>
                    <select className="p-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 w-full">
                      <option value="Year">Year</option>
                      {/* Add year options here */}
                    </select>
                  </div>
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="CVV"
                    className="p-2 rounded-full border border-gray-300 focus:outline-none focus:border-gray-500 w-full"
                  />
                </div>
              </div>
              <button className="w-full bg-orange-500 text-white py-2 rounded-full mt-4">
                Pay $49.50
              </button>
              <button className="w-full bg-gray-700 text-white py-2 rounded-full mt-4">
                Back to Address
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="bg-gray-400 p-6 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Summary</h2>
            <p className="text-gray-700 mb-4">2 items in your bag.</p>
            <div className="space-y-4 mb-4">
              {/* Product 1 */}
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <img
                    src="/images/product1.jpg"
                    alt="Product 1"
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Floral Print Wrap Dress</h3>
                    <p className="text-gray-500">Blue, Size: 42</p>
                  </div>
                </div>
                <p className="font-bold text-orange-500">$21.50</p>
              </div>
              {/* Product 2 */}
              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                <div className="flex items-center">
                  <img
                    src="/images/product2.jpg"
                    alt="Product 2"
                    className="w-16 h-16 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Floral Print Wrap Dress</h3>
                    <p className="text-gray-500">Red, Size: 42</p>
                  </div>
                </div>
                <p className="font-bold text-orange-500">$32.50</p>
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Cart Subtotal</span>
                <span className="font-bold">$54.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping & Handling</span>
                <span className="font-bold">$0.00</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Discount</span>
                <span className="font-bold">-$4.50</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span className="text-gray-800">Cart Total</span>
                <span className="text-gray-800">$49.50</span>
              </div>
            </div>
            <div className="border-t pt-4 mt-4">
              <p className="text-gray-700 mb-2">Shipment Address</p>
              <p className="text-gray-600">
                Akshya Nagar 1st Block 1st Cross, Ramamurthy nagar, Design by
                Fluttertop
              </p>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded-3xl mt-4">
              Pay $49.50
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
