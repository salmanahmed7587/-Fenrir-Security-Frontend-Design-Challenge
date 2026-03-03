export default function StatusChip({ status }) {
  let bg = ''
  let text = ''
  let border = ''
  let dot = ''

  if (status === 'Completed') {
    bg = 'bg-green-500/15'
    text = 'text-green-500'
    border = 'border-green-500/30'
    dot = 'bg-green-500'
  } else if (status === 'In Progress') {
    bg = 'bg-[#0CC8A8]/15'
    text = 'text-[#0CC8A8]'
    border = 'border-[#0CC8A8]/30'
    dot = 'bg-[#0CC8A8] animate-pulse'
  } else if (status === 'Failed') {
    bg = 'bg-red-500/15'
    text = 'text-red-400'
    border = 'border-red-500/30'
    dot = 'bg-red-400'
  } else {
    // Scheduled or anything else
    bg = 'bg-gray-500/10'
    text = 'text-gray-400'
    border = 'border-gray-500/20'
    dot = 'bg-gray-400'
  }

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${bg} ${text} ${border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
      {status}
    </span>
  )
}
