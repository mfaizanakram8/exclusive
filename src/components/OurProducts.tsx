import React from "react";
import Image from "next/image";
import leftArrow from "@/components/images/Fill With Left Arrow.png";
import rightArrow from "@/components/images/Fill with Right Arrow.png";
import xImage from "@/components/images/cart7.png";
import cImage from "@/components/images/Cart (6).png";
import vImage from "@/components/images/Cart (5).png";
import bImage from "@/components/images/Cart (4).png";
import pImage from "@/components/images/Frame 619.png";


const productImages = [xImage, cImage, vImage, bImage];


const productTitles = [
  "Curology Product Set",
  "ASUS PhD Gaming Laptop",
  "Canon EOS DSLR Camera ",
  " Breed Dry Dog Food",
 "Curology Product Set",
  "ASUS PhD Gaming Laptop",
  "Canon EOS DSLR Camera ",
  " Breed Dry Dog Food",
];

const OurProducts = () => {
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`text-${i <= rating ? 'yellow-500' : 'gray-400'} text-xl`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="h-auto bg-white flex flex-col items-center w-full py-10">
      <div className="flex flex-col w-full max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-between mb-5">
          <div className="self-start mb-2">
            <Image
              src={pImage}
              alt="Our Products Icon"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Explore Our Products
            </h1>
            <div className="flex space-x-4">
              {/* Arrow Buttons */}
              <button aria-label="Previous Products" title="Previous Products">
                <Image
                  src={leftArrow}
                  alt="Previous"
                  width={40}
                  height={40}
                  className="cursor-pointer"
                />
              </button>
              <button aria-label="Next Products" title="Next Products">
                <Image
                  src={rightArrow}
                  alt="Next"
                  width={40}
                  height={40}
                  className="cursor-pointer"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {Array(8)
            .fill(null)
            .map((_, index) => {
              const rating = Math.floor(Math.random() * 5) + 1; // Random rating between 1 and 5
              return (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center"
                >
                  <Image
                    src={productImages[index % productImages.length]}
                    alt={`Product ${index + 1}`}
                    width={200}
                    height={200}
                    className="object-contain mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{productTitles[index]}</h3> {/* Separate heading for each product */}
                  <p className="text-gray-600 font-medium mb-4">${(Math.random() * 100 + 100).toFixed(2)}</p>
                  <div className="flex mb-2">
                    {renderStars(rating)} {/* Render stars based on random rating */}
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              );
            })}
        </div>

        {/* View All Products Button */}
        <div className="flex items-center justify-center mt-10">
          <button className="bg-red-600 text-white font-semibold py-4 px-16 rounded hover:bg-red-700 transition-colors duration-300">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
