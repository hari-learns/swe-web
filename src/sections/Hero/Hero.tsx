import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import './Hero.css';

export const Hero: React.FC = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero-section" id="home">
            <div
                className="hero-background"
                style={{ transform: `translateY(${offset * 0.5}px)` }}
            >
                <div className="hero-pattern"></div>
                <div className="hero-gradient"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-text animate-slide-up">
                    <h1 className="hero-title">
                        Swetha Kalyanakrishnan <span className="hero-subtitle">| Chartered Accountant</span>
                    </h1>
                    <p className="hero-tagline">
                        Transforming Financial Data into Strategic Insights through Assurance Excellence & AI-Enhanced Analytics
                    </p>

                    <div className="hero-actions">
                        <Button
                            variant="primary"
                            size="lg"
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            View Projects
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            href="https://drive.google.com/drive/folders/1VdbL4lS26YXF5CJXkvPgCXYxl-0bli15"
                            target="_blank"
                        >
                            Download Resume
                        </Button>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};
