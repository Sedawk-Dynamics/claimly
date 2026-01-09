"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, X, Award, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function USPPage() {
  const comparisons = [
    {
      traditional: "Manual paperwork and lengthy procedures",
      claimly: "AI-driven automation and real-time detection",
    },
    {
      traditional: "Delayed notifications to nominees",
      claimly: "Instant alerts to rightful beneficiaries",
    },
    {
      traditional: "Complex documentation requirements",
      claimly: "Pre-filled forms with document scanning",
    },
    {
      traditional: "Weeks or months for settlement",
      claimly: "End-to-end digital claims in days",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F5F8FF] to-white">
      <Navbar />
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F49446]/10 text-[#F49446] font-semibold text-sm">
                <Award className="w-4 h-4" />
                Unique Selling Proposition
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              USP & Competitive{" "}
              <span className="bg-gradient-to-r from-[#F49446] to-[#FF6B35] bg-clip-text text-transparent">
                Advantage
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              See how Claimly revolutionizes insurance claims processing with cutting-edge technology
            </motion.p>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-12"
          >
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <X className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Traditional Process</h2>
                    <p className="text-sm text-gray-600">Old insurance claim methods</p>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-gradient-to-r from-[#F49446]/5 to-[#FF6B35]/5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Claimly Advantage</h2>
                    <p className="text-sm text-[#F49446]">Modern AI-powered solution</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Rows */}
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-100 last:border-b-0 hover:bg-gray-50/50 transition-colors duration-200"
              >
                <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <X className="w-4 h-4 text-red-600" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item.traditional}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 bg-gradient-to-r from-[#F49446]/[0.02] to-transparent">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                    <p className="text-gray-900 font-semibold leading-relaxed">{item.claimly}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Legal Protection Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-[#F49446]/10 to-[#FF6B35]/10 rounded-2xl p-8 border border-[#F49446]/20 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-[#F49446] flex items-center justify-center">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Patent – 202511081810
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    First-mover protection secured for our proprietary insurance claims processing technology, ensuring a strong competitive advantage.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-sm font-semibold text-[#F49446]">
                    <Shield className="w-4 h-4" />
                    Protected Innovation
                  </div>
                </div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                </div>
            <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Trademark – 7348878/9
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our brand identity is officially registered and legally protected within the insurance technology industry.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-sm font-semibold text-blue-600">
              <Award className="w-4 h-4" />
              Registered Brand
            </div>
          </div>

              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
