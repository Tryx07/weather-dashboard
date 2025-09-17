import './App.css';
import {useScaleToFit} from "./hooks/useScaleToFit";
import DashboardPage from "./pages/DashboardPage";
import { MIN_WIDTH, MIN_HEIGHT, SAFE_DEFAULT, GAP_DEFAULT } from "./config/layout"

function App() {
    const scaleToFit = useScaleToFit(MIN_WIDTH, MIN_HEIGHT, 3);
    const isScaling = scaleToFit < 1;

    return (
        <div className="relative w-full h-[100svh] overflow-y-auto overflow-x-hidden bg-stone-100 dark:bg-gray-900"
             style={{ scrollbarGutter: 'stable both-edges' }}
        >
            <div
                className={
                    isScaling
                        ? "absolute origin-top-left will-change-transform"  // scaling from top-left
                        : "relative w-full h-full"                          // fluid
                }
                style={{
                    '--SAFE': SAFE_DEFAULT,
                    '--GAP':  GAP_DEFAULT,
                    "--SCALE": String(scaleToFit),
                    width:  isScaling ? MIN_WIDTH  : "100%",
                    height: isScaling ? MIN_HEIGHT : "100%",
                    transform: isScaling ? "scale(var(--SCALE))" : "none",
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
