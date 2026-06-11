'use client'

import { useState } from 'react'
import { Send, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    // Simulate sending — wire up to your email service or form handler.
    setTimeout(() => setStatus('sent'), 900)
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-4 font-heading text-xl font-semibold">Message sent</h3>
        <p className="mt-2 text-pretty text-muted-foreground">
          Thanks for reaching out. We&apos;ll get back to you within 1&ndash;2 business days.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
            placeholder="Your name"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-11 rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
            placeholder="you@example.com"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
            placeholder="How can we help?"
          />
        </div>
        <Button type="submit" size="lg" disabled={status === 'sending'} className="w-full sm:w-auto">
          {status === 'sending' ? 'Sending…' : 'Send message'}
          <Send className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}
