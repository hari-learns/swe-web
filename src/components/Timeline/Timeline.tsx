import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Timeline.css';

interface TimelineItemProps {
    date: string;
    title: string;
    subtitle: string;
    description?: string;
    children?: React.ReactNode;
    isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    date,
    title,
    subtitle,
    description,
    children,
    isLast = false,
}) => {
    const { ref, isVisible } = useScrollAnimation(0.2);
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div
            className={`timeline-item ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
            ref={ref}
        >
            <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {!isLast && <div className="timeline-line"></div>}
            </div>
            <div className="timeline-content">
                <div className="timeline-header" onClick={() => setIsExpanded(!isExpanded)}>
                    <div className="timeline-date">{date}</div>
                    <h3 className="timeline-title">{title}</h3>
                    <h4 className="timeline-subtitle">{subtitle}</h4>
                </div>

                <div className={`timeline-body ${isExpanded ? 'expanded' : ''}`}>
                    {description && <p className="timeline-description">{description}</p>}
                    {children}
                </div>
            </div>
        </div>
    );
};

interface TimelineProps {
    children: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
    return (
        <div className="timeline">
            {children}
        </div>
    );
};

export default TimelineItem;
