import React from 'react';
import { AnimatedCounter } from '../../components/AnimatedCounter/AnimatedCounter';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import profileImage from '../../assets/images/webimage.jpeg';
import './About.css';

export const About: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.2);

    return (
        <section className="about-section section-padding" id="about" ref={ref}>
            <div className="container">
                <div className={`about-content ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <div className="about-grid">
                        <div className="about-image-container">
                            <div className="about-image-wrapper">
                                <img src={profileImage} alt="Swetha Kalyanakrishnan" className="about-image" />
                                <div className="image-overlay"></div>
                            </div>
                            <div className="about-decoration"></div>
                        </div>

                        <div className="about-text">
                            <h2 className="section-title">About Me</h2>
                            <p className="about-bio">
                                I am a Chartered Accountant with over 4 years of experience spanning articleship and Big 4 assurance.
                                My expertise lies in Statutory Audit, Tax Advisory, Financial Analysis, and Internal Controls.
                            </p>
                            <p className="about-bio">
                                What sets me apart is my unique approach to financial problem-solving:
                                <strong> leveraging AI tools</strong> like ChatGPT, Perplexity, and NotebookLM to enhance audit efficiency
                                and deliver data-driven insights that go beyond traditional methods.
                            </p>

                            <div className="about-metrics">
                                <AnimatedCounter
                                    end={50}
                                    suffix="+"
                                    label="Tax Compliance Filings"
                                />
                                <AnimatedCounter
                                    end={20}
                                    prefix="₹"
                                    suffix="Cr+"
                                    label="Assets Verified"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
