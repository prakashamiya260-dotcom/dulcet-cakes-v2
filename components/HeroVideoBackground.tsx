"use client";
import React from "react";

export function HeroVideoBackground() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Cinematic video background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/hero.mp4"
            />
            {/* Dark gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
        </div>
    );
}
