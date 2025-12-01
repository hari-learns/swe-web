import { useState, useEffect, useRef } from 'react';

export const useCounter = (end: number, duration: number = 2000, start: number = 0) => {
    const [count, setCount] = useState(start);

    const startTimeRef = useRef<number | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const startAnimation = () => {
        setIsAnimating(true);
        startTimeRef.current = null;
    };

    useEffect(() => {
        if (!isAnimating) return;

        const animate = (timestamp: number) => {
            if (!startTimeRef.current) startTimeRef.current = timestamp;
            const progress = timestamp - startTimeRef.current;
            const percentage = Math.min(progress / duration, 1);

            // Easing function (easeOutQuart)
            const easeOutQuart = 1 - Math.pow(1 - percentage, 4);

            const currentCount = Math.floor(start + (end - start) * easeOutQuart);

            setCount(currentCount);

            if (percentage < 1) {
                requestAnimationFrame(animate);
            } else {
                setIsAnimating(false);
            }
        };

        requestAnimationFrame(animate);
    }, [end, duration, start, isAnimating]);

    return { count, startAnimation };
};
