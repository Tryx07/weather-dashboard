import Navbar from "../components/Navbar/Navbar";
import WeatherCard from "../components/WeatherCard";
import IconText from "../components/IconText";
import { Clock, Calendar, MapPin, ArrowUpIcon, ArrowDown, Sunrise, Sunset, Wind, Umbrella, Waves, Sun } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className=" h-full w-full
                         p-[var(--SAFE,2rem)]
                         grid gap-[var(--GAP,2rem)]
                         [grid-template-columns:clamp(88px,6vw,109px)_minmax(0,1fr)_minmax(0,1fr)]
                         [grid-template-rows:minmax(0,1fr)_minmax(0,1fr)]
                         min-w-0 min-h-0
                         text-stone-800 dark:text-purple-50
                         transition-all duration-DEFAULT ease-DEFAULT"
        >
            <Navbar className="row-span-2 col-start-1 min-w-0 min-h-0"/>
            <WeatherCard className="col-start-2 min-w-0 min-h-0 grid-rows-6 grid-cols-6 p-6">
                <div title="DateTimeLocation"
                    className="col-span-6 w-full h-full flex items-center justify-between px-2 border-b dark:border-fuchsia-200/50 border-stone-800">
                    <IconText Icon={Clock} Text="14:57" classNameText="text-sm" />
                    <IconText Icon={Calendar} Text="Sun, 27.07.2025" classNameText="text-sm" />
                    <IconText Icon={MapPin} Text="Dresden" classNameText="text-sm" />
                </div>

                <div title="Temp"
                     className="row-start-2 row-span-3 col-span-2 w-full h-full flex flex-col justify-start py-7 px-2">
                    <span title="CurrentTemp" className="row-span-2 col-span-2 text-8xl font-extrabold">24°C</span>
                    <div className="h-4" />
                    <div className="flex items-start gap-4 px-2">
                        <IconText Icon={ArrowUpIcon} IconSize="9" Text="26°C" classNameWrapper="row-start-3" classNameText="text-md font-bold" />
                        <IconText Icon={ArrowDown} IconSize="9" Text="18°C" classNameWrapper="row-start-3 col-start-2" classNameText="text-md font-bold" />
                    </div>
                </div>

                <div title="Icon"
                     className="row-start-2 row-span-5 col-start-3 col-span-2 w-full h-full grid items-center py-7 px-5">
                    <span title="WeatherIcon" className="row-span-4 text-9xl">Icon</span>
                    <span title="Description" className="row-start-5 row-span-2 text-base">mainly clear</span>
                </div>

                <div title="Metrics"
                     className="row-start-2 row-span-5 col-start-5 col-span-2 w-full h-full grid justify-end py-7 px-2">
                    <IconText Icon={Wind} IconSize="10" Text="8,2 km/h" classNameText="text-lg" />
                    <IconText Icon={Umbrella} IconSize="10" Text="20%" classNameText="text-lg" classNameWrapper="row-start-2" />
                    <IconText Icon={Waves} IconSize="10" Text="57%" classNameText="text-lg" classNameWrapper="row-start-3" />
                    <IconText Icon={Sun} IconSize="10" Text="8" classNameText="text-lg" classNameWrapper="row-start-4" />
                </div>

                <div title="Sunrise/Sunset"
                     className="row-start-5 col-span-2 w-full h-full grid justify-start px-4">
                    <IconText Icon={Sunrise} IconSize="10" Text="05:21" classNameText="text-md" />
                    <IconText Icon={Sunset} IconSize="10" Text="21:01" classNameText="text-md" />
                </div>

            </WeatherCard>
            <WeatherCard className="col-start-3 min-w-0 min-h-0"/>
            <WeatherCard className="row-start-2 col-start-2 col-span-2 min-w-0 min-h-0"/>
        </div>
    );
}