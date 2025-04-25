import React from "react";
import { assets } from "../../imports";
import { Link, NavLink } from "react-router";
import { navLinks } from "../../constants";

// components ==>   jsx

// html + css + js

// Link  =>  // react router dom  => navigation

// NavLink

export default function Navbar() {
  const x = 100;
  return (
    <div className="flex justify-between p-4">
      <div>
        <img src={assets.logo} alt="" />
      </div>

      <div className="flex gap-3 items-center ">
        {navLinks.map((link) => {
          return (
            <NavLink
              to={link.href}
              className={({ isActive }) => isActive && "underline"}
            >
              <h2 className="text-sm font-bold text-[#371451] ">
                {link.title}
              </h2>
            </NavLink>
          );
        })}
      </div>

      <div></div>
      <p className="text-red-600 bg-amber-300 h-[81px]">{x}</p>
    </div>
  );
}
