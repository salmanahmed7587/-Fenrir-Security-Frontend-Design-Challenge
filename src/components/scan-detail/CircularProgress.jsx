const statusConfig = {
  'Completed':   { text: 'Completed',   color: 'text-green-400',  stroke: '#22C55E' },
  'In Progress': { text: 'In Progress', color: 'text-[#0CC8A8]',  stroke: '#0CC8A8' },
  'Scheduled':   { text: 'Scheduled',   color: 'text-gray-400',   stroke: '#6B7280' },
  'Failed':      { text: 'Failed',      color: 'text-red-400',    stroke: '#EF4444' },
}

export default function CircularProgress({ percent = 0, size = 120, strokeWidth = 8, status = 'In Progress' }) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (percent / 100) * circumference
  const cfg = statusConfig[status] ?? statusConfig['In Progress']

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--border-color)"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={cfg.stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
      </svg>
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-xl font-bold text-[var(--text-primary)]">{percent}%</span>
        <span className={`text-[10px] font-medium mt-0.5 ${cfg.color}`}>{cfg.text}</span>
      </div>
    </div>
  )
}
