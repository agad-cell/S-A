'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { products, categories } from '@/lib/site'
import { ProductCard } from '@/components/product-card'

const filters = ['All', ...categories] as const

export function ShopGrid({ initialCategory }: { initialCategory?: string }) {
  const start =
    initialCategory && categories.includes(initialCategory as never)
      ? initialCategory
      : 'All'
  const [active, setActive] = useState<string>(start)

  const filtered =
    active === 'All'
      ? products
      : products.filter((p) => p.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              active === f
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border bg-card text-muted-foreground hover:text-foreground',
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
