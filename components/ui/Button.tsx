import * as React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const buttonVariants = (variant: "primary" | "secondary" | "outline" | "ghost" = "primary", size: "sm" | "md" | "lg" = "md", className: string = "") => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary: "bg-accent text-white hover:opacity-90 shadow-sm",
        secondary: "bg-transparent text-text-primary underline-offset-4 hover:underline",
        outline: "border border-border bg-transparent hover:bg-bg-secondary text-text-primary",
        ghost: "hover:bg-bg-secondary text-text-secondary hover:text-text-primary",
    };

    const sizes = {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-8 text-base",
    };

    return `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={buttonVariants(variant, size, className)}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
