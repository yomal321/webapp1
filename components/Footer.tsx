import React from "react";

function Footer() {
  return (
    <div>
      {/**Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/** Company Info */}
            <div>
              <h3 className="text-lg font-bold">HONGO</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum is simply dummy text of the printing and
                typesetting.
              </p>
              <p className="text-gray-600">
                <strong>P:</strong> +61 3 8376 6284
              </p>
              <p className="text-gray-600">
                <strong>E:</strong> info@domain.com
              </p>
            </div>
            {/**Categories */}
            <div>
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Women</li>
                <li>Men</li>
                <li>Accessories</li>
                <li>New arrivals</li>
                <li>Modern</li>
              </ul>
            </div>
            {/*Resources* */}
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>My account</li>
                <li>Register</li>
                <li>Wishlist</li>
                <li>Shipping info</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            {/**Information */}
            <div>
              <h3 className="text-lg font-bold mb-4">Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>About us</li>
                <li>Our services</li>
                <li>Latest news</li>
                <li>Best sellers</li>
                <li>Contact us</li>
              </ul>
            </div>
            {/**Services */}
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Order history</li>
                <li>Customer support</li>
                <li>Terms & conditions</li>
                <li>Returns & exchanges</li>
                <li>Shipping & delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
