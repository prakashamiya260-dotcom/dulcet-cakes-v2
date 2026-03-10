"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";

const WHATSAPP_NUMBER = "919873813095";

export function Navbar() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        return scrollY.on("change", (v) => setIsScrolled(v > 50));
    }, [scrollY]);

    const orderMsg = encodeURIComponent("Hi Dulcet Cakes! I would like to place an order. Could you share the menu and availability?");

    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 transition-all duration-300"
            style={{
                background: isScrolled ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.5)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
        >
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex items-center justify-center" style={{ background: "rgba(249,115,22,0.2)", border: "1px solid rgba(249,115,22,0.3)" }}>
                    {/* ✅ Upload your logo as public/logo.png to show here */}
                    <Image src="/logo.png" alt="Dulcet Cakes" width={40} height={40} className="object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                    <span className="absolute font-black text-lg text-orange-400">D</span>
                </div>
                <span className="text-xl font-bold" style={{ background: "linear-gradient(to right, #fb923c, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    Dulcet Cakes
                </span>
            </div>

            {/* Order Now → WhatsApp */}
            <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${orderMsg}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold text-sm text-white transition-all hover:scale-105"
                style={{ background: "linear-gradient(to right, #f97316, #db2777)", boxShadow: "0 0 15px rgba(249,115,22,0.5)" }}
            >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.533 5.845L.057 23.428a.5.5 0 0 0 .515.57l5.775-1.513A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.373l-.36-.213-3.429.899.915-3.34-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.574 6.574 2.182 12 2.182c5.426 0 9.818 4.392 9.818 9.818 0 5.426-4.392 9.818-9.818 9.818z" />
                </svg>
                Order Now
            </a>
        </motion.nav>
    );
}
