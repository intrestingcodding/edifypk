"use client";
import { ChevronDown, Menu, MoveRight, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Banner_common from "./Banner_common";

const Topbar = () => {
  var [open, setOpen] = useState(false);

  return (
    <nav  >
      <div className="bg-[#ffffff] shadow-sm">
        <div className="bg-[#ffffff] max-w-6xl top-0 z-auto mx-auto">
          <div className="flex justify-between items-center p-3  ">
            <img
              className="h-10"
              src="https://edify.pk/_next/image?url=%2Fimages%2Fnavlogo.webp&w=256&q=75"
              alt=""
            />

            <div
              className={`${open ? "translate-x-0" : "-translate-x-full"
                } text-[#808080] transition-all duration-500 md:translate-x-0 absolute md:relative gap-2 md:gap-4 bg-white top-0 left-0 w-screen md:w-auto h-screen md:h-auto p-4 md:p-0 md:bg-transparent flex flex-col md:flex-row z-[999999] `}
            >
              <div onClick={() => setOpen(false)} className="md:hidden  ">
                <X />
              </div>

              <Link className="text-[#1456a3] font-bold" href="/">
                Home
              </Link>
              <Link href="/ged">GED</Link>
              <Link href="/about">About</Link>
              <Link href="/blogs">Blogs</Link>
              <Link href="/courses">Courses</Link>
              <div className="inline-block group">
                <div className="flex items-center cursor-pointer">
                  {" "}
                  Destinations <ChevronDown size={14} />
                </div>
                <div className="md:absolute max-h-0 overflow-hidden group-hover:max-h-96  group-hover:pt-3 md:pt-3 md:opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 md:translate-y-4  group-hover:pointer-events-auto">
                  <div className="bg-gray-300 text-[#000000] flex flex-col text-sm min-w-[110px] px-4 py-4 gap-2 rounded-md">
                    <Link className="inline-block" href="/destination">
                      Australia
                    </Link>
                    <Link className="inline-block" href="destination">
                      UK
                    </Link>
                    <Link className="inline-block" href="destination">
                      USA
                    </Link>
                    <Link className="inline-block" href="destination">
                      Canada
                    </Link>
                    <Link className="inline-block" href="destination">
                      Germany
                    </Link>
                    <Link className="inline-block" href="destination">
                      Malaysia
                    </Link>
                    <Link className="inline-block" href="destination">
                      Dubai
                    </Link>
                    <Link className="inline-block" href="destination">
                      Kyrgyzstan
                    </Link>
                    <Link className="inline-block" href="destination">
                      France
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/team">Team</Link>
              <div className="inline-block group">
                <Link
                  className="flex items-center cursor-pointer"
                  href="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="bg-[#1456a3] text-[#fff] px-4 py-2 rounded-sm hidden md:block">
              <button className=" ">Apply Now</button>
            </div>

            <div onClick={() => setOpen(true)} className="md:hidden">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
