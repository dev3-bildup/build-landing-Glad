import React from "react";

const Footer =() =>{

    return (
        <div className="px-4 py-8 bg-white">
            <div className="flex flex-col md:flex-row md:items-start md:justify-start gap-6">
                <div className="flex flex-col items-start w-full md:w-auto">
                    <img src="/logo.png" alt="Bildup Logo" width={24} height={24} className="mb-4 md:mb-6" />
                    <nav className="flex flex-col gap-2 items-start">
                        <a href="#" className="hover:underline">Home</a>
                        <a href="#" className="hover:underline">Learn how Bildup AI empowers everyone</a>
                        <a href="#" className="hover:underline">Careers</a>
                        <a href="#" className="hover:underline">Contact us</a>
                    </nav>
                </div>
            </div>

            <hr className="my-6" />
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <div className="flex gap-6 justify-start">
                    <p>Privacy</p>
                    <p>Terms of Service</p>
                </div>
                <div className="flex gap-4 justify-start md:justify-end">
                    <img src="/X.png" alt="X icon"  />
                    <img src="/instagram.png" alt="instagram icon"  />
                    <img src="/facebook.png" alt="facebook icon"  />
                    <img src="/linkedIn.png" alt="linkedIn icon"  />
                    <img src="tiktok.png" alt="tiktok iocn"  />
                </div>
            </div>
        </div>
    )
}

export default Footer;