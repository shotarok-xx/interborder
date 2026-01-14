"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        closed: {
            opacity: 0,
            y: "-100%",
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as any,
            },
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as any,
            },
        },
    };

    const leftLinks = [
        { name: "TOP", href: "/" },
        { name: "MISSION", href: "#mission" },
        { name: "WORKS", href: "#works" },
    ];

    const rightLinks = [
        { name: "ABOUT", href: "#about" },
        { name: "CONTACT", href: "#contact" },
    ];

    const allLinks = [...leftLinks, ...rightLinks];

    return (
        <header>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-[100] px-6 h-[85px] md:px-12 flex justify-between items-center text-white border-b border-white/10"
            >
                {/* Desktop Layout */}
                <div className="hidden md:flex flex-1 justify-start gap-12">
                    {leftLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[14px] font-bold tracking-[2px] transition-all duration-300 text-white hover:opacity-50"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <Link
                    href="/"
                    className="relative w-[180px] h-[30px] mx-auto md:absolute md:left-1/2 md:-translate-x-1/2"
                >
                    <Image
                        src="/assets/logo.png"
                        alt="INTERBORDER"
                        fill
                        className="object-contain brightness-0 invert"
                        priority
                    />
                </Link>

                <div className="hidden md:flex flex-1 justify-end gap-12">
                    {rightLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[14px] font-bold tracking-[2px] transition-all duration-300 text-white hover:opacity-50"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 relative z-[110]"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-black z-[90] flex flex-col justify-center items-center text-white"
                    >
                        <div className="flex flex-col space-y-12 text-center">
                            {allLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * i + 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-[24px] font-bold tracking-[3px] hover:opacity-50 transition-opacity text-white"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
