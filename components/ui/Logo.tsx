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
      {/* Mark: Q-shaped hexagonal glyph */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer hex ring */}
        <path
          d="M20 2L35.6 11V29L20 38L4.4 29V11L20 2Z"
          stroke="url(#logo-grad-1)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.6"
        />
        {/* Inner hex fill */}
        <path
          d="M20 7L31.2 13.5V26.5L20 33L8.8 26.5V13.5L20 7Z"
          fill="url(#logo-grad-2)"
          opacity="0.15"
        />
        {/* Q crossbar */}
        <path
          d="M14 20C14 16.686 16.686 14 20 14C23.314 14 26 16.686 26 20C26 23.314 23.314 26 20 26"
          stroke="url(#logo-grad-1)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
        {/* Q tail */}
        <path
          d="M23 23L27.5 27.5"
          stroke="#DC5326"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Center dot */}
        <circle cx="20" cy="20" r="1.5" fill="#6ec1e4" />

        <defs>
          <linearGradient id="logo-grad-1" x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6ec1e4" />
            <stop offset="0.5" stopColor="#d4d4d4" />
            <stop offset="1" stopColor="#DC5326" />
          </linearGradient>
          <linearGradient id="logo-grad-2" x1="8" y1="7" x2="32" y2="33" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6ec1e4" />
            <stop offset="1" stopColor="#DC5326" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <span className={cn('font-semibold tracking-tight text-neutral-50', s.text)}>
          Qore<span className="text-sky-electric">Tech</span>
        </span>
      )}
    </div>
  )
}
