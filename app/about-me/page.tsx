import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Footer from "../(footer)/footer";

function page() {
  return (
    <div className=" pt-[65px] w-auto h-auto text-white m-auto flex flex-col items-center p-[10px] ">
      <div className="w-full lg:w-[1200px] absolute min-h-[70px] flex flex-row items-center justify-start px-[10px] md:px-[15px] lg:px-0">
        <Link
          href={"/"}
          className="flex flex-row items-center   justify-start text-slate-200 hover:text-sky-500 cursor-pointer "
        >
          <ArrowLeftIcon className="h-4 w-4  mr-[5px] " />
          <span className=" text-[14px]">Back</span>
        </Link>
      </div>
      <div className=" w-full lg:w-[900px] h-auto m-auto mt-[25px] pb-[100px] ">
        <div className=" text-gray-400 text-[14px]">Fri Jun 08 2024</div>
        <div className="w-full h-auto font-bold text-[29px] my-[15px] text-slate-200  animate-slowfade ">
          Hello 🙋‍♂️, I&apos;m Aviroop{" "}
          <span className="font-normal"> a prefinal year CS student</span>
        </div>
        <div className=" text-gray-300    animate-slideright ">
          I am a full stack developer proficient in MERN stack, Next Js and
          Typescript based in India currently working remotely with various
          startups globally, I'm available for any freelance work feel free to
          reachout to me. I've worked with few freelance clients in the past as
          a Full stack developer I was responsible for building visually
          stunning, responsive and scalable web application.
        </div>
        <div className="text-gray-300 mt-5 animate-slideright">
          Fast-forward to today, and I have had the opportunity to work
          alongside proficient back-end developers and full-stack developers on
          the construction of real-world applications.
        </div>
        {/* <div className=" text-gray-300  animate-slideright  ">
          <span className="monospace ">In my free time, I learing</span>
          <span className="text-sky-500"> Golang</span> ,
          <span className="text-yellow-500"> Gin </span>
          <span className="">
            For My Dream Mutiplayer Game Server and Backend Developments
          </span>
        </div> */}
        {/* <div className="w-full h-auto font-bold text-[29px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade  ">
          Development Experience ⏳
        </div>
        <div className="mt-4  animate-slideright    leading-[30px] monospace text-[16px] 800:text-[20px]">
          I&apos;m a skilled web developer with experience in{" "}
          <span className=" text-blue-500 ">TypeScript</span> and{" "}
          <span className=" text-yellow-500"> JavaScript</span>, and expertise
          in frameworks like <span className=" text-cyan-500">React</span>,{" "}
          <span className="  text-teal-500"> Node.js</span>, and
          <span className="text-[#433a74] "> Next js</span>. I&apos;m a quick
          learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let&apos;s work together to bring your ideas to life!
        </div> */}
        <div className="font-bold text-[24px] mb-[15px] mt-[35px] text-slate-200 animate-slowfade">
          Tech Stack that I am comfortable to work with:
        </div>
        <div className="text-gray-300 my-[15px] animate-slideright flex flex-wrap justify-between">
          {[
            {
              title: "Languages",
              emoji: "🔤",
              skills: "Javascript, Typescript, Solidity",
            },
            {
              title: "Frontend",
              emoji: "🖥️",
              skills: "Reactjs, Nextjs, Redux, Tailwind CSS",
            },
            {
              title: "Backend",
              emoji: "🔙",
              skills:
                "RESTful API, Node.js, Express.js, GraphQL, Prisma ORM, tRPC",
            },
            {
              title: "Database",
              emoji: "💽",
              skills: "MongoDB, PostgreSQL, Redis",
            },
            {
              title: "DevOps",
              emoji: "⚙️",
              skills: "CI/CD, Docker, AWS (S3, EC2)",
            },
            { title: "Security", emoji: "🔒", skills: "OAuth, NextAuth, JWT" },
            { title: "Version Control", emoji: "🔗", skills: "Git, GitHub" },
            {
              title: "Web3",
              emoji: "🌐",
              skills: "Hardhat, Truffle, Web3.js, Ether.js",
            },
          ].map(({ title, emoji, skills }) => (
            <div key={title} className="w-1/2 p-2">
              <div className="font-bold text-[20px] mb-[15px] mt-[10px] text-slate-200 animate-slowfade">
                {title} {emoji}
              </div>
              {skills}
            </div>
          ))}
        </div>
        <div className="text-slate-200 font-normal text-[16px] my-[30px]">
          I'm open for Junior developer position, if you have any opportunities
          or queries feel free to dm me or email me at
          <a
            href="mailto:aviroopjana@gmail.com"
            className="text-sky-500 ml-[5px] cursor-pointer hover:underline"
          >
            aviroopjana@gmail.com
          </a>
        </div>
        <Link
          href={"/Project"}
          className=" flex flex-row items-center text-slate-200 font-normal cursor-pointer text-[14px] my-[30px] "
        >
          Go Back To
          <span className=" text-sky-500 ml-[5px] cursor-pointer  hover:underline  ">
            Projects
          </span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default page;
