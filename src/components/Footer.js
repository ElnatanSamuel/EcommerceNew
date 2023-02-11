import React from "react";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";

function Footer() {
  return (
    <div className="px-48 pb-8 flex flex-col justify-start space-y-24">
      <div className=" flex flex-row justify-between items-center">
        <p className="font-bold text-lg">KTK2REAL</p>
        <div className=" flex flex-row space-x-4 items-center">
          <UilFacebook color="#23A6F0" size="20" />
          <UilInstagram color="#23A6F0" size="20" />
          <UilTwitter color="#23A6F0" size="20" />
        </div>
      </div>
      <div className="flex flex-row items-center space-x-6">
        <div className="flex-1 space-y-4">
          <p className="font-bold">Company Info</p>
          <div className="space-y-4 text-xs font-bold  opacity-70 flex flex-col justify-center">
            <p className="cursor-pointer">About us</p>
            <p className="cursor-pointer">Carrier</p>
            <p className="cursor-pointer">We are Hiring</p>
            <p className="cursor-pointer">Blog</p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <p className="font-bold">Legal</p>
          <div className="space-y-4 text-xs font-bold  opacity-70 flex flex-col justify-center">
            <p className="cursor-pointer">Legal Support</p>
            <p className="cursor-pointer">What we provide</p>
            <p className="cursor-pointer">Customer support</p>
            <p className="cursor-pointer">Terms and Servies</p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <p className="font-bold">Features</p>
          <div className="space-y-4 text-xs font-bold  opacity-70 flex flex-col justify-center">
            <p className="cursor-pointer">Business Marketing</p>
            <p className="cursor-pointer">User Analytic</p>
            <p className="cursor-pointer">Live Chat</p>
            <p className="cursor-pointer">Unlimited Support</p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <p className="font-bold">Resources</p>
          <div className="space-y-4 text-xs font-bold  opacity-70 flex flex-col justify-center">
            <p className="cursor-pointer">Ios and Android</p>
            <p className="cursor-pointer">Watch a Demo</p>
            <p className="cursor-pointer">Customers</p>
            <p className="cursor-pointer">API</p>
          </div>
        </div>

        <div className="flex-2 space-y-4">
          <p className="font-bold">Get in touch</p>
          <div className="flex flex-row items-center">
            <input className="getinput text-xs" type="text" />
            <button className="subbtn text-xs">Subscribe</button>
          </div>
          <p className="text-xs opacity-50">Subscribe to our newsletter</p>
          <p className="opacity-0 text-xs">shfgjdhf</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
