import './App.css';
import WeatherCard from "./components/WeatherCard";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div className="
                min-h-screen
                grid grid-cols-[7rem,1fr] grid-rows-[auto,auto]
                items-start justify-items-center
                bg-gray-300 dark:bg-gray-900
                text-gray-900 dark:text-gray-300
                transition-colors duration-500
                p-8
              "
        >
            {/* Navigation to Home, Dashboard, Theme-Toggle, Setting, Location */}
            <Navbar className="row-span-full justify-self-start"/>
            {/* styled Card to display weather information */}
            <WeatherCard className="row-start-1 col-start-2" />
            <div className="row-start-2 col-start-2 grid place-items-center">
                {/* placeholder for future components */}
                <p className="text-xl mt-4">Weather Dashboard - Coming Soon</p>
                {/* link to GitHub-Repo */}
                <a
                    className="underline mt-2"
                    href="https://github.com/Tryx07/weather-dashboard"
                    target="_blank"                                     // opens in new tab
                    rel="noopener noreferrer"                           // safety: prevents access to information about origin site
                >
                    In Progress
                </a>
            </div>
        </div>
    );
}

export default App;
