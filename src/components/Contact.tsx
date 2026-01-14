"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { submitContact } from "@/app/actions";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);

        try {
            await submitContact(formData);
            setSubmitted(true);
        } catch (error) {
            console.error(error);
            alert("送信に失敗しました。もう一度お試しください。");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="bg-[#F2F2F2] py-24 md:py-32 px-6 md:px-12">
            <div className="max-w-[1100px] mx-auto">
                {/* Our Office Section */}
                <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-start">
                    <div>
                        <h2 className="text-[40px] font-bold tracking-tight mb-8">OUR OFFICE</h2>
                        <div className="mb-12">
                            <h4 className="text-[12px] font-bold tracking-[2px] uppercase mb-6 opacity-40">LOCATION</h4>
                            <div className="text-[15px] leading-[1.8] font-light text-black/80 space-y-6">
                                <p>
                                    Nishi-Gotanda 3-8-3<br />
                                    Machihara BLDG 3F<br />
                                    Shinagawa,<br />
                                    Tokyo, 141-0031
                                </p>
                                <p className="pt-2">
                                    〒141-0031<br />
                                    東京都品川区西五反田3-8-3<br />
                                    町原ビル3階
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://www.google.com/maps/search/東京都品川区西五反田3-8-3+町原ビル"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#333] text-white text-[12px] font-bold tracking-[2px] px-8 py-4 rounded-full hover:bg-black transition-colors uppercase"
                        >
                            GOOGLE MAP
                        </a>
                    </div>
                    <div className="relative aspect-square md:aspect-[4/3] w-full bg-white overflow-hidden rounded-sm shadow-sm">
                        <iframe
                            src="https://www.google.com/maps?q=東京都品川区西五反田3-8-3+町原ビル&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(1) contrast(1.1) opacity(0.8)' }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-16">
                    <div className="md:col-span-2">
                        <h2 className="text-[40px] font-bold tracking-tight mb-8">Contact Us</h2>
                        <p className="text-[15px] font-light leading-relaxed text-black/60 max-w-[320px]">
                            製品情報、サービス詳細、リクルート、取材、その他お問い合わせはこちらよりお願いいたします。
                        </p>
                    </div>
                    <div className="md:col-span-3">
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="h-full flex flex-col justify-center"
                            >
                                <p className="text-[18px] font-light mb-4">お問い合わせありがとうございます。</p>
                                <p className="text-[15px] font-light text-black/60">内容を確認次第、担当者よりご連絡させていただきます。</p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="mt-8 text-[12px] font-bold tracking-[2px] underline uppercase"
                                >
                                    BACK TO FORM
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <label className="block text-[14px] font-light mb-4 text-black/80">
                                        名前 <span className="text-[12px] opacity-40 ml-1">(required)</span>
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <input
                                                required
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                className="w-full bg-white border border-black/10 px-4 py-3 text-[15px] font-light focus:outline-none focus:border-black/30 transition-colors"
                                            />
                                            <span className="text-[11px] font-light text-black/40 mt-2 block">First Name</span>
                                        </div>
                                        <div>
                                            <input
                                                required
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                className="w-full bg-white border border-black/10 px-4 py-3 text-[15px] font-light focus:outline-none focus:border-black/30 transition-colors"
                                            />
                                            <span className="text-[11px] font-light text-black/40 mt-2 block">Last Name</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-[14px] font-light mb-4 text-black/80">
                                        Eメール <span className="text-[12px] opacity-40 ml-1">(required)</span>
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        className="w-full bg-white border border-black/10 px-4 py-3 text-[15px] font-light focus:outline-none focus:border-black/30 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[14px] font-light mb-4 text-black/80">
                                        メッセージ <span className="text-[12px] opacity-40 ml-1">(required)</span>
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        rows={6}
                                        className="w-full bg-white border border-black/10 px-4 py-3 text-[15px] font-light focus:outline-none focus:border-black/30 transition-colors resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#222] text-white text-[12px] font-bold tracking-[2px] px-12 py-4 rounded-full hover:bg-black transition-colors uppercase disabled:opacity-50"
                                >
                                    {isSubmitting ? "送信中..." : "送信"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                <div className="mt-48 pt-12 border-t border-black/5 text-center">
                    <p className="text-[12px] font-light tracking-[1px] text-black/40">
                        Copyright 2018 interborder inc
                    </p>
                </div>
            </div>
        </section>
    );
}
