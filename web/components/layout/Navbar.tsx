import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border bg-bg-primary/80 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 md:px-8">
                <Link href="/" className="flex items-center space-x-2">
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
                    <Link href="#download" className={buttonVariants("primary", "sm")}>
                        Download
                    </Link>
                </nav>
            </div>
        </header>
    );
}
