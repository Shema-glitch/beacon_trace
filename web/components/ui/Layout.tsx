import React from 'react';

// Section Wrapper
export const Section = ({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) => {
    return (
        <section id={id} className={`py-20 md:py-24 ${className}`}>
            <div className="mx-auto max-w-5xl px-6 md:px-8">{children}</div>
        </section>
    );
};

// Card Component
export const Card = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`rounded-lg border border-border bg-bg-secondary p-6 shadow-sm transition-colors hover:border-accent/40 ${className}`}
        >
            {children}
        </div>
    );
};

// Typography Helpers
export const Heading = ({
    children,
    level = "h2",
    className = "",
}: {
    children: React.ReactNode;
    level?: "h1" | "h2" | "h3";
    className?: string;
}) => {
    if (level === "h1")
        return (
            <h1 className={`font-sans text-4xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-6xl ${className}`}>
                {children}
            </h1>
        );
    if (level === "h2")
        return (
            <h2 className={`font-sans text-3xl font-medium tracking-tight text-text-primary md:text-4xl ${className}`}>
                {children}
            </h2>
        );
    return (
        <h3 className={`font-sans text-xl font-medium text-text-primary ${className}`}>
            {children}
        </h3>
    );
};
