import React from "react";
import Image from "next/image";
import lImage from "@/components/images/Services.png";
import aImage from "@/components/images/Services (1).png";
import cImage from "@/components/images/Services (2).png";

const OurServices = () => {
  return (
    <div className="flex items-center justify-center w-full py-10">
      <div className="flex flex-col md:flex-row md:space-x-10">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <Image
            src={lImage} // Alternate through the images
            alt="Free and Fast Delivery"
            width={70}
            height={70}
            className="object-contain"
          />
          <h1 className="font-semibold mt-2 mb-2 text-center text-lg">FREE AND FAST DELIVERY</h1>
          <p className="text-center">Free delivery for all orders over $140</p>
        </div>

        <div className="flex flex-col items-center mb-6 md:mb-0">
          <Image
            src={aImage} // Alternate through the images
            alt="24/7 Customer Service"
            width={70}
            height={70}
            className="object-contain"
          />
          <h1 className="font-semibold mt-2 mb-2 text-center text-lg">24/7 CUSTOMER SERVICE</h1>
          <p className="text-center">Friendly 24/7 customer support</p>
        </div>

        <div className="flex flex-col items-center mb-6 md:mb-0">
          <Image
            src={cImage} // Alternate through the images
            alt="Money Back Guarantee"
            width={70}
            height={70}
            className="object-contain"
          />
          <h1 className="font-semibold mt-2 mb-2 text-center text-lg">MONEY BACK GUARANTEE</h1>
          <p className="text-center">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
