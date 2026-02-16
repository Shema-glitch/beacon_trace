import Link from "next/link";
import { Github, Radar, User } from "lucide-react";
import GradientText from "@/components/GradientText";

export function Footer() {
    return (
        <footer className="border-t border-border bg-bg-secondary py-12">
            <div className="mx-auto max-w-5xl px-6 md:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="col-span-2">
                        <Link href="/" className="inline-flex items-center gap-2 group">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                                <Radar className="h-5 w-5 text-accent" />
                            </div>
                            <span className="font-sans text-xl font-bold tracking-tight text-white">
                                BeaconTrace
                            </span>
                        </Link>
                        <p className="mt-4 max-w-sm text-sm text-text-secondary">
                            The open-source, privacy-first alternative for Android device tracking.
                            Built for community trust.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-text-primary">Connect</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="https://github.com/Start-Shema/Ghost_Finder_Project"
                                    className="flex items-center text-sm text-text-secondary hover:text-accent transition-colors"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    Source Code
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="https://github.com/Start-Shema"
                                    className="flex items-center text-sm text-text-secondary hover:text-accent transition-colors"
                                >
                                    <User className="mr-2 h-4 w-4" />
                                    Shema Charmant
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        {/* Keeping it simple as per spec */}
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-between border-t border-border pt-8 md:flex-row">
                    <p className="text-sm text-text-secondary">
                        &copy; {new Date().getFullYear()} BeaconTrace Project. Open Source Software.
                    </p>
                    <div className="flex items-center space-x-2 mt-4 md:mt-0 text-sm text-text-secondary">
                        <span className="opacity-70">Built by</span>
                        <GradientText
                            colors={["#4ade80", "#60a5fa", "#4ade80"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="font-bold cursor-default"
                        >
                            Shema & Antigravity
                        </GradientText>
                    </div>
                </div>
            </div>
        </footer>
    );
}
