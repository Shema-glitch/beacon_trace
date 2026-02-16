"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";

const faqs = [
    {
        question: "Why do I need Location permission?",
        answer: "Android requires Location permission to scan for Bluetooth Low Energy (BLE) devices. BeaconTrace does not use GPS or send your location anywhere.",
    },
    {
        question: "Does this work if the other phone is off?",
        answer: "No. Bluetooth requires power. However, the app logs the last known location strength before the signal was lost.",
    },
    {
        question: "What happens if I restart my phone?",
        answer: "Background scanning may stop. You should open BeaconTrace once after a reboot to ensure the background service is active.",
    },
    {
        question: "Does it work in crowded places?",
        answer: "Yes, but signal jitter is higher. The app filters out noise, but finding a specific device in a stadium is harder than in a house.",
    },
    {
        question: "Is there an iOS version?",
        answer: "Not yet. Apple's strict background limitations make this specific protocol difficult to implement without their proprietary network.",
    },
];

export function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-32 bg-bg-secondary border-t border-border">
            <div className="mx-auto max-w-2xl px-6 md:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center text-3xl font-bold tracking-tight text-text-primary"
                >
                    Frequently Answered Questions
                </motion.h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-bg-primary rounded-lg border border-border overflow-hidden"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-answer-${index}`}
                                className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:bg-bg-secondary/50 transition-colors"
                            >
                                <span className="flex items-center text-base font-semibold text-text-primary pr-4">
                                    <HelpCircle className="mr-3 h-5 w-5 shrink-0 text-accent/80" />
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-accent" : ""
                                        }`}
                                />
                            </button>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        id={`faq-answer-${index}`}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 pt-0 text-text-secondary leading-relaxed ml-8 text-sm">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <p className="text-text-secondary mb-4">
                        Still have questions? We're here to help.
                    </p>
                    <Link
                        href="https://github.com/Start-Shema"
                        target="_blank"
                        className={buttonVariants("secondary", "sm")}
                    >
                        Reach Out
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
