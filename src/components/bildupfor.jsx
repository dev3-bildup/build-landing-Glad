import React from "react";

const BildupFor = () =>{

    return(
        <div>
            <div className="flex flex-col items-center w-full mx-[24px] mt-32">
                <p className="text-[#0071E3] font-medium text-[32px] mb-14 flex w-full justify-start text-left">Bildup AI for Schools, Teachers and Parents</p>
                <p className="text-[#161616] font-medium text-[96px] flex justify-start w-full text-start mb-4" style={{ lineHeight: "1" }}>Empowering Every Role</p>
                <p
                    className="text-[#696969] font-300 text-[28px] text-justify"
                >
                    Bildup AI unlocks a smarter way to teach, learn, and support education. Whether you're a school managing performance, a teacher guiding students, or a parent tracking progress-Bildup AI gives you the tools to connect, collaborate, and thrive.
                </p>
            </div>

            <div className="w-full flex justify-start ">
                <button className="px-8 py-2 bg-[#0071E3] text-white rounded-[32px] mt-4">
                    Learn how Bildup AI empowers everyone
                </button>
            </div>
            <img src="./herosection.png" alt="Desktop image" className="flex items-center justify-center mt-8"/>

            <div>
                <div>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BildupFor;