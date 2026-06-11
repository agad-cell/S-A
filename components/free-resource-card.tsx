'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Check, Loader2, Download } from 'lucide-react'
import type { FreeResource } from '@/lib/site'

export function FreeResourceCard({ resource }: { resource: FreeResource }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    // Placeholder for ConvertKit / MailerLite integration
    setTimeout(() => setStatus('success'), 900)
  }

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary/50">
        <Image
          src={resource.image || '/placeholder.svg'}
          alt={`${resource.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          Free
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          {resource.title}
        </h3>
        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {resource.description}
        </p>

        {status === 'success' ? (
          <div className="mt-5 flex items-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm font-medium text-foreground">
            <Check className="size-4 text-accent-foreground" aria-hidden="true" />
            Your download link is on its way!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2.5">
            <label htmlFor={`email-${resource.slug}`} className="sr-only">
              Email address
            </label>
            <input
              id={`email-${resource.slug}`}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full rounded-full border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-70"
            >
              {status === 'loading' ? (
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              ) : (
                <Download className="size-4" aria-hidden="true" />
              )}
              Download for free
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
