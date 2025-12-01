import React from 'react';
import './Card.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    onClick?: () => void;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
    children,
    className = '',
    hoverEffect = true,
    onClick,
    padding = 'md',
}) => {
    return (
        <div
            className={`
        card 
        card-padding-${padding} 
        ${hoverEffect ? 'card-hover' : ''} 
        ${onClick ? 'card-clickable' : ''} 
        ${className}
      `}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
