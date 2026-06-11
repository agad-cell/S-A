import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import type { Product } from '@/lib/site'

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-foreground/5">
      <Link href={`/shop/${product.slug}`} className="relative block aspect-[4/3] overflow-hidden bg-secondary/50">
        <Image
          src={product.image || '/placeholder.svg'}
          alt={`${product.name} mockup`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.bestseller && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            Bestseller
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {product.category}
        </p>
        <Link
          href={`/shop/${product.slug}`}
          className="mt-1.5 font-heading text-lg font-semibold leading-snug text-foreground transition-colors hover:text-foreground/70"
        >
          {product.name}
        </Link>
        <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
          {product.blurb}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {product.formats.map((f) => (
            <span
              key={f}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
            >
              {f}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <span className="font-heading text-lg font-semibold text-foreground">
            {product.price}
          </span>
          <a
            href={product.gumroad}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Buy on Gumroad
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
