import React from "react";
import { ReactSVG } from "react-svg";
import PokeBall from "../assets/pokeball.svg";
import GreatBall from "../assets/greatball.svg";
import UltraBall from "../assets/ultraball.svg";
import MasterBall from "../assets/masterball.svg";

function Header() {
  const randomize = myArray => {
    return myArray[Math.floor(Math.random() * myArray.length)];
  };
  const svgClass = "max-w-xs max-h-xs h-8 w-8 mr-2";
  const Items = [
    <ReactSVG src={PokeBall} className={svgClass} />,
    <ReactSVG src={GreatBall} className={svgClass} />,
    <ReactSVG src={UltraBall} className={svgClass} />,
    <ReactSVG src={MasterBall} className={svgClass} />
  ];
  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        {randomize(Items)}
        <span className="main-title font-semibold text-2xl text-golden-yellow tracking-wide">
          Pokedex
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-gray-500 hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-4"
          >
            Docs
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500 mr-4"
          >
            Examples
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-gray-500"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
