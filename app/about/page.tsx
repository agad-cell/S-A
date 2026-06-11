import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Heart, Sparkles, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PageHeader } from '@/components/page-header'
import { EmailSignup } from '@/components/email-signup'

export const metadata: Metadata = {
  title: 'About | Sia Venture',
  description:
    'Sia Venture designs minimal, beautiful digital planners and productivity templates to help you build a calmer, more intentional routine.',
}

const values = [
  {
    icon: Sparkles,
    title: 'Beautifully simple',
    body: 'Clean, distraction-free designs you actually want to open every day.',
  },
  {
    icon: Target,
    title: 'Built to be used',
    body: 'Practical templates rooted in real productivity systems, not just pretty pages.',
  },
  {
    icon: Heart,
    title: 'Made with care',
    body: 'Every product is designed by hand and refined from real customer feedback.',
  },
]

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Our story"
        title="Helping you plan a calmer, more intentional life"
        description="Sia Venture started with a simple belief: the right tools make consistency feel effortless."
      />

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border">
            <Image
              src="/about-workspace.png"
              alt="Sia Venture design workspace"
              width={900}
              height={700}
              className="aspect-[5/4] w-full object-cover"
            />
          </div>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>
              We are a small studio obsessed with the intersection of design and productivity. After
              years of trying bloated apps and cluttered planners, we wanted something different —
              tools that were minimal, beautiful, and genuinely useful.
            </p>
            <p>
              Today, thousands of students, creators, and professionals use Sia Venture planners and
              trackers to organise their days, build better habits, and reach their goals without the
              overwhelm.
            </p>
            <p>
              Every template is crafted to feel calm and intentional, so opening your planner becomes
              a moment you look forward to — not another thing on your to-do list.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <Button asChild size="lg">
            <Link href="/shop">
              Explore the shop
              <ArrowUpRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <EmailSignup
            title="Join the Sia Venture community"
            description="Get free templates and thoughtful planning tips in your inbox."
          />
        </div>
      </section>
    </div>
  )
}
