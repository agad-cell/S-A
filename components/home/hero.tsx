import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Gift } from 'lucide-react'
import { GUMROAD_STORE } from '@/lib/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-12 md:px-8 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent-foreground" />
            Instant digital downloads
          </span>
          <h1 className="mt-5 text-balance font-heading text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Organize Your Life with Simple, Beautiful Digital Planners
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Download instantly. Stay consistent. Build better habits with
            ready-to-use templates designed for focus and calm.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={GUMROAD_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Shop Now
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
            <Link
              href="/free-resources"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <Gift className="size-4" aria-hidden="true" />
              Get Free Habit Tracker
            </Link>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Trusted by students, creators & productivity lovers worldwide.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-accent/40 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-foreground/5">
            <Image
              src="/hero-planner.png"
              alt="Sia Venture digital planner displayed on a tablet"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
