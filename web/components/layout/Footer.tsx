import Link from "next/link";
import { Github, FileText, Scale } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border bg-bg-secondary py-12">
            <div className="mx-auto max-w-5xl px-6 md:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="col-span-2">
                        <Link href="/" className="inline-block">
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
                        <h3 className="text-sm font-semibold text-text-primary">Project</h3>
                        <ul className="mt-4 space-y-3">
                            <li>
                                <Link
                                    href="https://github.com/Start-Shema/Ghost_Finder_Project"
                                    className="flex items-center text-sm text-text-secondary hover:text-accent transition-colors"
                                >
                                    <Github className="mr-2 h-4 w-4" />
                                    GitHub
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center text-sm text-text-secondary hover:text-accent transition-colors"
                                >
                                    <FileText className="mr-2 h-4 w-4" />
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center text-sm text-text-secondary hover:text-accent transition-colors"
                                >
                                    <Scale className="mr-2 h-4 w-4" />
                                    License (MIT)
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
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        {/* Socials can be repeated or added here if needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
