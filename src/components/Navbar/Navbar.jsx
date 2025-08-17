import { useState } from "react";
import { House, LayoutDashboard, Bolt, MapPin } from 'lucide-react';
import ThemeToggle from '../ThemeToggle';
import Selection from './Selection';

export default function Navbar({ className = "" }) {

    const [isActive, setIsActive] = useState("dashboard"); // TODO: track current Pathname for tab/pages

    function HandleClick(tab) {
        setIsActive(tab);   // TODO: create linkage to tab/pages (needs implementation of pages)
    }

    return (
        <nav
            className={`w-28 h-[864px] grid grid-rows-5 place-items-center gap-6
                  rounded-[20px] border
                  bg-stone-100 shadow-[5px_5px_13px_0_rgba(135,138,133,0.90)]
                  shadow-[-5px_-5px_10px_0_rgba(255,255,255,0.90)]
                  shadow-[5px_-5px_10px_0_rgba(135,138,133,0.20)]
                  shadow-[-5px_5px_10px_0_rgba(135,138,133,0.20)]
                  dark:bg-transparent dark:backdrop-blur-2xl
                  dark:bg-gradient-to-br dark:from-violet-950/50 dark:to-fuchsia-700/10
                  dark:shadow-[0_0_30px_5px_rgba(4,30,123,0.50)] dark:border-fuchsia-700
                  ${className}`}
        >
            <ul className="contents">
                <Selection
                    activeKey={isActive}
                    onClick={() => HandleClick("home")}
                    title="home">
                    <House className="size-16" />
                </Selection>

                <Selection
                    activeKey={isActive}
                    onClick={() => HandleClick("dashboard")}
                    title="dashboard">
                    <LayoutDashboard className="size-16" />
                </Selection>

                {/* Theme-Toggle Button - no Selection, direct interaction */}
                <li className="relative w-full h-28 flex items-center justify-center list-none">
                    <ThemeToggle />
                </li>

                <Selection
                    activeKey={isActive}
                    onClick={() => HandleClick("settings")}
                    title="settings">
                    <Bolt className="size-16" />
                </Selection>

                <Selection
                    activeKey={isActive}
                    onClick={() => HandleClick("location")}
                    title="location">
                    <MapPin className="size-16" />
                </Selection>
            </ul>
        </nav>
    );
}
