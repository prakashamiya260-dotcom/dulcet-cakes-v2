"use client";
import React, { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

interface ProductBottleScrollProps {
    folderPath: string;
}

export function ProductBottleScroll({ folderPath }: ProductBottleScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const frameCount = 200;
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef(0);

    useEffect(() => {
        // Preload images lazily
        imagesRef.current = [];
        for (let i = 1; i <= frameCount; i++) {
            const img = new window.Image();
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `${folderPath}/ezgif-frame-${paddedIndex}.jpg`;
            imagesRef.current.push(img);
        }
    }, [folderPath]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const renderFrame = (index: number) => {
            const img = imagesRef.current[index];
            if (!img) return;

            const draw = () => {
                if (!canvas || !ctx) return;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                const hRatio = canvas.width / img.naturalWidth;
                const vRatio = canvas.height / img.naturalHeight;
                const ratio = Math.min(hRatio, vRatio);
                const centerShiftX = (canvas.width - img.naturalWidth * ratio) / 2;
                const centerShiftY = (canvas.height - img.naturalHeight * ratio) / 2;
                ctx.drawImage(
                    img,
                    0, 0, img.naturalWidth, img.naturalHeight,
                    centerShiftX, centerShiftY, img.naturalWidth * ratio, img.naturalHeight * ratio
                );
            };

            if (img.complete && img.naturalWidth > 0) {
                draw();
            } else {
                img.onload = draw;
            }
        };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(currentFrameRef.current);
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const unsubscribe = scrollYProgress.on("change", (latest) => {
            const frameIndex = Math.min(frameCount - 1, Math.max(0, Math.floor(latest * frameCount)));
            currentFrameRef.current = frameIndex;
            requestAnimationFrame(() => renderFrame(frameIndex));
        });

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            unsubscribe();
        };
    }, [scrollYProgress]);

    return (
        <div ref={containerRef} className="h-[500vh] w-full relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
        </div>
    );
}
