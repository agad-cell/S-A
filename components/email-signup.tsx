'use client'

import { useState } from 'react'
import { Check, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type EmailSignupProps = {
  variant?: 'default' | 'inline'
  buttonLabel?: string
  placeholder?: string
  className?: string
  title?: string
  description?: string
}

export function EmailSignup({
  variant = 'default',
  buttonLabel = 'Get the Free Tracker',
  placeholder = 'Enter your email',
  className,
  title,
  description,
}: EmailSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Placeholder for ConvertKit / MailerLite integration
    setTimeout(() => setStatus('success'), 900)
  }

  const heading = (title || description) && (
    <div className="mb-5 text-center">
      {title && (
        <h3 className="font-heading text-2xl font-semibold tracking-tight text-foreground">{title}</h3>
      )}
      {description && (
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  )

  if (status === 'success') {
    return (
      <div>
        {heading}
        <div
          className={cn(
            'flex items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground',
            className,
          )}
          role="status"
        >
          <Check className="size-4 text-accent-foreground" aria-hidden="true" />
          Check your inbox — your free download is on its way!
        </div>
      </div>
    )
  }

  return (
    <div>
      {heading}
      <form
      onSubmit={handleSubmit}
      className={cn(
        'flex w-full flex-col gap-3 sm:flex-row',
        variant === 'inline' && 'sm:max-w-md',
        className,
      )}
    >
      <label htmlFor="email-signup" className="sr-only">
        Email address
      </label>
      <input
        id="email-signup"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
      >
        {status === 'loading' && (
          <Loader2 className="size-4 animate-spin" aria-hidden="true" />
        )}
        {buttonLabel}
      </button>
    </form>
    </div>
  )
}
