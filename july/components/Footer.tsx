import React from "react";

export function Footer() {
    const handleCakeClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string) => {
        const nameMap: { [key: string]: string } = {
            "Vanilla Dream": "vanilla-dream",
            "Strawberry Bliss": "strawberry-bliss",
            "Classic Chocolate": "classic-chocolate",
            "Red Velvet": "red-velvet",
            "Belgian Dark Chocolate": "belgian-dark",
            "Salted Caramel Cake": "salted-caramel-cake",
            "Golden Rocher Cake": "golden-rocher",
            "Biscoff Heaven": "biscoff-heaven",
            "Saffron Rasmalai Cake": "saffron-rasmalai",
            "Midnight Mousse": "midnight-mousse",
            "KitKat Krunch Blast": "kitkat-krunch-blast",
            "Oreo Obsession": "oreo-obsession",
            "Nutella Nirvana": "nutella-nirvana"
        };
        const id = nameMap[name];
        if (id && (window as any).highlightCake) {
            e.preventDefault();
            (window as any).highlightCake(id);
        }
    };

    return (
        <footer style={{ background: "#111827", padding: "48px 24px 24px" }}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-8">
                {/* Brand */}
                <div>
                    <div className="text-2xl font-bold mb-3" style={{ background: "linear-gradient(to right, #fb923c, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        Dulcet Cakes
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">Crafting premium, handcrafted cakes for your most special occasions. Patna&apos;s artisanal cake studio.</p>
                    <div className="inline-block mt-3 px-3 py-1 rounded-md text-orange-400 text-xs font-medium uppercase tracking-widest" style={{ border: "1px solid rgba(249,115,22,0.3)" }}>
                        FSSAI Lic. 20426001000633
                    </div>
                </div>

                {/* Our Cakes Column 1 */}
                <div>
                    <h4 className="font-semibold text-orange-400 mb-4 text-sm">Our Cakes</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {["Vanilla Dream", "Strawberry Bliss", "Classic Chocolate", "Red Velvet", "Belgian Dark Chocolate", "Salted Caramel Cake", "Golden Rocher Cake", "Biscoff Heaven"].map(c => (
                            <li key={c}>
                                <a
                                    href="#catalog"
                                    onClick={(e) => handleCakeClick(e, c)}
                                    className="hover:text-white transition-colors"
                                >
                                    {c}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Our Cakes Column 2 */}
                <div>
                    <h4 className="font-semibold text-orange-400 mb-4 text-sm opacity-0 select-none pointer-events-none hidden lg:block">&nbsp;</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {["Saffron Rasmalai Cake", "Midnight Mousse", "KitKat Krunch Blast", "Oreo Obsession", "Nutella Nirvana", "Eggless Cakes", "Custom Designer Cakes"].map(c => (
                            <li key={c}>
                                <a
                                    href="#catalog"
                                    onClick={(e) => handleCakeClick(e, c)}
                                    className="hover:text-white transition-colors"
                                >
                                    {c}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support & Delivery */}
                <div>
                    <h4 className="font-semibold text-orange-400 mb-4 text-sm">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-400 mb-6">
                        {["FAQ", "Delivery Info", "Refund Policy", "Contact Us"].map(s => (
                            <li key={s}><a href="#" className="hover:text-white transition-colors">{s}</a></li>
                        ))}
                    </ul>
                    <h4 className="font-semibold text-orange-400 mb-3 text-sm">Delivery Areas</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Boring Road, Kankarbagh, Patliputra, Bailey Road, Ashiana, Digha, Danapur, Fraser Road & all Patna areas
                    </p>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold text-orange-400 mb-4 text-sm">Get in Touch</h4>
                    <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-center gap-2 hover:text-white transition-colors">
                            📞 <a href="tel:+919999789502">+91 99997 89502</a>
                        </div>
                        <div className="flex items-center gap-2 hover:text-white transition-colors">
                            💬 WhatsApp: <a href="https://wa.me/919999789502" target="_blank" rel="noopener noreferrer">+91 99997 89502</a>
                        </div>
                        <div className="flex items-center gap-2 hover:text-white transition-colors">
                            📧 <a href="mailto:dulcetcakes100@gmail.com">dulcetcakes100@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-2 hover:text-white transition-colors">
                            📍 <a href="https://maps.google.com/?q=Dulcet+Cakes,+A/139,+housing+board+colony,+kankarbagh,+patna,+800020" target="_blank" rel="noopener noreferrer">Kankarbagh, Patna</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
                © 2026 Dulcet Cakes. All rights reserved. Handcrafted with ❤️ in Patna.
            </div>
        </footer>
    );
}
