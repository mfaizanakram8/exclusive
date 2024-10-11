'use client';
import React, { useState } from "react";
import herImage from "@/components/images/Frame 560.png"; 
import heriImage from "@/components/images/frame561.jpg";
import Image from "next/image";
import heroImage from "@/components/images/frame562.jpg";
import herpImage from "@/components/images/frame563.jpg";
import { StaticImageData } from "next/image";

const HeroSection: React.FC = () => {
  const images: StaticImageData[] = [herImage, heriImage, heroImage, herpImage];
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [showWomenDropdown, setShowWomenDropdown] = useState<boolean>(false);
  const [showMenDropdown, setShowMenDropdown] = useState<boolean>(false);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  const toggleWomenDropdown = () => {
    setShowWomenDropdown((prev) => !prev);
  };

  const toggleMenDropdown = () => {
    setShowMenDropdown((prev) => !prev);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center h-auto max-w-5xl mx-auto relative p-4">
      <div className="w-full md:w-1/4 mt-6 md:mt-12">
        <ul className="text-left space-y-2 md:space-y-4">
          <li className="text-lg md:text-xl font-medium cursor-pointer hover:text-gray-600">
            <div onClick={toggleWomenDropdown} className="flex items-center justify-between">
              Womens Fashion 
              <span className="ml-2 font-bold">&#9662;</span> {/* Dropdown arrow */}
            </div>
            {showWomenDropdown && (
              <ul className="ml-4 mt-1 space-y-2">
                <li className="text-lg cursor-pointer hover:text-gray-600">Dresses</li>
                <li className="text-lg cursor-pointer hover:text-gray-600">Tops</li>
                <li className="text-lg cursor-pointer hover:text-gray-600">Accessories</li>
              </ul>
            )}
          </li>
          <li className="text-lg md:text-xl font-medium cursor-pointer hover:text-gray-600">
            <div onClick={toggleMenDropdown} className="flex items-center justify-between">
              Mens Fashion 
              <span className="ml-2 font-bold">&#9662;</span> {/* Dropdown arrow */}
            </div>
            {showMenDropdown && (
              <ul className="ml-4 mt-1 space-y-2">
                <li className="text-lg cursor-pointer hover:text-gray-600">Shirts</li>
                <li className="text-lg cursor-pointer hover:text-gray-600">Pants</li>
                <li className="text-lg cursor-pointer hover:text-gray-600">Accessories</li>
              </ul>
            )}
          </li>
          <li className="text-lg md:text-xl font-medium cursor-pointer hover:text-gray-600">Electronics</li>
          <li className="text-lg md:text-xl font-medium cursor-pointer hover:text-gray-600">Home & Lifestyle</li>
          <li className="text-lg md:text-xl font-medium cursor-pointer hover:text-gray-600">Medicine</li>
          <li className="text-lg md:text-xl font-medium cursor-pointer hover:text-gray-600">Sports & Outdoor</li>
          <li className="text-lg md:text-xl font-medium cursor-pointer hover:text-gray-600">Babys & Toys</li>
          <li className="text-lg md:text-xl font-medium cursor-pointer hover:text-gray-600">Groceries & Pets</li>
          <li className="text-lg md:text-xl font-medium cursor-pointer hover:text-gray-600">Health & Beauty</li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
        {/* Dots */}
        <div className="flex flex-row md:flex-col items-center space-x-2 md:space-x-0 md:space-y-2 mb-4">
          {images.map((_, index: number) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${index === currentImage ? "bg-black" : "bg-gray-300"}`}
              onClick={() => goToImage(index)}
            />
          ))}
        </div>
        {/* Line between dots on small screens */}
        <div className="hidden md:block h-[250px] w-[2px] bg-gray-300"></div>
      </div>

      {/* Main image display */}
      <div className="relative w-full md:w-[600px] h-[400px] flex items-center justify-center">
        {/* Previous arrow for all screens */}
        <button onClick={prevImage} className="absolute left-0 bg-white p-2 shadow-lg rounded-full z-10">
          &larr;
        </button>

        {/* Current image */}
        <Image
          src={images[currentImage].src}
          alt="Current Slide"
          className="w-full h-auto object-contain"
          width={600} 
          height={400} 
        />

        {/* Next arrow for all screens */}
        <button onClick={nextImage} className="absolute right-0 bg-white p-2 shadow-lg rounded-full z-10">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
