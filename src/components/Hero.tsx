"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-[70vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/hero-bg.jpg"
                    alt="Clouds Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20" />
            </div>

            <div className="relative z-10 text-center text-white px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-5xl font-extrabold tracking-widest text-white drop-shadow-lg"
                >
                    MADE IN JAPANを世界に。
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="text-[12px] md:text-[14px] font-bold tracking-[4px] uppercase opacity-80">
                        MADE IN JAPAN × WORLD
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <div className="w-[1px] h-24 bg-white/30 relative overflow-hidden">
                        <motion.div
                            animate={{ y: [0, 96] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-12 bg-white"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
