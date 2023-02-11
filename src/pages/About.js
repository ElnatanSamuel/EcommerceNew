import React from "react";
import Navbar from "../components/Navbar";
import Team1 from "../assets/team1.svg";
import Team2 from "../assets/team2.svg";
import Team3 from "../assets/team3.svg";
import Team4 from "../assets/team4.svg";
import Team5 from "../assets/team5.svg";
import Team6 from "../assets/team6.svg";
import Team7 from "../assets/team7.svg";
import Team8 from "../assets/team8.svg";
import HeroImg from "../assets/hero2.svg";
import Footer from "../components/Footer";
import Logos from "../components/logos";

function About() {
  const teams = [
    {
      name: "Jerome Bell",
      picture: Team1,
      desc: "Marketing Advisor",
    },
    {
      name: "Brooklyn Simmons",
      picture: Team2,
      desc: "Marketing Advisor",
    },
    {
      name: "Ronald Richards",
      picture: Team3,
      desc: "Marketing Advisor",
    },
    {
      name: "Floyd Miles",
      picture: Team4,
      desc: "Marketing Advisor",
    },
    {
      name: "Jane Cooper",
      picture: Team5,
      desc: "Marketing Advisor",
    },
    {
      name: "Robert Fox",
      picture: Team6,
      desc: "Marketing Advisor",
    },
    {
      name: "Leslie Alexander",
      picture: Team7,
      desc: "Marketing Advisor",
    },
    {
      name: "Jacob Jones",
      picture: Team8,
      desc: "Marketing Advisor",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="mt-24 mx-44">
        <div className="  flex  flex-row items-center justify-center  space-x-48">
          <div className="space-y-6">
            <p className="summertxt text-sm font-bold opacity-80">OUR VALUES</p>
            <h1 className="text-5xl font-bold opacity-80">ABOUT US</h1>
            <p className="text-sm font-light opacity-60 w-72">
              We know how large objects will act, but things on a small scale.
            </p>
            <button className="shopbtn font-medium py-2 px-6">
              Get quote now
            </button>
          </div>
          <div className="">
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-24 mx-48">
        <div>
          <p className="text-center text-3xl font-bold">Meet Our Team</p>
          <div className="grid grid-cols-4 pt-16">
            {teams.map((item) => {
              return (
                <div className="pb-8 pr-8 space-y-2">
                  <img src={item.picture} alt="" />
                  <p className="font-bold  opacity-70">{item.name}</p>
                  <p className="text-xs opacity-60">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="pt-8 text-center text-2xl font-bold opacity-70">
        Companies We Have Worked With
      </p>
      <Logos />
      <Footer />
    </div>
  );
}

export default About;
