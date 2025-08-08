import './App.css';
import ThemeToggle from "./components/ThemeToggle";
import WeatherCard from "./components/WeatherCard";

function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center
                    bg-gray-300 dark:bg-gray-900
                    text-gray-900 dark:text-gray-300
                    transition-colors duration-500 gr">
            <WeatherCard />
            {/* button for theme selection */}
            <ThemeToggle />
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
    );
}

export default App;
