export default function SeverityBadge({ severity, showDot = false, size = 'sm' }) {
  let bg = ''
  let text = ''
  let border = ''
  let dot = ''

  if (severity === 'Critical') {
    bg = 'bg-red-500/15'
    text = 'text-red-500'
    border = 'border-red-500/30'
    dot = 'bg-red-500'
  } else if (severity === 'High') {
    bg = 'bg-orange-500/15'
    text = 'text-orange-500'
    border = 'border-orange-500/30'
    dot = 'bg-orange-500'
  } else if (severity === 'Medium') {
    bg = 'bg-yellow-500/15'
    text = 'text-yellow-500'
    border = 'border-yellow-500/30'
    dot = 'bg-yellow-500'
  } else {
    bg = 'bg-green-500/15'
    text = 'text-green-500'
    border = 'border-green-500/30'
    dot = 'bg-green-500'
  }

  const padding = size === 'xs' ? 'px-1.5 py-0.5 text-[10px]' : 'px-2 py-0.5 text-xs'

  return (
    <span className={`inline-flex items-center gap-1 rounded-full border font-semibold uppercase tracking-wide ${bg} ${text} ${border} ${padding}`}>
      {showDot && <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />}
      {severity}
    </span>
  )
}

export function VulnCount({ count, severity }) {
  if (count === 0) {
    return <span className="text-xs text-gray-500">—</span>
  }

  let bg = ''
  let text = ''

  if (severity === 'Critical') {
    bg = 'bg-red-500/15'
    text = 'text-red-500'
  } else if (severity === 'High') {
    bg = 'bg-orange-500/15'
    text = 'text-orange-500'
  } else if (severity === 'Medium') {
    bg = 'bg-yellow-500/15'
    text = 'text-yellow-500'
  } else {
    bg = 'bg-green-500/15'
    text = 'text-green-500'
  }

  return (
    <span className={`inline-flex items-center justify-center min-w-[24px] h-5 rounded px-1.5 text-xs font-bold ${bg} ${text}`}>
      {count}
    </span>
  )
}
