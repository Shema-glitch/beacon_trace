import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

import { Radar } from "lucide-react";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-primary/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <Radar className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-sans text-xl font-bold tracking-tight text-white">
                        BeaconTrace
                    </span>
                </Link>
                <nav className="flex items-center gap-4">
                    <Link
                        href="https://github.com/Start-Shema/Ghost_Finder_Project"
                        target="_blank"
                        className="hidden text-sm text-text-secondary hover:text-text-primary md:block"
                    >
                        GitHub
                    </Link>
                    <Link href="#roadmap" className={buttonVariants("primary", "sm")}>
                        Our Vision
                    </Link>
                </nav>
            </div>
        </header>
    );
}
