"use client";
import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export default function DeliveryInfoPage() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-orange-500/30 overflow-x-hidden font-sans">
            <Navbar />

            <div className="pt-32 pb-20 px-4 md:px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-12"
                >
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ background: "linear-gradient(to right, #fb923c, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            Delivery Information
                        </h1>
                        <p className="text-gray-400 text-lg">Everything you need to know about getting our cakes to your doorstep.</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {/* Standard Delivery */}
                        <div className="p-8 rounded-3xl border transition-all" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
                            <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-2xl" style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e" }}>
                                🛵
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Standard Delivery</h3>
                            <p className="text-orange-400 font-semibold mb-4">Free within 2 km radius</p>
                            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                We offer free standard delivery for our nearby customers to ensure your cakes arrive fresh and fast.
                            </p>
                            <h4 className="text-white font-medium mb-2 text-sm">Covered Areas:</h4>
                            <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                                <li>Kankarbagh</li>
                                <li>Rajendra Nagar</li>
                                <li>Kumhrar</li>
                                <li>Hanuman Nagar</li>
                                <li>Patrakar Nagar</li>
                                <li>PC Colony</li>
                                <li>Ashok Nagar</li>
                                <li>Chiraiyatand</li>
                            </ul>
                        </div>

                        {/* Extended Delivery */}
                        <div className="p-8 rounded-3xl border transition-all" style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(255,255,255,0.1)" }}>
                            <div className="w-12 h-12 rounded-full mb-6 flex items-center justify-center text-2xl" style={{ background: "rgba(249,115,22,0.1)", color: "#f97316" }}>
                                📍
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Extended Delivery</h3>
                            <p className="text-pink-400 font-semibold mb-4">Nominal Extra Charge</p>
                            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                                For areas a bit further away, we deliver with a small additional fee based on the exact distance.
                            </p>
                            <h4 className="text-white font-medium mb-2 text-sm">Covered Areas:</h4>
                            <ul className="text-sm text-gray-500 space-y-1 list-disc list-inside">
                                <li>Boring Road</li>
                                <li>Patliputra</li>
                                <li>Bailey Road</li>
                                <li>Ashiana</li>
                                <li>Digha</li>
                                <li>Danapur</li>
                                <li>Fraser Road</li>
                            </ul>
                        </div>
                    </div>

                    {/* Delivery Details */}
                    <div className="p-8 md:p-10 rounded-3xl border" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)", borderColor: "rgba(255,255,255,0.1)" }}>
                        <h3 className="text-2xl font-bold mb-6 text-center">Important Details</h3>
                        <div className="grid md:grid-cols-2 gap-8 text-sm">
                            <div>
                                <h4 className="text-orange-400 font-semibold mb-2 flex items-center gap-2">
                                    <span>⏱️</span> Delivery Timings
                                </h4>
                                <p className="text-gray-400 leading-relaxed">
                                    Our standard delivery hours are from 10:00 AM to 10:00 PM. We also offer special midnight deliveries for birthdays and anniversaries (subject to availability and extra charge).
                                </p>
                            </div>
                            <div>
                                <h4 className="text-pink-400 font-semibold mb-2 flex items-center gap-2">
                                    <span>🎂</span> Order Lead Time
                                </h4>
                                <p className="text-gray-400 leading-relaxed">
                                    Please place your orders at least 4 hours in advance for standard cakes. For custom or designer cakes, a 24-hour notice is highly appreciated.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
