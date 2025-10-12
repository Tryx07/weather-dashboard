import './App.css';
import {useScaleToFit} from "./hooks/useScaleToFit";
import DashboardPage from "./pages/DashboardPage";
import { MIN_WIDTH, MIN_HEIGHT } from "./config/layout"

function App() {
    const rawScale = useScaleToFit(MIN_WIDTH, MIN_HEIGHT, 3);
    const isScaling = rawScale < 1;

    return (
        <div className="relative w-full h-[100svh] overflow-y-auto overflow-x-hidden bg-stone-100 dark:dark-bg transition-all duration-DEFAULT ease-DEFAULT"
             style={{ scrollbarGutter: 'stable both-edges' }}
        >
            <div
                className={
                    isScaling
                        ? "absolute origin-top-left will-change-transform"  // scaling from top-left
                        : "relative w-full h-full"                          // fluid
                }
                style={{
                    '--scale': String(rawScale),
                    width:  isScaling ? MIN_WIDTH  : "100%",
                    height: isScaling ? MIN_HEIGHT : "100%",
                    transform: isScaling ? `scale(${ rawScale || 1 })` : "none",  // 1 = no-op
                    willChange: isScaling ? 'transform' : undefined,
                    }}
            >
                <div className="w-full h-full box-border">
                    <DashboardPage />
                </div>
            </div>
        </div>
    );
}

export default App;
