import Link from "next/link";
import React from 'react';

const Navbar:React.FC = () => {
    return(
        <div className="w-full h-[65px] fixed shadow-lg shadow-[#2A0E61]/50 backdrop-blur-md z-50">
            <div className="w-full lg:w-[1232px] h-full flex flex-row items-center justify-between md:justify-center lg:justify-center m-auto px-[10px] sm:px-[20px] md:px-[40px] lg:p-0 ">
                <div className=" w-[500px] h-full hidden md:flex flex-row items-center justify-between ">
                        <div
                            className="w-full h-auto flex flex-row items-center justify-between mr-[15px]  bg-[#0300145e] border
                            border-[#7042f861] px-[20px]
                            py-[10px] rounded-full "
                        >
                            <Link href={"/about-me"} className="Nav_text">
                                About Me
                            </Link>
                            <Link href={"/Project"} className="Nav_text">
                                Projects
                            </Link>
                            <Link href={"/Project"} className="Nav_text">
                                Experience
                            </Link>
                            <Link href={"/Project"} className="Nav_text">
                                Contact Me
                            </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;