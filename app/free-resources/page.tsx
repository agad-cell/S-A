import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { FreeResourceCard } from '@/components/free-resource-card'
import { freeResources } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Free Productivity Resources',
  description:
    'Download free habit trackers, planner samples, and goal-setting sheets from Sia Venture. Enter your email and get instant access.',
}

export default function FreeResourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <PageHeader
        eyebrow="Free resources"
        title="Free downloads to get you started"
        description="Try our planning system before you buy. Enter your email and we will send the file straight to your inbox."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {freeResources.map((resource) => (
          <FreeResourceCard key={resource.slug} resource={resource} />
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-md text-center text-xs text-muted-foreground">
        We use your email to send your download and occasional productivity
        tips. No spam, unsubscribe anytime.
      </p>
    </main>
  )
}
