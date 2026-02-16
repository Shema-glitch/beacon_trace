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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                        How it works
                    </h2>
                    <p className="mt-4 text-text-secondary">
                        Offline device detection in three simple steps.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <div className="flex flex-col h-full rounded-2xl border border-border bg-bg-primary p-6 hover:border-accent/30 transition-colors">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-bg-secondary text-accent">
                                    <step.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-text-primary">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
