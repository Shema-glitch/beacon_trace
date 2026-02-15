"use client";
import Link from "next/link";
import { MoveRight, Wifi, Smartphone, Bluetooth, Battery, Info } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        }
    },
};

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-32 bg-bg-primary">
            <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-2 lg:gap-8 items-center">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    className="flex flex-col justify-center space-y-8"
                >
                    <motion.div variants={itemVariants} className="inline-flex w-fit items-center rounded-full border border-border bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent animate-pulse"></span>
                        Prototype Phase • Join waitlist
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl text-balance">
                        Locate Devices. Completely Cloudless.
                    </motion.h1>

                    <motion.p variants={itemVariants} className="max-w-lg text-lg text-text-secondary leading-relaxed">
                        The open-source, privacy-first alternative for Android device tracking.
                        Works offline using peer-to-peer Bluetooth. No servers. No accounts.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col space-y-3">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="#waitlist"
                                className={buttonVariants("primary", "lg")}
                            >
                                Join the Waitlist
                            </Link>

                            <Link
                                href="https://github.com/Start-Shema/Ghost_Finder_Project"
                                target="_blank"
                                className={`group flex items-center ${buttonVariants("ghost", "lg")}`}
                            >
                                View on GitHub
                                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                        <p className="text-xs text-text-secondary italic">
                            *Prototype build. Core functionality requires active development setup.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-4 text-xs font-mono text-text-secondary">
                        Prototype v0.8 • Local Bluetooth Only
                    </motion.div>
                </motion.div>

                {/* Visual: Enhanced Schematic UI */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="relative lg:h-full flex items-center justify-center lg:justify-end"
                >
                    <div className="relative w-full max-w-[320px] rounded-[3rem] border-4 border-zinc-800 bg-black p-2 shadow-2xl ring-1 ring-white/10">
                        {/* Screen Content */}
                        <div className="relative overflow-hidden rounded-[2.5rem] bg-zinc-950 aspect-[9/19] flex flex-col">

                            {/* Status Bar Mock */}
                            <div className="flex justify-between px-6 py-3 text-[10px] text-zinc-400 font-mono items-center">
                                <span>09:41</span>
                                <div className="flex gap-2 items-center">
                                    <Bluetooth size={12} className="text-zinc-500" />
                                    <Wifi size={12} className="text-zinc-600" />
                                    <div className="flex items-center gap-0.5">
                                        <span className="text-[9px]">100%</span>
                                        <Battery size={12} className="text-zinc-400" />
                                    </div>
                                </div>
                            </div>

                            {/* App Content */}
                            <div className="flex-1 px-6 py-4 flex flex-col relative z-10">

                                {/* Header */}
                                <div className="flex justify-between items-center mb-8">
                                    <div className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                                        SCANNING
                                    </div>
                                    <Info size={16} className="text-zinc-600" />
                                </div>

                                {/* Target Device Card */}
                                <div className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 mb-8 flex flex-col items-center space-y-4">
                                    <div className="relative">
                                        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center ring-1 ring-accent/20">
                                            <Smartphone className="text-accent h-10 w-10" />
                                        </div>
                                        {/* Ripple Effect */}
                                        <div className="absolute inset-0 rounded-full border border-accent/20 animate-[ping_2s_linear_infinite] opacity-50"></div>
                                    </div>

                                    <div className="text-center">
                                        <h3 className="font-sans font-semibold text-lg text-white">Pixel 7 Pro</h3>
                                        <p className="font-mono text-xs text-zinc-500 mt-1">ID: 8A:2F:11:4C:C9</p>
                                        <div className="mt-3 inline-flex items-center gap-1.5 px-2 py-1 bg-accent/10 rounded text-[10px] font-medium text-accent">
                                            <Bluetooth size={10} />
                                            CONNECTED
                                        </div>
                                    </div>
                                </div>

                                {/* Signal Meter */}
                                <div className="w-full space-y-6 flex-1 flex flex-col justify-center">
                                    <div className="flex justify-between text-[10px] text-zinc-500 font-mono tracking-wider uppercase">
                                        <span>Proximity</span>
                                        <span>Strong</span>
                                    </div>

                                    {/* Meter SVG */}
                                    <div className="h-16 flex gap-1.5 items-end justify-center px-4">
                                        {[30, 45, 60, 75, 90, 60, 40].map((h, i) => (
                                            <div
                                                key={i}
                                                className={`w-full rounded-sm transition-all duration-300 ${i === 4 ? 'bg-accent shadow-[0_0_15px_rgba(34,197,94,0.4)]' : 'bg-zinc-800'}`}
                                                style={{ height: `${h}%` }}
                                            />
                                        ))}
                                    </div>

                                    <div className="text-center">
                                        <div className="font-mono text-3xl text-white font-bold tracking-tighter">
                                            -68 <span className="text-sm text-zinc-500 font-normal">dBm</span>
                                        </div>
                                        <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-widest">Signal Strength</p>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="mt-auto pt-6">
                                    <button className="w-full py-4 bg-white text-black font-bold rounded-xl text-sm hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5">
                                        PING DEVICE
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
