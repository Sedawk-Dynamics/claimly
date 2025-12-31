"use client"

import { motion, useAnimationFrame } from "framer-motion"
import { Shield, TrendingUp, Clock } from 'lucide-react'
import { useRef, useState } from "react"

const insuranceCompanies = [
  { name: "HDFC Life", logo: "/hdfc-life-insurance-company-logo.jpg" },
  { name: "ICICI Prudential", logo: "/icici-prudential-life-insurance-company-logo.png" },
  { name: "LIC", logo: "/lic-insurance-square-logo.jpg" },
  { name: "Tata AIA", logo: "/tata-aia-life-insurance-company-logo.png" },
  { name: "Bajaj Allianz", logo: "/bajaj-allianz-life-insurance-company-logo.png" },
  { name: "SBI Life", logo: "/sbi-life-insurance-company-logo.webp" },
]

const duplicatedLogos = [...insuranceCompanies, ...insuranceCompanies, ...insuranceCompanies]

export function TrustedBy() {
  const [isDragging, setIsDragging] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollPosition = useRef(0)
  const velocity = useRef(2.5) // Increased carousel speed from 0.5 to 0.8 for faster, smoother animation

  useAnimationFrame(() => {
    if (!scrollContainerRef.current || isDragging) return
    
    scrollPosition.current += velocity.current
    
    const maxScroll = scrollContainerRef.current.scrollWidth / 3
    
    if (scrollPosition.current >= maxScroll) {
      scrollPosition.current = 0
    }
    
    scrollContainerRef.current.scrollLeft = scrollPosition.current
  })

  return (
    <section className="relative bg-gradient-to-b from-white via-primary/5 to-white py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4 px-6 py-2 bg-primary/10 rounded-full"
          >
            <span className="text-sm md:text-base font-semibold text-primary">Trusted Partners</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Trusted by Leading Insurance Companies
          </h2>
          <p className="mt-4 text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            Partnering with India's top insurers for seamless claim settlements
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 overflow-hidden"
        >
          <motion.div
            ref={scrollContainerRef}
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => {
              setIsDragging(false)
              if (scrollContainerRef.current) {
                scrollPosition.current = scrollContainerRef.current.scrollLeft
              }
            }}
            className="flex gap-8 md:gap-12 cursor-grab active:cursor-grabbing overflow-x-hidden py-8"
            style={{ scrollBehavior: 'auto' }}
          >
            {duplicatedLogos.map((company, index) => (
              <motion.div
                key={`${company.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % insuranceCompanies.length) * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="relative group flex-shrink-0"
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 w-44 h-44 flex items-center justify-center p-6">
                  <img
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    className="h-full w-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
                    draggable="false"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl mb-6 border-2 border-blue-500 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <TrendingUp className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500K+</div>
              <div className="text-base md:text-lg text-black/70 font-medium">Claims Processed</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl mb-6 border-2 border-purple-500 group-hover:border-purple-600 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                <Shield className="w-10 h-10 text-purple-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-base md:text-lg text-black/70 font-medium">Success Rate</div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal-500/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-2xl mb-6 border-2 border-teal-500 group-hover:border-teal-600 group-hover:shadow-lg group-hover:shadow-teal-500/50 transition-all duration-300">
                <Clock className="w-10 h-10 text-teal-600" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-base md:text-lg text-black/70 font-medium">Support Available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
