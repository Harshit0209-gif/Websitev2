import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { DevelopmentProcessSection } from "@/components/development-process-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import "./globals.css"

export default function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <DevelopmentProcessSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
