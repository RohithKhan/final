import React, { useState } from 'react';
import Nav from '../components/Nav';
import SubjectCard from '../components/SubjectCard';
import { SUBJECTS_DATA } from '../data/sampleData';

const Subjects: React.FC = () => {
    // Group subjects by semester
    const subjectsBySem = SUBJECTS_DATA.reduce((acc, subject) => {
        const sem = subject.semester;
        if (!acc[sem]) acc[sem] = [];
        acc[sem].push(subject);
        return acc;
    }, {} as Record<number, typeof SUBJECTS_DATA>);

    const semesters = Object.keys(subjectsBySem).map(Number).sort((a, b) => a - b);
    const [expandedSem, setExpandedSem] = useState<number | null>(semesters[0]);

    return (
        <div className="page-container">
            <Nav />
            <div className="content-wrapper">
                <div className="page-header">
                    <h1 className="page-title">Academic Subjects</h1>
                    <p className="text-muted">Browse course materials by semester.</p>
                </div>

                <div className="semesters-container">
                    {semesters.map(sem => (
                        <div key={sem} className={`semester-group ${expandedSem === sem ? 'expanded' : ''}`}>
                            <button
                                className="semester-header"
                                onClick={() => setExpandedSem(expandedSem === sem ? null : sem)}
                            >
                                <span className="sem-title">Semester {sem}</span>
                                <span className="sem-count">{subjectsBySem[sem].length} Subjects</span>
                                <span className="chevron">▼</span>
                            </button>

                            <div className="semester-content">
                                <div className="subjects-grid">
                                    {subjectsBySem[sem].map(subject => (
                                        <SubjectCard key={subject.id} subject={subject} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .semesters-container {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .semester-group {
                    background: white;
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                    overflow: hidden;
                    transition: var(--transition);
                }

                .semester-group.expanded {
                    box-shadow: var(--shadow-md);
                    border-color: var(--primary-light);
                }

                .semester-header {
                    width: 100%;
                    padding: 20px 24px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    background: white;
                    border: none;
                    cursor: pointer;
                    text-align: left;
                }

                .semester-header:hover {
                    background: var(--surface-hover);
                }

                .sem-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--primary-dark);
                }

                .sem-count {
                    margin-left: auto;
                    margin-right: 16px;
                    font-size: 14px;
                    color: var(--text-muted);
                    background: var(--bg);
                    padding: 4px 12px;
                    border-radius: 20px;
                }

                .chevron {
                    transition: transform 0.3s ease;
                    color: var(--text-muted);
                }

                .semester-group.expanded .chevron {
                    transform: rotate(180deg);
                }

                .semester-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease-out;
                    background: var(--bg);
                }

                .semester-group.expanded .semester-content {
                    max-height: 2000px; /* Large enough to fit content */
                    padding: 24px;
                    border-top: 1px solid var(--border);
                }

                .subjects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 24px;
                }
            `}</style>
        </div>
    );
};

export default Subjects;
