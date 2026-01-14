"use client";

import { motion } from "framer-motion";

export default function Mission() {
    return (
        <section id="mission" className="py-32 px-6 md:px-12 bg-[#F8F8F8]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-32">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex-1"
                >
                    <h2 className="text-[32px] md:text-[40px] font-bold tracking-tight mb-8">Our Mission</h2>
                    <p className="text-[14px] md:text-[16px] font-light leading-relaxed text-black/60 mb-8">
                        私たちのミッション
                    </p>
                    <div className="space-y-6 text-[15px] md:text-[16px] leading-relaxed font-light text-black/80">
                        <p>
                            インターボーダーは、インターナショナルが国と国の間という意味をなすように、ボーダー、つまり、国境の間を行き来するという造語から会社名としています。
                        </p>
                        <p>
                            代表の久保は、日本で生まれ、アメリカで育ち、中国で起業し、日本の商品の良さや信頼性、マーケットの可能性を見続けていました。
                        </p>
                        <p>
                            そんな中、日本には多くの独自の商品や世界観があることを世界へ発信していくために、この会社を創業。
                        </p>
                        <p>
                            久保自身が中国に７年間滞在していた際、空気汚染、食品の化学物質により体を壊し、緊急入院までに至ったことで、中国の食事事情に注目し、
                        </p>
                        <p>
                            日本の安全な食品を中国へお届けする事業を始めました。
                        </p>
                        <p>
                            今では、食だけでなく、日本のMade In Japanを世界へ届けることをミッションにしています。
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="md:w-[300px] flex flex-col gap-12 pt-4"
                >
                    <div>
                        <h4 className="text-[12px] font-bold tracking-[2px] uppercase mb-4 opacity-40">Phone</h4>
                        <p className="text-[15px] font-light">(03) 4400-6909</p>
                    </div>
                    <div>
                        <h4 className="text-[12px] font-bold tracking-[2px] uppercase mb-4 opacity-40">Location</h4>
                        <p className="text-[15px] font-light leading-relaxed">
                            Nishi-Gotanda 3-8-3<br />
                            Machihara BLDG 3F<br />
                            Shinagawa,<br />
                            Tokyo, 141-0031
                        </p>
                    </div>
                    <div>
                        <h4 className="text-[12px] font-bold tracking-[2px] uppercase mb-4 opacity-40">Hours</h4>
                        <p className="text-[15px] font-light">M-F 10am-6pm</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
