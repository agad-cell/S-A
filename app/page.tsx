import { Hero } from '@/components/home/hero'
import { Benefits } from '@/components/home/benefits'
import { FeaturedProducts } from '@/components/home/featured-products'
import { SocialProof } from '@/components/home/social-proof'
import { Gallery } from '@/components/home/gallery'
import { NewsletterCta } from '@/components/home/newsletter-cta'

export default function Page() {
  return (
    <main>
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <SocialProof />
      <Gallery />
      <NewsletterCta />
    </main>
  )
}
