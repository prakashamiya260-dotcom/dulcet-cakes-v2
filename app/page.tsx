"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// ── WhatsApp number from footer contact ──
const WHATSAPP_NUMBER = "919873813095";

function waLink(msg: string) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const WA_ICON = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.533 5.845L.057 23.428a.5.5 0 0 0 .515.57l5.775-1.513A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.373l-.36-.213-3.429.899.915-3.34-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.574 6.574 2.182 12 2.182c5.426 0 9.818 4.392 9.818 9.818 0 5.426-4.392 9.818-9.818 9.818z" />
    </svg>
);

const cakes = [
    {
        id: "classic-chocolate",
        name: "Classic Chocolate",
        subName: "Decadence redefined.",
        emoji: "🍫",
        badge: { text: "Bestseller", bg: "#f97316", color: "#000" },
        gradient: "linear-gradient(135deg, #4E342E, #212121)",
        desc: "Our signature dark chocolate couverture cake — rich, velvety, unforgettable.",
        sizes: "500g · ₹599 | 1kg · ₹999 | 1.5kg · ₹1,399",
        basePrice: "₹599",
        features: ["Rich Dark Cocoa", "Moist Sponge", "Premium Ganache"],
        eggless: false,
        sizePrices: [{ label: "500g · ₹599", price: "₹599", unit: "500g cake" }, { label: "1kg · ₹999", price: "₹999", unit: "1kg cake" }, { label: "1.5kg · ₹1,399", price: "₹1,399", unit: "1.5kg cake" }],
        params: ["Freshly Baked", "Eggless Option +₹50", "Premium Cocoa"],
    },
    {
        id: "strawberry-bliss",
        name: "Strawberry Bliss",
        subName: "Berry beautiful.",
        emoji: "🍓",
        badge: { text: "New", bg: "#ec4899", color: "#fff" },
        gradient: "linear-gradient(135deg, #E53935, #B71C1C)",
        desc: "Real strawberry compote, cream cheese frosting, light vanilla sponge.",
        sizes: "500g · ₹649 | 1kg · ₹1,099 | 1.5kg · ₹1,499",
        basePrice: "₹649",
        features: ["Fresh Berries", "Light Sponge", "Cream Cheese"],
        eggless: false,
        sizePrices: [{ label: "500g · ₹649", price: "₹649", unit: "500g cake" }, { label: "1kg · ₹1,099", price: "₹1,099", unit: "1kg cake" }, { label: "1.5kg · ₹1,499", price: "₹1,499", unit: "1.5kg cake" }],
        params: ["Real Fruits", "Light Cream", "Eggless Option"],
    },
    {
        id: "vanilla-dream",
        name: "Vanilla Dream",
        subName: "Classic elegance.",
        emoji: "🍦",
        badge: null,
        gradient: "linear-gradient(135deg, #F57F17, #E65100)",
        desc: "Madagascar vanilla bean sponge with silky buttercream frosting.",
        sizes: "500g · ₹549 | 1kg · ₹949 | 1.5kg · ₹1,349",
        basePrice: "₹549",
        features: ["Madagascar Vanilla", "Buttercream", "Soft Crumb"],
        eggless: false,
        sizePrices: [{ label: "500g · ₹549", price: "₹549", unit: "500g cake" }, { label: "1kg · ₹949", price: "₹949", unit: "1kg cake" }, { label: "1.5kg · ₹1,349", price: "₹1,349", unit: "1.5kg cake" }],
        params: ["Real Vanilla", "Hand Whipped", "Eggless Option"],
    },
    {
        id: "red-velvet",
        name: "Red Velvet",
        subName: "Velvety perfection.",
        emoji: "❤️",
        badge: { text: "Popular", bg: "#f97316", color: "#000" },
        gradient: "linear-gradient(135deg, #C62828, #4A0000)",
        desc: "Velvety cocoa layers with tangy cream cheese frosting. A celebration showstopper.",
        sizes: "500g · ₹699 | 1kg · ₹1,199 | 1.5kg · ₹1,599",
        basePrice: "₹699",
        features: ["Cream Cheese Frosting", "Velvety Texture", "Premium Cocoa"],
        eggless: false,
        sizePrices: [{ label: "500g · ₹699", price: "₹699", unit: "500g cake" }, { label: "1kg · ₹1,199", price: "₹1,199", unit: "1kg cake" }, { label: "1.5kg · ₹1,599", price: "₹1,599", unit: "1.5kg cake" }],
        params: ["Cream Cheese", "Velvety Texture", "Eggless Option"],
    },
    {
        id: "belgian-dark",
        name: "Belgian Dark",
        subName: "Our signature masterpiece.",
        emoji: "🏆",
        badge: { text: "Premium", bg: "#fff", color: "#000" },
        gradient: "linear-gradient(135deg, #1A1208, #000)",
        desc: "72% Belgian couverture, dark ganache drip, hand-tempered chocolate shards.",
        sizes: "500g · ₹899 | 1kg · ₹1,599 | 1.5kg · ₹2,199",
        basePrice: "₹899",
        features: ["72% Belgian Cocoa", "Dark Ganache Drip", "Hand-Tempered Shards"],
        eggless: false,
        sizePrices: [{ label: "500g · ₹899", price: "₹899", unit: "500g cake" }, { label: "1kg · ₹1,599", price: "₹1,599", unit: "1kg cake" }, { label: "1.5kg · ₹2,199", price: "₹2,199", unit: "1.5kg cake" }],
        params: ["72% Belgian Cocoa", "Cold Crafted", "Premium Finish"],
    },
    {
        id: "butterscotch",
        name: "Butterscotch Crunch",
        subName: "Caramel sponge, crunchy praline bits.",
        emoji: "🍯",
        badge: null,
        gradient: "linear-gradient(135deg, #FF8F00, #E65100)",
        desc: "Caramel-infused sponge layers with golden butterscotch sauce and crunchy praline bits.",
        sizes: "500g · ₹549 | 1kg · ₹949 | 1.5kg · ₹1,349",
        basePrice: "₹549",
        features: ["Butterscotch Sauce", "Praline Crunch", "Soft Sponge"],
        eggless: false,
        sizePrices: [{ label: "500g · ₹549", price: "₹549", unit: "500g cake" }, { label: "1kg · ₹949", price: "₹949", unit: "1kg cake" }, { label: "1.5kg · ₹1,349", price: "₹1,349", unit: "1.5kg cake" }],
        params: ["Butterscotch Sauce", "Praline Bits", "Eggless Option"],
    },
    {
        id: "fresh-fruit",
        name: "Fresh Fruit Delight",
        subName: "Seasonal fruits, vanilla whipped cream.",
        emoji: "🍊",
        badge: { text: "Eggless", bg: "#22c55e", color: "#fff" },
        gradient: "linear-gradient(135deg, #2E7D32, #1B5E20)",
        desc: "Light vanilla sponge loaded with seasonal fresh fruits and whipped cream.",
        sizes: "500g · ₹599 | 1kg · ₹999 | 1.5kg · ₹1,399",
        basePrice: "₹599",
        features: ["Seasonal Fruits", "Whipped Cream", "100% Eggless"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹599", price: "₹599", unit: "500g cake" }, { label: "1kg · ₹999", price: "₹999", unit: "1kg cake" }, { label: "1.5kg · ₹1,399", price: "₹1,399", unit: "1.5kg cake" }],
        params: ["100% Eggless", "Fresh Fruits", "Light Cream"],
    },
    {
        id: "black-forest",
        name: "Black Forest",
        subName: "Cherry compote, chocolate shavings.",
        emoji: "🍒",
        badge: null,
        gradient: "linear-gradient(135deg, #3E2723, #1A1208)",
        desc: "Classic Black Forest with cherry compote, whipped cream, and dark chocolate shavings.",
        sizes: "500g · ₹599 | 1kg · ₹999 | 1.5kg · ₹1,399",
        basePrice: "₹599",
        features: ["Cherry Compote", "Choco Shavings", "Whipped Cream"],
        eggless: false,
        sizePrices: [{ label: "500g · ₹599", price: "₹599", unit: "500g cake" }, { label: "1kg · ₹999", price: "₹999", unit: "1kg cake" }, { label: "1.5kg · ₹1,399", price: "₹1,399", unit: "1.5kg cake" }],
        params: ["Cherry Compote", "Dark Chocolate", "Eggless Option"],
    },
];

const heroStats = [
    { val: "8+", label: "Flavours" },
    { val: "500+", label: "Happy Orders" },
    { val: "Same Day", label: "Delivery" },
];

export default function Home() {
    const [activeHero, setActiveHero] = useState(0);
    const [selectedSize, setSelectedSize] = useState(0);

    const hero = cakes[activeHero];
    const currentSize = hero.sizePrices[selectedSize];

    // Reset size when hero changes
    useEffect(() => { setSelectedSize(0); }, [activeHero]);

    return (
        <main className="min-h-screen text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
            <Navbar />

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden" style={{ background: "#1a1208" }}>
                {/* Cinematic video BG */}
                <video
                    autoPlay loop muted playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="/videos/hero.mp4"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.70) 100%)" }} />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center px-6 pt-28 pb-36">
                    <motion.div key={activeHero} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-orange-300 mb-4">{hero.subName}</p>
                        <h1 className="text-7xl md:text-9xl font-black tracking-tight leading-none mb-6 drop-shadow-2xl">{hero.name}</h1>
                        <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">{hero.desc}</p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href={waLink(`Hi Dulcet Cakes! 🎂 I'd like to order a *${hero.name}* (${hero.basePrice}). Please confirm availability.`)}
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 px-10 py-4 rounded-full text-xl font-bold text-white transition-transform hover:scale-105 active:scale-95"
                                style={{ background: "linear-gradient(to right, #f97316, #db2777)", boxShadow: "0 0 40px rgba(249,115,22,0.5)" }}
                            >
                                {WA_ICON}
                                Order on WhatsApp — {hero.basePrice}
                            </a>
                            <a href="#catalog" className="px-8 py-4 rounded-full text-lg font-semibold border transition-all hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                                Explore More ↓
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Stats bar */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-8 px-8 py-4 rounded-full border" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.1)" }}>
                    {heroStats.map((s, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl font-black">{s.val}</div>
                            <div className="text-xs uppercase tracking-widest text-gray-400">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Product Catalog ── */}
            <section id="catalog" className="py-24 px-6" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}>
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">Our Cakes</h2>
                <p className="text-center text-gray-400 text-lg mb-16">Handcrafted for every occasion</p>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {cakes.map((cake, idx) => (
                        <motion.div
                            key={cake.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.07, duration: 0.5 }}
                            className="rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                        >
                            {/* Accent bar */}
                            <div className="h-1.5 w-full" style={{ background: cake.gradient }} />
                            {/* Image/emoji */}
                            <div className="aspect-square flex items-center justify-center text-6xl relative" style={{ background: cake.gradient }}>
                                {cake.badge && (
                                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide" style={{ background: cake.badge.bg, color: cake.badge.color }}>
                                        {cake.badge.text}
                                    </span>
                                )}
                                {cake.emoji}
                            </div>
                            {/* Body */}
                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <div className="text-lg font-bold">{cake.name}</div>
                                        <div className="text-sm text-gray-400">{cake.subName}</div>
                                    </div>
                                    <div className="text-xl font-black text-orange-400">{cake.basePrice}</div>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed mb-1">{cake.desc}</p>
                                <p className="text-xs text-gray-500 mb-3">{cake.sizes}</p>
                                {cake.eggless && (
                                    <span className="inline-block text-xs px-3 py-1 rounded-full mb-3" style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}>🌿 Eggless</span>
                                )}
                                <div className="flex flex-wrap gap-1.5 mb-4">
                                    {cake.features.map((f, i) => (
                                        <span key={i} className="text-xs px-2.5 py-1 rounded-full text-gray-300" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)" }}>{f}</span>
                                    ))}
                                </div>
                                <a
                                    href={waLink(`Hi Dulcet Cakes! 🎂 I'd like to order a *${cake.name}* (${cake.basePrice}). Please confirm availability and delivery.`)}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl font-bold text-white transition-transform hover:scale-105 active:scale-95"
                                    style={{ background: cake.gradient }}
                                >
                                    {WA_ICON}
                                    Order on WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="text-center mt-12 text-sm text-gray-500">
                    🌿 <span className="text-green-400 font-semibold">Eggless versions</span> available for all cakes — +₹50 (500g) / +₹100 (1kg). Mention while ordering.
                </p>
            </section>

            {/* ── Buy Now Section ── */}
            <motion.section
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="py-24 px-6 flex justify-center"
            >
                <div className="max-w-3xl w-full rounded-[3rem] p-[1px]" style={{ background: "linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent)" }}>
                    <div className="rounded-[3rem] p-12 md:p-16 text-center" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(40px)" }}>
                        <h2 className="text-3xl font-light mb-2">Ready to indulge?</h2>
                        <div className="text-7xl md:text-8xl font-black mb-2" style={{ background: "linear-gradient(to right, #fb923c, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                            {currentSize.price}
                        </div>
                        <p className="text-lg opacity-70 uppercase tracking-widest mb-6">{currentSize.unit}</p>

                        {/* Size Selector */}
                        <div className="flex justify-center gap-3 mb-8 flex-wrap">
                            {hero.sizePrices.map((s, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectedSize(i)}
                                    className="px-6 py-2.5 rounded-full text-sm font-semibold border transition-all"
                                    style={{
                                        background: selectedSize === i ? "rgba(255,255,255,0.2)" : "none",
                                        borderColor: selectedSize === i ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)",
                                        color: selectedSize === i ? "white" : "rgba(255,255,255,0.5)",
                                        boxShadow: selectedSize === i ? "0 0 20px rgba(255,255,255,0.05)" : "none",
                                    }}
                                >
                                    {s.label}
                                </button>
                            ))}
                        </div>

                        {/* Params */}
                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            {hero.params.map((p, i) => (
                                <span key={i} className="px-5 py-2 rounded-full text-sm font-medium border" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                                    ✓ {p}
                                </span>
                            ))}
                        </div>

                        {/* WhatsApp CTA */}
                        <a
                            href={waLink(`Hi Dulcet Cakes! 🎂 I'd like to order a *${hero.name}* — ${currentSize.unit} (${currentSize.price}). Please confirm availability and delivery details.`)}
                            target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-12 py-5 rounded-full text-2xl font-bold text-white transition-all hover:scale-105 active:scale-95 mb-12"
                            style={{ background: "linear-gradient(to right, #22c55e, #059669)", boxShadow: "0 0 40px rgba(34,197,94,0.4)" }}
                            onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 0 60px rgba(34,197,94,0.6)")}
                            onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 0 40px rgba(34,197,94,0.4)")}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.533 5.845L.057 23.428a.5.5 0 0 0 .515.57l5.775-1.513A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.373l-.36-.213-3.429.899.915-3.34-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.574 6.574 2.182 12 2.182c5.426 0 9.818 4.392 9.818 9.818 0 5.426-4.392 9.818-9.818 9.818z" />
                            </svg>
                            Order via WhatsApp
                        </a>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left border-t pt-10" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                            <div>
                                <h4 className="font-bold uppercase tracking-wide text-sm mb-2 text-orange-400">Delivery Promise</h4>
                                <p className="opacity-80 text-sm leading-relaxed">Same-day & next-day delivery available in Patna. Keeps perfectly fresh for 3 days.</p>
                            </div>
                            <div>
                                <h4 className="font-bold uppercase tracking-wide text-sm mb-2 text-pink-400">Satisfaction Guarantee</h4>
                                <p className="opacity-80 text-sm leading-relaxed">100% Satisfaction Guarantee. Taste the love, or we make it right.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <Footer />

            {/* ── Bottom Flavor Menu ── */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex p-2 rounded-full border shadow-2xl" style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.1)" }}>
                {cakes.slice(0, 5).map((c, i) => (
                    <button
                        key={c.id}
                        onClick={() => { setActiveHero(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                        className="px-3 py-2 rounded-full text-xs font-medium transition-all"
                        style={{
                            color: activeHero === i ? "white" : "rgba(255,255,255,0.6)",
                            background: activeHero === i ? "rgba(255,255,255,0.2)" : "none",
                        }}
                    >
                        {c.name}
                    </button>
                ))}
            </div>
        </main>
    );
}
