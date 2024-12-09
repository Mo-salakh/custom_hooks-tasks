import { useEffect, useState } from "react";


export function useWindowScroll() {
    const [scroll, setScroll] = useState({
        x:0,
        y:0
    })

    useEffect(() => {
        const handleScroll = () => {
            setScroll({
                x: window.scrollX,
                y: window.scrollY
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTo = (value: { y?: number; x?: number }) => {
        if (value.y !== undefined) {
            window.scrollTo({
                top: value.y,
                behavior: 'smooth'
            });
        }
        if (value.x !== undefined) {
            window.scrollTo({
                left: value.x,
                behavior: 'smooth'
            });
        }
    };

    return {scroll, scrollTo}
}