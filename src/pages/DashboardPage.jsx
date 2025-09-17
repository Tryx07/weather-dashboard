import Navbar from "../components/Navbar/Navbar";
import WeatherCard from "../components/WeatherCard";

export default function DashboardPage() {
     return (
         <div
             className="
                h-full w-full
                p-[var(--SAFE,2rem)]
                grid gap-[var(--GAP,2rem)]
                [grid-template-columns:clamp(88px,6vw,109px)_minmax(0,1fr)_minmax(0,1fr)]
                [grid-template-rows:minmax(0,1fr)_minmax(0,1fr)]
                min-w-0 min-h-0
                text-stone-900 dark:text-purple-50 transition-colors duration-500"
         >
               <Navbar className="row-span-2 col-start-1 min-w-0 min-h-0" />
               <WeatherCard className="row-start-1 col-start-2 min-w-0 min-h-0" />
               <WeatherCard className="row-start-1 col-start-3 min-w-0 min-h-0" />
               <WeatherCard className="row-start-2 col-start-2 col-span-2 min-w-0 min-h-0" />
        </div>
     );
}