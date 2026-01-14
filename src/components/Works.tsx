"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Tokyo Tower View",
        category: "GLOBAL LOGISTICS",
        image: "/assets/project-1.jpg",
    },
    {
        title: "Food Commerce",
        category: "E-COMMERCE",
        image: "/assets/project-2.jpg",
    },
    {
        title: "Minimal Design",
        category: "CREATIVE",
        image: "/assets/project-3.jpg",
    },
    {
        title: "Package Solution",
        category: "LOGISTICS",
        image: "/assets/project-4.jpg",
    },
];

export default function Works() {
    return (
        <section id="works" className="py-32 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-16">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-[48px] md:text-[64px] font-serif tracking-tight"
                    >
                        Works
                    </motion.h2>
                    <p className="text-[10px] md:text-[12px] font-bold tracking-[2px] uppercase opacity-40 mb-4">
                        SELECTED PROJECTS / 2024-2025
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index % 2 * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#f0f0f0] mb-8">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-[20px] md:text-[24px] font-serif mb-2">{project.title}</h3>
                                    <p className="text-[12px] font-bold tracking-[1px] opacity-40 uppercase">{project.category}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                                    <ArrowUpRight size={20} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
