import type { Metadata } from 'next'
import { Mail, Camera, MessageCircle } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { SOCIALS, CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact | Sia Venture',
  description:
    'Questions about a product, a custom request, or just want to say hi? Get in touch with the Sia Venture team.',
}

export default function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Get in touch"
        title="We'd love to hear from you"
        description="Questions about a product, a custom request, or feedback — drop us a note and we'll reply soon."
      />

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">Email us</h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Camera className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">Follow along</h3>
                <a
                  href={SOCIALS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  @siaventure on Instagram
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold">Response time</h3>
                <p className="text-sm text-muted-foreground">Usually within 1&ndash;2 business days.</p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  )
}
