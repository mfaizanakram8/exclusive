import React from "react";
import Image from "next/image";

import xImage from "@/components/images/Cart (1).png";
import cImage from "@/components/images/Cart.png";
import vImage from "@/components/images/Cart (2).png";
import bImage from "@/components/images/Cart (3).png";
import pImage from '@/components/images/Frame 620.png';

const productImages = [xImage, cImage, vImage, bImage]; // Array of product images

const OurProducts = () => {
  return (
    <div className="h-auto bg-light-beige flex flex-col items-center w-full py-10">
      <div className="flex flex-col w-full max-w-6xl px-4"> {/* Added px-4 for padding */}
        <div className="flex flex-col items-center justify-between mb-5">
          <div className="mb-5  mr-80 md:mr-[1000px]">
            <Image
              src={pImage}
              alt="Product"
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
          <div className="flex flex-row items-center justify-between w-full"> {/* Changed to row for better layout */}
            <h1 className="text-5xl">
              Best Selling Products
            </h1>
            <button className="bg-red-600 text-light-beige px-10 py-3 rounded-lg font-semibold hover:bg-light-orange hover:text-white transition-colors duration-300 ml-40">
              View All
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-14 mx-4"> {/* Added responsive grid */}
          {/* Product Cards */}
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={productImages[index % productImages.length]}
                  alt="Product"
                  width={367}
                  height={400}
                  className="object-contain max-w-full h-auto" // Responsive image
                />
                <h3 className="text-lg font-bold mt-2">Product {index + 1}</h3>
                <h4>${(Math.random() * 100 + 100).toFixed(2)}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
