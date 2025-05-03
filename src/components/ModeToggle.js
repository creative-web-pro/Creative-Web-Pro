"use client";

import { memo, useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NavbarButton } from "@/components/ui/resizable-navbar";

const ICON_SIZE = "h-[1.2rem] w-[1.2rem]";

const ModeToggle = memo(function ModeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        document.documentElement.setAttribute('data-theme', theme || 'light');
    }, [theme]);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    }, [theme, setTheme]);

    // Placeholder while component is mounting
    if (!mounted) {
        return (
            <NavbarButton
                variant="secondary"
                size="icon"
                aria-label="Loading theme"
            >
                <div className={ICON_SIZE} />
            </NavbarButton>
        );
    }

    return (
        <NavbarButton
            variant="secondary"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Toggle ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === "dark" ? (
                <Moon className={`${ICON_SIZE} rotate-0 scale-100 transition-all`} />
            ) : (
                <Sun className={`${ICON_SIZE} rotate-0 scale-100 transition-all`} />
            )}
            <span className="sr-only">Toggle theme</span>
        </NavbarButton>
    );
});

export { ModeToggle };