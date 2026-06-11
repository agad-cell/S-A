import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Check } from 'lucide-react'
import { products } from '@/lib/site'
import { Button, buttonVariants } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import { cn } from '@/lib/utils'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return {}
  return {
    title: `${product.name} | Sia Venture`,
    description: product.blurb,
    openGraph: {
      title: product.name,
      description: product.blurb,
      images: [{ url: product.image }],
    },
  }
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:py-16">
      <Link
        href="/shop"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to shop
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border bg-secondary/30">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            width={900}
            height={900}
            className="aspect-square w-full object-cover"
            priority
          />
        </div>

        <div className="flex flex-col">
          <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {product.category}
          </span>
          <h1 className="mt-2 text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.formats.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
              >
                <Check className="h-3.5 w-3.5" />
                {f}
              </span>
            ))}
          </div>

          <div className="mt-8 flex items-baseline gap-2">
            <span className="font-heading text-3xl font-semibold">{product.price}</span>
            <span className="text-sm text-muted-foreground">one-time · instant download</span>
          </div>

          <a
            href={product.gumroad}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ size: 'lg' }), 'mt-6 h-11 w-full px-6 text-base sm:w-auto')}
          >
            Buy on Gumroad
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Secure checkout via Gumroad. Files are delivered instantly to your email.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">You might also like</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
