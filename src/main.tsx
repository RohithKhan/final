import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles.css'
import Welcome from './pages/Welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import StaffLogin from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Staffs from './pages/Staffs'
import Subjects from './pages/Subjects'
import SubjectDetails from './pages/SubjectDetails'
import Profile from './pages/Profile'
import StaffProfile from './pages/StaffProfile'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/staff-login" element={<StaffLogin />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/staffs" element={
          <ProtectedRoute>
            <Staffs />
          </ProtectedRoute>
        } />
        <Route path="/staffs/:id" element={
          <ProtectedRoute>
            <StaffProfile />
          </ProtectedRoute>
        } />
        <Route path="/subjects" element={
          <ProtectedRoute>
            <Subjects />
          </ProtectedRoute>
        } />
        <Route path="/subjects/:id" element={
          <ProtectedRoute>
            <SubjectDetails />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        {/* Fallback */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
