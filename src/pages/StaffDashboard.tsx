import React from "react";

const StaffDashboard: React.FC = () => {
    return (
        <>
            <style>{`
        :root {
          --bg-body: #0f172a;
          --bg-card: #020617;
          --bg-card-soft: #1397d0;
          --bg-sidebar: #020617;
          --accent: #3b82f6;
          --accent-soft: rgba(59, 130, 246, 0.2);
          --text-main: #e5e7eb;
          --text-muted: #9ca3af;
          --border-subtle: rgba(148, 163, 184, 0.25);
          --radius-lg: 18px;
          --radius-pill: 999px;
          --shadow-soft: 0 18px 45px rgba(15, 23, 42, 0.85);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        body {
          background: radial-gradient(circle at top, #145cd0 0, #041b81 45%);
          color: var(--text-main);
          min-height: 100vh;
        }

        .dashboard-layout {
          display: flex;
          min-height: 100vh;
          max-width: 1400px;
          margin: 0 auto;
          padding: 16px;
          gap: 16px;
        }

        /* SIDEBAR */
        .sidebar {
          width: 260px;
          background: linear-gradient(160deg, #212a34 0%, #121e53 40%, #020617 100%);
          border-radius: 24px;
          padding: 20px 18px;
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .sidebar-header {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-circle {
          width: 36px;
          height: 36px;
          border-radius: 16px;
          background: radial-gradient(circle at 30% 0, #38bdf8, #3b82f6, #4f46e5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 700;
          color: white;
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.9);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .brand-title {
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.02em;
        }

        .brand-subtitle {
          font-size: 11px;
          color: var(--text-muted);
        }

        .sidebar-section-title {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .nav-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .nav-item {
          border-radius: var(--radius-pill);
          padding: 8px 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-muted);
          cursor: pointer;
          border: 1px solid transparent;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.1s ease;
        }

        .nav-item span.icon {
          width: 22px;
          height: 22px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          background: rgba(15, 23, 42, 0.85);
        }

        .nav-item.active {
          background: radial-gradient(circle at 0 0, rgba(56, 189, 248, 0.12), rgba(37, 99, 235, 0.58));
          border-color: rgba(129, 140, 248, 0.5);
          color: #f9fafb;
          transform: translateY(-1px);
        }

        .nav-item:hover {
          background: rgba(15, 23, 42, 0.9);
          border-color: rgba(148, 163, 184, 0.6);
          color: #e5e7eb;
        }

        .nav-label-main {
          font-weight: 500;
        }

        .nav-label-sub {
          font-size: 11px;
          color: var(--text-muted);
        }

        .nav-text {
          display: flex;
          flex-direction: column;
        }

        .sidebar-footer {
          margin-top: auto;
          padding-top: 12px;
          border-top: 1px dashed rgba(148, 163, 184, 0.35);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }

        .user-mini {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .user-avatar {
          width: 28px;
          height: 28px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2563eb, #22c55e, #a855f7);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 600;
          color: white;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
          font-size: 11px;
        }

        .user-name {
          font-weight: 500;
        }

        .user-role {
          color: var(--text-muted);
          font-size: 10px;
        }

        .status-pill {
          font-size: 11px;
          padding: 4px 8px;
          border-radius: var(--radius-pill);
          background: rgba(34, 197, 94, 0.1);
          color: #4ade80;
          border: 1px solid rgba(74, 222, 128, 0.4);
        }

        /* MAIN AREA */
        .main {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .topbar {
          background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.16), rgba(15, 23, 42, 0.96));
          border-radius: 24px;
          padding: 16px 18px;
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          justify-content: space-between;
        }

        .topbar-left {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .page-title {
          font-size: 18px;
          font-weight: 600;
        }

        .page-subtitle {
          font-size: 12px;
          color: var(--text-muted);
        }

        .topbar-right {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(15, 23, 42, 0.86);
          border-radius: var(--radius-pill);
          padding: 6px 10px;
          border: 1px solid rgba(148, 163, 184, 0.4);
          min-width: 180px;
        }

        .search-box input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          font-size: 12px;
          width: 100%;
        }

        .search-icon {
          font-size: 13px;
          opacity: 0.8;
        }

        .icon-btn {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          border: 1px solid rgba(148, 163, 184, 0.4);
          background: rgba(15, 23, 42, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.1s ease, border-color 0.2s ease;
        }

        .icon-btn:hover {
          background: rgba(30, 64, 175, 0.9);
          border-color: rgba(129, 140, 248, 0.8);
          transform: translateY(-1px);
        }

        .primary-btn {
          border-radius: var(--radius-pill);
          padding: 7px 14px;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(37, 99, 235, 0.6);
          transition: transform 0.1s ease, box-shadow 0.1s ease, opacity 0.2s ease;
        }

        .primary-btn span.icon {
          font-size: 14px;
        }

        .primary-btn:hover {
          opacity: 0.96;
          transform: translateY(-1px);
          box-shadow: 0 16px 36px rgba(37, 99, 235, 0.7);
        }

        .primary-btn:active {
          transform: translateY(1px) scale(0.98);
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.7);
        }

        /* CONTENT */
        .content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .stat-card {
          background: radial-gradient(circle at top, rgba(37, 99, 235, 0.32), rgba(15, 23, 42, 0.98));
          border-radius: 20px;
          padding: 14px 14px 13px;
          border: 1px solid rgba(148, 163, 184, 0.5);
          box-shadow: var(--shadow-soft);
          display: flex;
          flex-direction: column;
          gap: 6px;
          position: relative;
          overflow: hidden;
        }

        .stat-title {
          font-size: 12px;
          color: var(--text-muted);
        }

        .stat-value-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 6px;
        }

        .stat-value {
          font-size: 22px;
          font-weight: 600;
        }

        .stat-badge {
          font-size: 11px;
          padding: 3px 8px;
          border-radius: var(--radius-pill);
          background: rgba(22, 163, 74, 0.16);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.65);
        }

        .stat-badge.down {
          background: rgba(220, 38, 38, 0.12);
          color: #fca5a5;
          border-color: rgba(248, 113, 113, 0.7);
        }

        .stat-sub {
          font-size: 11px;
          color: var(--text-muted);
        }

        .stat-icon-large {
          position: absolute;
          bottom: -6px;
          right: 8px;
          font-size: 32px;
          opacity: 0.22;
        }

        .grid-2 {
          display: grid;
          grid-template-columns: 2fr 1.2fr;
          gap: 14px;
        }

        .card {
          background: radial-gradient(circle at top left, rgba(15, 23, 42, 0.96), rgba(15, 23, 42, 0.98));
          border-radius: 20px;
          padding: 14px;
          border: 1px solid rgba(148, 163, 184, 0.38);
          box-shadow: var(--shadow-soft);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
          gap: 8px;
        }

        .card-title {
          font-size: 14px;
          font-weight: 500;
        }

        .card-subtitle {
          font-size: 11px;
          color: var(--text-muted);
        }

        .tag-pill {
          font-size: 11px;
          padding: 3px 8px;
          border-radius: var(--radius-pill);
          background: rgba(37, 99, 235, 0.2);
          color: #bfdbfe;
          border: 1px solid rgba(59, 130, 246, 0.7);
        }

        /* TABLE */
        .table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 6px;
          font-size: 12px;
        }

        .table thead {
          background: rgba(15, 23, 42, 0.95);
        }

        .table th,
        .table td {
          padding: 8px 6px;
          text-align: left;
          border-bottom: 1px solid rgba(30, 64, 175, 0.55);
        }

        .table th {
          font-weight: 500;
          color: #9ca3af;
          font-size: 11px;
        }

        .table tr:last-child td {
          border-bottom: none;
        }

        .badge-soft {
          font-size: 11px;
          padding: 3px 7px;
          border-radius: var(--radius-pill);
          background: rgba(56, 189, 248, 0.16);
          color: #7dd3fc;
          border: 1px solid rgba(56, 189, 248, 0.6);
        }

        .badge-soft.red {
          background: rgba(248, 113, 113, 0.18);
          color: #fecaca;
          border-color: rgba(248, 113, 113, 0.9);
        }

        .badge-soft.green {
          background: rgba(34, 197, 94, 0.16);
          color: #bbf7d0;
          border-color: rgba(34, 197, 94, 0.85);
        }

        /* TASK LIST */
        .task-list {
          list-style: none;
          margin-top: 8px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .task-item {
          padding: 7px 8px;
          border-radius: 14px;
          border: 1px solid rgba(148, 163, 184, 0.4);
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
          background: radial-gradient(circle at left, rgba(30, 64, 175, 0.32), rgba(15, 23, 42, 1));
        }

        .task-main {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .task-title {
          font-size: 12px;
          font-weight: 500;
        }

        .task-meta {
          font-size: 11px;
          color: var(--text-muted);
        }

        .task-tag {
          font-size: 11px;
          padding: 3px 7px;
          border-radius: var(--radius-pill);
          background: rgba(56, 189, 248, 0.2);
          color: #bae6fd;
          border: 1px solid rgba(56, 189, 248, 0.7);
          white-space: nowrap;
        }

        /* RESPONSIVE */
        @media (max-width: 992px) {
          .dashboard-layout {
            flex-direction: column;
          }

          .sidebar {
            flex-direction: row;
            align-items: center;
            padding: 14px 12px;
            gap: 12px;
            width: 100%;
          }

          .sidebar-main {
            display: flex;
            align-items: center;
            gap: 12px;
            flex: 1;
          }

          .nav-list {
            flex-direction: row;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 2px;
          }

          .nav-item {
            min-width: 120px;
            white-space: nowrap;
          }

          .sidebar-footer {
            margin-top: 0;
            border-top: none;
            border-left: 1px dashed rgba(148, 163, 184, 0.35);
            padding-left: 10px;
          }

          .stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .grid-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .topbar {
            padding: 12px 12px;
          }

          .card {
            padding: 12px;
          }
        }
      `}</style>

            <div className="dashboard-layout">
                {/* SIDEBAR */}
                <aside className="sidebar">
                    <div className="sidebar-main">
                        <div className="sidebar-header">
                            <div className="logo-circle">S</div>
                            <div className="brand-text">
                                <span className="brand-title">Staff Panel</span>
                                <span className="brand-subtitle">College Management</span>
                            </div>
                        </div>

                        <div>
                            <div className="sidebar-section-title">Navigation</div>
                            <ul className="nav-list">
                                <li className="nav-item active">
                                    <span className="icon">🏠</span>
                                    <div className="nav-text">
                                        <span className="nav-label-main">Dashboard</span>
                                        <span className="nav-label-sub">Overview</span>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <span className="icon">📅</span>
                                    <div className="nav-text">
                                        <span className="nav-label-main">Timetable</span>
                                        <span className="nav-label-sub">Slots & periods</span>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <span className="icon">🧑‍🎓</span>
                                    <div className="nav-text">
                                        <span className="nav-label-main">Students</span>
                                        <span className="nav-label-sub">Attendance & marks</span>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <span className="icon">📝</span>
                                    <div className="nav-text">
                                        <span className="nav-label-main">Reports</span>
                                        <span className="nav-label-sub">Daily updates</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="sidebar-footer">
                        <div className="user-mini">
                            <div className="user-avatar">RK</div>
                            <div className="user-info">
                                <span className="user-name">Rohith Khan</span>
                                <span className="user-role">Staff · CSE Dept</span>
                            </div>
                        </div>
                        <span className="status-pill">Online</span>
                    </div>
                </aside>

                {/* MAIN */}
                <main className="main">
                    {/* TOP BAR */}
                    <header className="topbar">
                        <div className="topbar-left">
                            <div className="page-title">Good morning, Sir 👋</div>
                            <div className="page-subtitle">
                                Here’s a quick snapshot of today’s classes, tasks & reports.
                            </div>
                        </div>

                        <div className="topbar-right">
                            <div className="search-box">
                                <span className="search-icon">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Search students, classes, reports..."
                                />
                            </div>
                            <button className="icon-btn" title="Notifications">
                                🔔
                            </button>
                            <button className="primary-btn">
                                <span className="icon">＋</span>
                                <span>New Report</span>
                            </button>
                        </div>
                    </header>

                    {/* CONTENT */}
                    <section className="content">
                        {/* STATS */}
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-title">Today’s Classes</div>
                                <div className="stat-value-row">
                                    <div className="stat-value">4</div>
                                    <div className="stat-badge">+1 extra lab</div>
                                </div>
                                <div className="stat-sub">CSE – III & IV year</div>
                                <div className="stat-icon-large">📚</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-title">Pending Attendance</div>
                                <div className="stat-value-row">
                                    <div className="stat-value">2</div>
                                    <div className="stat-badge down">Complete before 5 PM</div>
                                </div>
                                <div className="stat-sub">Forenoon lab sessions</div>
                                <div className="stat-icon-large">✅</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-title">Reports Filed</div>
                                <div className="stat-value-row">
                                    <div className="stat-value">12</div>
                                    <div className="stat-badge">This week</div>
                                </div>
                                <div className="stat-sub">Class & lab performance</div>
                                <div className="stat-icon-large">📝</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-title">Students Flagged</div>
                                <div className="stat-value-row">
                                    <div className="stat-value">3</div>
                                    <div className="stat-badge down">Needs follow-up</div>
                                </div>
                                <div className="stat-sub">Attendance / performance</div>
                                <div className="stat-icon-large">⚠</div>
                            </div>
                        </div>

                        {/* GRID */}
                        <div className="grid-2">
                            {/* LEFT: TABLE */}
                            <div className="card">
                                <div className="card-header">
                                    <div>
                                        <div className="card-title">Today’s Schedule</div>
                                        <div className="card-subtitle">
                                            Your classes & sessions at a glance
                                        </div>
                                    </div>
                                    <span className="tag-pill">Tuesday · 09 Dec</span>
                                </div>

                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Slot</th>
                                            <th>Class</th>
                                            <th>Subject</th>
                                            <th>Room</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>09:00 – 10:00</td>
                                            <td>III CSE A</td>
                                            <td>DBMS</td>
                                            <td>Lab - 02</td>
                                            <td>
                                                <span className="badge-soft green">Completed</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>10:10 – 11:10</td>
                                            <td>III CSE B</td>
                                            <td>DBMS</td>
                                            <td>Block - 3 / 204</td>
                                            <td>
                                                <span className="badge-soft">Upcoming</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11:20 – 01:00</td>
                                            <td>IV CSE A</td>
                                            <td>Project Review</td>
                                            <td>Lab - 01</td>
                                            <td>
                                                <span className="badge-soft">In 30 mins</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>02:00 – 03:30</td>
                                            <td>III CSE A/B</td>
                                            <td>Lab – DBMS</td>
                                            <td>Lab - 03</td>
                                            <td>
                                                <span className="badge-soft red">Attendance pending</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* RIGHT: TASKS */}
                            <div className="card">
                                <div className="card-header">
                                    <div>
                                        <div className="card-title">Quick Tasks</div>
                                        <div className="card-subtitle">
                                            Things to close before end of day
                                        </div>
                                    </div>
                                    <span className="tag-pill">3 pending</span>
                                </div>

                                <ul className="task-list">
                                    <li className="task-item">
                                        <div className="task-main">
                                            <span className="task-title">
                                                Update attendance – DBMS lab
                                            </span>
                                            <span className="task-meta">
                                                III CSE A/B · 02:00 – 03:30 PM
                                            </span>
                                        </div>
                                        <span className="task-tag">High priority</span>
                                    </li>
                                    <li className="task-item">
                                        <div className="task-main">
                                            <span className="task-title">Upload unit test marks</span>
                                            <span className="task-meta">IV CSE – Unit Test 2</span>
                                        </div>
                                        <span className="task-tag">Marks entry</span>
                                    </li>
                                    <li className="task-item">
                                        <div className="task-main">
                                            <span className="task-title">Submit daily report</span>
                                            <span className="task-meta">
                                                Send summary to HOD by 06:00 PM
                                            </span>
                                        </div>
                                        <span className="task-tag">Reports</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default StaffDashboard;