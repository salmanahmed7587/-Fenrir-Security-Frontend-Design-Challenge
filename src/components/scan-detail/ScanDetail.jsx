import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Menu, ArrowLeft, Square, Download } from 'lucide-react'
import toast from 'react-hot-toast'
import Sidebar from '../common/Sidebar'
import CircularProgress from './CircularProgress'
import StepTracker from './StepTracker'
import LiveConsole from './LiveConsole'
import FindingLog from './FindingLog'
import StatusChip from '../common/StatusChip'
import { scans, activeScan, findings } from '../../data/mockData'

export default function ScanDetail({ isDark, toggle }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [stopped, setStopped] = useState(false)

  const scan = scans.find(s => s.id === Number(id)) || scans[1]
  console.log('scan loaded:', scan.name)
  const detail = { ...activeScan, ...scan }

  const effectiveStatus = stopped ? 'Failed' : scan.status
  const totalSteps = detail.steps.length

  let currentStep = activeScan.currentStep
  if (effectiveStatus === 'Completed') {
    currentStep = totalSteps
  } else if (effectiveStatus === 'Scheduled') {
    currentStep = 0
  } else if (effectiveStatus === 'Failed') {
    currentStep = Math.max(1, Math.round((scan.progress / 100) * totalSteps))
  }

  const criticalCount = findings.filter(f => f.severity === 'Critical').length
  const highCount = findings.filter(f => f.severity === 'High').length
  const mediumCount = findings.filter(f => f.severity === 'Medium').length
  const lowCount = findings.filter(f => f.severity === 'Low').length

  const handleStop = () => {
    setStopped(true)
    toast.error('Scan stopped', {
      icon: '⏹',
      style: {
        background: 'var(--bg-elevated)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-color)',
      },
    })
  }

  const handleExport = () => {
    toast.success('Report exported successfully!', {
      icon: '📄',
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

      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto md:overflow-hidden">
        <header className="flex items-center gap-3 px-5 py-4 border-b border-[var(--border-color)] bg-[var(--bg-surface)] flex-shrink-0">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[var(--bg-elevated)] text-[var(--text-secondary)] cursor-pointer"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={18} />
          </button>

          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-sm cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Back</span>
          </button>

          <div className="w-px h-4 bg-[var(--border-color)] hidden sm:block" />

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2.5">
              <h1 className="text-base font-semibold text-[var(--text-primary)] truncate">{scan.name}</h1>
              <StatusChip status={effectiveStatus} />
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-0.5 truncate">{scan.type} · {scan.target}</p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={handleExport}
              className="inline-flex items-center gap-2 h-8 px-3 text-xs rounded-lg font-medium transition-all duration-150 cursor-pointer bg-[var(--bg-elevated)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)]"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Export Report</span>
            </button>
            {!stopped && scan.status === 'In Progress' && (
              <button
                onClick={handleStop}
                className="inline-flex items-center gap-2 h-8 px-3 text-xs rounded-lg font-medium transition-all duration-150 cursor-pointer bg-red-500/15 hover:bg-red-500/25 text-red-400 border border-red-500/30"
              >
                <Square size={13} />
                <span className="hidden sm:inline">Stop Scan</span>
              </button>
            )}
          </div>
        </header>

        <div className="flex items-center gap-6 px-5 py-5 border-b border-[var(--border-color)] bg-[var(--bg-surface)] flex-shrink-0">
          <CircularProgress percent={detail.progress} size={100} strokeWidth={7} status={effectiveStatus} />
          <div className="flex-1 min-w-0 overflow-x-auto">
            <StepTracker steps={detail.steps} currentStep={currentStep} />
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 px-5 py-4 border-b border-[var(--border-color)] bg-[var(--bg-surface)] flex-shrink-0">
          <div className="flex flex-col gap-0.5 min-w-[100px]">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">Scan Type</span>
            <span className="text-xs text-[var(--text-primary)] font-medium">{detail.type}</span>
          </div>
          <div className="flex flex-col gap-0.5 min-w-[100px]">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">Target</span>
            <span className="text-xs text-[var(--text-primary)] font-medium">{detail.target}</span>
          </div>
          <div className="flex flex-col gap-0.5 min-w-[100px]">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">Started At</span>
            <span className="text-xs text-[var(--text-primary)] font-medium">{detail.startedAt}</span>
          </div>
          <div className="flex flex-col gap-0.5 min-w-[100px]">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">Credentials</span>
            <span className="text-xs text-[var(--text-primary)] font-medium">{detail.credentials}</span>
          </div>
          <div className="flex flex-col gap-0.5 min-w-[100px]">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">Files</span>
            <span className="text-xs text-[var(--text-primary)] font-medium">{detail.files}</span>
          </div>
          <div className="flex flex-col gap-0.5 min-w-[100px]">
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-muted)]">Checklists</span>
            <span className="text-xs text-[var(--text-primary)] font-medium">{detail.checklists}</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-0 md:overflow-hidden">
          <div className="flex-1 min-w-0 p-4 min-h-[260px] md:min-h-0 md:overflow-hidden flex flex-col">
            <LiveConsole />
          </div>

          <div className="hidden md:block w-px bg-[var(--border-color)] my-4" />

          <div className="flex-1 min-w-0 md:max-w-[380px] p-4 min-h-[260px] md:min-h-0 md:overflow-hidden flex flex-col">
            <FindingLog />
          </div>
        </div>

        <div className="flex items-center gap-4 px-5 py-2.5 border-t border-[var(--border-color)] bg-[var(--sidebar-bg)] flex-shrink-0 flex-wrap text-xs">
          <div className="flex items-center gap-4 text-[var(--text-muted)]">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0CC8A8] animate-pulse" />
              <span className="font-medium text-[var(--text-secondary)]">{activeScan.subAgents}</span> Sub-agents
            </span>
            <span>
              <span className="font-medium text-[var(--text-secondary)]">{activeScan.parallelExecutions}</span> Parallel
            </span>
            <span>
              <span className="font-medium text-[var(--text-secondary)]">{activeScan.operations}</span> Ops
            </span>
          </div>

          <div className="hidden sm:block w-px h-4 bg-[var(--border-color)]" />

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span className="text-red-400 font-semibold">{criticalCount}</span>
              <span className="text-[var(--text-muted)]">Critical</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-orange-400 font-semibold">{highCount}</span>
              <span className="text-[var(--text-muted)]">High</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-500" />
              <span className="text-yellow-400 font-semibold">{mediumCount}</span>
              <span className="text-[var(--text-muted)]">Medium</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-green-400 font-semibold">{lowCount}</span>
              <span className="text-[var(--text-muted)]">Low</span>
            </span>
          </div>

          <div className="ml-auto text-[var(--text-muted)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0CC8A8] inline-block animate-pulse mr-1" />
            Live
          </div>
        </div>
      </main>
    </div>
  )
}
