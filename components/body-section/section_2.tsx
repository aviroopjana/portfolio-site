"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { Sparkles } from "lucide-react";

const Section_2 = () => {
  return (
    <div className=" lg md:w-[1250px] h-full flex flex-row items-start justify-between z-[-10] mt-[10px] sm:mt-0 md:mt-[40px]">
      <div
        className=" w-full 800:w-[90%] md:w-[70%] lg:w-[50%] h-full flex flex-col  lg:items-start m-auto items-center justify-center
       text-center lg:text-start md:ml-6 md:mt-[-50px]"
      >
        <motion.div
          variants={textVariant(2)}
          id="Wecom-box"
          className=" px-[15px] py-[6px] animate-slideleftT2 border border-[#7042f88b]  opacity-[0.9] mb-[18px]  "
        >
          <Sparkles className=" h-4 370:h-5 w-4 370:w-5  text-[#b49bff] mr-[10px]" />
          <div
            id="Wecom-text"
            className=" text-[12px] sm:text-[14px] 370:text-auto"
          >
            Junior Full Stack Software Engineer
          </div>
        </motion.div>
        <div className="  w-auto h-auto  animate-slideleftT2 text-white  ">
          <span className=" text-[30px] sm:text-[35px]  md:text-[45px] font-bold align-top ">
            Hi👋, I'm{" "}
            <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Aviroop Jana
            </span>{" "}
          </span>
          <br />
          <span className=" translate-y-[-20px]  animate-slideleftT2 text-[30px] sm:text-[35px]  md:text-[45px] font-bold  align-top ">
            a Full Stack Developer
          </span>
        </div>
<<<<<<< HEAD
        <p className=" animate-slideleftT3 text-[14px] sm:text-[14px] md:text-[16px] text-slate-400 mb-[18px]">
            As a Full Stack Developer, I'm passionate about crafting versatile web applications with the latest tech stack used in the industry that creates an impact. This portfolio is a showcase of my past works and projects.
=======
        <p className=" animate-slideleftT3 text-[14px] sm:text-[14px] md:text-[18px] text-slate-400 mb-[18px]">
            As a Junior Full Stack Developer, I'm passionate about mastering front-end and back-end technologies to craft versatile web applications.
>>>>>>> 778b9892c75fa5ddd5177fd8691b135ca4de1990
        </p>
        <a
          href="#Section_4"
          id="button-primary"
          className=" animate-slideleftT4 px-[20px] py-[7px] text-white  cursor-pointer hover:scale-105 active:scale-90  transition-all   duration-150 select-none rounded-[5px]"
        >
          Download Resume
        </a>
      </div>
      <div className=" w-[50%] h-full hidden lg:flex flex-row items-center  select-none justify-between ">
        <Image
          src="/mainIconsdark.svg"
          width={708}
          height={709}
          alt=""
          className=" flex animate-slideright2  transition_"
        />
      </div>
    </div>
  );
}

export default Section_2;