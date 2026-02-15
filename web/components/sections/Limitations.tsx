"use client";
import { AlertTriangle, Bluetooth, Smartphone, CloudOff, Signal } from "lucide-react";
import { motion } from "framer-motion";

export function Limitations() {
    return (
        <section className="py-20 bg-bg-secondary border-b border-border">
            <div className="mx-auto max-w-5xl px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-8 md:p-12"
                >

                    <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
                        <div className="p-3 bg-yellow-500/10 rounded-lg text-yellow-500 shrink-0">
                            <AlertTriangle className="h-6 w-6" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
                                System Requirements & Limitations
                            </h2>
                            <p className="text-text-secondary max-w-2xl">
                                BeaconTrace operates differently than typical cloud-based trackers.
                                Understanding these constraints is critical for reliable use.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-white font-medium">
                                <Bluetooth size={18} className="text-accent" />
                                Bluetooth is Mandatory
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed pl-8">
                                Both devices must have Bluetooth enabled. If the target device&apos;s Bluetooth radio is off,
                                tracking is impossible.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-white font-medium">
                                <Smartphone size={18} className="text-accent" />
                                Background Restrictions
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed pl-8">
                                Android may kill background processes to save battery. The app must have
                                &quot;Unrestricted&quot; battery usage for continuous monitoring.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-white font-medium">
                                <Signal size={18} className="text-accent" />
                                Physical Range Limits
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed pl-8">
                                Effective range is 10-50 meters depending on walls and interference.
                                This is short-range proximity finding, not GPS tracking.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-3 text-white font-medium">
                                <CloudOff size={18} className="text-accent" />
                                No Remote Tracking
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed pl-8">
                                There is no &quot;Find My&quot; cloud map. If you are out of Bluetooth range,
                                you cannot communicate with the device.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
