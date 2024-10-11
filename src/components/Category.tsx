"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import leftArrow from "@/components/images/Fill With Left Arrow.png";
import rightArrow from "@/components/images/Fill with Right Arrow.png";
import product1 from '@/components/images/camera.png'
import product2 from "@/components/images/Category-SmartWatch.png";
import product3 from "@/components/images/Category-Headphone.png";
import product5 from "@/components/images/Category-Computer.png";
import product6 from "@/components/images/Category-CellPhone.png";
import product4 from '@/components/images/Category-Gamepad.png'
import pImage from '@/components/images/Frame 623.png'

// Category Data
const categories = [
  { name: "Camera", src: product1, id: 1 },
  { name: "SmartWatch", src: product2, id: 2 },
  { name: "HeadPhones", src: product3, id: 3 },
  { name: "Gamepad", src: product4, id: 4},
  { name: "Computers", src: product5, id: 5 },
  { name: "Phones", src: product6, id: 6 },
];

const BrowseCategories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setIsMoving(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setIsMoving(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    );
  };

  const handleImageClick = (id: number) => {
    console.log(`Clicked on category with ID: ${id}`);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-5 mr-20 md:mr-[930px]">
            <Image
              src={pImage}
              alt="Product"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
      
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Browse By Category</h2>

          {/* Navigation Arrows */}
          <div className="hidden md:flex">
            <button onClick={handlePrev} aria-label="Previous" className="focus:outline-none">
              <Image src={leftArrow} alt="Previous" width={40} height={40} />
            </button>
            <button onClick={handleNext} aria-label="Next" className="focus:outline-none">
              <Image src={rightArrow} alt="Next" width={40} height={40} />
            </button>
          </div>
        </div>

        {/* Product Cards Carousel */}
        <div className="overflow-hidden">
          <div
            className={`flex transition-transform duration-500 ease-in-out ${
              isMoving ? "transform" : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * (100 / categories.length)}%)`,
            }}
            onTransitionEnd={() => setIsMoving(false)}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="min-w-[160px] p-1 flex-shrink-0" // Set a fixed min-width for cards
              >
                <div
                  className="bg-white rounded-lg p-4 shadow-md hover:bg-red-500 transition-colors duration-300 cursor-pointer"
                  onClick={() => handleImageClick(category.id)}
                  style={{ width: '260px', height: '200px' }} // Fixed size for card
                >
                  <Image
                    src={category.src}
                    alt={category.name}
                    className="mx-auto mb-4 transition-transform"
                    width={60} // Set icon width
                    height={60} // Set icon height
                  />
                  <h3 className="text-center text-lg font-medium text-black hover:text-white transition-colors">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategories;
