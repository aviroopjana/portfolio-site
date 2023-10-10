"use client";

import Section_2 from "./section_2";

const Section_1 = () => {
    return(
        <section  className="w-full h-[940px] shadow-lg shadow-[#030014]/50  relative bg-[url('/main.svg')] bg-cover flex flex-col overflow-hidden  items-center justify-start ">
            <div className="w-[1250px]  h-full z-[-10] absolute   top-[-280px]  flex flex-row   items-start justify-center">
                <video
                    className="w-full h-auto  rotate-180  "
                    preload="false"
                    playsInline
                    loop
                    muted
                    // @ts-ignore
                    autoPlay="autoplay"
                    src="/q-c3d7becf.webm"
                    >
                </video>                
            </div>
            <Section_2/>
        </section>
    )
}

export default Section_1;