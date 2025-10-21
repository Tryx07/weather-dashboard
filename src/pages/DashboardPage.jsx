import Navbar from "../components/Navbar/Navbar";
import CardTemplate from "../components/CardTemplate";
import IconText from "../components/IconText";
import { Clock, Calendar, MapPin, ArrowUpIcon, ArrowDown, Sunrise, Sunset, Wind, Umbrella, Waves, Sun, Shirt } from 'lucide-react';
import { glassesSun, hatBaseball, jacket, shorts, skirt, sneaker, socks } from '@lucide/lab';
import WeatherCard from "../components/WeatherCard";
import ClothingCard from "../components/ClothingCard";

export default function DashboardPage() {
    return (
        <div
            className=" h-full w-full
                        p-[var(--SAFE,2rem)]
                        grid gap-[var(--GAP,2rem)]
                        [grid-template-columns:clamp(88px,6vw,109px)_minmax(0,1fr)_minmax(0,1fr)]
                        [grid-template-rows:minmax(0,1fr)_minmax(0,1fr)]
                        min-w-0 min-h-0
                        text-stone-800 dark:text-purple-50
                        transition-all durationreact-DEFAULT ease-DEFAULT"
        >
            <Navbar className="row-span-2 col-start-1 min-w-0 min-h-0"/>

            <WeatherCard />

            <ClothingCard />

            <CardTemplate className="row-start-2 col-start-2 col-span-2 min-w-0 min-h-0"/>
        </div>
    );
}