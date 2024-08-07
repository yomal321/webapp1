import React from 'react'

function Loginpage() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-4xl w-full bg-white rounded-lg shadow-md overflow-hidden md:flex">
          <div className="hidden md:block md:w-1/2">
            <img
              className="object-cover w-full h-full"
              src="./images/page2.jpg" // Replace with your image URL
              alt="Fitness"
            />
          </div>
          <div className="w-full p-8 md:w-1/2">
            <h2 className="text-3xl font-semibold text-center text-gray-700">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-gray-600">
              Welcome to our fashion shop! Log in to explore the latest trends
              and timeless styles, curated just for you. Enjoy personalized
              recommendations and a seamless shopping experience as you elevate
              your wardrobe.
            </p>
            <div className="mt-4">
              <label className="block text-sm">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="flex items-center justify-between mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">Remember Me</span>
              </label>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                Forgot Password?
              </a>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
                Log In
              </button>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase hover:underline"
              >
                or sign in with Google
              </a>
              <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
            </div>
            <div className="mt-4">
              <button className="w-full px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
                Sign in with Google
              </button>
            </div>
            <p className="mt-4 text-xs text-center text-gray-600">
              Not registered yet?{" "}
              <a href="#" className="text-green-500 hover:underline">
                Create an Account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage
