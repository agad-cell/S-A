import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { ShopGrid } from '@/components/shop-grid'

export const metadata: Metadata = {
  title: 'Shop Digital Planners & Trackers',
  description:
    'Browse Sia Venture digital planners, habit trackers, and productivity cheat sheets. Buy on Gumroad and download instantly.',
}

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <PageHeader
        eyebrow="Shop"
        title="Tools to plan, track, and focus"
        description="Every product is a beautifully designed system you can download in seconds and use on any device."
      />
      <div className="mt-12">
        <ShopGrid initialCategory={category} />
      </div>
    </main>
  )
}
