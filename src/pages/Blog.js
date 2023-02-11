import React from "react";
import Navbar from "../components/Navbar";
import { UilClock } from "@iconscout/react-unicons";
import { UilCommentAltImage } from "@iconscout/react-unicons";
import { UilAngleRightB } from "@iconscout/react-unicons";

function Blog() {
  const blogContent = [
    {
      name: "Blog#1",
      desc: "We focus on ergonomics and meeting you where you work Its only a keystroke away.",
      picture:
        "https://i.pinimg.com/originals/47/0a/19/470a19a36904fe200610cc1f41eb00d9.jpg",
    },
    {
      name: "Blog#2",
      desc: "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      picture: "https://images4.alphacoders.com/936/936378.jpg",
    },
    {
      name: "Blog#3",
      desc: "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      picture:
        "https://e0.pxfuel.com/wallpapers/72/141/desktop-wallpaper-rick-and-morty-orange-dark-space-art-background-41e4ea-rick-and-morty-ultrawide.jpg",
    },
    {
      name: "Blog#4",
      desc: "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      picture:
        "https://a-static.besthdwallpaper.com/girl-watching-shooting-star-alone-wallpaper-2400x1350-106893_50.jpg",
    },
    {
      name: "Blog#5",
      desc: "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      picture: "https://wallpapercave.com/wp/wp8479736.jpg",
    },
    {
      name: "Blog#6",
      desc: "We focus on ergonomics and meeting you where you work. Its only a keystroke away.",
      picture:
        "https://newevolutiondesigns.com/images/freebies/cool-4k-wallpaper-2.jpg",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="mt-24 mx-56 grid grid-cols-2 ">
        {blogContent.map((item) => {
          return (
            <div className="pl-8 pb-20 space-y-4">
              <img src={item.picture} alt="" />
              <div className="space-y-2 px-4 ">
                <div className="space-x-4 flex flex-row opacity-50">
                  <p className="text-teal-300 text-xs font-bold">Google</p>
                  <p className=" text-xs font-bold">Trending</p>
                  <p className=" text-xs font-bold">New</p>
                </div>
                <p className="text-lg opacity-80">{item.name}</p>
                <p className="text-xs opacity-50 w-80">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>
                <div className="pt-2 flex flex-row justify-between">
                  <div className="flex flex-row items-center space-x-2">
                    <UilClock color="#23A6F0" size="14" />
                    <p className="text-xs opacity-50">22 April 2021</p>
                  </div>
                  <div className="flex flex-row items-center space-x-2 cursor-pointer">
                    <UilCommentAltImage color="#23856D" size="14" />
                    <p className="text-xs opacity-50">10 comments</p>
                  </div>
                </div>
                <div className="flex flex-row items-center pt-2 text-xs opacity-50 cursor-pointer font-bold">
                  Learn more
                  <span>
                    <UilAngleRightB color="#23A6F0" size="24" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Blog;
