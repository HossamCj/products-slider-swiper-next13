/* eslint-disable @next/next/no-sync-scripts */
import {Inter} from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Products Slider Component",
    description: "Created by HossamCj",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
                />
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
