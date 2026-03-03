import { Check } from 'lucide-react'

export default function StepTracker({ steps, currentStep }) {
  return (
    <div className="flex items-center flex-1 min-w-0">
      {steps.map((step, i) => {
        const isDone   = i < currentStep
        const isActive = i === currentStep

        return (
          <div key={step} className="flex items-center flex-1 min-w-0 last:flex-none">
            <div className="flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all
                ${isDone
                  ? 'bg-[#0CC8A8] border-[#0CC8A8] text-black'
                  : isActive
                  ? 'bg-[#0CC8A8]/15 border-[#0CC8A8] text-[#0CC8A8]'
                  : 'bg-[var(--bg-elevated)] border-[var(--border-color)] text-[var(--text-muted)]'
                }
              `}>
                {isDone ? <Check size={13} strokeWidth={3} /> : i + 1}
              </div>
              <span className={`text-[10px] font-medium whitespace-nowrap ${
                isActive ? 'text-[#0CC8A8]' : isDone ? 'text-[var(--text-secondary)]' : 'text-[var(--text-muted)]'
              }`}>
                {step}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div className="flex-1 h-0.5 mx-2 mb-5 rounded-full overflow-hidden bg-[var(--border-color)]">
                {isDone && <div className="h-full bg-[#0CC8A8] w-full" />}
                {isActive && <div className="h-full bg-gradient-to-r from-[#0CC8A8] to-transparent w-1/2" />}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
