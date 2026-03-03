import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import LoginPage from './components/login/LoginPage'
import Dashboard from './components/dashboard/Dashboard'
import ScanDetail from './components/scan-detail/ScanDetail'

export default function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggle = () => setIsDark(prev => !prev)

  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/"          element={<LoginPage isDark={isDark} toggle={toggle} />} />
        <Route path="/dashboard" element={<Dashboard isDark={isDark} toggle={toggle} />} />
        <Route path="/scan/:id"  element={<ScanDetail isDark={isDark} toggle={toggle} />} />
        <Route path="*"          element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
