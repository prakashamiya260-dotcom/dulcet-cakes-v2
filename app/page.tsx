"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProductBottleScroll } from "../components/ProductBottleScroll";
import { ProductTextOverlays } from "../components/ProductTextOverlays";
import { products } from "../data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        <main className="min-h-screen relative text-white selection:bg-orange-500 selection:text-white">
            <Navbar />

            {/* Fixed Navigation Arrows */}
            <div className="fixed top-1/2 left-4 z-40 -translate-y-1/2 hidden md:block">
                <button
                    onClick={handlePrev}
                    className="p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full border border-white/10 transition-all text-white"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>
            <div className="fixed top-1/2 right-4 z-40 -translate-y-1/2 hidden md:block">
                <button
                    onClick={handleNext}
                    className="p-3 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full border border-white/10 transition-all text-white"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Bottom Nav Menu */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
                <div className="flex bg-black/40 backdrop-blur-lg p-2 rounded-full border border-white/10 shadow-2xl">
                    {products.map((p, idx) => (
                        <button
                            key={p.id}
                            onClick={() => setCurrentIndex(idx)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${currentIndex === idx ? "bg-white/20 text-white shadow-lg" : "text-white/60 hover:text-white hover:bg-white/5"
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
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full"
                >
                    {/* Hero Scrollytelling Section */}
                    <div className="relative w-full">
                        <ProductBottleScroll folderPath={currentProduct.folderPath} />
                        <ProductTextOverlays product={currentProduct} />
                    </div>

                    {/* Details Section */}
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
                        <div className="aspect-square bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-8 backdrop-blur-sm relative overflow-hidden shadow-2xl">
                            <div
                                className="w-full h-full bg-cover bg-center rounded-2xl opacity-80"
                                style={{ backgroundImage: `url(${currentProduct.folderPath}/ezgif-frame-100.jpg)` }}
                                title={currentProduct.detailsSection.imageAlt}
                            />
                        </div>
                    </motion.section>

                    {/* Freshness Section */}
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

                    {/* Buy Now Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="py-24 px-6 md:px-24 max-w-5xl mx-auto text-center"
                    >
                        <div className="bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-[3rem]">
                            <div className="bg-black/40 backdrop-blur-2xl p-12 md:p-20 rounded-[3rem]">
                                <h2 className="text-3xl md:text-4xl font-light mb-2">Experience the difference.</h2>
                                <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 mb-4 drop-shadow-lg">
                                    {currentProduct.buyNowSection.price}
                                </div>
                                <p className="text-xl opacity-70 mb-12 uppercase tracking-widest">{currentProduct.buyNowSection.unit}</p>

                                <button className="px-12 py-5 rounded-full text-2xl font-bold text-white bg-white/10 hover:bg-white/20 border-2 border-white/20 transition-all hover:scale-105 active:scale-95 mb-12 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)]">
                                    Add to Cart
                                </button>

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

                    {/* Next Flavor Button */}
                    <div className="py-24 bg-black">
                        <button
                            onClick={handleNext}
                            className="w-full group py-24 hover:bg-white/5 transition duration-500 border-none outline-none"
                        >
                            <div className="max-w-7xl mx-auto px-6 md:px-24 flex items-center justify-between">
                                <div>
                                    <p className="text-xl text-gray-500 uppercase tracking-widest mb-2 group-hover:text-orange-400 transition">Next Indulgence</p>
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
