import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Education.css';

interface EducationItem {
    degree: string;
    institution?: string;
    year: string;
    highlight?: boolean;
}

const educationData: EducationItem[] = [
    {
        degree: "CA Final",
        institution: "ICAI",
        year: "Nov 2023 & May 2024",
        highlight: true
    },
    {
        degree: "CA Intermediate",
        institution: "ICAI",
        year: "2019"
    },
    {
        degree: "B.Com",
        institution: "Madras University",
        year: "2020"
    },
    {
        degree: "CPT",
        institution: "ICAI",
        year: "2017"
    }
];

export const Education: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="education-section section-padding" id="education" ref={ref}>
            <div className="container">
                <h2 className={`section-title text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    Education
                </h2>

                <div className={`education-timeline ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    {educationData.map((item, index) => (
                        <div key={index} className={`education-item ${item.highlight ? 'highlight' : ''}`}>
                            <div className="education-year">{item.year}</div>
                            <div className="education-content">
                                <h3 className="education-degree">{item.degree}</h3>
                                {item.institution && <p className="education-institution">{item.institution}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
