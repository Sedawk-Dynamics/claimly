"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactForm() {
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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    alert("Thank you for your enquiry! We'll get back to you soon.")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Have questions about Claimly? We're here to help. Send us your enquiry and our team will respond promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-muted-foreground mb-8">
                Reach out to us through any of these channels. We're committed to providing you with the support you
                need.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Mail, title: "Email", lines: ["support@claimly.in"] },
                { icon: Phone, title: "Phone", lines: ["+91 8070605111", "Mon-Fri, 9AM-6PM IST"] },
                { icon: MapPin, title: "Office", lines: ["Tech Life Invention Pvt. Ltd.", "India"] },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-primary rounded-lg blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 shadow-md">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                  </motion.div>

                  <div className="relative z-10">
                    <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                    {item.lines.map((line, i) => (
                      <p key={i} className={i === 0 ? "text-muted-foreground" : "text-sm text-muted-foreground"}>
                        {line}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <h4 className="font-semibold mb-4">Why Contact Us?</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Product demonstrations and trials
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Partnership opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Technical support and queries
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  General information about Claimly
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden group"
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

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
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this regarding?"
                      className="h-12"
                    />
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

                <p className="text-sm text-muted-foreground mt-4 text-center">We typically respond within 24 hours</p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
