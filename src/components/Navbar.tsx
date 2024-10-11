'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FaSearch, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import LogoImage from "@/components/images/Logo (2).png";
import lineImage from "@/components/images/Line 3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Banner - Hidden on small screens */}
      <div className="hidden md:flex h-[50px] bg-black w-full items-center justify-between px-6 text-white text-sm md:text-base">
        <div className="flex items-center ml-4 md:ml-72">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <Link href="#" className="mx-2 underline">
            Shop now
          </Link>
        </div>

        <div className="cursor-pointer">English ▼</div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center bg-white h-[80px] px-4 md:px-6">
        {/* Logo */}
        <div className="ml-2 md:ml-5">
          <Link href="/">
            <Image
              src={LogoImage}
              alt="Exclusive Logo"
              width={100}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Navbar Links - Hidden on small screens */}
        <div className="hidden md:flex space-x-4 md:space-x-8 text-sm md:text-lg">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/signup">Sign Up</Link>
        </div>

        {/* Hamburger Menu Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} aria-label="Open menu">
            <FaBars size={24} />
          </button>
        </div>

        {/* Search and Icons - Only for large screens */}
        <div className=" items-center space-x-4 md:space-x-6 hidden md:flex">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border border-gray-300 rounded-md bg-slate-100 px-4 py-2 w-[180px] md:w-[250px] focus:outline-none"
              aria-label="Search"
            />
            <FaSearch
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "gray",
              }}
              aria-label="Search"
            />
          </div>
          <FaHeart size={20} style={{ cursor: "pointer" }} aria-label="Favorite items" />
          <FaShoppingCart size={20} style={{ cursor: "pointer" }} aria-label="Shopping cart" />
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className={`fixed left-0 top-0 bg-white w-64 h-full shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {/* Close Icon */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={toggleSidebar} aria-label="Close menu">
              <FaTimes size={24} />
            </button>
          </div>

          {/* Sidebar Content */}
          <div className="flex flex-col p-4 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="border border-gray-300 rounded-md bg-slate-100 px-4 py-2 w-full focus:outline-none"
                aria-label="Search"
              />
              <FaSearch
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "gray",
                }}
                aria-label="Search"
              />
            </div>

            {/* Sidebar Links */}
            <Link href="/" className="text-lg">Home</Link>
            <Link href="/contact" className="text-lg">Contact</Link>
            <Link href="/about" className="text-lg">About</Link>
            <Link href="/signup" className="text-lg">Sign Up</Link>

            {/* Icons */}
            <div className="flex justify-around mt-4">
              <FaHeart size={24} style={{ cursor: "pointer" }} aria-label="Favorite items" />
              <FaShoppingCart size={24} style={{ cursor: "pointer" }} aria-label="Shopping cart" />
            </div>
          </div>
        </div>
      </div>

      {/* Line Image */}
      <div>
        <Image
          src={lineImage}
          alt="Exclusive Logo"
          layout="responsive"
          width={1350}
          height={5}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Navbar;
