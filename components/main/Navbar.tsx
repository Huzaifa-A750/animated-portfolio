"use client";

import { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-0 md:px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center -ml-3 sm:ml-0"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold -ml-1 sm:ml-[10px] block text-gray-300">
            WebChain Dev
          </span>
        </a>

        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:justify-center mr-20">
          <div className="flex items-center justify-between h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200 transition-all duration-300 xl:w-full w-[70%] lg:w-[80%]">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5 items-center md:hidden relative">
          <button
            onClick={toggleMenu}
            className="flex flex-col items-center justify-center w-12 h-12 relative z-50"
          >
            <div
              className={`w-8 h-0.5 bg-gray-200 rounded transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <div
              className={`w-8 h-0.5 bg-gray-200 rounded my-1 transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <div
              className={`w-8 h-0.5 bg-gray-200 rounded transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
          {isMenuOpen && (
            <div className="absolute top-14 right-0 text-center bg-[#030014d0] border border-[#7042f861] rounded-lg shadow-lg p-4 flex flex-col items-center space-y-2 z-40 gap-2 min-w-[150px]">
              <a href="#about-me" className="cursor-pointer text-gray-200">
                About me
              </a>
              <a href="#skills" className="cursor-pointer text-gray-200">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer text-gray-200">
                Projects
              </a>
              <div className="md:hidden flex flex-wrap justify-center gap-6">
                {Socials.map((social) => (
                  <a
                    href={social.link}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a
              href={social.link}
              key={social.name}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <Image
                src={social.src}
                alt={social.name}
                width={28}
                height={28}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
