import { useState, useEffect, useRef } from 'react'
import { logEntries, verificationLoops } from '../../data/mockData'
import { Terminal, RefreshCw } from 'lucide-react'

function renderLine(entry) {
  const ts = (
    <span className="console-timestamp select-none mr-3 flex-shrink-0">[{entry.time}]</span>
  )

  switch (entry.type) {
    case 'url':
      return (
        <div className="flex items-start">
          {ts}
          <span className="text-gray-300">
            {entry.text.split(entry.highlight)[0]}
            <span className="console-url">{entry.highlight}</span>
            {entry.text.split(entry.highlight)[1]}
          </span>
        </div>
      )
    case 'method':
      return (
        <div className="flex items-start">
          {ts}
          <span className="console-method">{entry.text}</span>
        </div>
      )
    case 'status': {
      const statusColor = entry.status >= 500
        ? 'console-status-err'
        : entry.status >= 400
        ? 'text-yellow-400'
        : 'console-status-ok'
      return (
        <div className="flex items-start">
          {ts}
          <span className={statusColor}>{entry.text}</span>
        </div>
      )
    }
    case 'warning':
      return (
        <div className="flex items-start bg-yellow-500/5 -mx-2 px-2 rounded">
          {ts}
          <span className="text-yellow-400 font-medium">⚠ {entry.text}</span>
        </div>
      )
    case 'verify':
      return (
        <div className="flex items-start">
          {ts}
          <span className="console-keyword">{entry.text}</span>
        </div>
      )
    default:
      return (
        <div className="flex items-start">
          {ts}
          <span className="text-gray-400">{entry.text}</span>
        </div>
      )
  }
}

export default function LiveConsole() {
  const [tab, setTab] = useState('activity')
  const [visible, setVisible] = useState(5)
  const bottomRef = useRef(null)

  const entries = tab === 'activity' ? logEntries : verificationLoops

  useEffect(() => {
    setVisible(5)
    const interval = setInterval(() => {
      setVisible(v => {
        if (v >= entries.length) {
          clearInterval(interval)
          return v
        }
        return v + 1
      })
    }, 400)
    return () => clearInterval(interval)
  }, [tab, entries.length])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [visible])

  const shownEntries = entries.slice(0, visible)

  return (
    <div className="flex flex-col h-full border border-[var(--border-color)] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-color)] bg-[var(--bg-surface)] flex-shrink-0">
        <div className="flex items-center gap-2">
          <Terminal size={14} className="text-[#0CC8A8]" />
          <span className="text-sm font-semibold text-[var(--text-primary)]">Live Scan Console</span>
          <span className="w-2 h-2 rounded-full bg-[#0CC8A8] animate-pulse ml-1" />
        </div>

        <div className="flex items-center bg-[var(--bg-elevated)] rounded-lg p-0.5 border border-[var(--border-color)]">
          <button
            onClick={() => setTab('activity')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
              tab === 'activity'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
            }`}
          >
            Activity Log
          </button>
          <button
            onClick={() => setTab('verify')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all cursor-pointer ${
              tab === 'verify'
                ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-sm'
                : 'text-[var(--text-muted)] hover:text-[var(--text-secondary)]'
            }`}
          >
            Verification Loops
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto console-bg p-4">
        <div className="console-text space-y-0.5">
          <div className="text-[#0CC8A8] font-bold mb-2 flex items-center gap-2">
            <RefreshCw size={11} className="animate-spin" />
            fenrir-scanner v2.4.1 — {tab === 'activity' ? 'activity log' : 'verification engine'}
          </div>
          {shownEntries.map(e => <div key={e.id}>{renderLine(e)}</div>)}
          {visible < entries.length && (
            <div className="text-[#0CC8A8] animate-pulse">▋</div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  )
}
