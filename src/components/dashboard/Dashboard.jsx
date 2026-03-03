import { useState } from 'react'
import { Menu, Search, SlidersHorizontal, Columns3, Plus, TrendingUp, TrendingDown } from 'lucide-react'
import toast from 'react-hot-toast'
import Sidebar from '../common/Sidebar'
import ScanTable from './ScanTable'
import { scans, orgStats } from '../../data/mockData'

export default function Dashboard({ isDark, toggle }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')

  const filtered = scans.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.type.toLowerCase().includes(search.toLowerCase()) ||
    s.status.toLowerCase().includes(search.toLowerCase())
  )

  const handleNewScan = () => {
    toast.success('New scan wizard coming soon!', {
      icon: '🔍',
      style: {
        background: 'var(--bg-elevated)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-color)',
      },
    })
  }

  const handleFilter = () => {
    toast('Filters panel — coming soon', {
      icon: '⚙️',
      style: {
        background: 'var(--bg-elevated)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-color)',
      },
    })
  }

  return (
    <div className="flex h-screen overflow-hidden app-bg">
      <Sidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} isDark={isDark} toggle={toggle} />

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        <header className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border-color)] bg-[var(--bg-surface)] sticky top-0 z-20">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] cursor-pointer"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={18} />
          </button>
          <div className="flex-1">
            <h1 className="text-base font-semibold text-[var(--text-primary)]">Dashboard</h1>
            <p className="text-xs text-[var(--text-muted)]">Organization overview · March 2026</p>
          </div>
        </header>

        <div className="p-5 flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
            <div className="rounded-xl border p-4 bg-red-500/10 border-red-500/20 transition-all hover:scale-[1.02] duration-150">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-red-500">Critical</span>
                <div className={`flex items-center gap-1 text-xs font-medium ${orgStats.critical.trend === 'up' ? 'text-red-400' : 'text-green-400'}`}>
                  {orgStats.critical.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {Math.abs(orgStats.critical.change)}%
                </div>
              </div>
              <div className="text-3xl font-bold text-red-500">{orgStats.critical.count}</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">vs last 30 days</div>
            </div>

            <div className="rounded-xl border p-4 bg-orange-500/10 border-orange-500/20 transition-all hover:scale-[1.02] duration-150">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-orange-500">High</span>
                <div className={`flex items-center gap-1 text-xs font-medium ${orgStats.high.trend === 'up' ? 'text-red-400' : 'text-green-400'}`}>
                  {orgStats.high.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {Math.abs(orgStats.high.change)}%
                </div>
              </div>
              <div className="text-3xl font-bold text-orange-500">{orgStats.high.count}</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">vs last 30 days</div>
            </div>

            <div className="rounded-xl border p-4 bg-yellow-500/10 border-yellow-500/20 transition-all hover:scale-[1.02] duration-150">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-yellow-500">Medium</span>
                <div className={`flex items-center gap-1 text-xs font-medium ${orgStats.medium.trend === 'up' ? 'text-red-400' : 'text-green-400'}`}>
                  {orgStats.medium.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {Math.abs(orgStats.medium.change)}%
                </div>
              </div>
              <div className="text-3xl font-bold text-yellow-500">{orgStats.medium.count}</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">vs last 30 days</div>
            </div>

            <div className="rounded-xl border p-4 bg-green-500/10 border-green-500/20 transition-all hover:scale-[1.02] duration-150">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-green-500">Low</span>
                <div className={`flex items-center gap-1 text-xs font-medium ${orgStats.low.trend === 'up' ? 'text-red-400' : 'text-green-400'}`}>
                  {orgStats.low.trend === 'up' ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {Math.abs(orgStats.low.change)}%
                </div>
              </div>
              <div className="text-3xl font-bold text-green-500">{orgStats.low.count}</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">vs last 30 days</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 mb-4">
            <div className="relative flex-1 min-w-0">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search scans..."
                className="w-full h-9 pl-9 pr-3 rounded-lg border text-sm input-base focus:outline-none focus:ring-2 focus:ring-[#0CC8A8]/40 focus:border-[#0CC8A8]/60 placeholder:text-[var(--text-muted)] transition-all"
              />
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleFilter}
                className="inline-flex items-center gap-2 h-8 px-3 text-xs rounded-lg font-medium transition-all duration-150 cursor-pointer bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)]"
              >
                <SlidersHorizontal size={13} />
                Filter
              </button>
              <button
                onClick={handleFilter}
                className="inline-flex items-center gap-2 h-8 px-3 text-xs rounded-lg font-medium transition-all duration-150 cursor-pointer bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)]"
              >
                <Columns3 size={13} />
                Columns
              </button>
              <button
                onClick={handleNewScan}
                className="inline-flex items-center gap-2 h-8 px-3 text-xs rounded-lg font-semibold transition-all duration-150 cursor-pointer bg-[#0CC8A8] hover:bg-[#0ab396] text-black shadow-sm ml-auto"
              >
                <Plus size={13} />
                New Scan
              </button>
            </div>
          </div>

          {filtered.length > 0 ? (
            <ScanTable scans={filtered} />
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Search size={32} className="text-[var(--text-muted)] mb-3" />
              <p className="text-sm font-medium text-[var(--text-secondary)]">No scans match "{search}"</p>
              <p className="text-xs text-[var(--text-muted)] mt-1">Try a different name, type, or status</p>
            </div>
          )}

          <div className="flex items-center justify-between mt-4 text-xs text-[var(--text-muted)]">
            <span>Showing {filtered.length} of {scans.length} scans</span>
            <span>Last updated: just now</span>
          </div>
        </div>
      </main>
    </div>
  )
}
