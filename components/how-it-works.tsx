"use client"

import { motion, useInView } from "framer-motion"
import { FileText, Upload, Search, CheckCircle } from "lucide-react"
import { useRef } from "react"

const steps = [
  {
    step: "1",
    title: "Submit Your Claim",
    description: "Upload your insurance claim documents quickly and securely through our platform.",
    icon: FileText,
    color: "from-orange-500 via-red-500 to-pink-500",
    shadowColor: "shadow-orange-500/50",
  },
  {
    step: "2",
    title: "AI Analysis",
    description: "Our advanced AI analyzes your claim for accuracy, completeness, and compliance.",
    icon: Search,
    color: "from-blue-500 via-cyan-500 to-teal-500",
    shadowColor: "shadow-blue-500/50",
  },
  {
    step: "3",
    title: "Automated Processing",
    description: "Claims are automatically processed and validated against insurance policies.",
    icon: Upload,
    color: "from-purple-500 via-violet-500 to-indigo-500",
    shadowColor: "shadow-purple-500/50",
  },
  {
    step: "4",
    title: "Get Your Settlement",
    description: "Receive your approved claim settlement directly to your account within days.",
    icon: CheckCircle,
    color: "from-green-500 via-emerald-500 to-teal-500",
    shadowColor: "shadow-green-500/50",
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-b
      from-background via-muted/30 to-background"
    >
      {/* BACKGROUND SHAPES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center">
        {/* SECTION HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r 
            from-foreground to-foreground/70 bg-clip-text text-transparent text-center"
          >
            How Claimly Works
          </h2>

          <p className="text-xl text-muted-foreground text-center max-w-2xl mx-auto">
            Simple, fast, and secure insurance claim processing in four easy steps.
          </p>
        </motion.div>

        {/* GRID CENTER FIX */}
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -14, scale: 1.05 }}
                className="relative group flex flex-col items-center text-center h-full max-w-xs"
              >
                {/* ICON BLOCK */}
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color}
                    rounded-2xl blur-2xl opacity-0 group-hover:opacity-70`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                  <div
                    className={`relative w-24 h-24 bg-gradient-to-br ${step.color}
                    rounded-2xl flex items-center justify-center shadow-2xl 
                    ${step.shadowColor} z-10`}
                  >
                    <step.icon className="h-12 w-12 text-white" />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br 
                    ${step.color} rounded-full flex items-center justify-center text-white 
                    text-sm font-bold shadow-lg z-20 border-2 border-white`}
                  >
                    {step.step}
                  </motion.div>
                </motion.div>

                {/* TEXT */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">{step.description}</p>

                {/* LINE */}
                <motion.div
                  className={`mt-auto h-1 w-20 bg-gradient-to-r ${step.color} rounded-full`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.5 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
