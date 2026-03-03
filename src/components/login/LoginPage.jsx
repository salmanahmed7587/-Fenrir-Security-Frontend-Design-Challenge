import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Eye, EyeOff, Shield, Zap, BarChart3, Lock } from 'lucide-react'
import ThemeToggle from '../common/ThemeToggle'

export default function LoginPage({ isDark, toggle }) {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [loading, setLoading] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => navigate('/dashboard'), 800)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="relative hidden md:flex flex-col w-[55%] bg-[#0a0f0e] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0CC8A8]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0CC8A8]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBDQzhBOCIgc3Ryb2tlLXdpZHRoPSIwLjIiIG9wYWNpdHk9IjAuMyIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

        <div className="relative z-10 flex flex-col flex-1 px-12 py-10">
          <div className="flex items-center gap-3 mb-auto">
            <div className="w-9 h-9 rounded-xl bg-[#0CC8A8] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M8 4L11 5.8V9.2L8 11L5 9.2V5.8L8 4Z" fill="black" />
              </svg>
            </div>
            <span className="font-bold text-xl text-white tracking-tight">Fenrir</span>
          </div>

          <div className="mt-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0CC8A8]/10 border border-[#0CC8A8]/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0CC8A8] animate-pulse" />
              <span className="text-xs font-medium text-[#0CC8A8]">Trusted by 500+ security teams</span>
            </div>

            <h1 className="text-4xl font-bold text-white leading-tight mb-4">
              Find vulnerabilities<br />
              <span className="text-[#0CC8A8]">before attackers do.</span>
            </h1>
            <p className="text-base text-gray-400 leading-relaxed max-w-md">
              Fenrir gives your team continuous, automated security testing so you ship with confidence.
            </p>

            <ul className="mt-10 space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-md bg-[#0CC8A8]/15 flex items-center justify-center mt-0.5">
                  <Shield size={13} className="text-[#0CC8A8]" />
                </div>
                <span className="text-sm text-gray-300 leading-relaxed">Automated vulnerability discovery across your entire attack surface</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-md bg-[#0CC8A8]/15 flex items-center justify-center mt-0.5">
                  <Zap size={13} className="text-[#0CC8A8]" />
                </div>
                <span className="text-sm text-gray-300 leading-relaxed">Real-time scanning with AI-powered false-positive reduction</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-md bg-[#0CC8A8]/15 flex items-center justify-center mt-0.5">
                  <BarChart3 size={13} className="text-[#0CC8A8]" />
                </div>
                <span className="text-sm text-gray-300 leading-relaxed">Compliance-ready reports for SOC 2, PCI-DSS, and ISO 27001</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-md bg-[#0CC8A8]/15 flex items-center justify-center mt-0.5">
                  <Lock size={13} className="text-[#0CC8A8]" />
                </div>
                <span className="text-sm text-gray-300 leading-relaxed">Zero-config integrations with your existing CI/CD pipeline</span>
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl border border-[#0CC8A8]/15 bg-[#0CC8A8]/5">
            <p className="text-sm text-gray-300 italic leading-relaxed">
              "Fenrir reduced our mean time to remediation by 60%. The console output is incredibly detailed."
            </p>
            <div className="flex items-center gap-3 mt-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
              <div>
                <p className="text-xs font-semibold text-white">Marcus Chen</p>
                <p className="text-xs text-gray-500">Head of Security, Axiom Labs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-[var(--bg-secondary)]">
        <div className="flex items-center justify-between px-6 py-4 md:hidden">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#0CC8A8] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M8 4L11 5.8V9.2L8 11L5 9.2V5.8L8 4Z" fill="black" />
              </svg>
            </div>
            <span className="font-bold text-base text-[var(--text-primary)]">Fenrir</span>
          </div>
          <ThemeToggle isDark={isDark} toggle={toggle} />
        </div>

        <div className="flex-1 flex items-center justify-center p-6">
          <div className="w-full max-w-[420px]">
            <div className="hidden md:flex justify-end mb-6">
              <ThemeToggle isDark={isDark} toggle={toggle} />
            </div>

            <div className="bg-[var(--bg-surface)] rounded-2xl border border-[var(--border-color)] p-8 shadow-[var(--shadow-md)]">
              <div className="mb-7">
                <h2 className="text-xl font-bold text-[var(--text-primary)] mb-1">Create your account</h2>
                <p className="text-sm text-[var(--text-secondary)]">
                  Start securing your infrastructure today.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                      First name
                    </label>
                    <input
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      required
                      placeholder="Jane"
                      className="w-full h-9 px-3 rounded-lg border text-sm input-base focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/40 focus:border-[#0CC8A8]/60 placeholder:text-[var(--text-muted)] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                      Last name
                    </label>
                    <input
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      required
                      placeholder="Doe"
                      className="w-full h-9 px-3 rounded-lg border text-sm input-base focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/40 focus:border-[#0CC8A8]/60 placeholder:text-[var(--text-muted)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                    Work email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="jane@company.com"
                    className="w-full h-9 px-3 rounded-lg border text-sm input-base focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/40 focus:border-[#0CC8A8]/60 placeholder:text-[var(--text-muted)] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      required
                      minLength={8}
                      placeholder="Min. 8 characters"
                      className="w-full h-9 px-3 pr-10 rounded-lg border text-sm input-base focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/40 focus:border-[#0CC8A8]/60 placeholder:text-[var(--text-muted)] transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(p => !p)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors cursor-pointer"
                      tabIndex={-1}
                    >
                      {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                    </button>
                  </div>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={e => setAgreed(e.target.checked)}
                    className="mt-1 accent-[#0CC8A8] w-3.5 h-3.5"
                  />
                  <span className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    I agree to the{' '}
                    <a href="#" className="text-[#0CC8A8] hover:underline">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-[#0CC8A8] hover:underline">Privacy Policy</a>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={!agreed || loading}
                  className="w-full h-10 rounded-lg bg-[#0CC8A8] hover:bg-[#0ab396] text-black text-sm font-semibold transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/40 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Creating account...
                    </span>
                  ) : 'Create account'}
                </button>
              </form>

              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[var(--border-color)]" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-3 text-xs text-[var(--text-muted)] bg-[var(--bg-surface)]">
                    or continue with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setTimeout(() => navigate('/dashboard'), 300)}
                  className="flex items-center justify-center gap-2 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--input-bg)] hover:bg-[var(--bg-elevated)] text-xs text-[var(--text-secondary)] font-medium transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/30"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  Apple
                </button>
                <button
                  type="button"
                  onClick={() => setTimeout(() => navigate('/dashboard'), 300)}
                  className="flex items-center justify-center gap-2 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--input-bg)] hover:bg-[var(--bg-elevated)] text-xs text-[var(--text-secondary)] font-medium transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/30"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => setTimeout(() => navigate('/dashboard'), 300)}
                  className="flex items-center justify-center gap-2 h-9 rounded-lg border border-[var(--border-color)] bg-[var(--input-bg)] hover:bg-[var(--bg-elevated)] text-xs text-[var(--text-secondary)] font-medium transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/30"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Meta
                </button>
              </div>

              <p className="text-center text-xs text-[var(--text-muted)] mt-5">
                Already have an account?{' '}
                <a href="#" className="text-[#0CC8A8] font-medium hover:underline" onClick={e => { e.preventDefault(); navigate('/dashboard') }}>
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
