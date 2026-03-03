import { NavLink, useNavigate } from 'react-router-dom'
import { LayoutDashboard, FolderKanban, Radar, CalendarClock, Bell, Settings, LifeBuoy, ChevronRight, X, LogOut } from 'lucide-react'
import toast from 'react-hot-toast'
import ThemeToggle from './ThemeToggle'

const navItems = [
  { label: 'Dashboard',     icon: LayoutDashboard, path: '/dashboard' },
  { label: 'Projects',      icon: FolderKanban,    path: null },
  { label: 'Scans',         icon: Radar,           path: '/dashboard' },
  { label: 'Schedule',      icon: CalendarClock,   path: null },
  { label: 'Notifications', icon: Bell,            path: null, badge: 3 },
  { label: 'Settings',      icon: Settings,        path: null },
  { label: 'Support',       icon: LifeBuoy,        path: null },
]

export default function Sidebar({ mobileOpen, onMobileClose, isDark, toggle }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }

  const handleComingSoon = (label) => {
    toast(`${label} — coming soon!`, {
      icon: '🚧',
      style: {
        background: 'var(--bg-elevated)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-color)',
      },
    })
  }

  const sidebarContent = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[var(--sidebar-border)]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#0CC8A8] flex items-center justify-center flex-shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M8 4L11 5.8V9.2L8 11L5 9.2V5.8L8 4Z" fill="black" />
            </svg>
          </div>
          <span className="font-bold text-base text-[var(--text-primary)] tracking-tight">Fenrir</span>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle isDark={isDark} toggle={toggle} />
          {mobileOpen && (
            <button onClick={onMobileClose} className="md:hidden p-1.5 rounded-lg hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] cursor-pointer">
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map(({ label, icon: Icon, path, badge }) => {
          if (path) {
            return (
              <NavLink
                key={label}
                to={path}
                onClick={onMobileClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm w-full transition-colors group cursor-pointer ${
                    isActive
                      ? 'bg-[#0CC8A8]/10 text-[#0CC8A8] font-medium'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]'
                  }`
                }
              >
                <Icon size={16} className="flex-shrink-0" />
                <span className="flex-1">{label}</span>
                {badge && (
                  <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0CC8A8] text-black text-[10px] font-bold">
                    {badge}
                  </span>
                )}
                <ChevronRight size={12} className="opacity-0 group-hover:opacity-40 transition-opacity" />
              </NavLink>
            )
          }

          return (
            <button
              key={label}
              onClick={() => { handleComingSoon(label); onMobileClose?.() }}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm w-full text-left transition-colors group cursor-pointer text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
            >
              <Icon size={16} className="flex-shrink-0" />
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-[#0CC8A8] text-black text-[10px] font-bold">
                  {badge}
                </span>
              )}
              <ChevronRight size={12} className="opacity-0 group-hover:opacity-40 transition-opacity" />
            </button>
          )
        })}
      </nav>

      <div className="px-3 py-4 border-t border-[var(--sidebar-border)]">
        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0CC8A8] to-[#0891b2] flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-black">SA</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-[var(--text-primary)] truncate">Salma A.</p>
            <p className="text-xs text-[var(--text-muted)] truncate">salma@fenrir.io</p>
          </div>
          <button
            onClick={handleLogout}
            title="Logout"
            className="opacity-60 group-hover:opacity-100 transition-opacity p-1 rounded text-[var(--text-muted)] hover:text-[var(--text-secondary)] cursor-pointer"
          >
            <LogOut size={14} />
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <aside className="hidden md:flex flex-col w-60 flex-shrink-0 h-screen sticky top-0 sidebar border-r border-[var(--sidebar-border)]">
        {sidebarContent}
      </aside>

      {mobileOpen && (
        <>
          <div className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" onClick={onMobileClose} />
          <aside className="md:hidden fixed left-0 top-0 bottom-0 z-50 w-72 sidebar border-r border-[var(--sidebar-border)] animate-slide-in">
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  )
}
