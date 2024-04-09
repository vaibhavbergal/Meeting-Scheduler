import React, { useState } from "react";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faBarsStaggered,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);

  const navheader = [
    {
      id: 1,
      title: "Solutions",
      link1: "Project Management",
      link2: "Software Developement",
      link3: "Startup",
    },
    {
      id: 2,
      title: "Product",
      link1: "Features",
      link2: "Fibery AI",
      link3: "Customer stories",
      link4: "Integration",
    },
    {
      id: 3,
      title: "Company",
      link1: "About",
      link2: "Careers",
      link3: "Leadership",
    },
  ];

  return (
    <>
      <div className="relative lg:hidden ">
        <div className="sticky top-0 flex items-center justify-between h-24 mx-8 md:14 md:h-24">
          <Logo />
          <button onClick={() => setIsOpen(!isopen)} className="">
            {!isopen ? (
              <FontAwesomeIcon icon={faBarsStaggered} className="text-xl" />
            ) : (
              <FontAwesomeIcon
                icon={faXmark}
                className="text-2xl"
                onClick={() => setIsOpen(!isopen)}
              />
            )}
          </button>
        </div>
        {isopen ? (
          <div className="absolute z-40 w-full h-screen bg-white top-24">
            <div className="mx-10 space-y-5 mt-14">
              <button className="w-full px-5 py-2 font-semibold text-white border border-black rounded-sm md:text-lg hover:border-2 bg-black/75">
                Sign up
              </button>
              <button className="w-full px-5 py-2 font-semibold border border-black rounded-sm md:text-lg hover:border-2 text-slate-600">
                Get a demo
              </button>

              <button className="w-full text-sm text-center lg:mr-3 md:text-base hover:underline">
                Log in
              </button>
            </div>
            <div className="flex flex-wrap gap-5 mx-10 mt-10 sm:justify-around font-pop">
              {navheader.map((item) => (
                <div key={item.id} className="px-5 space-y-5 ">
                  <h2 className="font-semibold tracking-wider cursor-pointer font-pop">
                    {item.title}
                  </h2>
                  <p className="text-sm cursor-pointer hover:underline text-black/70">
                    {item.link1}
                  </p>
                  <p className="text-sm cursor-pointer hover:underline text-black/70">
                    {item.link2}
                  </p>
                  <p className="text-sm cursor-pointer hover:underline text-black/70">
                    {item.link3}
                  </p>
                  <p className="text-sm cursor-pointer hover:underline text-black/70">
                    {item.link4}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="items-center justify-between hidden lg:flex h-28 mx-14">
        <div className="flex">
          <Logo />
          <NavigationMenu className="list-none text-slate-700 font-pop">
            <NavigationMenuList>
              {navheader.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavigationMenuTrigger className="font-semibold tracking-wider font-pop">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex justify-around w-[500px] px-10 font-semibold text-black/80  gap-10 py-8  ">
                      <NavigationMenuLink className="cursor-pointer hover:underline text-black/70">
                        {item.link1}
                      </NavigationMenuLink>
                      <NavigationMenuLink className="cursor-pointer hover:underline text-black/70">
                        {item.link2}
                      </NavigationMenuLink>
                    </div>
                    <div className="flex justify-around w-[500px] px-2 font-semibold text-black/80  gap-10 py-8  ">
                      <NavigationMenuLink className="cursor-pointer hover:underline text-black/70">
                        {item.link3}
                      </NavigationMenuLink>
                      <NavigationMenuLink className="cursor-pointer hover:underline text-black/70">
                        {item.link4}
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="px-2 text-sm font-semibold tracking-wider hover:underline font-pop"
                  hidden="hidden"
                >
                  Pricing
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="font-semibold tracking-wider font-pop"
                  hidden="hidden"
                >
                  <FontAwesomeIcon icon={faEllipsis} className="px-2 text-xl" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="flex justify-around w-[500px] px-10 font-semibold text-black/80  gap-10 py-8  ">
                    <NavigationMenuLink className="cursor-pointer hover:underline text-black/70">
                      getting started
                    </NavigationMenuLink>
                    <NavigationMenuLink className="cursor-pointer hover:underline text-black/70">
                      Expert Help
                    </NavigationMenuLink>
                  </div>
                  <div className="flex justify-around w-[500px] px-10 font-semibold text-black/80  gap-10 py-8  ">
                    <NavigationMenuLink className="cursor-pointer hover:underline text-black/70">
                      Blog
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex space-x-4 tracking-wider font-pop">
          <button className="mr-3 text-sm">Log in</button>
          <button className="px-5 py-2 font-semibold border border-black rounded-sm text-slate-600">
            Get a demo
          </button>

          <button className="px-5 py-2 font-semibold text-white border border-black rounded-sm bg-black/75">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
