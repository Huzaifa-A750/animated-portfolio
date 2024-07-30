import React from "react";

import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] pb-0 z-40 relative">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/Huzaifa-A750"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:tracking-wide hover:text-[#24292e] hover:font-bold transition-all duration-500"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">
                Github
              </span>
            </a>
            <a
              href="https://discord.com/users/cloudex_750"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:tracking-wide hover:text-[#7289da] hover:font-bold transition-all duration-500"
            >
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">
                Discord
              </span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://www.instagram.com/huzaaaaaiiiffaaaa/"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:tracking-wide hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text hover:text-transparent hover:font-bold transition-all duration-500"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">
                Instagram
              </span>
            </a>
            <a
              href="https://x.com/huzaifa36424091"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:tracking-wide hover:text-blue-400 hover:font-bold transition-all duration-500"
            >
              <RxTwitterLogo />
              <span className="text-[15px] ml-[6px]">
                Twitter
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/huzaifa-afzal-303397242/"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:tracking-wide hover:text-blue-600 hover:font-bold transition-all duration-500"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">
                Linkedin
              </span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <a className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px] hover:tracking-wider duration-500 transition-all">
                Learning about me
              </span>
            </a>
            <a
              target="new"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGPZHfNRMjcJVvnQfknZNnDScVHcKkbKZtTMmwQzGNwSqJFwQTPXTjMdhzCvTkdLdXMxC"
              className="flex flex-row items-center my-[15px] cursor-pointer hover:bg-slate-200 hover:text-black hover:font-semibold transition-all duration-500 rounded-full hover:p-1"
            >
              <span className="text-[15px] ml-[6px]">
                huzaifaafzal750@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div className="mt-[20px] w-full text-[15px] text-center shadow-lg shadow-[#2A0E61] bg-[#03001417] backdrop-blur-md z-50 pb-[15px]">
          &copy; WebChain Dev 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};
