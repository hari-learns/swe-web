import React from 'react';
import { Timeline } from '../../components/Timeline/Timeline';
import TimelineItem from '../../components/Timeline/Timeline';
import { Badge } from '../../components/Badge/Badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Experience.css';

export const Experience: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="experience-section section-padding" id="experience" ref={ref}>
            <div className="container">
                <h2 className={`section-title text-center ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    Professional Experience
                </h2>

                <div className={isVisible ? 'animate-slide-up' : 'opacity-0'}>
                    <Timeline>
                        <TimelineItem
                            date="Nov 2024 - Present"
                            title="PwC Acceleration Centers"
                            subtitle="Assurance Associate 2"
                            description="Specializing in Real Estate & Banking audits, utilizing the COSO Framework and auditing PE Funds."
                        >
                            <div className="experience-details">
                                <div className="experience-tags">
                                    <Badge variant="secondary" size="sm">Real Estate</Badge>
                                    <Badge variant="secondary" size="sm">Banking</Badge>
                                    <Badge variant="secondary" size="sm">COSO</Badge>
                                    <Badge variant="secondary" size="sm">PE Funds</Badge>
                                </div>
                                <ul className="experience-list">
                                    <li><strong>Planning:</strong> Risk assessment and audit strategy formulation</li>
                                    <li><strong>Execution:</strong> Year-end and interim audit procedures</li>
                                    <li><strong>Completion:</strong> Final review and reporting</li>
                                </ul>
                            </div>
                        </TimelineItem>

                        <TimelineItem
                            date="April 2021 - Mar 2024"
                            title="N Ganesh & Associates"
                            subtitle="Articled Assistant"
                            description="Managed a team of 3 members while gaining comprehensive experience in auditing, taxation, and financial services."
                            isLast={true}
                        >
                            <div className="experience-details">
                                <div className="experience-tags">
                                    <Badge variant="outline" size="sm">Team Lead</Badge>
                                    <Badge variant="neutral" size="sm">Auditing</Badge>
                                    <Badge variant="neutral" size="sm">Taxation</Badge>
                                </div>
                                <div className="experience-pillars">
                                    <div className="pillar">
                                        <h5>Auditing & Assurance</h5>
                                        <p>Statutory & Tax Audits for various entities</p>
                                    </div>
                                    <div className="pillar">
                                        <h5>Taxation</h5>
                                        <p>Income Tax & GST compliance and filing</p>
                                    </div>
                                    <div className="pillar">
                                        <h5>Other Services</h5>
                                        <p>Financial analysis and advisory</p>
                                    </div>
                                </div>
                            </div>
                        </TimelineItem>
                    </Timeline>
                </div>
            </div>
        </section>
    );
};
