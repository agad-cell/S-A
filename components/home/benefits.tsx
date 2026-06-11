import { Zap, MousePointerClick, Layers } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Instant Download',
    description:
      'No waiting and no shipping. Buy once and your files are ready to use in seconds.',
  },
  {
    icon: MousePointerClick,
    title: 'Easy to Use',
    description:
      'Clean, intuitive templates that work out of the box — no setup or learning curve.',
  },
  {
    icon: Layers,
    title: 'Works Everywhere',
    description:
      'Compatible with Notion, GoodNotes, and any PDF reader on phone, tablet, or desktop.',
  },
]

export function Benefits() {
  return (
    <section className="border-y border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-8 sm:grid-cols-3 sm:gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="flex flex-col items-start">
              <div className="inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <b.icon className="size-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
