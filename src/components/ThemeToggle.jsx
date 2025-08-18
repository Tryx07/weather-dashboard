import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    // initialize darkMode based of localStorage and system-preference
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.theme === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
        }
        return false; // fallback for server-side-rendering
    });

    // activate/deactivate dark-mode in <html> element
    function handleToggleTheme() {
        const newDarkMode = !darkMode;

        setDarkMode(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add('dark');            // sets Tailwind dark-mode
            localStorage.setItem('theme', 'dark');                     // saves dark-mode preference
        } else {
            document.documentElement.classList.remove('dark');  // removes Tailwind dark-mode
            localStorage.setItem('theme', 'light');                    // saves light-mode preference
        }
    }

    return (
        <button
            className="relative w-16 h-16 flex items-center justify-center"
            onClick={handleToggleTheme}
        >
            {/* animation for button icons */}
            <AnimatePresence mode="sync" initial={false}>
                {darkMode ? (
                    // moon icon in dark-mode
                    <motion.span
                        key="moon"
                        initial={{              // starting state
                            scale: 0,           // size: tiny (invisible)
                            rotate: 90,         // 90° rotated
                            y: 30               // below center
                        }}
                        animate={{              // target state when fading in
                            scale: 1,           // size: normal (visible)
                            rotate: 0,          // oriented/straight
                            y: 0                // center
                        }}
                        exit={{                 // target state when fading out
                            scale: 0,           // size: tiny (invisible)
                            rotate: -90,        // 90° rotated other direction
                            y: -30              // above center
                        }}
                        transition={{           // settings for animation
                            duration: 0.5,      // animation takes half a second
                            ease: 'easeInOut'   // smooth acceleration/deceleration
                        }}
                        className="absolute text-white text-2xl"
                    > <Moon className="size-16" /> </motion.span>
                ) : (
                    // sun icon in light-mode
                    <motion.span
                        key="sun"
                        initial={{
                            scale: 0,
                            rotate: 90,
                            y: 30
                        }}
                        animate={{
                            scale: 1,
                            rotate: 0,
                            y: 0
                        }}
                        exit={{
                            scale: 0,
                            rotate: -90,
                            y: -30
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut'
                        }}
                        className="absolute text-black text-2xl"
                    > <Sun className="size-16" /> </motion.span>
                )}
            </AnimatePresence>


        </button>
    );
}
