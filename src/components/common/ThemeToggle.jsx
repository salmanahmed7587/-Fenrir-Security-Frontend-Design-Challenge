import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ isDark, toggle, className = '' }) {
  return (
    <button
      onClick={toggle}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-[#242424] ${className}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
