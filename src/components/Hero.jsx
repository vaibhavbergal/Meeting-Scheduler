import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { Switch } from "@/components/ui/switch";

const Hero = () => {
  const [ischecked, setIschecked] = useState(false);

  return (
    <div className="mt-20 mx-14 md:mx-20 font-pop lg:mx-28">
      <h1 className="text-5xl font-semibold lg:text-8xl md:text-7xl font-cinzel">
        Pricing
      </h1>
      <div className="justify-between lg:flex md:flex">
        <p className="md:text-xl lg:text-xl text-black/80">
          Start your 14-day free trial. No CC required.
        </p>
        <div className="gap-3 mt-12 lg:flex md:text-xl lg:text-xl text-black/90 font-pop md:mt-0 lg:mt-0">
          <p
            className={`font-cinzel w-fit bg-rose-200 rounded-md ${
              ischecked ? "hidden" : null
            } px-2 py-1 text-black md:text-sm lg:text-sm text-xs `}
          >
            Save 15%
          </p>
          <div className="flex items-center gap-4">
            <h1 className={`${!ischecked ? "font-semibold" : null}`}>
              Pay Annually
            </h1>

            <Switch
              id="icon"
              className="text-3xl"
              onClick={() => setIschecked(!ischecked)}
            />

            <h1 className={`${ischecked ? "font-semibold" : null}`}>
              Pay Monthly
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
