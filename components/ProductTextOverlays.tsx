"use client";
import React from "react";
import { motion } from "framer-motion";
import { Product } from "../data/products";

interface ProductTextOverlaysProps {
    product: Product;
}

export function ProductTextOverlays({ product }: ProductTextOverlaysProps) {
    return (
        <div className="pointer-events-none absolute top-0 left-0 w-full h-[500vh] z-10">
            {/* Section 1 */}
            <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    viewport={{ once: false, amount: 0.5 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4 drop-shadow-xl">
                        {product.section1.title}
                    </h1>
                    <p className="text-2xl md:text-4xl opacity-90 font-light drop-shadow-lg">
                        {product.section1.subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Section 2 */}
            <div className="h-screen w-full flex flex-col items-start justify-center px-8 md:px-24">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    className="max-w-lg bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{product.section2.title}</h2>
                    <p className="text-lg md:text-xl opacity-90 leading-relaxed text-gray-200">
                        {product.section2.subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Section 3 */}
            <div className="h-screen w-full flex flex-col items-end justify-center px-8 md:px-24">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-20%" }}
                    className="max-w-lg bg-black/30 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-right"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{product.section3.title}</h2>
                    <p className="text-lg md:text-xl opacity-90 leading-relaxed text-gray-200">
                        {product.section3.subtitle}
                    </p>
                </motion.div>
            </div>

            {/* Section 4 */}
            <div className="h-screen w-full flex flex-col items-center justify-center px-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, margin: "-20%" }}
                    className="text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        {product.section4.title}
                    </h2>
                    {product.section4.subtitle && (
                        <p className="text-xl opacity-80">{product.section4.subtitle}</p>
                    )}
                    <div className="mt-8 flex gap-4 justify-center">
                        {product.stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 w-32">
                                <span className="text-3xl font-bold">{stat.val}</span>
                                <span className="text-sm opacity-70 uppercase tracking-wider mt-1">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* End spacing */}
            <div className="h-screen w-full" />
        </div>
    );
}
