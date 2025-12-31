"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Zap, CheckCircle, TrendingUp, Users, Award, X, Play } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Hero() {
  const [showVideoModal, setShowVideoModal] = useState(false)

  return (
    <>
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-cyan-950/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_70%)]" />
        </div>

        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/4 w-36 h-36 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="inline-block mb-6 sm:mb-8"
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(37, 99, 235, 0.3)",
                    "0 0 40px rgba(37, 99, 235, 0.5)",
                    "0 0 20px rgba(37, 99, 235, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] p-[2px] shadow-2xl"
              >
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 opacity-75 blur-xl"
                />

                <div className="relative flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-white dark:bg-gray-900">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }}
                  >
                    <Award className="w-6 h-6 text-blue-600" />
                  </motion.div>

                  <span className="text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    India's First Automatic Claims Platform
                  </span>

                  <motion.span
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="relative flex h-3 w-3"
                  >
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600 shadow-lg shadow-blue-500/50" />
                  </motion.span>
                </div>
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 sm:mb-8 text-balance leading-[1.1] sm:leading-[1.05] tracking-tight px-2"
            >
              <span className="relative inline-block">
                <span
                  className="bg-clip-text text-transparent animate-gradient"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #F49446 0%, #ff6b35 50%, #F49446 100%)",
                    backgroundSize: "200% 100%",
                    animation: "gradient 3s ease infinite",
                  }}
                >
                  Settle Insurance Claims{" "}
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 1200 12"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                >
                  <motion.path
                    d="M0,6 Q50,0 100,6 T200,6 T300,6 T400,6 T500,6 T600,6 T700,6 T800,6 T900,6 T1000,6 T1100,6 T1200,6"
                    stroke="#F49446"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    animate={{
                      d: [
                        "M0,6 Q50,0 100,6 T200,6 T300,6 T400,6 T500,6 T600,6 T700,6 T800,6 T900,6 T1000,6 T1100,6 T1200,6",
                        "M0,6 Q50,12 100,6 T200,6 T300,6 T400,6 T500,6 T600,6 T700,6 T800,6 T900,6 T1000,6 T1100,6 T1200,6",
                        "M0,6 Q50,0 100,6 T200,6 T300,6 T400,6 T500,6 T600,6 T700,6 T800,6 T900,6 T1000,6 T1100,6 T1200,6",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </motion.svg>
              </span>
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                  Instantly & Securely
                </span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full h-3"
                  viewBox="0 0 1200 12"
                  preserveAspectRatio="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                >
                  <motion.path
                    d="M0,6 Q50,0 100,6 T200,6 T300,6 T400,6 T500,6 T600,6 T700,6 T800,6 T900,6 T1000,6 T1100,6 T1200,6"
                    stroke="url(#gradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    animate={{
                      d: [
                        "M0,6 Q50,0 100,6 T200,6 T300,6 T400,6 T500,6 T600,6 T700,6 T800,6 T900,6 T1000,6 T1100,6 T1200,6",
                        "M0,6 Q50,12 100,6 T200,6 T300,6 T400,6 T500,6 T600,6 T700,6 T800,6 T900,6 T1000,6 T1100,6 T1200,6",
                        "M0,6 Q50,0 100,6 T200,6 T300,6 T400,6 T500,6 T600,6 T700,6 T800,6 T900,6 T1000,6 T1100,6 T1200,6",
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#2563eb" />
                      <stop offset="50%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </motion.svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 sm:mb-12 max-w-4xl mx-auto text-pretty leading-relaxed font-medium px-4"
            >
              Claimly revolutionizes insurance claim settlements with advanced automated verification, providing a
              smooth, transparent, and fraud-resistant experience for policyholders and nominees across India.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
            >
              <Link href="/signin" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] text-primary-foreground group px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 touch-manipulation"
                >
                  Start Your Claim
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowVideoModal(true)}
                className="
                  w-full sm:w-auto
                  px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold border-2
                  border-black/10 text-black
                  bg-white/60 backdrop-blur-sm
                  hover:bg-primary/10 hover:border-primary hover:text-primary
                  transition-all duration-300 hover:scale-105
                  group shadow-sm touch-manipulation
                "
              >
                <Play className="mr-2 h-5 w-5 text-black group-hover:text-primary transition-colors duration-300" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto px-4"
            >
              {[
                {
                  icon: Zap,
                  label: "10x Faster",
                  description: "Settlement speed",
                  gradient: "from-yellow-500 via-orange-500 to-red-500",
                  glow: "shadow-yellow-500/25",
                },
                {
                  icon: Shield,
                  label: "99.9% Secure",
                  description: "Fraud prevention",
                  gradient: "from-purple-500 via-violet-500 to-indigo-500",
                  glow: "shadow-purple-500/25",
                },
                {
                  icon: CheckCircle,
                  label: "100% Transparent",
                  description: "Process visibility",
                  gradient: "from-green-500 via-emerald-500 to-teal-500",
                  glow: "shadow-green-500/25",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -12, scale: 1.05 }}
                  className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl ${item.glow} transition-all duration-300 group overflow-hidden backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border border-gray-200/50 dark:border-gray-700/50`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`}
                  />

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  <div className="relative">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 mx-auto mb-4 sm:mb-5 shadow-lg`}
                    >
                      <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center">
                        <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-gray-900 dark:text-white" />
                      </div>
                    </motion.div>
                    <h3 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {item.label}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 sm:mt-20 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10 text-gray-600 dark:text-gray-400 px-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
              >
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">10,000+ Happy Users</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
              >
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">₹500Cr+ Claims Settled</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg"
              >
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-600" />
                <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">Bank-Grade Security</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {showVideoModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-5xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/XvAWJwRpC1Q?autoplay=1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
