"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// ── WhatsApp number from footer contact ──
const WHATSAPP_NUMBER = "919999789502";

function waLink(msg: string) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

const WA_ICON = (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0 block">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.533 5.845L.057 23.428a.5.5 0 0 0 .515.57l5.775-1.513A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.006-1.373l-.36-.213-3.429.899.915-3.34-.234-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.574 6.574 2.182 12 2.182c5.426 0 9.818 4.392 9.818 9.818 0 5.426-4.392 9.818-9.818 9.818z" />
    </svg>
);

type Cake = {
    id: string; name: string; subName: string; emoji: string; photo?: string; video: string | null;
    badge: { text: string; bg: string; color: string } | null;
    gradient: string; desc: string; sizes: string; basePrice: string;
    features: string[]; eggless: boolean;
    sizePrices: { label: string; price: string; unit: string }[]; params: string[];
};

const cakes: Cake[] = [
    {
        id: "vanilla-dream",
        name: "Vanilla Dream",
        subName: "Classic elegance.",
        emoji: "🍦",
        photo: "/Vanilla Dream.jpeg",
        video: null,
        badge: null,
        gradient: "linear-gradient(135deg, #F57F17, #E65100)",
        desc: "Madagascar vanilla bean sponge with silky buttercream frosting.",
        sizes: "500g · ₹549 | 1kg · ₹949 | 1.5kg · ₹1,349",
        basePrice: "₹549",
        features: ["Madagascar Vanilla", "Buttercream", "Soft Crumb"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹549", price: "₹549", unit: "500g cake" }, { label: "1kg · ₹949", price: "₹949", unit: "1kg cake" }, { label: "1.5kg · ₹1,349", price: "₹1,349", unit: "1.5kg cake" }],
        params: ["Real Vanilla", "Hand Whipped", "100% Eggless"],
    },
    {
        id: "strawberry-bliss",
        name: "Strawberry Bliss",
        subName: "Berry beautiful.",
        emoji: "🍓",
        photo: "/Strawberry Bliss.jpeg",
        video: "/videos/strawberry_vid.mp4",
        badge: { text: "New", bg: "#ec4899", color: "#fff" },
        gradient: "linear-gradient(135deg, #E53935, #B71C1C)",
        desc: "Real strawberry compote, cream cheese frosting, light vanilla sponge.",
        sizes: "500g · ₹649 | 1kg · ₹1,099 | 1.5kg · ₹1,499",
        basePrice: "₹649",
        features: ["Fresh Berries", "Light Sponge", "Cream Cheese"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹649", price: "₹649", unit: "500g cake" }, { label: "1kg · ₹1,099", price: "₹1,099", unit: "1kg cake" }, { label: "1.5kg · ₹1,499", price: "₹1,499", unit: "1.5kg cake" }],
        params: ["Real Fruits", "Light Cream", "100% Eggless"],
    },
    {
        id: "classic-chocolate",
        name: "Classic Chocolate",
        subName: "Decadence redefined.",
        emoji: "🍫",
        photo: "/Classic Chocolate.jpeg",
        video: "/videos/hero.mp4",
        badge: { text: "Bestseller", bg: "#f97316", color: "#000" },
        gradient: "linear-gradient(135deg, #4E342E, #212121)",
        desc: "Our signature dark chocolate couverture cake — rich, velvety, unforgettable.",
        sizes: "500g · ₹599 | 1kg · ₹999 | 1.5kg · ₹1,399",
        basePrice: "₹599",
        features: ["Rich Dark Cocoa", "Moist Sponge", "Premium Ganache"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹599", price: "₹599", unit: "500g cake" }, { label: "1kg · ₹999", price: "₹999", unit: "1kg cake" }, { label: "1.5kg · ₹1,399", price: "₹1,399", unit: "1.5kg cake" }],
        params: ["Freshly Baked", "100% Eggless", "Premium Cocoa"],
    },
    {
        id: "midnight-mousse",
        name: "Midnight Mousse",
        subName: "Rich chocolate velvet.",
        emoji: "🍫",
        photo: "/Midnight Mousse.jpeg",
        video: null,
        badge: { text: "Chef's Special", bg: "#7c3aed", color: "#fff" },
        gradient: "linear-gradient(135deg, #2D1B4E, #1F1235)",
        desc: "Decadent layers of dark chocolate sponge and airy chocolate mousse, coated in a glossy chocolate glaze.",
        sizes: "500g · ₹649 | 1kg · ₹1,099 | 1.5kg · ₹1,499",
        basePrice: "₹649",
        features: ["Dark Chocolate Mousse", "Glazed Finish", "Fluffy Sponge"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹649", price: "₹649", unit: "500g cake" }, { label: "1kg · ₹1,099", price: "₹1,099", unit: "1kg cake" }, { label: "1.5kg · ₹1,499", price: "₹1,499", unit: "1.5kg cake" }],
        params: ["Cold Crafted", "100% Eggless", "Belgian Cocoa"],
    },
    {
        id: "fresh-fruit",
        name: "Fresh Fruit Delight",
        subName: "Seasonal fruits, vanilla whipped cream.",
        emoji: "🍊",
        photo: "/fresh_fruit_delight.jpeg",
        video: null,
        badge: { text: "Eggless", bg: "#22c55e", color: "#fff" },
        gradient: "linear-gradient(135deg, #2E7D32, #1B5E20)",
        desc: "Light vanilla sponge loaded with seasonal fresh fruits and whipped cream.",
        sizes: "500g · ₹599 | 1kg · ₹999 | 1.5kg · ₹1,399",
        basePrice: "₹599",
        features: ["Seasonal Fruits", "Whipped Cream", "Light Sponge"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹599", price: "₹599", unit: "500g cake" }, { label: "1kg · ₹999", price: "₹999", unit: "1kg cake" }, { label: "1.5kg · ₹1,399", price: "₹1,399", unit: "1.5kg cake" }],
        params: ["100% Eggless", "Fresh Fruits", "Light Cream"],
    },
    {
        id: "butterscotch",
        name: "Butterscotch Crunch",
        subName: "Caramel sponge, crunchy praline bits.",
        emoji: "🍯",
        photo: "/Butterscotch Crunch.jpeg",
        video: null,
        badge: null,
        gradient: "linear-gradient(135deg, #FF8F00, #E65100)",
        desc: "Caramel-infused sponge layers with golden butterscotch sauce and crunchy praline bits.",
        sizes: "500g · ₹549 | 1kg · ₹949 | 1.5kg · ₹1,349",
        basePrice: "₹549",
        features: ["Butterscotch Sauce", "Praline Crunch", "Soft Sponge"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹549", price: "₹549", unit: "500g cake" }, { label: "1kg · ₹949", price: "₹949", unit: "1kg cake" }, { label: "1.5kg · ₹1,349", price: "₹1,349", unit: "1.5kg cake" }],
        params: ["Butterscotch Sauce", "Praline Bits", "100% Eggless"],
    },
    {
        id: "blueberry-delight",
        name: "Blueberry Delight",
        subName: "Berry luscious.",
        emoji: "🫐",
        photo: null,
        video: "/videos/blueberry_vid.mp4",
        badge: { text: "New", bg: "#8b5cf6", color: "#fff" },
        gradient: "linear-gradient(135deg, #4A148C, #311B92)",
        desc: "Vanilla sponge layered with wild blueberry compote and tangy cream cheese frosting.",
        sizes: "500g · ₹649",
        basePrice: "₹649",
        features: ["Wild Blueberries", "Vanilla Sponge", "Cream Cheese"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹649", price: "₹649", unit: "500g cake" }],
        params: ["Wild Blueberries", "Cream Cheese", "100% Eggless"],
    },
    {
        id: "red-velvet",
        name: "Red Velvet",
        subName: "Velvety perfection.",
        emoji: "❤️",
        photo: "/Red Velvet.jpeg",
        video: "/videos/red_velvet.mp4",
        badge: { text: "Popular", bg: "#f97316", color: "#000" },
        gradient: "linear-gradient(135deg, #C62828, #4A0000)",
        desc: "Velvety cocoa layers with tangy cream cheese frosting. A celebration showstopper.",
        sizes: "500g · ₹749 | 1kg · ₹1,199 | 1.5kg · ₹1,599",
        basePrice: "₹749",
        features: ["Cream Cheese Frosting", "Velvety Texture", "Premium Cocoa"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹749", price: "₹749", unit: "500g cake" }, { label: "1kg · ₹1,199", price: "₹1,199", unit: "1kg cake" }, { label: "1.5kg · ₹1,599", price: "₹1,599", unit: "1.5kg cake" }],
        params: ["Cream Cheese", "Velvety Texture", "100% Eggless"],
    },
    {
        id: "belgian-dark",
        name: "Belgian Dark",
        subName: "Our signature masterpiece.",
        emoji: "🏆",
        photo: "/Belgian Dark (Premium).jpeg",
        video: null,
        badge: { text: "Premium", bg: "#fff", color: "#000" },
        gradient: "linear-gradient(135deg, #1A1208, #000)",
        desc: "72% Belgian couverture, dark ganache drip, hand-tempered chocolate shards.",
        sizes: "500g · ₹899 | 1kg · ₹1,599 | 1.5kg · ₹2,199",
        basePrice: "₹899",
        features: ["72% Belgian Cocoa", "Dark Ganache Drip", "Hand-Tempered Shards"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹899", price: "₹899", unit: "500g cake" }, { label: "1kg · ₹1,599", price: "₹1,599", unit: "1kg cake" }, { label: "1.5kg · ₹2,199", price: "₹2,199", unit: "1.5kg cake" }],
        params: ["72% Belgian Cocoa", "Cold Crafted", "100% Eggless"],
    },
    {
        id: "salted-caramel-cake",
        name: "Salted Caramel Cake",
        subName: "Caramelized sweet-salty harmony.",
        emoji: "🍮",
        photo: "/Salted Caramel Cake.png",
        video: null,
        badge: { text: "New", bg: "#f57c00", color: "#fff" },
        gradient: "linear-gradient(135deg, #FFB74D, #F57C00)",
        desc: "Rich caramel-infused sponge layers with smooth salted caramel sauce, buttercream, and a touch of Maldon sea salt.",
        sizes: "500g · ₹649 | 1kg · ₹1,099 | 1.5kg · ₹1,499",
        basePrice: "₹649",
        features: ["Salted Caramel", "Buttercream", "Sweet & Salty"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹649", price: "₹649", unit: "500g cake" }, { label: "1kg · ₹1,099", price: "₹1,099", unit: "1kg cake" }, { label: "1.5kg · ₹1,499", price: "₹1,499", unit: "1.5kg cake" }],
        params: ["Salted Caramel", "100% Eggless", "Premium Finish"],
    },
    {
        id: "golden-rocher",
        name: "Golden Rocher Cake",
        subName: "Hazelnut chocolate luxury.",
        emoji: "🌰",
        photo: "/Golden Rocher Cake.jpg",
        video: null,
        badge: { text: "Premium", bg: "#CFB53B", color: "#000" },
        gradient: "linear-gradient(135deg, #CFB53B, #8C7853)",
        desc: "Rich hazelnut chocolate sponge, filled with Nutella glaze and crunchy wafers, crowned with golden Rocher chocolates.",
        sizes: "500g · ₹749 | 1kg · ₹1,299 | 1.5kg · ₹1,799",
        basePrice: "₹749",
        features: ["Hazelnut Rocher", "Nutella Glaze", "Crunchy Wafers"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹749", price: "₹749", unit: "500g cake" }, { label: "1kg · ₹1,299", price: "₹1,299", unit: "1kg cake" }, { label: "1.5kg · ₹1,799", price: "₹1,799", unit: "1.5kg cake" }],
        params: ["Premium Cocoa", "100% Eggless", "Gold Sprinkles"],
    },
    {
        id: "biscoff-heaven",
        name: "Biscoff Heaven",
        subName: "Caramelized cookie magic.",
        emoji: "🍪",
        photo: "/Biscoff Heaven.jpg",
        video: null,
        badge: { text: "Trending", bg: "#d97706", color: "#fff" },
        gradient: "linear-gradient(135deg, #D7CCC8, #8D6E63)",
        desc: "Spiced speculoos cookie sponge layered with smooth Lotus Biscoff spread and whipped cookie-butter cream, finished with crunchy Biscoff crumbles.",
        sizes: "500g · ₹649 | 1kg · ₹1,099 | 1.5kg · ₹1,499",
        basePrice: "₹649",
        features: ["Lotus Biscoff", "Cookie Butter", "Crunchy Speculoos"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹649", price: "₹649", unit: "500g cake" }, { label: "1kg · ₹1,099", price: "₹1,099", unit: "1kg cake" }, { label: "1.5kg · ₹1,499", price: "₹1,499", unit: "1.5kg cake" }],
        params: ["Real Biscoff", "100% Eggless", "Cookie Crumbles"],
    },
    {
        id: "saffron-rasmalai",
        name: "Saffron Rasmalai Cake",
        subName: "Traditional luxury in a sponge.",
        emoji: "🥛",
        photo: "/Saffron Rasmalai Cake.avif",
        video: null,
        badge: { text: "Festive Special", bg: "#f59e0b", color: "#000" },
        gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
        desc: "Saffron and cardamom-infused sponge soaked in rich pistachio rabdi, topped with fresh cream, sliced almonds, pistachios, and dried rose petals.",
        sizes: "500g · ₹699 | 1kg · ₹1,199 | 1.5kg · ₹1,599",
        basePrice: "₹699",
        features: ["Saffron & Cardamom", "Pistachio Rabdi Soaked", "Rose Petals & Nuts"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹699", price: "₹699", unit: "500g cake" }, { label: "1kg · ₹1,199", price: "₹1,199", unit: "1kg cake" }, { label: "1.5kg · ₹1,599", price: "₹1,599", unit: "1.5kg cake" }],
        params: ["Premium Rabdi", "100% Eggless", "Rich Saffron"],
    },
    {
        id: "kitkat-krunch-blast",
        name: "KitKat Krunch Blast",
        subName: "Chocolate-wafer explosion.",
        emoji: "🍫",
        photo: "/kitkat krunch blast.webp",
        video: null,
        badge: { text: "Crispy Delight", bg: "#dc2626", color: "#fff" },
        gradient: "linear-gradient(135deg, #d32f2f, #7b1fa2)",
        desc: "Crunchy wafer-infused chocolate sponge layered with creamy milk chocolate frosting, loaded with crushed KitKat bars and chocolate drizzle.",
        sizes: "500g · ₹649 | 1kg · ₹1,099 | 1.5kg · ₹1,499",
        basePrice: "₹649",
        features: ["Crushed KitKat", "Chocolate Wafers", "Milk Chocolate Drizzle"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹649", price: "₹649", unit: "500g cake" }, { label: "1kg · ₹1,099", price: "₹1,099", unit: "1kg cake" }, { label: "1.5kg · ₹1,499", price: "₹1,499", unit: "1.5kg cake" }],
        params: ["Cracked KitKat", "100% Eggless", "Premium Frosting"],
    },
    {
        id: "oreo-obsession",
        name: "Oreo Obsession",
        subName: "Cookies & cream dream.",
        emoji: "🍪",
        photo: "/Oreo Obsession.jpeg",
        video: null,
        badge: { text: "Kids' Favorite", bg: "#1e3a8a", color: "#fff" },
        gradient: "linear-gradient(135deg, #1E3A8A, #0D1B2A)",
        desc: "Rich dark chocolate sponge layered with crushed Oreo cookies and creamy vanilla cookies-and-cream buttercream, topped with whole Oreos.",
        sizes: "500g · ₹599 | 1kg · ₹999 | 1.5kg · ₹1,399",
        basePrice: "₹599",
        features: ["Oreo Buttercream", "Crushed Cookies", "Dark Cocoa Sponge"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹599", price: "₹599", unit: "500g cake" }, { label: "1kg · ₹999", price: "₹999", unit: "1kg cake" }, { label: "1.5kg · ₹1,399", price: "₹1,399", unit: "1.5kg cake" }],
        params: ["Real Oreo Cookies", "100% Eggless", "Cookies & Cream"],
    },
    {
        id: "nutella-nirvana",
        name: "Nutella Nirvana",
        subName: "Hazelnut spread bliss.",
        emoji: "🌰",
        photo: "/Nutella Nirvana.jpg",
        video: null,
        badge: { text: "Hazelnut Classic", bg: "#ea580c", color: "#fff" },
        gradient: "linear-gradient(135deg, #8D6E63, #4E342E)",
        desc: "Moist chocolate sponge filled with rich layers of authentic Nutella spread and hazelnut buttercream, topped with a luscious chocolate drip.",
        sizes: "500g · ₹749 | 1kg · ₹1,299 | 1.5kg · ₹1,799",
        basePrice: "₹749",
        features: ["Authentic Nutella", "Hazelnut Buttercream", "Chocolate Drip"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹749", price: "₹749", unit: "500g cake" }, { label: "1kg · ₹1,299", price: "₹1,299", unit: "1kg cake" }, { label: "1.5kg · ₹1,799", price: "₹1,799", unit: "1.5kg cake" }],
        params: ["Real Nutella", "100% Eggless", "Hazelnut Crunch"],
    },
    {
        id: "black-forest",
        name: "Black Forest",
        subName: "Cherry compote, chocolate shavings.",
        emoji: "🍒",
        photo: "/Black Forest.jpeg",
        video: null,
        badge: null,
        gradient: "linear-gradient(135deg, #3E2723, #1A1208)",
        desc: "Classic Black Forest with cherry compote, whipped cream, and dark chocolate shavings.",
        sizes: "500g · ₹599 | 1kg · ₹999 | 1.5kg · ₹1,399",
        basePrice: "₹599",
        features: ["Cherry Compote", "Choco Shavings", "Whipped Cream"],
        eggless: true,
        sizePrices: [{ label: "500g · ₹599", price: "₹599", unit: "500g cake" }, { label: "1kg · ₹999", price: "₹999", unit: "1kg cake" }, { label: "1.5kg · ₹1,399", price: "₹1,399", unit: "1.5kg cake" }],
        params: ["Cherry Compote", "Dark Chocolate", "100% Eggless"],
    },
];

const heroStats = [
    { val: "8+", label: "Flavours" },
    { val: "500+", label: "Happy Orders" },
    { val: "Same Day", label: "Delivery" },
];

export default function Home() {
    const slideSequence = [1, 2, 7, 6];
    const [activeHero, setActiveHero] = useState(slideSequence[0]);
    const [selectedSize, setSelectedSize] = useState(0);
    const videoRef1 = useRef<HTMLVideoElement>(null);
    const videoRef2 = useRef<HTMLVideoElement>(null);
    const [activeVidIdx, setActiveVidIdx] = useState(1);
    const activeVidIdxRef = useRef(1);
    const [progress, setProgress] = useState(0);

    const getNextIndex = (currentIdx: number) => {
        let seqIdx = slideSequence.indexOf(currentIdx);
        if (seqIdx === -1) return slideSequence[0];
        seqIdx = (seqIdx + 1) % slideSequence.length;
        return slideSequence[seqIdx];
    };

    const hero = cakes[activeHero];
    const currentSize = hero.sizePrices[selectedSize];

    // Reset size when hero changes
    useEffect(() => { setSelectedSize(0); }, [activeHero]);

    // Handle crossfade when hero changes and initial load
    useEffect(() => {
        const v1 = videoRef1.current;
        const v2 = videoRef2.current;
        if (!v1 || !v2) return;

        // If first load, play first video explicitly since autoPlay is removed
        if (!v1.src || v1.src === window.location.href) {
            v1.src = hero.video || "/videos/hero.mp4";
            v1.load();
            v1.play().catch(console.error);
            return;
        }

        const newSrc = hero.video || "/videos/hero.mp4";
        const currentVid = activeVidIdxRef.current === 1 ? v1 : v2;
        const nextVid = activeVidIdxRef.current === 1 ? v2 : v1;

        if (currentVid.src.includes(newSrc.replace('/videos/', ''))) return; // already playing this

        const playNew = () => {
            nextVid.play().catch(console.error);
            nextVid.style.opacity = "1";
            currentVid.style.opacity = "0";
            activeVidIdxRef.current = activeVidIdxRef.current === 1 ? 2 : 1;
            setActiveVidIdx(activeVidIdxRef.current);
            setProgress(0);

            // Preload next logically
            setTimeout(() => {
                const nextSrc = cakes[getNextIndex(activeHero)].video;
                const inactiveVid = activeVidIdxRef.current === 1 ? videoRef2.current : videoRef1.current;
                if (inactiveVid && nextSrc && !inactiveVid.src.includes(nextSrc.replace('/videos/', ''))) {
                    inactiveVid.src = nextSrc;
                    inactiveVid.load();
                }
            }, 500);
        };

        if (nextVid.src.includes(newSrc.replace('/videos/', ''))) {
            if (nextVid.readyState >= 3) {
                playNew();
            } else {
                nextVid.oncanplay = () => {
                    playNew();
                    nextVid.oncanplay = null;
                };
            }
        } else {
            nextVid.src = newSrc;
            nextVid.oncanplay = () => {
                playNew();
                nextVid.oncanplay = null;
            };
            nextVid.load();
        }
    }, [activeHero, hero.video]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            (window as any).highlightCake = (cakeId: string) => {
                const card = document.getElementById('cake-' + cakeId);
                if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTimeout(() => {
                        card.classList.add('highlighted');
                        const onAnimEnd = () => {
                            card.classList.remove('highlighted');
                            card.removeEventListener('animationend', onAnimEnd);
                        };
                        card.addEventListener('animationend', onAnimEnd);
                    }, 300);
                } else {
                    const cat = document.getElementById('catalog');
                    if (cat) cat.scrollIntoView({ behavior: 'smooth' });
                }
            };
        }
    }, []);

    return (
        <main className="min-h-screen text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>
            <Navbar />

            {/* ── HERO ── */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-36 md:pt-28 pb-20 md:pb-36" style={{ background: "#1a1208" }}>
                {/* Cinematic video BG (Crossfading) */}
                <video
                    ref={videoRef1}
                    muted playsInline preload="auto"
                    className="hero-vid absolute inset-0 z-0 transition-opacity duration-1000"
                    style={{ opacity: 1 }}
                    onTimeUpdate={(e) => {
                        if (activeVidIdxRef.current === 1 && e.currentTarget.duration) {
                            setProgress((e.currentTarget.currentTime / e.currentTarget.duration) * 100);
                        }
                    }}
                    onEnded={() => {
                        if (activeVidIdxRef.current === 1) setActiveHero(prev => getNextIndex(prev));
                    }}
                />
                <video
                    ref={videoRef2}
                    muted playsInline preload="auto"
                    className="hero-vid absolute inset-0 z-0 transition-opacity duration-1000"
                    style={{ opacity: 0 }}
                    onTimeUpdate={(e) => {
                        if (activeVidIdxRef.current === 2 && e.currentTarget.duration) {
                            setProgress((e.currentTarget.currentTime / e.currentTarget.duration) * 100);
                        }
                    }}
                    onEnded={() => {
                        if (activeVidIdxRef.current === 2) setActiveHero(prev => getNextIndex(prev));
                    }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.7) 100%)" }} />

                {/* Content */}
                <div className="relative z-20 flex flex-col items-center px-4 md:px-6 max-w-4xl mx-auto w-full">
                    <motion.div key={activeHero} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-orange-300 mb-4">{hero.subName}</p>
                        <h1 className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tight leading-none mb-4 md:mb-6 drop-shadow-2xl" style={{ textShadow: "0 4px 60px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.6)" }}>{hero.name}</h1>
                        <p className="text-base md:text-lg text-gray-300 mb-8 max-w-lg mx-auto">{hero.desc}</p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8 md:mb-12">
                            <a
                                href={waLink(`Hi Dulcet Cakes! 🎂 I'd like to order a *${hero.name}* (${hero.basePrice}). Please confirm availability.`)}
                                target="_blank" rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-8 py-4 md:px-10 rounded-full text-lg md:text-xl font-bold text-white transition-transform hover:scale-105 active:scale-95"
                                style={{ background: "linear-gradient(to right, #f97316, #db2777)", boxShadow: "0 0 40px rgba(249,115,22,0.5)" }}
                            >
                                {WA_ICON}
                                Order on WhatsApp — {hero.basePrice}
                            </a>
                            <a href="#catalog" className="px-8 py-4 rounded-full text-base md:text-lg font-semibold border transition-all hover:bg-white/10" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                                Explore More ↓
                            </a>
                        </div>

                        {/* Stats bar - relative inside content */}
                        <div className="inline-flex w-full md:w-auto justify-between md:justify-center gap-4 md:gap-8 px-4 py-3 md:px-8 md:py-4 rounded-3xl md:rounded-full border" style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(12px)", borderColor: "rgba(255,255,255,0.1)" }}>
                            {heroStats.map((s, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-xl md:text-2xl font-black">{s.val}</div>
                                    <div className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Product Catalog ── */}
            <section id="catalog" className="py-20 md:py-24 px-4 md:px-6" style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}>
                <div className="flex items-center justify-center gap-2 mb-8 md:mb-12">
                    <span className="text-green-400 font-bold text-lg md:text-xl text-center">🌿 100% Pure Eggless Bakery</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">Our Cakes</h2>
                <p className="text-center text-gray-400 text-base md:text-lg mb-12 md:mb-16">Handcrafted for every occasion</p>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                    {cakes.map((cake, idx) => (
                        <motion.div
                            key={cake.id}
                            id={`cake-${cake.id}`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.07, duration: 0.5 }}
                            className="rounded-[24px] overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col"
                            style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
                            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                        >
                            {/* Accent bar */}
                            <div className="h-1.5 w-full shrink-0" style={{ background: cake.gradient }} />
                            {/* Media support (photo or emoji) */}
                            <div className="relative w-full aspect-square shrink-0 overflow-hidden" style={{ background: cake.gradient }}>
                                {cake.badge && (
                                    <span className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md" style={{ background: cake.badge.bg, color: cake.badge.color }}>
                                        {cake.badge.text}
                                    </span>
                                )}
                                {cake.photo ? (
                                    <img src={cake.photo} alt={cake.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-6xl">
                                        {cake.emoji}
                                    </div>
                                )}
                            </div>
                            {/* Body */}
                            <div className="p-5 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="pr-2">
                                        <div className="text-[1.15rem] font-bold leading-tight mb-1">{cake.name}</div>
                                        <div className="text-[0.82rem] text-gray-400">{cake.subName}</div>
                                    </div>
                                    <div className="text-xl font-black text-orange-400 whitespace-nowrap">{cake.basePrice}</div>
                                </div>
                                <p className="text-[0.83rem] text-gray-400 leading-[1.6] mb-2">{cake.desc}</p>
                                <p className="text-[0.72rem] text-gray-500 mb-3">{cake.sizes}</p>
                                {cake.eggless && (
                                    <span className="inline-flex items-center text-[0.72rem] px-3 py-1 rounded-full mb-4 w-max font-bold" style={{ background: "rgba(34,197,94,0.15)", border: "1px solid rgba(34,197,94,0.3)", color: "#4ade80" }}>🌿 Eggless</span>
                                )}
                                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                                    {cake.features.map((f, i) => (
                                        <span key={i} className="text-[0.7rem] px-2.5 py-1 rounded-full text-gray-300" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.1)" }}>{f}</span>
                                    ))}
                                </div>
                                <a
                                    href={waLink(`Hi Dulcet Cakes! 🎂 I'd like to order a *${cake.name}* (${cake.basePrice}). Please confirm availability and delivery.`)}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-white transition-transform hover:scale-105 active:scale-95 text-[0.9rem] leading-none"
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
                className="py-16 md:py-24 px-4 md:px-6 flex justify-center"
            >
                <div className="max-w-3xl w-full rounded-[2rem] md:rounded-[3rem] p-[1px]" style={{ background: "linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent)" }}>
                    <div className="rounded-[2rem] md:rounded-[3rem] px-5 py-10 md:p-16 text-center" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(40px)" }}>
                        <h2 className="text-2xl md:text-3xl font-light mb-2">Ready to indulge?</h2>
                        <div className="text-6xl md:text-8xl font-black mb-2" style={{ background: "linear-gradient(to right, #fb923c, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
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
                            className="inline-flex items-center justify-center w-full md:w-auto gap-3 px-8 md:px-12 py-4 md:py-5 rounded-full text-xl md:text-2xl font-bold text-white transition-all hover:scale-105 active:scale-95 mb-10 md:mb-12"
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
            <div className="fixed bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-40 flex px-2 py-1.5 md:p-2 rounded-full border shadow-2xl max-w-[calc(100vw-32px)] overflow-x-auto whitespace-nowrap" style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(20px)", borderColor: "rgba(255,255,255,0.12)" }}>
                {slideSequence.map((cakeIdx) => {
                    const c = cakes[cakeIdx];
                    if (!c || !c.video) return null;
                    return (
                        <button
                            key={c.id}
                            onClick={() => { setActiveHero(cakeIdx); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                            className="relative overflow-hidden px-3 md:px-4 py-2 rounded-full text-[11px] md:text-xs font-medium transition-all shrink-0"
                            style={{
                                color: activeHero === cakeIdx ? "white" : "rgba(255,255,255,0.6)",
                                background: activeHero === cakeIdx ? "rgba(255,255,255,0.15)" : "none",
                                boxShadow: activeHero === cakeIdx ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
                            }}
                        >
                            <span className="relative z-10">{c.name}</span>
                            {activeHero === cakeIdx && (
                                <div
                                    className="absolute top-0 left-0 h-full bg-white/30 z-0 transition-all duration-100 ease-linear pointer-events-none"
                                    style={{ width: `${progress}%` }}
                                />
                            )}
                        </button>
                    );
                })}
            </div>
        </main>
    );
}
