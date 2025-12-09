import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Toast from '../components/Toast';
import { SUBJECTS_DATA, UNITS_DATA, QUESTION_BANKS_DATA } from '../data/sampleData';

const SubjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const subject = SUBJECTS_DATA.find(s => s.id === id);

    const units = id ? UNITS_DATA[id] : [];
    const questionBanks = id ? QUESTION_BANKS_DATA[id] || [] : [];

    if (!subject) {
        return (
            <div className="page-container">
                <Nav />
                <div className="content-wrapper error-state">
                    <h2>Subject not found</h2>
                    <button onClick={() => navigate('/subjects')} className="btn btn-primary">
                        Back to Subjects
                    </button>
                </div>
            </div>
        );
    }

    const handleDownload = (title: string) => {
        setToastMessage(`Downloading ${title}...`);
        setShowToast(true);
    };

    return (
        <div className="page-container">
            <Nav />
            {showToast && (
                <Toast
                    message={toastMessage}
                    type="success"
                    onClose={() => setShowToast(false)}
                />
            )}

            <div className="content-wrapper">
                {/* Header Banner */}
                <div className="subject-header">
                    <button onClick={() => navigate('/subjects')} className="back-btn">
                        ← Back
                    </button>
                    <div className="header-content">
                        <span className="badge">Semester {subject.semester}</span>
                        <h1 className="subject-title">{subject.name}</h1>
                        <p className="subject-code">{subject.code || 'Code: N/A'}</p>
                    </div>
                </div>

                <div className="details-layout">
                    {/* Units/Manuals Section */}
                    <div className="units-section">
                        <h2 className="section-title">
                            {subject.type === 'laboratory' ? 'Lab Manuals' : 'Study Units'}
                        </h2>
                        <div className="units-list">
                            {units && units.length > 0 ? (
                                units.map((unit) => (
                                    <div key={unit.unitNumber} className="card unit-card">
                                        <div className="unit-header">
                                            <span className="unit-number">
                                                {subject.type === 'laboratory' ? 'Exp' : 'Unit'} {unit.unitNumber}
                                            </span>
                                            <div className="unit-actions">
                                                <a
                                                    href={unit.downloadUrl}
                                                    download
                                                    className="btn bg-[linear-gradient(135deg,_#00214D_0%,_#0047AB_100%)] btn-sm download-btn"
                                                    onClick={() => handleDownload(unit.title)}
                                                >
                                                    <span className="download-icon">⬇️</span>
                                                    <span>Download PDF</span>
                                                </a>
                                            </div>
                                        </div>
                                        <h3 className="unit-title">{unit.title}</h3>
                                        <p className="unit-desc">{unit.description}</p>
                                    </div>
                                ))
                            ) : (
                                <div className="empty-state card">
                                    <p>No {subject.type === 'laboratory' ? 'manuals' : 'units'} available for this subject yet.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar: Question Bank & Resources (Only for Theory) */}
                    {subject.type !== 'laboratory' && (
                        <div className="resources-sidebar">
                            <div className="card qb-card">
                                <h3>Question Bank</h3>
                                <div className="qb-list">
                                    {questionBanks.length > 0 ? (
                                        questionBanks.map((qb) => (
                                            <div key={qb.id} className="qb-item">
                                                <div className="qb-info">
                                                    <span className="qb-year">{qb.year}</span>
                                                    <p>{qb.title}</p>
                                                </div>
                                                <a
                                                    href={qb.downloadUrl}
                                                    download
                                                    className="btn btn-ghost btn-icon"
                                                    title="Download"
                                                    onClick={() => handleDownload(qb.title)}
                                                >
                                                    ⬇️
                                                </a>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-muted text-small">No question papers available.</p>
                                    )}
                                </div>
                            </div>

                            <div className="card syllabus-card">
                                <h3>Syllabus</h3>
                                <p className="text-muted mb-4">Download the complete syllabus for this subject.</p>
                                <button className="btn btn-secondary w-full">Download Syllabus</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .subject-header {
                    background: linear-gradient(135deg, #00214D 0%, #0047AB 100%);
                    padding: 40px;
                    border-radius: 20px;
                    color: white;
                    margin-bottom: 32px;
                    position: relative;
                    overflow: hidden;
                }

                .subject-header::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 300px;
                    height: 100%;
                    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAwIDAgTDIwMCAxMDAgTDEwMCAyMDAgTDAgMTAwIFoiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=');
                    background-repeat: repeat;
                    opacity: 0.3;
                }

                .back-btn {
                    background: rgba(255,255,255,0.2);
                    border: none;
                    color: white;
                    padding: 8px 16px;
                    border-radius: 20px;
                    cursor: pointer;
                    margin-bottom: 24px;
                    transition: 0.2s;
                }

                .back-btn:hover {
                    background: rgba(255,255,255,0.3);
                }

                .header-content .badge {
                    background: rgba(255,255,255,0.2);
                    color: white;
                    margin-bottom: 12px;
                    display: inline-block;
                }

                .subject-title {
                    font-size: 32px;
                    color: white;
                    margin-bottom: 8px;
                }

                .subject-code {
                    opacity: 0.8;
                    font-size: 16px;
                }

                .details-layout {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 32px;
                }

                .units-list {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .unit-card {
                    border-left: 4px solid var(--primary);
                }

                .unit-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 12px;
                    gap: 16px;
                }

                .unit-number {
                    font-size: 12px;
                    text-transform: uppercase;
                    color: var(--primary);
                    font-weight: 700;
                    letter-spacing: 1px;
                    flex-shrink: 0;
                    min-width: fit-content;
                }

                .unit-actions {
                    flex-shrink: 0;
                }

                .unit-title {
                    font-size: 18px;
                    margin-bottom: 8px;
                }

                .unit-desc {
                    color: var(--text-muted);
                    font-size: 14px;
                }

                .resources-sidebar {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .qb-list {
                    margin-top: 16px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .qb-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 12px;
                    background: var(--bg);
                    border-radius: 8px;
                }

                .qb-year {
                    font-size: 11px;
                    background: var(--primary-dark);
                    color: white;
                    padding: 2px 6px;
                    border-radius: 4px;
                    margin-right: 8px;
                }

                .qb-info p {
                    font-size: 13px;
                    font-weight: 500;
                    display: inline;
                }

                .download-btn {
                    display: inline-flex !important;
                    align-items: center;
                    gap: 6px;
                    white-space: nowrap;
                    padding: 8px 16px !important;
                }

                .download-icon {
                    font-size: 16px;
                    line-height: 1;
                }

                .mb-4 { margin-bottom: 16px; }

                @media (max-width: 968px) {
                    .details-layout {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default SubjectDetails;
