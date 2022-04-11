import React, { useState } from 'react';
import {MenuAlt1Icon,XIcon ,ExclamationCircleIcon} from "@heroicons/react/solid";
const Header = () => {
  const [open, setOpen] = useState(false)
  let links = [
    {name: 'Home', links:'/'},
    {name: 'Services', links:'/'},
    {name: 'Order', links:'/'},
    {name: 'Contact', links:'/'},
    {name: 'About', links:'/'},
  ]
    
    return (
      <nav className=" shadow-md fixed bg-white w-full top-0 left-0">
        <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800 ">
            <span className=" text-indigo-600 mr-1  w-12 h-12">
              <ExclamationCircleIcon className=""></ExclamationCircleIcon>
            </span>
            Designer
          </div>
          <div onClick={() => setOpen(!open)}>
            {open ? (
              <XIcon className="w-10 h-10 absolute right-8 top-6 cursor-pointer md:hidden"></XIcon>
            ) : (
              <MenuAlt1Icon className="w-10 h-10 absolute right-8 top-6 cursor-pointer md:hidden"></MenuAlt1Icon>
            )}
          </div>
          <ul
            className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static  bg-white md:z-auto z-[-1] left-0  w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
              open ? "top-20 opacity-100" : "top-[-490px] md:opacity-100 opacity-0"
            }`}
          >
            {links.map((link) => (
              <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <a
                  className="text-gray-800 hover:text-gray-400 duration-300 ease-in-out"
                  href={link.links}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-300 ease-in-out">
              Get Started
            </button>
          </ul>
        </div>
      </nav>
    );
};

export default Header;