import React, { useState } from 'react';
import Nav from '../components/Nav';
import StaffCard from '../components/StaffCard';
import { STAFF_DATA } from '../data/sampleData';

const Staffs: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('All');

    const filteredStaff = STAFF_DATA.filter(staff => {
        const matchesSearch = staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            staff.subjects.some(sub => sub.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesFilter = filter === 'All' || staff.designation.includes(filter);

        return matchesSearch && matchesFilter;
    });

    const designations = ['All', ...new Set(STAFF_DATA.map(s => s.designation))];

    return (
        <div className="page-container staff-page">
            <Nav />
            <div className="content-wrapper">
                <div className="page-header">
                    <div>
                        <h1 className="page-title">Our Faculty</h1>
                        <p className="text-muted">Meet the dedicated professors shaping your future.</p>
                    </div>

                    <div className="controls">
                        <div className="search-box">
                            <span className="search-icon"></span>
                            <input
                                type="text"
                                placeholder="Search staff..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="input search-input"
                            />
                        </div>
                        <select
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            className="input filter-select"
                        >
                            {designations.map(d => (
                                <option key={d} value={d}>{d}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="staff-grid">
                    {filteredStaff.map(staff => (
                        <StaffCard key={staff.id} staff={staff} />
                    ))}
                </div>

                {filteredStaff.length === 0 && (
                    <div className="empty-state">
                        <span className="empty-icon">🔍</span>
                        <h3>No staff found</h3>
                        <p>Try adjusting your search or filter.</p>
                    </div>
                )}
            </div>

            <style>{`
                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 32px;
                    flex-wrap: wrap;
                    gap: 20px;
                }

                .controls {
                    display: flex;
                    gap: 16px;
                }

                .search-box {
                    position: relative;
                    width: 300px;
                }

                .search-icon {
                    position: absolute;
                    left: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    opacity: 0.5;
                }

                .search-input {
                    padding-left: 40px;
                }

                .filter-select {
                    width: 150px;
                    cursor: pointer;
                }

                .staff-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                    gap: 24px;
                }

                .empty-state {
                    text-align: center;
                    padding: 60px;
                    color: var(--text-muted);
                }

                .empty-icon {
                    font-size: 48px;
                    margin-bottom: 16px;
                    display: block;
                    opacity: 0.5;
                }

                @media (max-width: 768px) {
                    .page-header {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    
                    .controls {
                        width: 100%;
                        flex-direction: column;
                    }

                    .search-box, .filter-select {
                        width: 100%;
                    }
                }
            `}</style>
        </div>
    );
};

export default Staffs;
