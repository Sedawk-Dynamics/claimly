"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Bot, FileCheck, Lock, TrendingUp, Users, Clock } from 'lucide-react'

const features = [
  {
    icon: Bot,
    title: "Automated Verification",
    description:
      "Advanced machine learning algorithms verify claims instantly, reducing processing time from weeks to minutes.",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.35)",
  },
  {
    icon: FileCheck,
    title: "Automated Processing",
    description: "Seamless document verification and claim assessment without manual intervention.",
    gradient: "from-purple-500 via-pink-500 to-purple-600",
    glowColor: "rgba(244, 114, 182, 0.35)",
  },
  {
    icon: Lock,
    title: "Fraud Detection",
    description: "Multi-layer security and advanced fraud detection ensure only legitimate claims are processed.",
    gradient: "from-red-500 via-orange-500 to-red-600",
    glowColor: "rgba(248, 113, 113, 0.35)",
  },
  {
    icon: TrendingUp,
    title: "Real-Time Tracking",
    description: "Track your claim status in real-time with complete transparency at every step.",
    gradient: "from-green-500 via-emerald-500 to-green-600",
    glowColor: "rgba(52, 211, 153, 0.35)",
  },
  {
    icon: Users,
    title: "User-Friendly Interface",
    description: "Intuitive design makes claim submission simple for policyholders and nominees alike.",
    gradient: "from-indigo-500 via-violet-500 to-indigo-600",
    glowColor: "rgba(165, 180, 252, 0.35)",
  },
  {
    icon: Clock,
    title: "Quick Settlement",
    description: "Get your claims settled faster than ever with our automated approval system.",
    gradient: "from-yellow-500 via-amber-500 to-yellow-600",
    glowColor: "rgba(251, 191, 36, 0.35)",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" ref={ref} className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Powerful Features for Seamless Claims
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience the future of insurance claim settlement with cutting-edge technology
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800"
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10`}
                animate={{ opacity: [0, 0.05, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${feature.glowColor}, transparent 70%)`,
                }}
              />

              {/* Light sweep */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`w-18 h-18 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-5 shadow-xl`}
                >
                  <feature.icon className="h-9 w-9 text-white" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 dark:group-hover:from-white dark:group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {feature.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-10 rounded-bl-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
