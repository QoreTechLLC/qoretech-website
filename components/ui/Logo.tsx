import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className, showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: { mark: 24, text: 'text-base' },
    md: { mark: 30, text: 'text-lg' },
    lg: { mark: 40, text: 'text-2xl' },
  }
  const s = sizes[size]

  return (
    <div className={cn('inline-flex items-center gap-2.5 shrink-0', className)}>
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 2L35.6 11V29L20 38L4.4 29V11L20 2Z"
          stroke="url(#logo-g1)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M20 7L31.2 13.5V26.5L20 33L8.8 26.5V13.5L20 7Z"
          fill="url(#logo-g2)"
          opacity="0.1"
        />
        <path
          d="M14 20C14 16.686 16.686 14 20 14C23.314 14 26 16.686 26 20C26 23.314 23.314 26 20 26"
          stroke="url(#logo-g1)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M23 23L27.5 27.5"
          stroke="#00D97E"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="20" cy="20" r="1.5" fill="#00D97E" />
        <defs>
          <linearGradient id="logo-g1" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D97E" />
            <stop offset="0.5" stopColor="#E8EDF5" />
            <stop offset="1" stopColor="#4DFFA8" />
          </linearGradient>
          <linearGradient id="logo-g2" x1="8" y1="7" x2="32" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#00D97E" />
            <stop offset="1" stopColor="#4DFFA8" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className={cn('font-semibold tracking-tight text-frost-100', s.text)}>
          Qore<span className="text-neon-500">Tech</span>
        </span>
      )}
    </div>
  )
}
