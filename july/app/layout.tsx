import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Dulcet Cakes | Future of Sweetness",
    description: "Premium handcrafted cakes, perfectly baked for every occasion.",
    icons: {
        icon: "/logo-circle.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
            </head>
            <body className={outfit.className}>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TKK2NDMM"
                height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
                {children}
            </body>
        </html>
    );
}
