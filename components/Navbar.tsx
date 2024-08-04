"use client";

import { FaUser, FaHeart } from "react-icons/fa";
import { FaCartShopping, FaMagnifyingGlass } from "react-icons/fa6";
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 shadow bg-white z-50" id="nav">
      <div className="container-fluid mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex-1 flex items-center space-x-4 justify-center md:justify-start">
          <a
            href="#"
            className="text-black hover:text-gray-700 hover:underline"
          >
            Demo
          </a>
           <a href="#"className="text-black hover:text-gray-700 hover:underline"> Shop     </a>
            
            
          
           
     
          <a
            href="#"
            className="text-black hover:text-gray-700 hover:underline"
          >
            Collections
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 hover:underline"
          >
            Pages
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 hover:underline"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 hover:underline"
          >
            Features
          </a>
        </div>
        <a className="text-black text-xl font-bold md:text-2xl mx-4" href="#">
          HONGO
        </a>
        <div className="flex-1 flex items-center space-x-4 justify-center md:justify-end">
          <a
            href="#"
            className="text-black hover:text-gray-700 flex items-center space-x-1 hover:underline"
          >
            <FaMagnifyingGlass />
            <span>Search</span>
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 flex items-center space-x-1 hover:underline"
          >
            <FaUser />
            <span>Account</span>
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-700 flex items-center space-x-1 hover:underline"
          >
            <FaHeart />
            <span>Wishlist</span>
          </a>
          <a
            href="./cart"
            className="text-black hover:text-gray-700 flex items-center space-x-1 hover:underline"
          >
            <FaCartShopping />
            <span>Cart</span>
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-gray-700"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-4 p-4">
            <a
              href="#"
              className="text-black hover:text-gray-700 hover:underline"
            >
              Demo
            </a>
            <a href="#"className ="text-black hover:text-gray-700 hover:underline" >   Shop</a>
             
             
           
           
            
            <a
              href="#"
              className="text-black hover:text-gray-700 hover:underline"
            >
              Collections
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-700 hover:underline"
            >
              Pages
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-700 hover:underline"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-700 hover:underline"
            >
              Features
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-700 flex items-center space-x-1 hover:underline"
            >
              <FaMagnifyingGlass />
              <span>Search</span>
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-700 flex items-center space-x-1 hover:underline"
            >
              <FaUser />
              <span>Account</span>
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-700 flex items-center space-x-1 hover:underline"
            >
              <FaHeart />
              <span>Wishlist</span>
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-700 flex items-center space-x-1 hover:underline"
            >
              <FaCartShopping />
              <span>Cart</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
