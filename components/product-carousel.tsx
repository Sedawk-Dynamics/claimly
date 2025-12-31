"use client"

import { motion, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"
import { Zap, Shield, Activity, TrendingUp, Clock } from "lucide-react"

export function ProductCarousel() {
  const [position, setPosition] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState(0)
  const [isMoving, setIsMoving] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const SPEED = 20
  const lerp = (a: number, b: number, n: number) => a + (b - a) * n

  // ===== CAROUSEL LOGIC (UNCHANGED - AS OLD) =====
  useAnimationFrame(() => {
    if (!containerRef.current || !isMoving) return

    const rect = containerRef.current.getBoundingClientRect()
    const mouseX = mousePos

    const leftZone = rect.left + rect.width * 0.25
    const rightZone = rect.left + rect.width * 0.75

    let speed = 0
    if (mouseX < leftZone) speed = SPEED
    if (mouseX > rightZone) speed = -SPEED

    setPosition((prev) => {
      let next = lerp(prev, prev + speed, 0.18)

      const itemWidth = 480 + 24
      const totalWidth = itemWidth * products.length * 3

      if (next <= -totalWidth / 3) next += totalWidth / 3
      if (next >= 0) next -= totalWidth / 3

      return next
    })
  })

  const products = [
    {
      title: "Smart Claims Assistant",
      description: "Guides you step-by-step through the claim process.",
      beforeImage:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/hp-2025/agents/before/hp-ai-agent-hp-1.png",
      afterImage:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/hp-2025/agents/after/hp-ai-board-hp-1.avif",
      color: "bg-gradient-to-br from-orange-400 to-amber-500",
    },
    {
      title: "Instant Verification",
      description: "Verifies your documents securely and instantly.",
      beforeImage:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/hp-2025/agents/before/hp-ai-agent-hp-2.png",
      afterImage:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/hp-2025/agents/after/hp-ai-board-hp-2.avif",
      color: "bg-[#D9E3FD]",
    },
    {
      title: "Claim Tracker",
      description: "Shows live updates of your claim journey.",
      beforeImage:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/hp-2025/agents/before/hp-ai-agent-hp-3.png",
      afterImage:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/hp-2025/agents/after/hp-ai-board-hp-3.avif",
      color: "bg-gradient-to-br from-black to-gray-900",
    },
    {
      title: "Settlement Manager",
      description: "Handles your settlement from start to finish.",
      beforeImage:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/hp-2025/agents/before/hp-ai-agent-hp-4.png",
      afterImage:
        "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/hp-2025/agents/after/hp-ai-board-hp-4.avif",
      color: "bg-white",
    },
  ]

  // ===== BENEFITS (VIDEO SECTION RESTORED TO OLD BEHAVIOR) =====
  const benefits = [
    {
      text: "Process claims instantly",
      icon: Zap,
      gradient: "from-pink-500 to-pink-600",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gradient_Video_Generation-gR7mopRwyD92llvfjqkv3MCDsqW0bP.mp4",
    },
    {
      text: "Secure document validation",
      icon: Shield,
      gradient: "from-blue-500 to-blue-600",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI_Verification_Removed_Video_Ready-4Om7jMy470yvrSQU1XXpI6pKoyaiSM.mp4",
    },
    {
      text: "Real-time tracking",
      icon: Activity,
      gradient: "from-cyan-500 to-cyan-600",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gradient_Video_Generation-gR7mopRwyD92llvfjqkv3MCDsqW0bP.mp4",
    },
    {
      text: "Faster settlements",
      icon: TrendingUp,
      gradient: "from-yellow-500 to-yellow-600",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Video_Generation_Based_On_Description-vSPJ0TN4NXNFSitcdii3ugCzaTRGIK.mp4",
    },
    {
      text: "24/7 support available",
      icon: Clock,
      gradient: "from-green-500 to-green-600",
      video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gradient_Video_Generation-gR7mopRwyD92llvfjqkv3MCDsqW0bP.mp4",
    },
  ]

  const handleBenefitClick = (index: number) => {
    setActiveIndex(index)
    if (videoRef.current) {
      videoRef.current.src = benefits[index].video
      videoRef.current.load()
      videoRef.current.play()
    }
  }

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-black">
      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14 md:mb-16 text-center">
        <div className="inline-block text-3xl sm:text-4xl mb-3 sm:mb-4">✨</div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">
          Your insurance claims.
          <br />
          <span className="text-[#F49446]">Fast. Simple. Secure.</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
          Experience the future of insurance claims processing
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14 md:mb-16">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch">
          {/* LEFT - Benefits */}
          <div className="w-full lg:w-[30%] flex flex-col justify-center gap-3 sm:gap-4 md:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.button
                  key={index}
                  onClick={() => handleBenefitClick(index)}
                  className={`flex items-center gap-3 sm:gap-4 text-left transition-all duration-300 group cursor-pointer hover:bg-gray-800/40 active:bg-gray-700/50 rounded-xl p-2 sm:p-3 ${
                    activeIndex === index ? "opacity-100" : "opacity-60 hover:opacity-90"
                  }`}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: activeIndex === index ? 1 : 0.6, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 6, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br ${benefit.gradient} group-hover:opacity-90 flex items-center justify-center shadow-lg transition-transform duration-300 ${
                      activeIndex === index ? "scale-110 shadow-xl" : "group-hover:scale-105"
                    }`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span
                    className={`text-base sm:text-lg font-medium transition-colors ${
                      activeIndex === index ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                    }`}
                  >
                    {benefit.text}
                  </span>
                </motion.button>
              )
            })}
          </div>

          {/* RIGHT - Video */}
          <div className="relative w-full lg:w-[70%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] md:min-h-[420px]">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                key={activeIndex}
              >
                <source src={benefits[activeIndex].video} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative text-center mb-8 sm:mb-10 md:mb-12 px-4">
        <motion.h3
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Meet your claim assistants
        </motion.h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base px-4">
          Describe your claim and get instant guidance through every step, available 24/7.
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative touch-pan-y"
        onMouseMove={(e) => {
          setMousePos(e.clientX)
          setIsMoving(true)
        }}
        onMouseLeave={() => setIsMoving(false)}
        onTouchStart={() => setIsMoving(false)}
        style={{ perspective: "1200px" }}
      >
        <motion.div className="flex gap-4 sm:gap-6 transform-gpu" style={{ x: position, willChange: "transform" }}>
          {[...products, ...products, ...products].map((product, index) => (
            <motion.div key={index} className="flex-shrink-0 w-[320px] sm:w-[400px] md:w-[480px] group transform-gpu">
              <div
                className={`relative h-[420px] sm:h-[480px] md:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden 
                ${product.color}
                transition-all duration-500 ease-out
                group-hover:scale-[1.03] group-hover:-translate-y-3
                group-hover:shadow-2xl group-hover:shadow-[#F49446]/20`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative z-10 p-6 sm:p-8">
                  <h3
                    className={`text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 ${
                      product.title === "Claim Tracker" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {product.title}
                  </h3>
                  <p
                    className={`text-base sm:text-lg ${
                      product.title === "Claim Tracker" ? "text-white/90" : "text-gray-700"
                    }`}
                  >
                    {product.description}
                  </p>
                </div>

                <img
                  src={product.beforeImage || "/placeholder.svg"}
                  alt={product.title}
                  className="absolute bottom-0 left-0 right-0 h-[280px] sm:h-[320px] md:h-[340px] object-contain object-bottom transition-all duration-700 ease-out group-hover:opacity-0 group-hover:scale-95"
                />

                <img
                  src={product.afterImage || "/placeholder.svg"}
                  alt={`${product.title} interface`}
                  className="absolute bottom-0 left-0 right-0 h-[280px] sm:h-[320px] md:h-[340px] object-contain object-bottom opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
