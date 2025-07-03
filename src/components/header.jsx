import React, { useState } from "react";
import {X, MenuIcon } from "lucide-react";


const Header = () => {

const [isMenuOpen, setIsMenuOpen]= useState(false);

const toggleMenu = () =>{
setIsMenuOpen(!isMenuOpen);
}


return (
    <header className="w-full bg-[#fffff] text-[#161616] h-16 flex items-center shadow-md fixed top-0 left-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 h-full">

            <div className="flex items-center bg-red">
                <img src="/logo.png" alt="Bildup Logo" width={24} height={24} className="mr-2" />
            </div>

            <nav className="hidden md:flex gap-10 items-center h-full">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">Learn how Bildup AI empowers everyone</a>
                <a href="#" className="hover:underline">Careers</a>
                <a href="#" className="hover:underline">Contact us</a>
            </nav>

            <div className="hidden md:block">
                <button className="bg-[#0071E3] text-white px-4 py-2 rounded-[32px] hover:bg-[#222] transition">Get Started</button>
            </div>

            <button
                className="md:hidden items-center"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
                {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
        </div>

        {isMenuOpen && (
            <div className="fixed inset-0 bg-white z-40 flex flex-col items-start md:hidden transition-all px-6 py-8">
                <button
                    className="absolute top-4 right-4"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                >
                    <X size={32} />
                </button>
                <nav className="flex font-medium flex-col mt-4 gap-6 text-lg w-full items-start">
                    <a href="#" className="hover:underline" onClick={toggleMenu}>Home</a>
                    <a href="#" className="hover:underline" onClick={toggleMenu}>Get started with Bildup AI</a>
                    <a href="#" className="hover:underline" onClick={toggleMenu}>Learn how Bildup AI empowers everyone</a>
                    <a href="#" className="hover:underline" onClick={toggleMenu}>Careers</a>
                    <a href="#" className="hover:underline" onClick={toggleMenu}>Contact us</a>
                </nav>
            </div>
        )}
    </header>
)
}

export default Header;