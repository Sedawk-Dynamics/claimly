import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { ProductCarousel } from "@/components/product-carousel"
import { ClaimlyDifference } from "@/components/claimly-difference"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { MobileAppShowcase } from "@/components/mobile-app-showcase"
import { Values } from "@/components/values"
import { FounderMessage } from "@/components/founder-message"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { MondayInspiredSection } from "@/components/monday-inspired-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <ProductCarousel />
      <ClaimlyDifference />
      <MondayInspiredSection />
      <Features />
      <HowItWorks />
      <MobileAppShowcase />
      <Values />
      <WhyChooseUs />
      <FounderMessage />
      <CTA />
      <Footer />
    </main>
  )
}
