import React from 'react';
import { Card } from '../../components/Card/Card';
import { Button } from '../../components/Button/Button';
import { Badge } from '../../components/Badge/Badge';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Projects.css';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    metrics: string;
    icon: string;
    tags: string[];
}

const VIEW_ANALYSIS_LINK = 'https://drive.google.com/drive/folders/1VdbL4lS26YXF5CJXkvPgCXYxl-0bli15';

const projects: Project[] = [
    {
        id: 1,
        title: "Real Estate Peer Comparison",
        category: "Sector Analysis",
        description: "Comparative analysis of major real estate players including DLF, Godrej, and Brigade.",
        metrics: "Identified key efficiency ratios",
        icon: "🏢",
        tags: ["DLF", "Godrej", "Brigade"]
    },
    {
        id: 2,
        title: "Financial Statement Analysis - CEAT Limited",
        category: "Comprehensive Analysis",
        description: "Complete financial statement analysis of CEAT Limited covering balance sheet, P&L, ratios, debt, cost structure, and operating leverage.",
        metrics: "6 comprehensive analyses",
        icon: "🚗",
        tags: ["CEAT", "Tire Industry", "Complete Analysis"]
    },
    {
        id: 3,
        title: "Infosys FY25 Deep Dive",
        category: "Equity Research",
        description: "Comprehensive financial analysis of Infosys for FY25, highlighting growth drivers and risks.",
        metrics: "Revenue growth projections",
        icon: "💻",
        tags: ["IT Sector", "Financial Modeling"]
    },
    {
        id: 4,
        title: "DuPont ROE Analysis",
        category: "Financial Analysis",
        description: "Detailed DuPont analysis for 5 major companies to decompose Return on Equity drivers.",
        metrics: "Profit Margin vs Asset Turnover",
        icon: "📊",
        tags: ["ROE", "Ratio Analysis"]
    },
    {
        id: 5,
        title: "Working Capital Analysis",
        category: "Operational Efficiency",
        description: "Cash Conversion Cycle (CCC) analysis spanning from IT sector to Hospitality industry.",
        metrics: "Optimized working capital cycles",
        icon: "🏨",
        tags: ["CCC", "Liquidity"]
    }
];

export const Projects: React.FC = () => {
    const { ref, isVisible } = useScrollAnimation(0.1);

    return (
        <section className="projects-section section-padding" id="projects" ref={ref}>
            <div className="container">
                <div className={`projects-header ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <h2 className="section-title">Financial Analysis Projects</h2>
                    <p className="section-subtitle">
                        Showcasing data-driven insights and strategic financial assessments
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className={isVisible ? 'animate-slide-up' : 'opacity-0'}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Card className="project-card">
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-content">
                                    <Badge variant="primary" size="sm" className="project-category">
                                        {project.category}
                                    </Badge>
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-metrics">
                                        <span className="metric-icon">⚡</span>
                                        <span className="metric-text">{project.metrics}</span>
                                    </div>

                                    <div className="project-tags">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="project-tag">#{tag}</span>
                                        ))}
                                    </div>

                                    <Button
                                        variant="text"
                                        size="sm"
                                        className="project-link"
                                        href={VIEW_ANALYSIS_LINK}
                                        target="_blank"
                                    >
                                        View Analysis →
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className={`projects-cta ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
                    <Button
                        variant="primary"
                        size="lg"
                        href={VIEW_ANALYSIS_LINK}
                        target="_blank"
                    >
                        View Full Portfolio
                    </Button>
                </div>
            </div>
        </section>
    );
};
