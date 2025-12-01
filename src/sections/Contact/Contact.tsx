import React from 'react';
import { Button } from '../../components/Button/Button';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Contact.css';

export const Contact: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="contact-section section-padding" id="contact" ref={ref}>
            <div className="container">
                <div className={`contact-content ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <div className="contact-header text-center">
                        <h2 className="section-title text-white">Let's Connect</h2>
                        <p className="contact-subtitle">
                            I'm always open to discussing new opportunities in financial analysis,
                            equity research, and assurance. Feel free to reach out!
                        </p>
                    </div>

                    <div className="contact-cards-grid">
                        <div className="contact-card">
                            <div className="card-icon-wrapper">
                                <span className="card-icon">📧</span>
                            </div>
                            <h3 className="card-title">Email</h3>
                            <a href="mailto:swethakrish694@gmail.com" className="card-value">
                                swethakrish694@gmail.com
                            </a>
                            <Button
                                variant="outline"
                                size="sm"
                                href="mailto:swethakrish694@gmail.com"
                                className="contact-cta"
                            >
                                Send Email
                            </Button>
                        </div>

                        <div className="contact-card">
                            <div className="card-icon-wrapper">
                                <span className="card-icon">📱</span>
                            </div>
                            <h3 className="card-title">Phone</h3>
                            <a href="tel:+917904085253" className="card-value">
                                +91 7904085253
                            </a>
                            <Button
                                variant="outline"
                                size="sm"
                                href="tel:+917904085253"
                                className="contact-cta"
                            >
                                Call Now
                            </Button>
                        </div>

                        <div className="contact-card">
                            <div className="card-icon-wrapper">
                                <span className="card-icon">💼</span>
                            </div>
                            <h3 className="card-title">LinkedIn</h3>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="card-value">
                                Connect on LinkedIn
                            </a>
                            <Button
                                variant="outline"
                                size="sm"
                                href="https://linkedin.com"
                                target="_blank"
                                className="contact-cta"
                            >
                                View Profile
                            </Button>
                        </div>
                    </div>

                    <div className="status-banner">
                        <div className="status-content">
                            <span className="status-dot"></span>
                            <div className="status-text">
                                <span className="status-label">Currently</span>
                                <span className="status-value">Pursuing FinShiksha Financial Analyst Course</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="footer text-center">
                <p>Note: This website is made to showcase my skills and projects better</p>
                <p className="copyright">© {new Date().getFullYear()} Swetha Kalyanakrishnan</p>
            </footer>
        </section>
    );
};
