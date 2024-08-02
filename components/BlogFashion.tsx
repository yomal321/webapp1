import React from "react";

function BlogFashion() {
  return (
    <div>
      <section className="my-8">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold">Blog of Fashion</h3>
          <p className="text-gray-600 mb-8">
            The freshest and most exciting blogs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog Post 1 */}
            <div className="relative">
              <img
                src="/images/bf1.jpg"
                className="w-full h-72 object-cover"
                alt="Blog Post 1"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-4">
                <p className="text-gray-600 uppercase">Fashion</p>
                <h4 className="text-xl font-semibold">
                  I design to make women feel confident and fashion
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                  09 August 2022 | By Alexie Richards
                </p>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="relative">
              <img
                src="/images/bf2.jpg"
                className="w-full h-72 object-cover"
                alt="Blog Post 2"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-4">
                <p className="text-gray-600 uppercase">Fashion</p>
                <h4 className="text-xl font-semibold">
                  Everything I know about midi skirts and how to wear
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                  09 August 2022 | By Alexie Richards
                </p>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="relative">
              <img
                src="/images/bf3.jpg"
                className="w-full h-72 object-cover"
                alt="Blog Post 3"
              />
              <div className="absolute bottom-0 left-0 w-full bg-white bg-opacity-75 p-4">
                <p className="text-gray-600 uppercase">Fashion</p>
                <h4 className="text-xl font-semibold">
                  A designer is only as good as the star who wears
                </h4>
                <p className="text-gray-500 text-sm mt-2">
                  09 August 2022 | By Alexie Richards
                </p>
              </div>
            </div>
          </div>

          {/* Subscription Section */}
          <div className="mt-8">
            <h4 className="text-2xl font-bold">
              Subscribe to get 30% discount!
            </h4>
            <div className="mt-4 flex justify-center">
              <input
                type="email"
                placeholder="Enter your email..."
                className="p-2 border-b-2 border-black rounded"
              />
              <button className="ml-2 px-4 py-2 bg-black text-white rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogFashion;
