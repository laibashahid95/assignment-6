"use client"; 

import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <main>
            <div className="bg-slate-200 h-16 py-3 px-4 lg:px-11 flex flex-wrap items-center justify-between">
               
                <img
                    src="/Ddsgnr Library.png"
                    alt="Ddsgnr Library"
                    className="h-8"
                    />
                <div className="hidden md:flex h-6 space-x-5 lg:space-x-10">
                    <a href="/Home" className="underline">
                        Home
                    </a>
                    <a href="/Courses">Courses</a>
                    <a href="/Services">Services</a>
                    <a href="/Achievements">Achievements</a>
                    <a href="/AboutUs">About Us</a>
                    <a href="/Testinomial">Testimonial</a>
                </div>

               
                <div className="md:hidden flex">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-black"
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

               
                <div className="flex space-x-2 mt-2 md:mt-0">
                    <button className="rounded group relative bg-transparent px-4 py-1 border-2 h-10 border-black text-sm md:text-lg text-black hover:bg-slate-300">
                        Login
                    </button>
                    <button className="rounded group relative bg-black px-4 py-1 border-2 h-10 border-black text-sm md:text-lg text-white">
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div
                    id="mobile-menu"
                    className="bg-slate-100 md:hidden flex flex-col items-start space-y-2 p-4"
                >
                    <a href="/Home" className="block text-black">
                        Home
                    </a>
                    <a href="/Courses" className="block text-black">
                        Courses
                    </a>
                    <a href="/Services" className="block text-black">
                        Services
                    </a>
                    <a href="/Achievements" className="block text-black">
                        Achievements
                    </a>
                    <a href="/AboutUs" className="block text-black">
                        About Us</a>
                    <a href="/Testinomial" className="block text-black">
                        Testimonial
                    </a>
                </div>
            )}
        </main>
    );
}