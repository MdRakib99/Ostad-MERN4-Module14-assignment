import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <div className='flex justify-between  '>
      <div className='font-bold'>
        <span className='text-[#000000]'>Design</span>{" "}
        <span className='text-[#F55F1D]'>AGENCY</span>
      </div>
      <div>
        <ul className='flex gap-5 font-semibold'>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/team"}>Team</NavLink>
          </li>
          <li>
            <NavLink to={"/service"}>Service</NavLink>
          </li>
          <li>
            <NavLink to={"/project"}>Project</NavLink>
          </li>
          <li>
            <NavLink to={"/testimonial"}>Testimonials</NavLink>
          </li>

          <li>
            <NavLink to={"/login"}>
              {" "}
              <button className='border border-green-500 rounded-md px-4 py-1  text-green-500 hover:bg-green-500 hover:text-white focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-800 '>
                Login
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/register"}>
              <button className='border border-green-500 rounded-md px-4 py-1  text-white bg-green-500 hover:text-white focus:outline-none focus:border-green-700 focus:ring focus:ring-green-200 active:bg-green-800 '>
                Register
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
