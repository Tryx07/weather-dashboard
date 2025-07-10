import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Button for dark & light mode
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
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');            // sets Tailwind dark-mode
            localStorage.setItem('theme', 'dark');                     // saves dark-mode preference
        } else {
            document.documentElement.classList.remove('dark');  // removes Tailwind dark-mode
            localStorage.setItem('theme', 'light');                    // saves light-mode preference
        }
    }, [darkMode]);

    return (
        // Button component for toggle
        <button
            className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center shadow-lg dark:shadow-lg-white"
            onClick={() => setDarkMode(!darkMode)}
        >
            {/* animation for button icons */}
            <AnimatePresence mode="sync" initial={false}>
                {darkMode ? (
                    // moon icon in dark-mode
                    <motion.span
                        key="moon"
                        initial={{              // starting state
                            scale: 0,           // size: tiny (invisible)
                            rotate: 45,         // rotated
                            y: 30               // below center
                        }}
                        animate={{              // target state when fading in
                            scale: 1,           // size: normal (visible)
                            rotate: 0,          // oriented
                            y: 0                // center
                        }}
                        exit={{                 // target state when fading out
                            scale: 0,           // size: tiny (invisible)
                            rotate: -45,        // rotated other direction
                            y: -30              // above center
                        }}
                        transition={{           // settings for animation
                            duration: 0.5,      // animation takes half a second
                            ease: 'easeInOut'   // smooth acceleration/deceleration
                        }}
                        className="absolute text-white text-2xl"
                    > ⏾ </motion.span>
                ) : (
                    // sun icon in light-mode
                    <motion.span
                        key="sun"
                        initial={{
                            scale: 0,
                            rotate: 45,
                            y: 30
                        }}
                        animate={{
                            scale: 1,
                            rotate: 0,
                            y: 0
                        }}
                        exit={{
                            scale: 0,
                            rotate: -45,
                            y: -30
                        }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeInOut'
                        }}
                        className="absolute text-black text-2xl"
                    > ☀︎ </motion.span>
                )}
            </AnimatePresence>


        </button>
    );
}
