"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import leftArrow from "@/components/images/Fill With Left Arrow.png";
import rightArrow from "@/components/images/Fill with Right Arrow.png";
import product1 from "@/components/images/Category-Phone (2).png";
import product2 from "@/components/images/Category-Phone (1).png";
import product3 from "@/components/images/Category-Phone (6).png";
import product4 from "@/components/images/Category-Phone.png";
import product5 from "@/components/images/Category-Phone (3).png";
import product6 from "@/components/images/Category-Phone (4).png";
import product7 from "@/components/images/Category-Phone (5).png";
import TImage from "@/components/images/Frame 623.png";

// Product objects
const originalProducts = [
  { src: product1, id: 1 },
  { src: product2, id: 2 },
  { src: product3, id: 3 },
  { src: product4, id: 4 },
  { src: product5, id: 5 },
  { src: product6, id: 6 },
  { src: product7, id: 7 },
];

// Repeat the products for continuous looping
const products = [...originalProducts, ...originalProducts, ...originalProducts];

const FlashSales = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMoving, setIsMoving] = useState(false);

  // Automatic scrolling every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);

  const handleNext = () => {
    setIsMoving(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % originalProducts.length);
  };

  const handlePrev = () => {
    setIsMoving(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? originalProducts.length - 1 : prevIndex - 1
    );
  };

  // Define id parameter type
  const handleImageClick = (id: number) => {
    console.log(`Clicked on product with ID: ${id}`);
  };

  return (
    <div className="py-16 bg-white grid sm:grid-rows-2 md:grid-rows-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image src={TImage} alt="Previous" width={120} height={40} className="mb-4 ml-16" />
        {/* Flash Sales Header */}
        <div className="flex justify-between items-center mb-8 ml-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">Browse By Category</h2>
          {/* Arrows - hide on mobile (using md:hidden) */}
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
            className={`flex transition-transform duration-500 ease-in-out ${isMoving ? "transform" : ""}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / originalProducts.length)}%)`,
            }}
            onTransitionEnd={() => setIsMoving(false)}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-[60%] sm:min-w-[30%] md:min-w-[20%] lg:min-w-[20%] p-1" // Further adjusted for smaller mobile size
              >
                <div className="bg-white rounded-lg p-1 shadow-md"> {/* Reduced padding */}
                  <Image
                    src={product.src}
                    alt={`Product Image ${index + 1}`}
                    className="w-full h-auto object-contain mb-1 cursor-pointer" // Further reduced margin bottom
                    width={150}
                    height={100}
                    onClick={() => handleImageClick(product.id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
