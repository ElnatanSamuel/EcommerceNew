import React from "react";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";

function Footer() {
  return (
    <div className="px-48 pb-8 flex flex-col justify-start space-y-24">
      <div className=" flex flex-row justify-between items-center">
        <p className="font-bold text-lg">LOGO</p>
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
            <p>About us</p>
            <p>Carrier</p>
            <p>We are Hiring</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <p className="font-bold">Legal</p>
          <div className="space-y-4 text-xs font-bold  opacity-70 flex flex-col justify-center">
            <p>Legal Support</p>
            <p>What we provide</p>
            <p>Customer support</p>
            <p>Terms and Servies</p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <p className="font-bold">Features</p>
          <div className="space-y-4 text-xs font-bold  opacity-70 flex flex-col justify-center">
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <p className="font-bold">Resources</p>
          <div className="space-y-4 text-xs font-bold  opacity-70 flex flex-col justify-center">
            <p>Ios and Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
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
