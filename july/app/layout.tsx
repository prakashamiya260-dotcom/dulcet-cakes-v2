import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dulcet Cakes | Future of Sweetness",
    description: "Taste the best cake in Patna! Dulcet Cakes is a trusted premium home baker delivering delicious, handmade, and fresh custom cakes directly to your door.",
    keywords: ["best cake in patna", "best cake shop in patna", "cake delivery in patna", "online cake delivery in patna", "order cake online", "cake bakery near me", "customized cake in patna", "eggless cake patna"],
    icons: {
        icon: "/logo-circle.png",
    },
    openGraph: {
        images: [
            {
                url: "https://dulcetcakes.com/public/sunshine-cake.jpg", 
                width: 1200,
                height: 630,
                alt: "Dulcet Cakes - Sunshine Cake",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Bakery",
        "name": "Dulcet Cakes",
        "image": [
            "https://dulcetcakes.com/public/sunshine-cake.jpg",
            "https://dulcetcakes.com/public/black_forest_cake.jpg"
        ],
        "url": "https://dulcetcakes.com",
        "telephone": "99999789502",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Patna",
            "addressRegion": "Bihar",
            "addressCountry": "IN"
        }
    };

    return (
        <html lang="en">
            <head>
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TKK2NDMM');
                    `}
                </Script>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={outfit.className}>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKK2NDMM"
                height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
                {children}
            </body>
        </html>
    );
}
