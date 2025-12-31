"use client"

import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Award, Zap, Users, FileText, TrendingUp, Shield } from "lucide-react"

// ⭐ Shooting Star
const ShootingStar = ({ delay, duration }: { delay: number; duration: number }) => (
  <motion.div
    className="absolute w-[3px] h-[130px] bg-gradient-to-b from-white to-transparent blur-[2px]"
    initial={{ opacity: 0, x: -300, y: -300, rotate: 45 }}
    animate={{
      opacity: [0, 1, 0],
      x: [-300, 900],
      y: [-300, 900],
    }}
    transition={{ delay, duration, repeat: Infinity, ease: "easeOut" }}
    style={{ pointerEvents: "none" }}
  />
)

// ⭐ Neon Floating Star (Hard Glow)
const FloatingStar = ({
  size,
  x,
  y,
  delay,
}: {
  size: number
  x: string
  y: string
  delay: number
}) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
      boxShadow:
        "0 0 20px 8px rgba(255,255,255,0.95), 0 0 50px 15px rgba(0,200,255,0.8)",
    }}
    animate={{
      y: [0, -25, 0],
      opacity: [0.4, 1, 0.4],
    }}
    transition={{
      delay,
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
)

export function MondayInspiredSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section
      ref={containerRef}
      className="relative bg-[#000000] py-10 overflow-hidden"
    >
      {/* ⭐ Floating stars */}
      <FloatingStar size={10} x="8%" y="22%" delay={0.2} />
      <FloatingStar size={8} x="28%" y="70%" delay={0.7} />
      <FloatingStar size={14} x="60%" y="40%" delay={1.3} />
      <FloatingStar size={9} x="78%" y="25%" delay={0.5} />
      <FloatingStar size={16} x="88%" y="65%" delay={1.8} />

      {/* ⭐ Shooting stars */}
      <ShootingStar delay={1} duration={3} />
      <ShootingStar delay={2.3} duration={3.4} />
      <ShootingStar delay={3.2} duration={2.8} />
      <ShootingStar delay={4.5} duration={3.2} />
      <ShootingStar delay={5.7} duration={3.9} />

      {/* Neon cloud gradients */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[140px]"
        style={{ background: "rgba(0,150,255,0.25)" }}
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.3, 1] }}
        transition={{ duration: 9, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[130px]"
        style={{ background: "rgba(200,0,255,0.22)" }}
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 11, repeat: Infinity }}
      />

      <motion.div style={{ opacity }} className="relative z-20 w-full">

        {/* USP Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-8 px-4"
        >
          <USPBadge icon={<Zap className="w-4 h-4 text-cyan-400" />} text="Lightning Fast" />
          <USPBadge icon={<Users className="w-4 h-4 text-pink-400" />} text="Seamless Processing" />
          <USPBadge icon={<Award className="w-4 h-4 text-blue-400" />} text="Industry Leading" />
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-10 max-w-5xl mx-auto px-4"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_0_25px_rgba(0,200,255,0.7)]">
            Welcome to the{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_22px_rgba(255,0,255,0.8)]">
              Future of Insurance
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mt-4">
            A fully automated, ultra-secure, lightning fast platform built for tomorrow.
          </p>
        </motion.div>

        {/* MAIN PARALLAX GLOW CARD */}
        <motion.div
          style={{ y }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-6xl mx-auto px-4"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl overflow-visible shadow-[0_0_120px_rgba(0,200,255,0.5)]"
          >
            {/* CYBERPUNK MULTI-COLOR BORDER */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background:
                  "linear-gradient(120deg, #00eaff, #7a00ff, #ff00c8, #00eaff)",
                backgroundSize: "300% 300%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                boxShadow: [
                  "0 0 60px rgba(0,200,255,0.8)",
                  "0 0 90px rgba(255,0,255,0.8)",
                  "0 0 60px rgba(0,200,255,0.8)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <div className="absolute inset-[3px] bg-[#000000] rounded-3xl"></div>
            </motion.div>

            {/* Orbiting Neon Pulse */}
            <motion.div
              className="absolute w-8 h-8 z-50"
              style={{
                offsetPath:
                  "path('M 50 0 L calc(100% - 50) 0 Q 100 0 100 50 L 100 calc(100% - 50) Q 100 100 calc(100% - 50) 100 L 50 100 Q 0 100 0 calc(100% - 50) L 0 50 Q 0 0 50 0')",
                offsetRotate: "0deg",
              }}
              animate={{ offsetDistance: ["0%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              <div
                className="w-8 h-8 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, #00eaff 0%, #7a00ff 40%, #ff00c8 100%)",
                  boxShadow: "0 0 25px #00eaff, 0 0 50px #ff00c8",
                }}
              ></div>
            </motion.div>

            {/* MAIN CONTENT AREA */}
            <div className="relative bg-[#000000] rounded-3xl overflow-visible">

              {/* Avatars */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-[#000000]/90 backdrop-blur-md px-5 py-3 rounded-full border border-white/20 shadow-[0_0_50px_rgba(0,200,255,0.5)]">
                {[...Array(6)].map((_, idx) => (
                  <motion.img
                    key={idx}
                    src={`https://i.pravatar.cc/150?img=${idx + 1}`}
                    className="w-12 h-12 rounded-full border-2 border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    whileHover={{ scale: 1.3, y: -8 }}
                  />
                ))}
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 border border-white/30 flex items-center justify-center text-white text-xs font-bold shadow-[0_0_30px_rgba(0,200,255,0.7)]"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  +245K
                </motion.div>
              </div>

              <div className="relative w-full h-[430px] md:h-[460px] bg-[#000000] rounded-3xl flex items-center justify-center overflow-hidden">

                {/* Neon grid */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(0,200,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,255,0.4) 1px, transparent 1px)",
                      backgroundSize: "50px 50px",
                    }}
                  />
                </div>

                {/* Floating cards */}
                <FloatingCard
                  icon={<FileText className="w-6 h-6 text-blue-400" />}
                  title="Claims Process"
                  subtitle="AI-Powered"
                  delay={0}
                  position={{ top: "20%", left: "15%" }}
                />
                <FloatingCard
                  icon={<TrendingUp className="w-6 h-6 text-cyan-400" />}
                  title="Live Analytics"
                  subtitle="Real-time Insights"
                  delay={0.5}
                  position={{ top: "15%", right: "20%" }}
                />
                <FloatingCard
                  icon={<Shield className="w-6 h-6 text-purple-400" />}
                  title="Security"
                  subtitle="Bank-Grade"
                  delay={0.9}
                  position={{ bottom: "20%", left: "20%" }}
                />

                {/* Center Card */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.07, rotate: 2 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-70 blur-2xl"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(0,200,255,0.7), rgba(255,0,255,0.6))",
                    }}
                    animate={{
                      scale: [1, 1.25, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{ duration: 7, repeat: Infinity }}
                  />
                  <div className="relative bg-[#000000] border border-white/20 rounded-2xl p-8 backdrop-blur-sm w-72 md:w-96 shadow-[0_0_60px_rgba(0,200,255,0.6)]">
                    <motion.div
                      className="flex items-center justify-center mb-4"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center shadow-[0_0_40px_rgba(255,0,255,0.8)]">
                        <Zap className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white text-center mb-2 drop-shadow-[0_0_25px_rgba(0,200,255,0.8)]">
                      Lightning Fast Claims
                    </h3>
                    <p className="text-gray-300 text-sm text-center">
                      Upload → Verify → Settle. Fully automated, insanely fast.
                    </p>

                    <motion.div
                      className="mt-4 h-2 bg-[#111] rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-pink-400"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto px-4"
        >
          {[
            { label: "Faster Claims Processing", value: "10x" },
            { label: "Customer Satisfaction", value: "98%" },
            { label: "Response Time", value: "Instant" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{
                scale: 1.1,
                y: -8,
                boxShadow: "0 0 40px rgba(0,200,255,0.8)",
              }}
              className="text-center p-6 rounded-2xl bg-[#000000] border border-white/15 shadow-[0_0_40px_rgba(255,0,255,0.3)] cursor-pointer"
            >
              <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,200,255,0.7)] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

// ✔️ Badge Component
function USPBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className="flex items-center gap-3 px-5 py-3 bg-[#000000]/80 border border-white/20 rounded-full backdrop-blur-md shadow-[0_0_30px_rgba(0,200,255,0.5)]"
    >
      {icon}
      <span className="text-white text-sm font-medium">{text}</span>
    </motion.div>
  )
}

// ✔️ Floating Side Cards
function FloatingCard({
  icon,
  title,
  subtitle,
  delay,
  position,
}: {
  icon: React.ReactNode
  title: string
  subtitle: string
  delay: number
  position: { top?: string; bottom?: string; left?: string; right?: string }
}) {
  return (
    <motion.div
      className="absolute z-20"
      style={position}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: [0, -20, 0],
      }}
      transition={{
        opacity: { delay, duration: 0.8 },
        y: {
          delay: delay + 0.6,
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.15 }}
    >
      <motion.div
        className="bg-[#000000] backdrop-blur-lg border border-white/25 rounded-xl p-5 shadow-[0_0_50px_rgba(0,200,255,0.5)] w-44 md:w-52"
        whileHover={{
          boxShadow:
            "0 0 60px rgba(0,200,255,0.9), 0 0 80px rgba(255,0,255,0.6)",
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div>{icon}</div>
          <div>
            <h4 className="text-white font-semibold text-sm">{title}</h4>
            <p className="text-gray-300 text-xs">{subtitle}</p>
          </div>
        </div>
        <motion.div
          className="h-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full shadow-[0_0_20px_rgba(255,0,255,0.8)]"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: delay + 1, duration: 1.5 }}
        />
      </motion.div>
    </motion.div>
  )
}
