import { Star, Quote } from 'lucide-react'

const stats = [
  { value: '12,000+', label: 'Downloads' },
  { value: '4.9/5', label: 'Average rating' },
  { value: '60+', label: 'Countries' },
]

const testimonials = [
  {
    quote:
      'These planners completely changed how I organise my semester. Everything finally feels under control.',
    name: 'Amara K.',
    role: 'University student',
  },
  {
    quote:
      'The habit tracker is so simple and beautiful that I actually use it every single day. My streaks have never been longer.',
    name: 'Daniel R.',
    role: 'Freelance designer',
  },
  {
    quote:
      'As a creator juggling a dozen projects, the productivity cheat sheets keep me focused on what matters.',
    name: 'Priya S.',
    role: 'Content creator',
  },
]

export function SocialProof() {
  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Social proof
          </p>
          <h2 className="mx-auto mt-2 max-w-2xl text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Trusted by students, creators, and productivity lovers
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-card p-5 text-center"
            >
              <div className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <Quote
                className="size-6 text-accent-foreground"
                aria-hidden="true"
              />
              <blockquote className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <div className="mt-4 flex items-center gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-accent-foreground text-accent-foreground"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <figcaption className="mt-3 text-sm">
                <span className="font-medium text-foreground">{t.name}</span>
                <span className="text-muted-foreground"> · {t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
