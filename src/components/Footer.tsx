import React from "react";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import lImage from "@/components/images/Qr Code.png";
import jImage from "@/components/images/playstore.png";
import OImage from "@/components/images/AppStore.png";
import nImage from '@/components/images/Icon-Facebook.png';
import aImage from '@/components/images/Icon-Linkedin.png';
import qImage from '@/components/images/icon-instagram.png';
import wImage from '@/components/images/Group.png';
import LineImage from '@/components/images/UnderLine.png';

const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full h-auto justify-center bg-black text-gray-200 py-5">
      <div className="flex flex-col md:flex-row max-w-6xl w-full px-4"> {/* Responsive layout with padding */}
        
        <div className="flex flex-col mb-8 md:mb-0 md:w-1/5"> {/* Adjusted width for better layout */}
          <h1 className="font-bold text-2xl mb-5">Exclusive</h1>
          <h2 className="font-semibold mb-5">Subscribe</h2>
          <h4 className="mb-5">Get 10% off your first order</h4>
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md bg-gray-950 px-4 py-2 w-full focus:outline-none"
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
        </div>

        <div className="flex flex-col mx-4 mb-8 md:mb-0 md:w-1/5">
          <h1 className="font-semibold text-xl mb-5">Support</h1>
          <h4 className="mb-5">
            111 Bijoy sarani, Dhaka,{" "}
            <span className="block">DH 1515, Bangladesh.</span>
          </h4>
          <h4 className="mb-5">exclusive@gmail.com</h4>
          <h4>+88015-88888-9999</h4>
        </div>

        <div className="flex flex-col mx-4 mb-8 md:mb-0 md:w-1/5">
          <h1 className="font-semibold text-xl mb-5">Account</h1>
          <h4 className="mb-5">My Account</h4>
          <h4 className="mb-5">Login / Register</h4>
          <h4 className="mb-5">Cart</h4>
          <h4 className="mb-5">Wishlist</h4>
          <h4>Shop</h4>
        </div>

        <div className="flex flex-col mx-4 mb-8 md:mb-0 md:w-1/5">
          <h1 className="font-semibold text-xl mb-5">Quick Link</h1>
          <h4 className="mb-5">Privacy Policy</h4>
          <h4 className="mb-5">Terms Of Use</h4>
          <h4 className="mb-5">FAQ</h4>
          <h4>Contact</h4>
        </div>

        <div className="flex flex-col mx-4 md:w-1/5">
          <h1 className="font-semibold text-xl mb-5">Download App</h1>
          <h5 className="mb-5">Save $3 with App New User Only</h5>
          <div className="flex flex-row">
            <div>
              <Image src={lImage} alt="Exclusive Logo" width={90} height={90} />
            </div>
            <div className="flex flex-col ml-5">
              <Image src={jImage} alt="Play Store" width={130} height={120} />
              <Image src={OImage} alt="App Store" width={130} height={120} className="mt-1" />
            </div>
          </div>
          <div className="flex flex-row mt-3">
            <Image src={nImage} alt="Facebook" width={30} height={30} className="mr-4" />
            <Image src={aImage} alt="LinkedIn" width={30} height={30} className="mr-4" />
            <Image src={qImage} alt="Instagram" width={30} height={30} className="mr-4" />
            <Image src={wImage} alt="Group" width={30} height={30} className="mr-4" />
          </div>
        </div>
      </div>

      <div className="mt-4 w-full">
        <Image
          src={LineImage}
          alt="Underline"
          layout="responsive"
          width={1350}
          height={5}
          className="w-full h-auto"
        />
        <h4 className="flex items-center justify-center mt-2 text-sm">Copyright Rimel 2022. All rights reserved</h4>
      </div>
    </div>
  );
};

export default Footer;    