import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { blogPosts } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Blog — Productivity & Planning Tips',
  description:
    'Read Sia Venture articles on digital planners, habit tracking, and staying organised. SEO-friendly tips for students, creators, and entrepreneurs.',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
      <PageHeader
        eyebrow="Blog"
        title="Plan better, live calmer"
        description="Practical tips on planning, habits, and productivity to help you get the most from your tools."
      />

      <Link
        href={`/blog/${featured.slug}`}
        className="group mt-12 grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2"
      >
        <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
          <Image
            src={featured.image || '/placeholder.svg'}
            alt={featured.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center p-7 md:p-10">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-secondary px-2.5 py-1 font-medium text-secondary-foreground">
              {featured.category}
            </span>
            <span>{featured.readTime}</span>
          </div>
          <h2 className="mt-4 text-balance font-heading text-2xl font-semibold leading-snug text-foreground md:text-3xl">
            {featured.title}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
            {featured.excerpt}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
            Read article
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-foreground/5"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image || '/placeholder.svg'}
                alt={post.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-medium text-foreground">
                  {post.category}
                </span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-2 font-heading text-lg font-semibold leading-snug text-foreground">
                {post.title}
              </h3>
              <p className="mt-2 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
