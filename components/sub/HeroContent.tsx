"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const HeroContent = () => {
  const [text] = useTypewriter({
    words: ["Projects.", "Skills.", "Socials."],
    loop: true,
  });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-12 sm:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start md:items-start items-center">
        
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[10px] border border-[#7042f88b] opacity-[0.9] items-center justify-center flex"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Fullstack Developer Portfolio
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-4xl sm:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <p>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                the best{" "}
              </span>
              project experience
            </p>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-base sm:text-lg text-gray-400 my-5 max-w-[600px]"
          >
            I&apos;m a Full Stack Software Engineer with experience in Website,
            Mobile, and Software development. Check out my{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold">
              {" "}
              {text}{" "}
            </span>{" "}
          </motion.p>

          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.a>
        
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="h-full w-full transition-all duration-500 xl:w-full flex justify-center items-center mt-16"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
          className=""
        />
      </motion.div>
    </motion.div>
  );
};
