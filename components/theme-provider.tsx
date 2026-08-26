"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

function AutoTimeThemeManager() {
    const { setTheme, theme } = useTheme();

    React.useEffect(() => {
        const checkTimeAndSetTheme = () => {
            const hasUserManuallySetTheme = localStorage.getItem("theme_user_manual") === "true";
            
            // If the user has NOT manually toggled the theme using the sun/moon button:
            if (!hasUserManuallySetTheme) {
                const hour = new Date().getHours();
                // Morning / Day: 6 AM (6) to 6 PM (18) -> Light Theme
                // Evening / Night: 6 PM (18) to 6 AM (6) -> Dark Theme
                const isDayTime = hour >= 6 && hour < 18;
                const targetTheme = isDayTime ? "light" : "dark";

                setTheme(targetTheme);
            }
        };

        // Run immediately when mounted
        checkTimeAndSetTheme();

        // Check periodically (every 5 minutes)
        const interval = setInterval(checkTimeAndSetTheme, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, [setTheme]);

    return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider {...props}>
            <AutoTimeThemeManager />
            {children}
        </NextThemesProvider>
    );
}

