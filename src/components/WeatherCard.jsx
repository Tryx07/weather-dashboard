import IconText from "./IconText";
import {
    ArrowDown,
    ArrowUpIcon,
    Calendar,
    Clock,
    MapPin,
    Sun,
    Sunrise,
    Sunset,
    Umbrella,
    Waves,
    Wind
} from "lucide-react";
import CardTemplate from "./CardTemplate";

function WeatherCard() {

    return (
        <CardTemplate title="Weather-Data" className="col-start-2 min-w-0 min-h-0 grid-rows-6 grid-cols-6 p-6">
            <div
                title="DateTimeLocation"
                className="col-span-6 w-full h-full flex items-center justify-between px-2 border-b dark:border-fuchsia-200/50 border-stone-800"
            >
                <IconText Icon={Clock} Text="14:57" classNameText="text-sm"/>
                <IconText Icon={Calendar} Text="Sun, 27.07.2025" classNameText="text-sm"/>
                <IconText Icon={MapPin} Text="Dresden" classNameText="text-sm"/>
            </div>

            <div
                title="Temp"
                className="row-start-2 row-span-3 col-span-2 w-full h-full flex flex-col justify-start py-7"
            >
                <span title="CurrentTemp" className="row-span-2 col-span-2 text-8xl font-extrabold">24°C</span>
                <div className="h-4"/>
                <div className="flex items-start gap-6">
                    <IconText Icon={ArrowUpIcon} IconClass="w-8 h-8" Text="26°C" classNameWrapper="row-start-3"
                              classNameText="text-md font-bold"/>
                    <IconText Icon={ArrowDown} IconClass="w-8 h-8" Text="18°C"
                              classNameWrapper="row-start-3 col-start-2" classNameText="text-md font-bold"/>
                </div>
            </div>

            <div
                title="Icon"
                className="row-start-2 row-span-5 col-start-3 col-span-2 w-full h-full grid items-center py-7 px-5"
            >
                <span title="WeatherIcon" className="row-span-4 text-9xl">Icon</span>
                <span title="Description" className="row-start-5 row-span-2 text-base">mainly clear</span>
            </div>

            <div
                title="Metrics"
                className="row-start-2 row-span-5 col-start-5 col-span-2 w-full h-full grid justify-end py-7 px-2"
            >
                <IconText Icon={Wind} IconClass="w-10 h-10" Text="8,2 km/h" classNameText="text-lg"/>
                <IconText Icon={Umbrella} IconClass="w-10 h-10" Text="20%" classNameText="text-lg"
                          classNameWrapper="row-start-2"/>
                <IconText Icon={Waves} IconClass="w-10 h-10" Text="57%" classNameText="text-lg"
                          classNameWrapper="row-start-3"/>
                <IconText Icon={Sun} IconClass="w-10 h-10" Text="8" classNameText="text-lg"
                          classNameWrapper="row-start-4"/>
            </div>

            <div
                title="Sunrise/Sunset"
                className="row-start-5 col-span-2 w-full h-full grid justify-start px-4"
            >
                <IconText Icon={Sunrise} IconClass="w-10 h-10" Text="05:21" classNameText="text-md"/>
                <IconText Icon={Sunset} IconClass="w-10 h-10" Text="21:01" classNameText="text-md"/>
            </div>
        </CardTemplate>
    )
}

export default WeatherCard;