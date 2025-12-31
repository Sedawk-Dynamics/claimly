"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Quote } from "lucide-react"
import Image from "next/image"

export function FounderMessage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Founder's Message
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            /* UPDATED COLOR HERE */
            className="bg-[#C5D5F6] border border-border rounded-3xl p-8 md:p-12 relative"
          >
            <div className="absolute top-8 left-8 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="h-8 w-8 text-primary" />
            </div>

            <div className="pt-12">
              <p className="text-lg text-foreground leading-relaxed mb-6 text-pretty">
                At Tech Life Invention, we believe technology has the power to make life simpler and more secure. Our
                flagship product, Claimly, was born from the desire to eliminate the frustration and delays often faced
                during insurance claim settlements.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6 text-pretty">
                Our goal is to empower users with a transparent, quick, and reliable platform that restores trust and
                brings peace of mind. As we grow, we remain committed to innovation, customer satisfaction, and creating
                solutions that truly make a difference.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-8 text-pretty">
                Thank you for being part of this journey with us.
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <Image
                    src="/images/founder-27s-image-claimly-20-281-29.jpeg"
                    alt="The Founder - Tech Life Invention"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-foreground text-lg">The Founder</p>
                  <p className="text-muted-foreground">Tech Life Invention Pvt. Ltd.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
