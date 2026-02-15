"use client";
import { Link as LinkIcon, Activity, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
    {
        icon: LinkIcon,
        title: "1. The Bond",
        description: "Securely pair devices using local ECDH key exchange. No central server mediates the connection.",
    },
    {
        icon: Activity,
        title: "2. The Scan",
        description: "Passive background scanning logs proximity strength without draining battery. Data stays on-device.",
    },
    {
        icon: MapPin,
        title: "3. The Find",
        description: "Follow the signal strength indicator to target location. Visual and haptic feedback guides you.",
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-32 bg-bg-secondary border-t border-border">
            <div className="mx-auto max-w-5xl px-6 md:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center text-3xl font-bold tracking-tight text-text-primary"
                >
                    How it works. Explained.
                </motion.h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-bg-primary border border-border shadow-sm text-accent">
                                <step.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-text-primary">
                                {step.title}
                            </h3>
                            <p className="text-sm text-text-secondary leading-relaxed max-w-[280px]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
