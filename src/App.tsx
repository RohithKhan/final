// import { useNavigate } from 'react-router-dom';

// function App() {
//   const navigate = useNavigate();

//   return (
//     <div className="landing-page">
//       <nav className="landing-nav container">
//         <div className="brand">
//           <span className="icon">🎓</span>
//           <span className="text">JIT Portal</span>
//         </div>
//         <button className="btn btn-secondary" onClick={() => navigate('/login')}>
//           Login
//         </button>
//       </nav>

//       <main className="hero-section">
//         <div className="container hero-content">
//           <div className="hero-text">
//             <span className="badge">JIT Student Portal</span>
//             <h1>Your Academic Journey,<br />Streamlined.</h1>
//             <p className="hero-subtitle">
//               Access your subjects and connect with faculty.
//               Everything you need to succeed at Jeppiaar Institute of Technology.
//             </p>
//             <div className="hero-actions">
//               <button className="btn btn-primary btn-lg" onClick={() => navigate('/login')}>
//                 Get Started
//               </button>
//               <button className="btn btn-ghost btn-lg">
//                 Learn More
//               </button>
//             </div>
//             <div className="hero-stats">
//               <div className="stat">
//                 <strong>1000+</strong>
//                 <span>Students</span>
//               </div>
//               <div className="stat">
//                 <strong>50+</strong>
//                 <span>Faculty</span>
//               </div>
//               <div className="stat">
//                 <strong>100%</strong>
//                 <span>Digital</span>
//               </div>
//             </div>
//           </div>
//           <div className="hero-visual">
//             <div className="visual-card main-card">
//               <img src="/src/assets/main.jpg" alt="JIT Campus" className="hero-img" />
//               <div className="hero-overlay">
//                 <span>Jeppiaar Institute of Technology</span>
//               </div>
//             </div>
//             <div className="visual-card float-card">
//               <span className="float-icon">🧑‍🎓</span>
//               <div className="float-content">
//                 <strong>Student Convenient Portal</strong>
//                 <span></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <style>{`
//         .landing-page {
//           min-height: 100vh;
//           background: linear-gradient(135deg, rgba(246, 249, 252, 0.9) 0%, rgba(224, 242, 254, 0.9) 100%), url('/src/assets/gate.jpg');
//           background-size: cover;
//           background-position: center;
//           background-attachment: fixed;
//           overflow-x: hidden;
//         }

//         .landing-nav {
//           height: 80px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//         }

//         .brand {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           font-weight: 700;
//           font-size: 24px;
//           color: var(--primary-dark);
//         }

//         .hero-section {
//           padding: 60px 0;
//           min-height: calc(100vh - 80px);
//           display: flex;
//           align-items: center;
//         }

//         .hero-content {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 60px;
//           align-items: center;
//         }

//         .hero-text h1 {
//           font-size: 56px;
//           margin: 24px 0;
//           background: linear-gradient(135deg, var(--primary-dark), var(--primary));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }

//         .hero-subtitle {
//           font-size: 18px;
//           color: var(--text-muted);
//           margin-bottom: 32px;
//           max-width: 500px;
//           line-height: 1.6;
//         }

//         .hero-actions {
//           display: flex;
//           gap: 16px;
//           margin-bottom: 48px;
//         }

//         .btn-lg {
//           padding: 14px 32px;
//           font-size: 16px;
//         }

//         .hero-stats {
//           display: flex;
//           gap: 40px;
//           padding-top: 32px;
//           border-top: 1px solid rgba(0,0,0,0.05);
//         }

//         .stat {
//           display: flex;
//           flex-direction: column;
//         }

//         .stat strong {
//           font-size: 24px;
//           color: var(--primary-dark);
//         }

//         .stat span {
//           font-size: 14px;
//           color: var(--text-muted);
//         }

//         .hero-visual {
//           position: relative;
//         }

//         .visual-card {
//           background: white;
//           border-radius: 20px;
//           box-shadow: 0 20px 40px rgba(11, 59, 102, 0.1);
//           border: 1px solid rgba(255,255,255,0.8);
//         }

//         .main-card {
//           width: 100%;
//           height: 400px;
//           padding: 0;
//           position: relative;
//           z-index: 1;
//           overflow: hidden;
//         }

//         .hero-img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.5s ease;
//         }

//         .main-card:hover .hero-img {
//           transform: scale(1.05);
//         }

//         .hero-overlay {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           padding: 20px;
//           background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
//           color: white;
//           font-weight: 600;
//           font-size: 18px;
//         }

//         .float-card {
//           position: absolute;
//           bottom: 40px;
//           right: -30px;
//           padding: 16px 20px;
//           z-index: 2;
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           animation: float 3s ease-in-out infinite;
//         }

//         .float-icon {
//           font-size: 24px;
//           background: var(--primary-light);
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .float-content {
//           display: flex;
//           flex-direction: column;
//         }

//         .float-content strong {
//           color: var(--primary-dark);
//           font-size: 14px;
//         }

//         .float-content span {
//           color: var(--text-muted);
//           font-size: 12px;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }

//         @media (max-width: 968px) {
//           .hero-content {
//             grid-template-columns: 1fr;
//             text-align: center;
//           }

//           .hero-text h1 { font-size: 40px; }
//           .hero-subtitle { margin: 0 auto 32px; }
//           .hero-actions { justify-content: center; }
//           .hero-stats { justify-content: center; }
//           .hero-visual { display: none; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;
