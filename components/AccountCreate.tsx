import React from 'react'

function AccountCreate() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden p-8">
          <h2 className="text-2xl font-semibold text-center text-gray-700">
            CREATE ACCOUNT
          </h2>
          <p className="mt-2 text-center text-gray-600">
            Please register below to create an account
          </p>
          <form className="mt-4">
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Your Email Address
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Your Password
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="w-full px-4 py-2 mt-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="mt-4">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm text-gray-600">
                  Subscribe To Email Marketing
                </span>
              </label>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                CREATE AN ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AccountCreate
