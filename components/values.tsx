"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Lightbulb, Eye, Heart, ShieldIcon, Target } from 'lucide-react'

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace creativity and technology to build smarter, future-ready solutions.",
    gradient: "from-yellow-500 via-amber-500 to-orange-500",
    glowColor: "rgba(251, 191, 36, 0.4)",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "We believe in open, honest processes that build trust with our users and partners.",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    glowColor: "rgba(6, 182, 212, 0.4)",
  },
  {
    icon: Heart,
    title: "User-Centricity",
    description: "Our products are designed with the user in mind — intuitive, efficient, and impactful.",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    glowColor: "rgba(244, 63, 94, 0.4)",
  },
  {
    icon: ShieldIcon,
    title: "Integrity",
    description: "We uphold the highest standards of ethics and responsibility in everything we do.",
    gradient: "from-purple-500 via-violet-500 to-indigo-500",
    glowColor: "rgba(139, 92, 246, 0.4)",
  },
  {
    icon: Target,
    title: "Reliability",
    description: "We commit to delivering consistent, dependable solutions that users can trust.",
    gradient: "from-green-500 via-emerald-500 to-teal-500",
    glowColor: "rgba(16, 185, 129, 0.4)",
  },
]

export function Values() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            The principles that guide everything we do at Tech Life Invention
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              {/* Gradient overlay with pulsing animation */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10`}
                animate={{
                  opacity: [0, 0.05, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${value.glowColor}, transparent 70%)`,
                }}
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-18 h-18 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-5 shadow-xl`}
                >
                  <value.icon className="h-9 w-9 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${value.gradient} opacity-10 rounded-bl-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    // </CHANGE>
  )
}
