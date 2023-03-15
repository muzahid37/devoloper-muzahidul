import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineDownload } from "react-icons/ai";

const Navber = () => {
  const menuItems = (
    <>
      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/AboutUs">About</Link>
      </li>
      <li>
        {" "}
        <Link to="/blog">Blog</Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/contact">Contact</Link>{" "}
      </li>
    </>
  );
  return (
    <div>
      <div class="navbar fixed shadow-xl bg-base-100 top-0	">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl"></a>
        </div>
        <div class="navbar-start hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div class="navbar-end">
          <a
            href="https://drive.google.com/file/d/1ScBIompJzaPosQPLhx0vksetl_wgc4BV/view?usp=share_link"
            target="_blank"
          >
            {" "}
            <button className="items-center	inline-flex		">
              Get my resume{" "}
              <span className="ml-1 font-black">
                <AiOutlineDownload />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navber;
