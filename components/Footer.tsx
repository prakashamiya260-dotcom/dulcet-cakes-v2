import React from "react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500 mb-4">
                        Dulcet Cakes
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Crafting premium, handcrafted cakes for your most special occasions.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-orange-400">Shop</h4>
                    <ul className="space-y-2 text-sm text-gray-400 relative">
                        <li><a href="#" className="hover:text-white transition">Classic Chocolate</a></li>
                        <li><a href="#" className="hover:text-white transition">Strawberry Bliss</a></li>
                        <li><a href="#" className="hover:text-white transition">Vanilla Dream</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-orange-400">Support</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                        <li><a href="#" className="hover:text-white transition">Delivery Info</a></li>
                        <li><a href="#" className="hover:text-white transition">Refunds</a></li>
                        <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-orange-400">Newsletter</h4>
                    <p className="text-sm text-gray-400 mb-4">Join our community for sweet updates.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-4 py-2 bg-gray-800 text-white rounded-l-md outline-none focus:ring-1 focus:ring-orange-500 flex-1"
                        />
                        <button className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-r-md transition">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Dulcet Cakes. All rights reserved.
            </div>
        </footer>
    );
}
