import React, { useState } from 'react';
import Nav from '../components/Nav';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const PassApproval: React.FC = () => {
    const navigate = useNavigate();
    const [staffApproval, setStaffApproval] = useState<'pending' | 'approved' | 'rejected'>('pending');
    const [wardenApproval, setWardenApproval] = useState<'pending' | 'approved' | 'rejected'>('pending');

    // Sample data - replace with actual data from API/props
    const studentData = {
        name: "Rajesh Kumar",
        rollNumber: "21CS101",
        department: "Computer Science and Engineering",
        year: "III",
        section: "A",
        mobile: "+91 9876543210",
        idPhoto: "https://via.placeholder.com/150"
    };

    const parentsData = {
        fatherName: "Kumar Selvam",
        motherName: "Lakshmi Kumar",
        parentContact: "+91 9876543211",
        emergencyContact: "+91 9876543212"
    };

    const hostelData = {
        hostelName: "Boys Hostel A",
        roomNumber: "204",
        block: "Block B, Floor 2",
        wardenName: "Dr. Suresh Kumar"
    };

    const lastPassData = {
        outDate: "2025-11-28",
        returnDate: "2025-11-30",
        reason: "Family Function",
        approvedBy: "Dr. Suresh Kumar",
        status: "Approved"
    };

    const requestData = {
        reason: "Sister's Wedding Ceremony",
        outDate: "2025-12-15 10:00 AM",
        returnDate: "2025-12-17 08:00 PM",
        transport: "Private Car"
    };


    // Sequential approval handlers for the bottom buttons
    const handleApprove = () => {
        if (staffApproval === 'pending') {
            setStaffApproval('approved');
            toast.success("Staff approval granted!");
        } else if (staffApproval === 'approved' && wardenApproval === 'pending') {
            setWardenApproval('approved');
            toast.success("Warden approval granted! Outpass fully approved.");
        }
    };

    const handleReject = () => {
        if (staffApproval === 'pending') {
            setStaffApproval('rejected');
            toast.error("Outpass rejected by staff.");
        } else if (staffApproval === 'approved' && wardenApproval === 'pending') {
            setWardenApproval('rejected');
            toast.error("Outpass rejected by warden.");
        }
    };



    const getStatusBadge = (status: string) => {
        const statusColors = {
            approved: 'status-approved',
            pending: 'status-pending',
            rejected: 'status-rejected'
        };
        return statusColors[status.toLowerCase() as keyof typeof statusColors] || 'status-pending';
    };

    return (
        <div className="page-container approval-page">
            <Nav />
            <div className="content-wrapper">
                <div className="page-header">
                    <button onClick={() => navigate('/dashboard')} className="back-btn">
                        ← Back to Dashboard
                    </button>
                    <h1>Outpass Request & Approval</h1>
                    <p>Review and approve student outpass requests</p>
                </div>

                <div className="approval-container">
                    {/* Student Personal Details */}
                    <div className="info-card">
                        <h2 className="card-title">Student Personal Details</h2>
                        <div className="card-content">
                            <div className="student-header">
                                <img src={studentData.idPhoto} alt="Student ID" className="student-photo" />
                                <div className="student-basic-info">
                                    <div className="info-row">
                                        <span className="info-label">Student Name:</span>
                                        <span className="info-value">{studentData.name}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Roll Number:</span>
                                        <span className="info-value">{studentData.rollNumber}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Department:</span>
                                        <span className="info-value">{studentData.department}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="info-grid">
                                <div className="info-row">
                                    <span className="info-label">Year & Section:</span>
                                    <span className="info-value">{studentData.year} Year - Section {studentData.section}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Mobile Number:</span>
                                    <span className="info-value">{studentData.mobile}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Parents Details */}
                    <div className="info-card">
                        <h2 className="card-title">Parents Details</h2>
                        <div className="card-content">
                            <div className="info-grid">
                                <div className="info-row">
                                    <span className="info-label">Father Name:</span>
                                    <span className="info-value">{parentsData.fatherName}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Mother Name:</span>
                                    <span className="info-value">{parentsData.motherName}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Parent Contact:</span>
                                    <span className="info-value">{parentsData.parentContact}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Emergency Contact:</span>
                                    <span className="info-value">{parentsData.emergencyContact}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hostel Details & Last Pass Details */}
                    <div className="two-column-grid">
                        <div className="info-card">
                            <h2 className="card-title">Hostel Details</h2>
                            <div className="card-content">
                                <div className="info-grid">
                                    <div className="info-row">
                                        <span className="info-label">Hostel Name:</span>
                                        <span className="info-value">{hostelData.hostelName}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Room Number:</span>
                                        <span className="info-value">{hostelData.roomNumber}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Block / Floor:</span>
                                        <span className="info-value">{hostelData.block}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Warden Name:</span>
                                        <span className="info-value">{hostelData.wardenName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="info-card">
                            <h2 className="card-title">Last Outpass Details</h2>
                            <div className="card-content">
                                <div className="info-grid">
                                    <div className="info-row">
                                        <span className="info-label">Last Out Date:</span>
                                        <span className="info-value">{lastPassData.outDate}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Last Return Date:</span>
                                        <span className="info-value">{lastPassData.returnDate}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Reason:</span>
                                        <span className="info-value">{lastPassData.reason}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Approved By:</span>
                                        <span className="info-value">{lastPassData.approvedBy}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Status:</span>
                                        <span className={`status-badge ${getStatusBadge(lastPassData.status)}`}>
                                            {lastPassData.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Outpass Request Details */}
                    <div className="info-card highlight-card">
                        <h2 className="card-title">Outpass Request Details</h2>
                        <div className="card-content">
                            <div className="info-grid">
                                <div className="info-row">
                                    <span className="info-label">Reason for Outpass:</span>
                                    <span className="info-value">{requestData.reason}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Out Date:</span>
                                    <span className="info-value">{requestData.outDate}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Expected Return Date:</span>
                                    <span className="info-value">{requestData.returnDate}</span>
                                </div>
                                <div className="info-row">
                                    <span className="info-label">Mode of Transport:</span>
                                    <span className="info-value">{requestData.transport}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Multi-Level Approval Workflow */}
                    <div className="info-card">
                        <h2 className="card-title">Approval Workflow</h2>
                        <div className="card-content">
                            <div className="approval-flow">
                                <div className="approval-step">
                                    <div className={`step-indicator ${staffApproval}`}>
                                        {staffApproval === 'approved' ? '✓' : staffApproval === 'rejected' ? '✗' : '1'}
                                    </div>
                                    <div className="step-content">
                                        <h3 className="step-title">Staff Approval</h3>
                                        <span className={`status-badge ${getStatusBadge(staffApproval)}`}>
                                            {staffApproval.charAt(0).toUpperCase() + staffApproval.slice(1)}
                                        </span>
                                    </div>
                                </div>

                                <div className={`approval-connector ${staffApproval === 'approved' ? 'active' : ''}`}></div>

                                {/* Warden Approval Section */}
                                <div className="approval-step">
                                    <div className={`step-indicator ${wardenApproval} ${staffApproval !== 'approved' ? 'disabled' : ''}`}>
                                        {wardenApproval === 'approved' ? '✓' : wardenApproval === 'rejected' ? '✗' : '2'}
                                    </div>
                                    <div className="step-content">
                                        <h3 className="step-title">Warden Approval</h3>
                                        <span className={`status-badge ${getStatusBadge(wardenApproval)}`}>
                                            {wardenApproval.charAt(0).toUpperCase() + wardenApproval.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="action-buttons">
                        <button
                            onClick={handleApprove}
                            className="btn btn-approve"
                            disabled={wardenApproval === 'approved' || staffApproval === 'rejected' || wardenApproval === 'rejected'}
                        >
                            ✓ Approve
                        </button>
                        <button
                            onClick={handleReject}
                            className="btn btn-reject"
                            disabled={wardenApproval === 'approved' || staffApproval === 'rejected' || wardenApproval === 'rejected'}
                        >
                            ✗ Reject
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                .page-container {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%);
                }

                .content-wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 40px 20px;
                }

                .page-header {
                    margin-bottom: 32px;
                    text-align: center;
                }

                .page-header h1 {
                    font-size: 2.5rem;
                    color: #1e293b;
                    margin-bottom: 8px;
                    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .page-header p {
                    color: #64748b;
                    font-size: 1.1rem;
                }

                .back-btn {
                    background: none;
                    border: none;
                    color: #3b82f6;
                    cursor: pointer;
                    font-weight: 500;
                    margin-bottom: 16px;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 8px 16px;
                    border-radius: 8px;
                    transition: all 0.2s;
                }

                .back-btn:hover {
                    background: #eff6ff;
                }

                .approval-container {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .info-card {
                    background: white;
                    border-radius: 16px;
                    padding: 32px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                    border: 1px solid rgba(59, 130, 246, 0.1);
                    transition: all 0.3s ease;
                }

                .info-card:hover {
                    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
                    transform: translateY(-2px);
                }

                .highlight-card {
                    border: 2px solid #3b82f6;
                    background: linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%);
                }

                .card-title {
                    font-size: 1.5rem;
                    color: #1e3a8a;
                    margin-bottom: 24px;
                    padding-bottom: 12px;
                    border-bottom: 2px solid #e0e7ff;
                    font-weight: 600;
                }

                .card-content {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }

                .student-header {
                    display: flex;
                    gap: 24px;
                    align-items: flex-start;
                    margin-bottom: 16px;
                }

                .student-photo {
                    width: 120px;
                    height: 120px;
                    border-radius: 12px;
                    object-fit: cover;
                    border: 3px solid #3b82f6;
                    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
                }

                .student-basic-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .info-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 16px;
                }

                .info-row {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .info-label {
                    font-size: 0.875rem;
                    color: #64748b;
                    font-weight: 500;
                }

                .info-value {
                    font-size: 1rem;
                    color: #1e293b;
                    font-weight: 600;
                }

                .two-column-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 24px;
                }

                .approval-flow {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    padding: 20px 0;
                }

                .approval-step {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    padding: 20px;
                    position: relative;
                }

                .step-indicator {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    font-size: 1.25rem;
                    flex-shrink: 0;
                    transition: all 0.3s ease;
                }

                .step-indicator.pending {
                    background: #fef3c7;
                    color: #92400e;
                    border: 3px solid #fbbf24;
                }

                .step-indicator.approved {
                    background: #d1fae5;
                    color: #065f46;
                    border: 3px solid #10b981;
                }

                .step-indicator.rejected {
                    background: #fee2e2;
                    color: #991b1b;
                    border: 3px solid #ef4444;
                }

                .step-indicator.disabled {
                    background: #f1f5f9;
                    color: #94a3b8;
                    border: 3px solid #cbd5e1;
                }

                .step-content {
                    flex: 1;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .step-title {
                    font-size: 1.25rem;
                    color: #1e293b;
                    font-weight: 600;
                }

                .approval-connector {
                    width: 4px;
                    height: 40px;
                    background: #cbd5e1;
                    margin-left: 43px;
                    transition: all 0.3s ease;
                }

                .approval-connector.active {
                    background: #10b981;
                }

                .status-badge {
                    padding: 6px 16px;
                    border-radius: 20px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .status-approved {
                    background: #d1fae5;
                    color: #065f46;
                }

                .status-pending {
                    background: #fef3c7;
                    color: #92400e;
                }

                .status-rejected {
                    background: #fee2e2;
                    color: #991b1b;
                }

                .action-buttons {
                    display: flex;
                    gap: 16px;
                    justify-content: center;
                    margin-top: 16px;
                }

                .btn {
                    padding: 14px 32px;
                    border-radius: 12px;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    border: none;
                    transition: all 0.3s ease;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }

                .btn-approve {
                    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
                }

                .btn-approve:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
                }

                .btn-reject {
                    background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
                }

                .btn-reject:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4);
                }

                .btn-download {
                    background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
                }

                .btn-download:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
                }

                .btn-new-application {
                    background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%);
                    color: white;
                    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
                }

                .btn-new-application:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
                }


                @media (max-width: 768px) {
                    .two-column-grid {
                        grid-template-columns: 1fr;
                    }

                    .info-grid {
                        grid-template-columns: 1fr;
                    }

                    .student-header {
                        flex-direction: column;
                        align-items: center;
                        text-align: center;
                    }

                    .action-buttons {
                        flex-direction: column;
                    }

                    .btn {
                        width: 100%;
                        justify-content: center;
                    }

                    .info-card {
                        padding: 20px;
                    }
                }
            `}</style>
        </div>
    );
};

export default PassApproval;
