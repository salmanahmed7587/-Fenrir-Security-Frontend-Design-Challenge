import SeverityBadge from '../common/SeverityBadge'
import { findings } from '../../data/mockData'
import { AlertTriangle } from 'lucide-react'

export default function FindingLog() {
  return (
    <div className="flex flex-col h-full border border-[var(--border-color)] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border-color)] bg-[var(--bg-surface)] flex-shrink-0">
        <div className="flex items-center gap-2">
          <AlertTriangle size={14} className="text-orange-400" />
          <span className="text-sm font-semibold text-[var(--text-primary)]">Finding Log</span>
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-orange-500/15 text-orange-400 text-[10px] font-bold">
            {findings.length}
          </span>
        </div>
        <div className="flex gap-1.5">
          <SeverityBadge severity="Critical" size="xs" />
          <SeverityBadge severity="High" size="xs" />
          <SeverityBadge severity="Medium" size="xs" />
          <SeverityBadge severity="Low" size="xs" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto bg-[var(--bg-secondary)] divide-y divide-[var(--border-subtle)]">
        {findings.map((f, i) => (
          <div
            key={f.id}
            className="p-4 hover:bg-[var(--bg-surface)] transition-colors duration-100 cursor-pointer animate-fade-in"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <SeverityBadge severity={f.severity} showDot />
              <span className="text-[10px] text-[var(--text-muted)] flex-shrink-0 mt-0.5">{f.time}</span>
            </div>
            <p className="text-sm font-semibold text-[var(--text-primary)] mb-1 leading-snug">{f.title}</p>
            <p className="text-[11px] font-mono text-[#0CC8A8] mb-2">{f.endpoint}</p>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed line-clamp-2">{f.description}</p>
            {f.cve && (
              <span className="inline-block mt-2 text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-elevated)] text-[var(--text-muted)] border border-[var(--border-color)] font-mono">
                {f.cve}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
