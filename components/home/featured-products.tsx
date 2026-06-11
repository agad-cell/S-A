import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { products } from '@/lib/site'
import { ProductCard } from '@/components/product-card'

export function FeaturedProducts() {
  const featured = products.filter((p) => p.bestseller).slice(0, 3)
  const list = featured.length >= 3 ? featured : products.slice(0, 3)

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            Best sellers
          </p>
          <h2 className="mt-2 text-balance font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Loved by thousands of planners
          </h2>
        </div>
        <Link
          href="/shop"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          View all products
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}
