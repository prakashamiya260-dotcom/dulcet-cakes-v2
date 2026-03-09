"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${isScrolled
                    ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"
                }`}
        >
            <div className="flex items-center gap-2">
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <defs>
                        <linearGradient id="navGrad" x1="0" y1="0" x2="1" y2="1">
                            <stop stopColor="#f97316" />
                            <stop offset="1" stopColor="#ec4899" />
                        </linearGradient>
                    </defs>
                    <circle cx="12" cy="12" r="10" stroke="url(#navGrad)" />
                    <path d="M8 12 C8 8 16 8 16 12 C16 16 8 16 8 12Z" stroke="url(#navGrad)" />
                </svg>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
                    Dulcet Cakes
                </span>
            </div>
            <button className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 transition-all shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:shadow-[0_0_25px_rgba(249,115,22,0.8)]">
                Order Now
            </button>
        </motion.nav>
    );
}
