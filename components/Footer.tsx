import React from "react";

export function Footer() {
    return (
        <footer style={{ background: "#111827", padding: "48px 24px 24px" }}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <div className="text-2xl font-bold mb-3" style={{ background: "linear-gradient(to right, #fb923c, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        Dulcet Cakes
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">Crafting premium, handcrafted cakes for your most special occasions. Patna&apos;s artisanal cake studio.</p>
                    <div className="inline-block mt-3 px-3 py-1 rounded-md text-orange-400 text-xs font-medium uppercase tracking-widest" style={{ border: "1px solid rgba(249,115,22,0.3)" }}>
                        FSSAI Lic. XXXXXXXXXX
                    </div>
                </div>

                {/* Our Cakes */}
                <div>
                    <h4 className="font-semibold text-orange-400 mb-4 text-sm">Our Cakes</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {["Classic Chocolate", "Strawberry Bliss", "Vanilla Dream", "Red Velvet", "Belgian Dark Chocolate", "Eggless Cakes", "Custom Designer Cakes"].map(c => (
                            <li key={c}><a href="#catalog" className="hover:text-white transition-colors">{c}</a></li>
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
                        <div className="flex items-center gap-2">📞 +91 98738 13095</div>
                        <div className="flex items-center gap-2">💬 WhatsApp: +91 98738 13095</div>
                        <div className="flex items-center gap-2">📧 hello@dulcetcakes.in</div>
                        <div className="flex items-center gap-2">📍 Patna, Bihar</div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
                © 2026 Dulcet Cakes. All rights reserved. Handcrafted with ❤️ in Patna.
            </div>
        </footer>
    );
}
