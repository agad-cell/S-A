import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { blogPosts, products } from '@/lib/site'
import { Button } from '@/components/ui/button'
import { PinterestShare } from '@/components/pinterest-share'
import { EmailSignup } from '@/components/email-signup'

type Params = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Sia Venture`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2)

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        All articles
      </Link>

      <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
          {post.category}
        </span>
        <span>{post.date}</span>
        <span aria-hidden>·</span>
        <span>{post.readTime}</span>
      </div>

      <h1 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        {post.title}
      </h1>
      <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border">
        <Image
          src={post.image || '/placeholder.svg'}
          alt={post.title}
          width={1200}
          height={800}
          className="aspect-[3/2] w-full object-cover"
          priority
        />
      </div>

      <div className="mt-6 flex items-center justify-between">
        <PinterestShare media={post.image} description={post.title} />
      </div>

      <div className="mt-10 space-y-10">
        {post.body.map((section, i) => {
          const product = section.productSlug
            ? products.find((p) => p.slug === section.productSlug)
            : null
          return (
            <section key={i}>
              {section.heading && (
                <h2 className="font-heading text-2xl font-semibold tracking-tight">{section.heading}</h2>
              )}
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((p, j) => (
                  <p key={j} className="text-pretty leading-relaxed text-foreground/90">
                    {p}
                  </p>
                ))}
              </div>

              {product && (
                <Link
                  href={`/shop/${product.slug}`}
                  className="group mt-6 flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4 transition-colors hover:bg-secondary"
                >
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    width={120}
                    height={120}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      Recommended
                    </p>
                    <p className="mt-1 truncate font-heading font-semibold">{product.name}</p>
                    <p className="truncate text-sm text-muted-foreground">{product.blurb}</p>
                  </div>
                  <span className="ml-auto hidden shrink-0 items-center gap-1 text-sm font-medium text-foreground sm:inline-flex">
                    {product.price}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              )}
            </section>
          )
        })}
      </div>

      <div className="mt-14 rounded-2xl border border-border bg-card p-6 sm:p-8">
        <EmailSignup
          title="Enjoyed this? Get the next one."
          description="Join our newsletter for weekly planning tips and free templates."
        />
      </div>

      <div className="mt-14 border-t border-border pt-10">
        <h2 className="font-heading text-xl font-semibold tracking-tight">Keep reading</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {related.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
              <div className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={p.image || '/placeholder.svg'}
                  alt={p.title}
                  width={600}
                  height={400}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-pretty font-heading font-semibold leading-snug transition-colors group-hover:text-foreground/70">
                {p.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </article>
  )
}
