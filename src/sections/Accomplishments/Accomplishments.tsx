import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Accomplishments.css';

export const Accomplishments: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="accomplishments-section section-padding" ref={ref}>
            <div className="container">
                <h2 className={`section-title text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    Accomplishments & Recognition
                </h2>

                <div className={`accomplishments-grid ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <div className="accomplishment-item">
                        <div className="accomplishment-icon">🎤</div>
                        <h3 className="accomplishment-title">Training Delivered</h3>
                        <p className="accomplishment-desc">
                            Conducted training sessions for professionals on CECL (Current Expected Credit Losses) standards.
                        </p>
                    </div>

                    <div className="accomplishment-item">
                        <div className="accomplishment-icon">👥</div>
                        <h3 className="accomplishment-title">Mentorship</h3>
                        <p className="accomplishment-desc">
                            Mentored 3 junior colleagues during articleship, guiding them through audit procedures and compliance.
                        </p>
                    </div>

                    <div className="accomplishment-item">
                        <div className="accomplishment-icon">🤖</div>
                        <h3 className="accomplishment-title">AI Pioneer</h3>
                        <p className="accomplishment-desc">
                            Early adopter of AI tools in financial analysis, developing workflows to enhance audit efficiency.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
