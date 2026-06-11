import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/lib/site'

export function Gallery() {
  const items = [...products, ...products].slice(0, 6)

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="text-center">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          The collection
        </p>
        <h2 className="mx-auto mt-2 max-w-xl text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          A planner for every part of your life
        </h2>
      </div>

      <div className="mt-10 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {items.map((item, i) => (
          <Link
            key={`${item.slug}-${i}`}
            href="/shop"
            className="group block break-inside-avoid overflow-hidden rounded-2xl border border-border bg-card"
          >
            <div
              className="relative w-full overflow-hidden"
              style={{ aspectRatio: i % 3 === 0 ? '3 / 4' : '4 / 3' }}
            >
              <Image
                src={item.image || '/placeholder.svg'}
                alt={`${item.name} preview`}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Browse the full shop
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
