'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize    = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  children: React.ReactNode
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, className, children, disabled, ...props }, ref) => {
    const base =
      'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-500/50 disabled:opacity-40 disabled:cursor-not-allowed'

    const variants: Record<ButtonVariant, string> = {
      primary: [
        'bg-neon-500 text-navy-900 border border-neon-400/40 font-semibold',
        'hover:bg-neon-400 hover:shadow-glow-neon hover:-translate-y-0.5',
        'active:translate-y-0 active:bg-neon-500',
      ].join(' '),
      secondary: [
        'bg-neon-500/10 text-neon-500 border border-neon-500/20',
        'hover:bg-neon-500/15 hover:border-neon-500/35 hover:-translate-y-0.5',
        'active:translate-y-0',
      ].join(' '),
      ghost: [
        'text-frost-200 border border-transparent',
        'hover:bg-white/5 hover:border-white/10',
        'active:bg-white/10',
      ].join(' '),
      outline: [
        'bg-transparent text-frost-100 border border-frost-100/20',
        'hover:border-frost-100/40 hover:bg-white/5 hover:-translate-y-0.5',
        'active:translate-y-0',
      ].join(' '),
    }

    const sizes: Record<ButtonSize, string> = {
      sm: 'text-sm px-4 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-7 py-3.5 gap-2.5',
    }

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
export default Button
