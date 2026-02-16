"use client";
import React from "react";
import { motion } from "framer-motion";

const roadmapGroups = [
    {
        title: "Building Now",
        status: "active",
        items: [
            {
                title: "Core Tracking Stability",
                description: "Refining BLE proximity algorithms and reducing battery impact.",
            },
            {
                title: "Diagnostics Tools",
                description: "In-app tools to verify Bluetooth advertising power and permissions.",
            }
        ]
    },
    {
        title: "Coming Next",
        status: "planned",
        items: [
            {
                title: "WearOS Companion",
                description: "Wrist-based signal monitoring and haptic navigation.",
            },
            {
                title: "Background Reliability",
                description: "Enhanced background service to handle aggressive OEM battery savers.",
            }
        ]
    },
    {
        title: "Future Concepts",
        status: "future",
        items: [
            {
                title: "Encrypted Mesh Networking",
                description: "Community-based finding nodes to extend range without internet.",
            },
            {
                title: "Signal Fingerprinting",
                description: "Advanced heuristics to identify device types based on signal patterns.",
            }
        ]
    }
];

export function RoadmapSection() {
    return (
        <section id="roadmap" className="py-32 bg-bg-primary border-t border-border">
            <div className="mx-auto max-w-5xl px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-text-primary">
                        Development Roadmap
                    </h2>
                    <p className="mb-16 text-center text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        BeaconTrace is in active development. We are prioritizing stability and privacy above feature bloat.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {roadmapGroups.map((group, groupIndex) => (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                            className="relative"
                        >

                            {/* Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`h-3 w-3 rounded-full flex-shrink-0 ${group.status === 'active' ? 'bg-accent animate-pulse' :
                                    group.status === 'planned' ? 'bg-yellow-500' : 'bg-border'
                                    }`} />
                                <h3 className={`text-lg font-semibold tracking-tight ${group.status === 'active' ? 'text-accent' :
                                    group.status === 'planned' ? 'text-text-primary' : 'text-text-secondary'
                                    }`}>
                                    {group.title}
                                </h3>
                            </div>

                            {/* Items */}
                            <div className="space-y-8 border-l border-border/50 ml-1.5 pl-6 pb-2">
                                {group.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="relative group/item">
                                        {/* Connector Dot */}
                                        <div className="absolute -left-[29px] top-2 h-1.5 w-1.5 rounded-full bg-border group-hover/item:bg-text-secondary transition-colors" />

                                        <h4 className="text-base font-medium text-text-primary mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-text-secondary leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
