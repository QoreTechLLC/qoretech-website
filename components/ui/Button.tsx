'use client'

import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  children: React.ReactNode
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', loading, className, children, disabled, ...props }, ref) => {
    const base =
      'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 cursor-pointer select-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-electric/60 disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: [
        'bg-ember-500 text-white border border-ember-400/30',
        'hover:bg-ember-400 hover:shadow-glow-ember hover:-translate-y-0.5',
        'active:translate-y-0 active:bg-ember-600',
      ].join(' '),
      secondary: [
        'bg-sky-electric/10 text-sky-electric border border-sky-electric/20',
        'hover:bg-sky-electric/15 hover:border-sky-electric/35 hover:-translate-y-0.5',
        'active:translate-y-0',
      ].join(' '),
      ghost: [
        'text-neutral-100 border border-transparent',
        'hover:bg-white/5 hover:border-white/10',
        'active:bg-white/10',
      ].join(' '),
      outline: [
        'bg-transparent text-neutral-100 border border-neutral-100/20',
        'hover:border-neutral-100/40 hover:bg-white/5 hover:-translate-y-0.5',
        'active:translate-y-0',
      ].join(' '),
    }

    const sizes = {
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
          <svg
            className="animate-spin h-4 w-4 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
