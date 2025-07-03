import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import BildupFor from "../components/bildupfor";


const Homepage = () =>{
return(
    <>
       <Header/>
    <div className="flex flex-col items-center min-h-screen py-[72px] ">
     
        <section className="flex flex-col items-center w-full py-[72px] px-8 md:px-32">
            <div
                className="mt-[64px] text-[36px] font-medium gap-[24px] justify-center text-center w-auto text-center"
                style={{
                    background: "linear-gradient(90deg, #0071E3, #3AA0F3, #0071E3)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold"
                }}
            >
                <p>
                    Master concepts effortlessly with a personal AI tutor that understands how you learn.
                </p>
                <p>
                    Aligned with your school curriculum, it adapts continuously to meet your evolving needs-making studying smarter, faster and more effective.
                </p>
                <p>
                    Say goodbye to frustration and hello to personalized learning designed just for you.
                </p>
                <p>
                    Let's make learning easier, together.
                </p>
            </div>

            <div className="flex flex-col items-center w-full mx-[24px] mt-32">

                <p className="text-[#0071E3] font-medium text-[32px]flex w-full justify-start mb-14 text-left">Bildup AI - Built for Smarter Learning</p>
                <p className="text-[#161616] font-medium text-[82px]  text-start mb-4"  style={{ lineHeight: "1" }}>Powering the Future of Education</p>
                <p
                    className="text-[#696969] font-300 text-[28px] text-justify"
                 
                >
                    Bildup AI is your all-in-one intelligent learning companion. Built to help students learn better, teachers teach smarter, and schools grow stronger. With adaptive learning, voice-enabled learning lessons, instant feedback, and personalized progress tracking, Bildup AI makes education more connected, and more accessible than ever before.
                </p>
            </div>

            <img src="./herosection.png" alt="Desktop image" className="flex items-center justify-center  mt-8"/>
    <BildupFor/>
        </section>
    </div>
        <Footer/>

    </>
)
}

export default Homepage;