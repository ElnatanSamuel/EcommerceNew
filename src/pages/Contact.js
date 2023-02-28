import React from "react";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className="contactbody mx-16 mt-32 flex flex-row ">
        <div className="contactopac"></div>
        <div className="grid grid-cols-2 items-center space-x-24 z-20 ">
          <div className=" pl-28 space-y-4">
            <p className="text-2xl text-white font-bold">CONTACT US</p>
            <p className="text-xs font-bold text-white opacity-80 ">
              We focus on ergonomics and meeting you where you work. It's only a
              keystroke away.
            </p>
            <button className="contactbtn text-xs text-white font-bold">
              Contact us
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2">
            <div className="space-y-3 text-white opacity-80  pb-6">
              <p className="text-lg text-white font-bold">Paris</p>
              <p className="font-light opacity-70">1901 Thorn ridge Cir. </p>
              <p className="font-bold text-xs">75000 Paris</p>
              <p className="font-bold text-xs">Phone ; +451 215 215 </p>
              <p className="font-bold text-xs">Fax : +451 215 215</p>
            </div>
            <div className="space-y-3 text-white  opacity-80 pb-6">
              <p className="text-lg text-white  font-bold">Neywork</p>
              <p className="font-light opacity-70">2715 Ash Dr. San Jose,</p>
              <p className="font-bold text-xs">75000 Newyork</p>
              <p className="font-bold text-xs">Phone ; +451 215 215 </p>
              <p className="font-bold text-xs">Fax : +451 215 215</p>
            </div>
            <div className="space-y-3 text-white  opacity-80 ">
              <p className="text-lg text-white font-bold">London</p>
              <p className="font-light opacity-70">
                3517 W. Gray St. Utica, .{" "}
              </p>
              <p className="font-bold text-xs">75000 London</p>
              <p className="font-bold text-xs">Phone ; +451 215 215 </p>
              <p className="font-bold text-xs">Fax : +451 215 215</p>
            </div>
            <div className="space-y-3 text-white  opacity-80 ">
              <p className="text-lg text-white font-bold">Berlin</p>
              <p className="font-light opacity-70">4140 Parker Rd. </p>
              <p className="font-bold text-xs">75000 Berlin</p>
              <p className="font-bold text-xs">Phone ; +451 215 215 </p>
              <p className="font-bold text-xs">Fax : +451 215 215</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
