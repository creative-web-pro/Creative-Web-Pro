"use client";

import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import Link from "next/link";
import React, { memo, useRef, useState, useCallback } from "react";
import Image from "next/image";

// Common shadow styles extracted to constants for reuse
const SHADOW_VISIBLE = "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset";
const SHADOW_NONE = "none";

// Memoized components for better performance
export const Navbar = memo(function Navbar({ children, className }) {
    const ref = useRef(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState(false);

    // Optimized scroll handler with threshold constant
    const SCROLL_THRESHOLD = 100;
    
    useMotionValueEvent(scrollY, "change", (latest) => {
        setVisible(latest > SCROLL_THRESHOLD);
    });

    return (
        <motion.div
            ref={ref}
            // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
            className={cn("sticky inset-x-0 top-5 z-40 w-full", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(child, { visible })
                    : child
            )}
        </motion.div>
    );
});

export const NavBody = memo(function NavBody({ children, className, visible }) {
    // Animation properties
    const animationProps = {
        backdropFilter: visible ? "blur(10px)" : SHADOW_NONE,
        boxShadow: visible ? SHADOW_VISIBLE : SHADOW_NONE,
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
    };

    // Transition properties
    const transitionProps = {
        type: "spring",
        stiffness: 200,
        damping: 50,
    };

    return (
        <motion.div
            animate={animationProps}
            transition={transitionProps}
            style={{
                minWidth: "950px",
            }}
            className={cn(
                "backdrop-blur-lg relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 pr-5 py-2 lg:flex",
                visible && "bg-background/65",
                className
            )}
        >
            {children}
        </motion.div>
    );
});

export const NavItems = memo(function NavItems({ items, className, onItemClick }) {
    const [hovered, setHovered] = useState(null);
    
    // Memoized handlers
    const handleMouseLeave = useCallback(() => setHovered(null), []);
    
    return (
        <motion.div
            onMouseLeave={handleMouseLeave}
            className={cn(
                "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
                className
            )}
        >
            {items.map((item, idx) => (
                <NavItem 
                    key={`link-${idx}`}
                    item={item}
                    idx={idx}
                    hovered={hovered}
                    setHovered={setHovered}
                    onItemClick={onItemClick}
                />
            ))}
        </motion.div>
    );
});

// Extracted NavItem component for better organization
const NavItem = memo(function NavItem({ item, idx, hovered, setHovered, onItemClick }) {
    const handleMouseEnter = useCallback(() => setHovered(idx), [idx, setHovered]);
    
    return (
        <Link
            onMouseEnter={handleMouseEnter}
            onClick={onItemClick}
            className="relative px-4 py-2 text-foreground/60"
            href={item.link}
        >
            {hovered === idx && (
                <motion.div
                    layoutId="hovered"
                    className="absolute inset-0 h-full w-full rounded-full bg-foreground/10"
                />
            )}
            <span className="relative z-20">{item.name}</span>
        </Link>
    );
});

export const MobileNav = memo(function MobileNav({ children, className, visible }) {
    // Animation properties
    const animationProps = {
        backdropFilter: visible ? "blur(10px)" : SHADOW_NONE,
        boxShadow: visible ? SHADOW_VISIBLE : SHADOW_NONE,
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: visible ? 20 : 0,
    };

    // Transition properties
    const transitionProps = {
        type: "spring",
        stiffness: 200,
        damping: 50,
    };

    return (
        <motion.div
            animate={animationProps}
            transition={transitionProps}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
                visible && "bg-background/80",
                className
            )}
        >
            {children}
        </motion.div>
    );
});

export const MobileNavHeader = memo(function MobileNavHeader({ children, className }) {
    return (
        <div
            className={cn("flex w-full flex-row items-center justify-between", className)}
        >
            {children}
        </div>
    );
});

export const MobileNavMenu = memo(function MobileNavMenu({ children, className, isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-background px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                        className
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
});

export const MobileNavToggle = memo(function MobileNavToggle({ isOpen, onClick }) {
    const iconProps = { className: "text-foreground", onClick };
    
    return isOpen ? (
        <IconX {...iconProps} />
    ) : (
        <IconMenu2 {...iconProps} />
    );
});

export const NavbarLogo = memo(function NavbarLogo() {
    return (
        <Link
            href="/"
            className="relative z-20 mr-4 flex items-center space-x-2 py-1 text-sm font-normal text-foreground"
        >
            <Image
                src="/logo.webp"
                alt="logo"
                width={30}
                height={30}
            />
            <span className="font-medium md:text-md text-foreground">CreativeWebPro</span>
        </Link>
    );
});

// Button variant styles extracted as constants
const BUTTON_VARIANTS = {
    primary: "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none text-foreground",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
};

export const NavbarButton = memo(function NavbarButton({
    href,
    as: Tag = "a",
    children,
    className,
    variant = "primary",
    ...props
}) {
    const baseStyles = "px-4 py-2 rounded-md bg-white button text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

    return (
        <Tag
            href={href || undefined}
            className={cn(baseStyles, BUTTON_VARIANTS[variant], className)}
            {...props}
        >
            {children}
        </Tag>
    );
});
