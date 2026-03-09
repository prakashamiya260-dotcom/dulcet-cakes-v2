export interface Product {
    id: string;
    name: string;
    subName: string;
    price: string;
    description: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    features: string[];
    stats: { label: string; val: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    detailsSection: { title: string; description: string; imageAlt: string };
    freshnessSection: { title: string; description: string };
    buyNowSection: {
        price: string;
        unit: string;
        processingParams: string[];
        deliveryPromise: string;
        returnPolicy: string;
    };
}

export const products: Product[] = [
    {
        id: "classic-chocolate",
        name: "Classic Chocolate",
        subName: "Decadence redefined.",
        price: "₹850",
        description: "Rich Dark Cocoa - Moist Sponge - Premium Ganache",
        folderPath: "/images/cake1",
        themeColor: "#4E342E",
        gradient: "linear-gradient(135deg, #4E342E 0%, #212121 100%)",
        features: ["Rich Dark Cocoa", "Moist Sponge", "Premium Ganache"],
        stats: [{ label: "Cocoa", val: "70%" }, { label: "Sweetness", val: "Balanced" }, { label: "Joy", val: "100%" }],
        section1: { title: "Classic Chocolate.", subtitle: "Decadence redefined." },
        section2: { title: "A symphony of cocoa.", subtitle: "Layers of moist, dark chocolate sponge enveloped in silky ganache." },
        section3: { title: "Handcrafted perfection.", subtitle: "Baked fresh daily using ethically sourced, premium cocoa beans." },
        section4: { title: "Indulgence without compromise.", subtitle: "" },
        detailsSection: {
            title: "The Ultimate Chocolate Experience",
            description: "Our Classic Chocolate Cake uses only the finest dark chocolate couverture. Known for its rich depth and velvety texture, every bite is a testament to our artisanal baking process. It's not just a cake; it's a celebration in every slice.",
            imageAlt: "Chocolate Cake Details"
        },
        freshnessSection: {
            title: "Oven to Table",
            description: "We believe in absolute freshness. From our bakery to your celebration, our process ensures the cake retains its moisture and fresh-baked aroma. Carefully packaged in temperature-controlled boxes, it arrives exactly as it left our kitchen."
        },
        buyNowSection: {
            price: "₹850",
            unit: "per 500g cake",
            processingParams: ["Freshly Baked", "Eggless Option", "Premium Cocoa"],
            deliveryPromise: "Next-day delivery available in Patna. Keeps perfectly fresh for 3 days.",
            returnPolicy: "100% Satisfaction Guarantee. Taste the love, or we make it right."
        }
    },
    {
        id: "strawberry-bliss",
        name: "Strawberry Bliss",
        subName: "Berry beautiful.",
        price: "₹950",
        description: "Fresh Strawberries - Light Vanilla Sponge - Whipped Cream",
        folderPath: "/images/cake1",
        themeColor: "#E53935",
        gradient: "linear-gradient(135deg, #E53935 0%, #B71C1C 100%)",
        features: ["Fresh Berries", "Light Sponge", "Whipped Cream"],
        stats: [{ label: "Fruit", val: "Fresh" }, { label: "Cream", val: "Light" }, { label: "Colors", val: "Natural" }],
        section1: { title: "Strawberry Bliss.", subtitle: "Berry beautiful." },
        section2: { title: "A burst of freshness.", subtitle: "Delicate vanilla sponge layered with freshly picked strawberries and cream." },
        section3: { title: "Light as air.", subtitle: "Our signature whipped cream perfectly balances the tart sweetness of the berries." },
        section4: { title: "A taste of spring.", subtitle: "" },
        detailsSection: {
            title: "Seasonal Perfection",
            description: "We source our strawberries only during peak season from local farms. The vibrant red berries are generously folded into light, fluffy cream, nestled between soft vanilla sponges that melt in your mouth.",
            imageAlt: "Strawberry Cake Details"
        },
        freshnessSection: {
            title: "Delicately Crafted",
            description: "Fresh fruit requires delicate handling. Our Strawberry Bliss is assembled only hours before delivery to ensure the berries are crisp and the cream is perfectly fluffy. Never frozen, always fresh."
        },
        buyNowSection: {
            price: "₹950",
            unit: "per 500g cake",
            processingParams: ["Real Fruits", "Light Cream", "Eggless Option"],
            deliveryPromise: "Hand-delivered in insulated boxes to preserve the fresh cream and berries.",
            returnPolicy: "Not perfectly fresh? Replace instantly."
        }
    },
    {
        id: "vanilla-dream",
        name: "Vanilla Dream",
        subName: "Classic elegance.",
        price: "₹750",
        description: "Madagascar Vanilla - Buttercream Frosting - Soft Crumb",
        folderPath: "/images/cake1",
        themeColor: "#F57F17",
        gradient: "linear-gradient(135deg, #F57F17 0%, #E65100 100%)",
        features: ["Madagascar Vanilla", "Buttercream", "Soft Crumb"],
        stats: [{ label: "Vanilla", val: "Pure" }, { label: "Texture", val: "Soft" }, { label: "Flavor", val: "Rich" }],
        section1: { title: "Vanilla Dream.", subtitle: "Classic elegance." },
        section2: { title: "Simplicity perfected.", subtitle: "A tender, buttery sponge infused with pure Madagascar vanilla." },
        section3: { title: "Whipped to perfection.", subtitle: "Our classic buttercream frosting provides a smooth, sweet finish." },
        section4: { title: "The ultimate crowd-pleaser.", subtitle: "" },
        detailsSection: {
            title: "The Heart of Baking",
            description: "Sometimes the simplest flavors are the hardest to perfect. Our Vanilla Dream relies on high-quality ingredients—real butter, farm-fresh dairy, and authentic Madagascar vanilla bean paste to deliver a complex, comforting flavor profile.",
            imageAlt: "Vanilla Cake Details"
        },
        freshnessSection: {
            title: "Baked to Order",
            description: "Every Vanilla Dream Cake is baked precisely to your order. We temper our buttercream and rest the sponges to ensure structurally sound, moist layers that arrive tasting as if they just came out of our oven."
        },
        buyNowSection: {
            price: "₹750",
            unit: "per 500g cake",
            processingParams: ["Real Vanilla", "Hand Whipped", "Eggless Option"],
            deliveryPromise: "Reliable, secure delivery throughout Patna. Perfect for any celebration.",
            returnPolicy: "Our quality promise ensures satisfaction every time."
        }
    }
];
