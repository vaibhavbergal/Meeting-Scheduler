import React from "react";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <>
      <div className="flex gap-6 mr-4">
        <div className="relative flex">
          <h1 className="text-2xl font-semibold font-pop">Fibery</h1>
          <img
            src={logo}
            alt="logo"
            className={` absolute w-4 top-1 -right-4  `}
          />
        </div>
        <h2 className="text-xs font-bold leading-10 tracking-wide text-yellow-400 font-marker">
          +AI NOW!
        </h2>
      </div>
    </>
  );
};

export default Logo;
