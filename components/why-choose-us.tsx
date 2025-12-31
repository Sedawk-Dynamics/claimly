"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Award, TrendingUp } from "lucide-react"

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Why Choose Claimly?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              India's first-ever automatic insurance claim settlement platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {[
                  {
                    icon: Sparkles,
                    title: "First in India",
                    desc: "Pioneering automatic claim settlement",
                    color: "primary",
                  },
                  {
                    icon: Award,
                    title: "Fully Automated",
                    desc: "No manual intervention, complete automation",
                    color: "accent",
                  },
                  {
                    icon: TrendingUp,
                    title: "Fraud-Resistant",
                    desc: "Advanced technology ensures only legitimate claims",
                    color: "secondary",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="relative mb-4"
                    >
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 bg-${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                      />

                      {/* Icon container */}
                      <div
                        className={`relative w-16 h-16 bg-gradient-to-br from-${item.color} to-${item.color}/70 rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <item.icon className={`h-8 w-8 text-${item.color}-foreground`} />
                      </div>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-card/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative group"
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                <p className="text-foreground leading-relaxed text-center text-lg relative z-10">
                  <span className="font-bold text-primary">Claimly</span> offers a seamless, transparent, and
                  fraud-resistant claim experience. We empower policyholders and nominees to resolve claims quickly and
                  confidently — all through a user-friendly digital interface.
                  <span className="font-semibold">
                    {" "}
                    No other service in India has provided such an innovative, fully automated solution before.
                  </span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
