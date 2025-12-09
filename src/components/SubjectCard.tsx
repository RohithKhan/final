import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Subject } from '../data/sampleData';

interface SubjectCardProps {
    subject: Subject;
}

const SubjectCard: React.FC<SubjectCardProps> = ({ subject }) => {
    const navigate = useNavigate();

    return (
        <div className="card subject-card" onClick={() => navigate(`/subjects/${subject.id}`)}>
            <div className="card-content">
                <div className="subject-icon">
                    📚
                </div>
                <div className="subject-info">
                    <span className="semester-tag">Sem {subject.semester}</span>
                    <h3>{subject.name}</h3>
                    <p className="subject-code">{subject.code || 'Code: N/A'}</p>
                </div>
            </div>
            <div className="card-footer">
                <span className="view-text">View Details</span>
                <span className="arrow">→</span>
            </div>

            <style>{`
                .subject-card {
                    cursor: pointer;
                    padding: 0;
                    border: 1px solid transparent;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                }

                .subject-card:hover {
                    transform: translateY(-4px);
                    box-shadow: var(--shadow-lg);
                    border-color: var(--primary-light);
                }

                .card-content {
                    padding: 24px;
                    flex: 1;
                    display: flex;
                    gap: 16px;
                }

                .subject-icon {
                    width: 48px;
                    height: 48px;
                    background: var(--primary-light);
                    color: var(--primary);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    flex-shrink: 0;
                }

                .subject-card:hover .subject-icon {
                    background: var(--primary-light);
                }

                .subject-info h3 {
                    font-size: 16px;
                    margin: 4px 0;
                    line-height: 1.4;
                }

                .semester-tag {
                    font-size: 11px;
                    text-transform: uppercase;
                    color: var(--primary);
                    font-weight: 600;
                    letter-spacing: 0.5px;
                }

                .subject-code {
                    font-size: 13px;
                    color: var(--text-muted);
                }

                .card-footer {
                    padding: 12px 24px;
                    border-top: 1px solid var(--border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: var(--primary);
                    font-weight: 500;
                    font-size: 14px;
                    background: var(--surface-hover);
                }

                .arrow {
                    transition: transform 0.3s ease;
                }

                .subject-card:hover .arrow {
                    transform: translateX(4px);
                }
            `}</style>
        </div>
    );
};

export default SubjectCard;
