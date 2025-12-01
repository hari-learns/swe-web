import React from 'react';
import { Badge } from '../../components/Badge/Badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Skills.css';

export const Skills: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    const coreCompetencies = [
        "Statutory Audit", "Internal Audit", "Tax Audit",
        "Income Tax", "GST", "TDS Compliance", "Financial Modelling",
        "Financial Statement Analysis", "Ratio Analysis",
        "COSO Framework", "Control Testing"
    ];

    const technicalSkills = [
        "Excel Modeling", "Power BI",
        "ChatGPT", "Perplexity", "NotebookLM",
        "Prompt Engineering"
    ];

    const certifications = [
        "NISM Research Analyst",
        "NISM Mutual Fund Distributor",
        "FinShiksha Financial Analyst (In Progress)"
    ];

    return (
        <section className="skills-section section-padding" id="skills" ref={ref}>
            <div className="container">
                <div className={`skills-container ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <div className="skills-header">
                        <h2 className="section-title">Skills & Expertise</h2>
                        <p className="skills-subtitle">
                            A blend of traditional accounting excellence and modern technological proficiency
                        </p>
                    </div>

                    <div className="skills-grid">
                        <div className="skill-category">
                            <h3 className="category-title">Core Competencies</h3>
                            <div className="skill-tags">
                                {coreCompetencies.map(skill => (
                                    <Badge key={skill} variant="secondary" size="md" className="skill-badge">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3 className="category-title">Technical & AI Skills</h3>
                            <div className="skill-tags">
                                {technicalSkills.map(skill => (
                                    <Badge key={skill} variant="outline" size="md" className="skill-badge">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3 className="category-title">Certifications</h3>
                            <div className="cert-list">
                                {certifications.map(cert => (
                                    <div key={cert} className="cert-item">
                                        <span className="cert-icon">📜</span>
                                        <span className="cert-name">{cert}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
