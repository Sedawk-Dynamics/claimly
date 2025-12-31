import { ContactForm } from "@/components/contact-form"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
