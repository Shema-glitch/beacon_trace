"use client";
import Link from "next/link";
import { MoveRight, Smartphone, Bluetooth } from "lucide-react";
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
                        Concept Phase • In Development
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
                                href="#how-it-works"
                                className={buttonVariants("primary", "lg")}
                            >
                                How it Works
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
                            *Concept visualization. Product is currently in early design phase.
                        </p>
                    </motion.div>

                    <motion.div variants={itemVariants} className="pt-4 text-xs font-mono text-text-secondary">
                        Design v0.1 • Local Bluetooth Protocol
                    </motion.div>
                </motion.div>

                {/* Visual: Minimalist Concept UI */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="relative lg:h-full flex items-center justify-center lg:justify-end py-12 lg:py-0"
                >
                    {/* Glass Container - Abstract Device */}
                    <div className="relative w-full max-w-sm rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-2xl p-8 shadow-2xl ring-1 ring-white/5 overflow-hidden">

                        {/* Internal Glow */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent/20 blur-[80px] rounded-full pointer-events-none opacity-50" />

                        {/* Header: Status */}
                        <div className="relative flex justify-between items-center mb-10 z-10">
                            <div className="flex items-center gap-3">
                                <div className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                                </div>
                                <span className="font-mono text-xs text-accent tracking-widest uppercase">Scanning</span>
                            </div>
                            <Bluetooth size={16} className="text-zinc-500" />
                        </div>

                        {/* Core Metric: Signal Strength */}
                        <div className="relative z-10 flex flex-col items-center justify-center py-6 space-y-2">
                            <div className="text-6xl font-sans font-bold text-white tracking-tighter">
                                -68
                            </div>
                            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                                dBm Signal Strength
                            </div>
                        </div>

                        {/* Interactive Visual: Bars */}
                        <div className="relative z-10 flex justify-center gap-1.5 h-16 items-end my-8 opacity-90">
                            {[20, 35, 50, 65, 80, 55, 30].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: "10%" }}
                                    animate={{ height: `${h}%` }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        duration: 0.8,
                                        delay: i * 0.1,
                                    }}
                                    className={`w-3 rounded-t-sm ${i === 4 ? 'bg-accent shadow-[0_0_12px_rgba(34,197,94,0.5)]' : 'bg-zinc-800'}`}
                                />
                            ))}
                        </div>

                        {/* Device Info Card */}
                        <div className="relative z-10 mt-6 rounded-xl bg-zinc-800/50 p-4 border border-zinc-700/50 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-zinc-900 text-zinc-400">
                                    <Smartphone size={16} />
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-zinc-200">Unknown Device</div>
                                    <div className="text-[10px] font-mono text-zinc-500">ID: 4A:2B:9C...</div>
                                </div>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
                        </div>
                    </div>

                    {/* Background Decorative Blob */}
                    <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-20">
                        <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full animation-pulse" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
