import {useEffect, useState, useRef} from "react";

export function useScaleToFit(minWidth, minHeight, precision = 3) {
    const [scale, setScale] = useState(1);
    const rAFRef = useRef(0);   // id of current requestAnimationFrame
    const timeoutRef = useRef(0);    // to prevent many rerenders

    useEffect(() => {

        const factor = Math.pow(10, precision);     // for calculating roundedScale to defined amount of decimals (precision)

        const calculateScale = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const needScale = width < minWidth || height < minHeight;   // only apply on smaller viewports
            const scale = needScale ? Math.min(width / minWidth, height / minHeight) : 1;   // smallest Aspect-Ratio for Scale
            const roundedScale = Math.floor(scale * factor) / factor;   // avoids overflow & reduces subpixel-offset
            setScale(roundedScale);
        }

        const calculateScaleDeferred = () => {
            // short debounce, so many resizes don't spam rerenders
            clearTimeout(timeoutRef.current);
            timeoutRef.current = window.setTimeout(() => {
                calculateScale();
            }, 100);
        };

        const onResize = () => {
            cancelAnimationFrame(rAFRef.current);
            rAFRef.current = requestAnimationFrame(calculateScaleDeferred);    // avoid Resize-Spam
        }

        calculateScale();   // executes on start

        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(rAFRef.current);
            clearTimeout(timeoutRef.current);
            window.removeEventListener("resize", onResize);
        }
    }, [minWidth, minHeight, precision]);

    return scale;
}