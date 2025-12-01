import React, { useEffect } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './AnimatedCounter.css';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    label: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
    end,
    duration = 2000,
    prefix = '',
    suffix = '',
    label,
}) => {
    const { count, startAnimation } = useCounter(end, duration);
    const { ref, isVisible } = useScrollAnimation(0.5);

    useEffect(() => {
        if (isVisible) {
            startAnimation();
        }
    }, [isVisible]);

    return (
        <div className="counter-container" ref={ref}>
            <div className="counter-value">
                {prefix}{count}{suffix}
            </div>
            <div className="counter-label">{label}</div>
        </div>
    );
};
