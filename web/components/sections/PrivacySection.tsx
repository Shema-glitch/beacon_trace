"use client";
import React from "react";
import { motion } from "framer-motion";

export function PrivacySection() {
    return (
        <section className="py-32 bg-bg-secondary border-t border-b border-border">
            <div className="mx-auto max-w-5xl px-6 md:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-text-primary mb-8"
                    >
                        Privacy by Architecture
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full rounded-xl bg-bg-primary border border-border p-6 shadow-2xl font-mono text-left text-sm md:text-base"
                    >
                        <div className="flex items-center gap-2 border-b border-border pb-4 mb-4">
                            <div className="h-3 w-3 rounded-full bg-red-500/50" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                            <div className="h-3 w-3 rounded-full bg-green-500/50" />
                            <span className="ml-2 text-text-secondary text-xs">beacontrace-manifest.json</span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <span className="text-red-500">[ ]</span>
                                <span className="text-text-secondary">Internet Access:</span>
                                <span className="text-red-500 font-bold">DENIED</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-accent">[x]</span>
                                <span className="text-text-secondary">Bluetooth:</span>
                                <span className="text-accent font-bold">LOCAL ONLY</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-accent">[x]</span>
                                <span className="text-text-secondary">Storage:</span>
                                <span className="text-accent font-bold">ENCRYPTED</span>
                            </div>

                            {/* New Data Points */}
                            <div className="border-t border-border/30 my-4"></div>

                            <div className="flex items-start gap-3">
                                <span className="text-text-secondary min-w-[24px]">{`>>`}</span>
                                <div>
                                    <span className="text-text-primary font-bold">Local Data Stored:</span>
                                    <span className="text-text-secondary block text-xs mt-1">
                                        • Last known signal strength & time <br />
                                        • User-assigned device names <br />
                                        • Ephemeral pairing keys (ECDH)
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 mt-4">
                                <span className="text-text-secondary min-w-[24px]">{`>>`}</span>
                                <div>
                                    <span className="text-text-primary font-bold">Wipe Data Command:</span>
                                    <span className="text-text-secondary block text-xs mt-1">
                                        Instantly deletes all local DB entries and keys. <br />
                                        App resets to factory state.
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div className="mt-6 pt-4 border-t border-border/50 text-xs text-text-secondary">
                            $ status: <span className="text-accent">secure</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
