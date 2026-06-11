import { Gift } from 'lucide-react'
import { EmailSignup } from '@/components/email-signup'

export function NewsletterCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
      <div className="overflow-hidden rounded-3xl border border-border bg-primary px-6 py-12 text-center md:px-12 md:py-16">
        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary-foreground/10 text-primary-foreground">
          <Gift className="size-6" aria-hidden="true" />
        </div>
        <h2 className="mx-auto mt-5 max-w-xl text-balance font-heading text-3xl font-semibold tracking-tight text-primary-foreground md:text-4xl">
          Get a free habit tracker, on us
        </h2>
        <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-primary-foreground/80 md:text-base">
          Join our newsletter and we will send you a beautiful printable habit
          tracker plus tips to stay consistent — straight to your inbox.
        </p>
        <div className="mx-auto mt-8 max-w-md">
          <EmailSignup />
          <p className="mt-3 text-xs text-primary-foreground/70">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  )
}
