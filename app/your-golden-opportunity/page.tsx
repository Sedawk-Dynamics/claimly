"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function YourGoldenOpportunityPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you for your enquiry! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, subject: value })
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 bg-gradient-to-b from-primary/5 via-background to-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Hero heading and subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#F49446] via-orange-500 to-[#F49446] bg-clip-text text-transparent">
              Your Golden Opportunity
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Connect with us to explore partnerships, investments, and career opportunities in insurance innovation.
            </p>
          </motion.div>

          {/* Contact Form as Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Send us a Message</h2>
                <p className="text-muted-foreground text-center mb-8">We typically respond within 24 hours</p>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 8070605111"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Role or Interest *
                    </label>
                    <Select value={formData.subject} onValueChange={handleSelectChange} required>
                      <SelectTrigger className="w-full h-12">
                        <SelectValue placeholder="Select your role or interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="operators-leaders">
                          Operators & Leaders — COO, CTO, CFO, Marketing, Sales
                        </SelectItem>
                        <SelectItem value="partners">
                          Partners — Strategy, Technology, Distribution, Compliance, Growth
                        </SelectItem>
                        <SelectItem value="investors">
                          Angel & Early-Stage Investors — long-term, outcome-driven builders
                        </SelectItem>
                        <SelectItem value="contributors">
                          High-Impact Contributors — engineers, product thinkers, designers, growth minds
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your enquiry..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-12 text-base" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
