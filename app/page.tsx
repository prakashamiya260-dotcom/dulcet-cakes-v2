"use client";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HeroVideoBackground } from "../components/HeroVideoBackground";
import { products } from "../data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ⚠️ REPLACE this with your actual WhatsApp number (with country code, no spaces or dashes)
const WHATSAPP_NUMBER = "919873813095";

function getWhatsAppLink(productName: string, price: string) {
    const message = `Hi Dulcet Cakes! 🎂 I'd like to order a *${productName}* (${price}). Could you please confirm availability and delivery details?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Text overlays are still dynamic (no SSR needed for framer motion viewport triggers)
const ProductTextOverlays = dynamic(
    () => import("../components/ProductTextOverlays").then((m) => ({ default: m.ProductTextOverlays })),
    { ssr: false }
);

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentProduct = products[currentIndex];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        document.body.style.background = currentProduct.gradient;
    }, [currentIndex, currentProduct]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    return (
        <main className="min-h-screen relative text-white">
            <Navbar />

            {/* Fixed Navigation Arrows */}
            <div className="fixed top-1/2 left-4 z-40 -translate-y-1/2 hidden md:block">
                <button
                    onClick={handlePrev}
                    aria-label="Previous cake"
                    className="p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full border border-white/10 transition-all text-white"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="fixed top-1/2 right-4 z-40 -translate-y-1/2 hidden md:block">
                <button
                    onClick={handleNext}
                    aria-label="Next cake"
                    className="p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full border border-white/10 transition-all text-white"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Bottom Flavor Menu */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
                <div className="flex bg-black/40 backdrop-blur-lg p-2 rounded-full border border-white/10 shadow-2xl">
                    {products.map((p, idx) => (
                        <button
                            key={p.id}
                            onClick={() => setCurrentIndex(idx)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${currentIndex === idx
                                    ? "bg-white/20 text-white shadow-lg"
                                    : "text-white/60 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {p.name}
                        </button>
                    ))}
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentProduct.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full"
                >
                    {/* ── HERO: Cinematic Looping Video + Text Overlays ── */}
                    <div className="relative w-full">
                        <HeroVideoBackground />
                        {/* Text overlay on top of video */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300 mb-4">
                                    {currentProduct.subName}
                                </p>
                                <h1 className="text-6xl md:text-9xl font-black tracking-tight leading-none mb-6 drop-shadow-2xl">
                                    {currentProduct.name}
                                </h1>
                                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
                                    {currentProduct.description}
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                                    <a
                                        href={getWhatsAppLink(currentProduct.name, currentProduct.price)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-10 py-4 rounded-full text-xl font-bold text-white bg-gradient-to-r from-orange-500 to-pink-600 hover:scale-105 active:scale-95 transition-transform shadow-[0_0_40px_rgba(249,115,22,0.5)]"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.533 5.845L.057 23.428a.5.5 0 0 0 .515.57l5.775-1.513A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.373l-.36-.213-3.429.899.915-3.34-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.574 6.574 2.182 12 2.182c5.426 0 9.818 4.392 9.818 9.818 0 5.426-4.392 9.818-9.818 9.818z" />
                                        </svg>
                                        Order on WhatsApp — {currentProduct.price}
                                    </a>
                                    <button
                                        onClick={handleNext}
                                        className="px-8 py-4 rounded-full text-lg font-semibold text-white/80 border border-white/20 hover:bg-white/10 transition-all"
                                    >
                                        Explore More ↓
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                        {/* Stats bar at bottom of hero */}
                        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-8">
                            <div className="flex gap-8 bg-black/30 backdrop-blur-md px-8 py-4 rounded-full border border-white/10">
                                {currentProduct.stats.map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-2xl font-black">{stat.val}</div>
                                        <div className="text-xs uppercase tracking-wider text-gray-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── PRODUCT CATALOG: All 3 cakes as cards ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.8 }}
                        className="py-24 px-6 md:px-16 bg-black/30 backdrop-blur-sm"
                    >
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Cakes</h2>
                            <p className="text-center text-gray-400 mb-16 text-lg">Handcrafted for every occasion</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {products.map((p, idx) => (
                                    <motion.div
                                        key={p.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.15, duration: 0.6 }}
                                        className="group relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                    >
                                        {/* Card accent top bar using product theme */}
                                        <div className="h-1.5 w-full" style={{ background: p.gradient }} />
                                        {/* Image placeholder */}
                                        <div
                                            className="aspect-square bg-cover bg-center"
                                            style={{ backgroundImage: `url(${p.folderPath}/ezgif-frame-060.jpg)` }}
                                        />
                                        <div className="p-6">
                                            <div className="flex justify-between items-start mb-3">
                                                <div>
                                                    <h3 className="text-xl font-bold">{p.name}</h3>
                                                    <p className="text-gray-400 text-sm">{p.subName}</p>
                                                </div>
                                                <span className="text-2xl font-black text-orange-400">{p.price}</span>
                                            </div>
                                            <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">{p.detailsSection.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {p.features.map((f, i) => (
                                                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300">
                                                        {f}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href={getWhatsAppLink(p.name, p.price)}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-white transition-all hover:scale-105 active:scale-95"
                                                style={{ background: p.gradient }}
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.533 5.845L.057 23.428a.5.5 0 0 0 .515.57l5.775-1.513A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.373l-.36-.213-3.429.899.915-3.34-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.574 6.574 2.182 12 2.182c5.426 0 9.818 4.392 9.818 9.818 0 5.426-4.392 9.818-9.818 9.818z" />
                                                </svg>
                                                Order on WhatsApp
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* ── DETAILS SECTION ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="py-24 px-6 md:px-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                    >
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-pink-300">
                                {currentProduct.detailsSection.title}
                            </h2>
                            <p className="text-xl leading-relaxed opacity-90 text-gray-200">
                                {currentProduct.detailsSection.description}
                            </p>
                        </div>
                        <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${currentProduct.folderPath}/ezgif-frame-100.jpg)` }}
                                title={currentProduct.detailsSection.imageAlt}
                            />
                        </div>
                    </motion.section>

                    {/* ── FRESHNESS SECTION ── */}
                    <motion.section
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="py-24 px-6 md:px-24 bg-black/20 backdrop-blur-md border-y border-white/5"
                    >
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">{currentProduct.freshnessSection.title}</h2>
                            <p className="text-xl leading-relaxed opacity-90 text-gray-300">
                                {currentProduct.freshnessSection.description}
                            </p>
                            <div className="mt-12 flex flex-wrap justify-center gap-4">
                                {currentProduct.features.map((feature, idx) => (
                                    <span key={idx} className="px-6 py-3 rounded-full bg-white/10 border border-white/20 font-medium tracking-wide">
                                        ✓ {feature}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* ── BUY NOW SECTION ── */}
                    <motion.section
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="py-24 px-6 md:px-24 max-w-5xl mx-auto text-center"
                    >
                        <div className="bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-[3rem]">
                            <div className="bg-black/40 backdrop-blur-2xl p-12 md:p-20 rounded-[3rem]">
                                <h2 className="text-3xl md:text-4xl font-light mb-2">Ready to indulge?</h2>
                                <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-4">
                                    {currentProduct.buyNowSection.price}
                                </div>
                                <p className="text-xl opacity-70 mb-8 uppercase tracking-widest">{currentProduct.buyNowSection.unit}</p>
                                <div className="flex flex-wrap justify-center gap-3 mb-12">
                                    {currentProduct.buyNowSection.processingParams.map((param, i) => (
                                        <span key={i} className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium">
                                            ✓ {param}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={getWhatsAppLink(currentProduct.name, currentProduct.buyNowSection.price)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-2xl font-bold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 transition-all hover:scale-105 active:scale-95 mb-12 shadow-[0_0_40px_rgba(34,197,94,0.4)] hover:shadow-[0_0_60px_rgba(34,197,94,0.6)]"
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.533 5.845L.057 23.428a.5.5 0 0 0 .515.57l5.775-1.513A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.373l-.36-.213-3.429.899.915-3.34-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.574 6.574 2.182 12 2.182c5.426 0 9.818 4.392 9.818 9.818 0 5.426-4.392 9.818-9.818 9.818z" />
                                    </svg>
                                    Order via WhatsApp
                                </a>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t border-white/10 pt-12">
                                    <div>
                                        <h4 className="font-bold text-orange-400 mb-2 uppercase tracking-wide">Delivery Promise</h4>
                                        <p className="opacity-80 leading-relaxed text-sm md:text-base">{currentProduct.buyNowSection.deliveryPromise}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-pink-400 mb-2 uppercase tracking-wide">Satisfaction Guarantee</h4>
                                        <p className="opacity-80 leading-relaxed text-sm md:text-base">{currentProduct.buyNowSection.returnPolicy}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* ── NEXT FLAVOR ── */}
                    <div className="py-24 bg-black">
                        <button
                            onClick={handleNext}
                            className="w-full group py-24 hover:bg-white/5 transition duration-500 border-none outline-none"
                        >
                            <div className="max-w-7xl mx-auto px-6 md:px-24 flex items-center justify-between">
                                <div className="text-left">
                                    <p className="text-xl text-gray-500 uppercase tracking-widest mb-2 group-hover:text-orange-400 transition">
                                        Next Indulgence
                                    </p>
                                    <h3 className="text-5xl md:text-7xl font-bold group-hover:translate-x-4 transition-transform duration-500 text-white">
                                        {products[(currentIndex + 1) % products.length].name}
                                    </h3>
                                </div>
                                <div className="p-6 rounded-full bg-white/5 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-500">
                                    <ChevronRight size={48} className="text-white" />
                                </div>
                            </div>
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>

            <Footer />
        </main>
    );
}

