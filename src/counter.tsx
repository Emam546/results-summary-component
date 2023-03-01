import { ReactNode, useEffect, useState } from "react";
const interval = 2000;
const step = 40;

export default function Counter({ children }: { children: ReactNode }) {
    const [startValue, setStartValue] = useState(0);
    if (!children) return null;
    const endValue = parseInt(children.toString());
    if (!endValue) return null;
    useEffect(() => {
        const duration = Math.floor(interval / step);
        const increment = Math.ceil(endValue / step);
        const counter = setInterval(function () {
            setStartValue((pre) => {
                if (pre >= endValue) {
                    clearInterval(counter);
                    return Math.min(pre, endValue);
                }
                return (pre += increment);
            });
            return () => clearInterval(counter);
        }, duration);
        return () => clearInterval(counter);
    }, []);

    return <>{startValue.toLocaleString("en-US")}</>;
}
