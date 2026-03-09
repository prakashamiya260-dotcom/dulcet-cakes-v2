"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "framer-motion";

interface ProductBottleScrollProps {
    folderPath: string;
}

export function ProductBottleScroll({ folderPath }: ProductBottleScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Preload images
    const frameCount = 200;
    const imagesRef = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        // Zero padded e.g. 001, 100
        const loadImages = () => {
            for (let i = 1; i <= frameCount; i++) {
                const img = new Image();
                const paddedIndex = i.toString().padStart(3, "0");
                img.src = `${folderPath}/ezgif-frame-${paddedIndex}.jpg`;
                imagesRef.current.push(img);
            }
        };
        loadImages();
    }, [folderPath]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Handle Resize
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(0);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const renderFrame = (index: number) => {
            if (!ctx || !canvas) return;
            const img = imagesRef.current[index];
            if (img && img.complete) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);

                // Calculate object-fit: contain logic for the canvas
                const hRatio = canvas.width / img.width;
                const vRatio = canvas.height / img.height;
                const ratio = Math.min(hRatio, vRatio);
                const centerShiftX = (canvas.width - img.width * ratio) / 2;
                const centerShiftY = (canvas.height - img.height * ratio) / 2;

                ctx.drawImage(
                    img,
                    0, 0, img.width, img.height,
                    centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
                );
            } else if (img) {
                img.onload = () => renderFrame(index);
            }
        };

        const unsubscribe = scrollYProgress.on("change", (latest) => {
            // Map progress 0-1 to frame 0-199
            const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.floor(latest * frameCount)));
            requestAnimationFrame(() => renderFrame(frameIndex));
        });

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            unsubscribe();
        };
    }, [scrollYProgress]);

    return (
        <div ref={containerRef} className="h-[500vh] w-full relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                />
            </div>
        </div>
    );
}
