import {useEffect, useState} from "react";

export function useScaleToFit(minWidth, minHeight, precision = 3) {
    const [scale, setScale] = useState(1);

    useEffect(() => {

        let rAF = 0 ;   // id of current requestAnimationFrame
        const factor = Math.pow(10, precision);     // for calculating roundedScale to defined amount of decimals (precision)

        const calculateScale = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const needScale = width < minWidth || height < minHeight;   // only apply on smaller viewports
            const scale = needScale ? Math.min(width / minWidth, height / minHeight) : 1;   // smallest Aspect-Ratio for Scale
            const roundedScale = Math.floor(scale * factor) / factor;   // avoids overflow & reduces subpixel-offset
            setScale(roundedScale);
        }

        const onResize = () => {
            cancelAnimationFrame(rAF);
            rAF = requestAnimationFrame(calculateScale);    // avoid Resize-Spam
        }
        calculateScale();   // executes on start

        window.addEventListener("resize", onResize);

        return () => {
            cancelAnimationFrame(rAF);
            window.removeEventListener("resize", onResize);
        }
    }, [minWidth, minHeight, precision]);

    return scale;
}