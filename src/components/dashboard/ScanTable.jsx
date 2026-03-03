import { useNavigate } from 'react-router-dom'
import StatusChip from '../common/StatusChip'
import { VulnCount } from '../common/SeverityBadge'
import { ArrowUpDown, ExternalLink } from 'lucide-react'

export default function ScanTable({ scans }) {
  const navigate = useNavigate()

  return (
    <div className="rounded-xl border border-[var(--border-color)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead>
            <tr className="border-b border-[var(--border-color)]" style={{ backgroundColor: 'var(--table-header)' }}>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide whitespace-nowrap">
                <button className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Scan Name <ArrowUpDown size={11} className="opacity-40" />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide whitespace-nowrap">
                <button className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Type <ArrowUpDown size={11} className="opacity-40" />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide whitespace-nowrap">
                <button className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Status <ArrowUpDown size={11} className="opacity-40" />
                </button>
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide whitespace-nowrap">
                Progress
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide whitespace-nowrap">
                Critical
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide whitespace-nowrap">
                High
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide whitespace-nowrap">
                Medium
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide whitespace-nowrap">
                Low
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide whitespace-nowrap">
                <button className="flex items-center gap-1 hover:text-[var(--text-primary)] transition-colors cursor-pointer">
                  Last Scan <ArrowUpDown size={11} className="opacity-40" />
                </button>
              </th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border-color)]">
            {scans.map(scan => (
              <tr
                key={scan.id}
                onClick={() => navigate(`/scan/${scan.id}`)}
                className="cursor-pointer transition-colors duration-100 group"
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--table-row-hover)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <td className="px-4 py-3.5 font-medium text-[var(--text-primary)] whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0CC8A8] flex-shrink-0" />
                    {scan.name}
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <span className="px-2 py-0.5 rounded text-xs font-medium bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-color)]">
                    {scan.type}
                  </span>
                </td>
                <td className="px-4 py-3.5">
                  <StatusChip status={scan.status} />
                </td>
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2 min-w-[80px]">
                    <div className="flex-1 h-1.5 rounded-full bg-[var(--border-color)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#0CC8A8] transition-all duration-500"
                        style={{ width: `${scan.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-[var(--text-muted)] w-7 text-right flex-shrink-0">
                      {scan.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-center"><VulnCount count={scan.critical} severity="Critical" /></td>
                <td className="px-4 py-3.5 text-center"><VulnCount count={scan.high} severity="High" /></td>
                <td className="px-4 py-3.5 text-center"><VulnCount count={scan.medium} severity="Medium" /></td>
                <td className="px-4 py-3.5 text-center"><VulnCount count={scan.low} severity="Low" /></td>
                <td className="px-4 py-3.5 text-xs text-[var(--text-muted)] whitespace-nowrap">
                  {scan.lastScan}
                </td>
                <td className="px-4 py-3.5">
                  <ExternalLink
                    size={14}
                    className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
