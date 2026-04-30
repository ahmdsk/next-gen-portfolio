import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TechSection } from "@/components/tech-section"
import { ConsultationSection } from "@/components/consultation-section"
import { CTASection } from "@/components/cta-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { FloatingActionButton } from "@/components/floating-action-button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <TechSection />
      <ConsultationSection />
      <CTASection />
      <ContactForm />
      <Footer />
      <FloatingActionButton />
    </main>
  )
}
