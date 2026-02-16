"use client";
import { EyeOff, Battery, Lock, Code } from "lucide-react";
import { Card } from "@/components/ui/Layout";
import { motion } from "framer-motion";

const features = [
    {
        icon: EyeOff,
        title: "Zero Telemetry",
        description: "We don't know who you are. The app has no internet permission request in its manifest.",
    },
    {
        icon: Battery,
        title: "Battery Conscious",
        description: "Optimized BLE scanning intervals ensure all-day battery life.",
    },
    {
        icon: Lock,
        title: "Cryptographically Secure",
        description: "Rolling IDs prevent third-party tracking. Keys never leave your hardware.",
    },
    {
        icon: Code,
        title: "Open Source",
        description: "Audit the code yourself. Built for community trust.",
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

export function KeyFeatures() {
    return (
        <section id="features" className="py-32 bg-bg-primary">
            <div className="mx-auto max-w-5xl px-6 md:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center text-3xl font-bold tracking-tight text-text-primary"
                >
                    Engineered for Silence.
                </motion.h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 md:grid-cols-2 lg:gap-8"
                >
                    {features.map((feature, i) => (
                        <motion.div key={i} variants={item}>
                            <Card className="flex flex-col items-start gap-4 p-8 transition-all hover:bg-bg-secondary/50 h-full">
                                <div className="rounded-lg bg-bg-secondary p-3 text-accent ring-1 ring-border">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
