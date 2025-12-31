"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
  Briefcase,
  TrendingUp,
  Heart,
  Users,
  Lightbulb,
  Target,
  Award,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CareersPage() {
  const cultureValues = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We encourage creative thinking and cutting-edge solutions to transform the insurance industry.",
    },
    {
      icon: Users,
      title: "Collaborative Spirit",
      description: "Work with talented professionals who believe in teamwork and shared success.",
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "Every role contributes to making insurance claims faster, easier, and more transparent.",
    },
    {
      icon: TrendingUp,
      title: "Growth Mindset",
      description: "Continuous learning opportunities with mentorship programs and skill development.",
    },
  ]

  const benefits = [
    "Competitive salary packages with performance bonuses",
    "Comprehensive health insurance coverage",
    "Flexible work arrangements and remote options",
    "Professional development and training programs",
    "Stock options and equity participation",
    "Generous paid time off and holidays",
    "Modern office space with latest technology",
    "Team outings and wellness programs",
  ]

  const jobPostings = [
    {
      title: "Insurance Claims Specialist",
      department: "Insurance Operations",
      location: "Mumbai / Hybrid",
      type: "Full-time",
      description:
        "Review and process insurance claims, verify policy details, and ensure accurate claim settlements. Work closely with insurance partners and policyholders.",
      requirements: ["3+ years in insurance claims", "Knowledge of life/health insurance", "Strong analytical skills"],
    },
    {
      title: "Medical Billing Specialist",
      department: "Revenue Cycle Management",
      location: "Bangalore / Remote",
      type: "Full-time",
      description:
        "Manage medical billing operations, process insurance claims, and ensure accurate coding and documentation for healthcare services.",
      requirements: ["2+ years medical billing", "CPT & ICD-10 coding knowledge", "Healthcare RCM experience"],
    },
    {
      title: "Denials Management Coordinator",
      department: "Revenue Cycle Management",
      location: "Delhi / Hybrid",
      type: "Full-time",
      description:
        "Analyze denied claims, identify root causes, implement corrective actions, and work with payers to resolve payment issues.",
      requirements: ["3+ years denials management", "Payer guidelines knowledge", "Problem-solving skills"],
    },
    {
      title: "Medical Coding Specialist",
      department: "Medical Coding",
      location: "Remote",
      type: "Full-time",
      description:
        "Assign accurate ICD-10, CPT, and HCPCS codes to medical procedures and diagnoses. Ensure compliance with coding standards and regulations.",
      requirements: ["CPC/CCS certification", "2+ years coding experience", "Knowledge of medical terminology"],
    },
    {
      title: "Accounts Receivable Analyst",
      department: "AR Management",
      location: "Pune / Hybrid",
      type: "Full-time",
      description:
        "Monitor outstanding claims, follow up with insurance payers, reconcile payments, and maintain accurate AR records.",
      requirements: ["3+ years AR experience", "Healthcare billing knowledge", "Excel & reporting skills"],
    },
    {
      title: "Eligibility Verification Specialist",
      department: "Insurance Operations",
      location: "Chennai / Remote",
      type: "Full-time",
      description:
        "Verify patient insurance eligibility and benefits, obtain prior authorizations, and communicate coverage details to stakeholders.",
      requirements: ["2+ years eligibility verification", "Insurance portal expertise", "Attention to detail"],
    },
    {
      title: "Payer Relations Manager",
      department: "Payer Relations",
      location: "Mumbai / Hybrid",
      type: "Full-time",
      description:
        "Build and maintain relationships with insurance payers, negotiate contracts, resolve payment disputes, and ensure smooth claim processing.",
      requirements: ["5+ years payer relations", "Insurance industry knowledge", "Strong negotiation skills"],
    },
    {
      title: "RCM Operations Manager",
      department: "Revenue Cycle Management",
      location: "Bangalore / Hybrid",
      type: "Full-time",
      description:
        "Oversee end-to-end revenue cycle operations, manage team performance, implement process improvements, and ensure optimal claim realization.",
      requirements: ["5+ years RCM leadership", "Healthcare operations experience", "Team management skills"],
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
                <Briefcase className="w-4 h-4" />
                Join Our Team
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Build the Future of{" "}
              <span className="bg-gradient-to-r from-[#F49446] to-[#FF6B35] bg-clip-text text-transparent">
                Insurance Technology
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Join a team of innovators transforming how millions of people interact with insurance claims. We're
              looking for passionate individuals who want to make a real impact.
            </motion.p>
          </div>

          {/* Company Culture Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Culture & Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We believe in creating an environment where innovation thrives and every team member can excel
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cultureValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-[#F49446]/30"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F49446] to-[#FF6B35] flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-[#F49446]/5 to-[#FF6B35]/5 rounded-3xl p-8 sm:p-12 border border-[#F49446]/20">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-[#F49446] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Benefits & Perks</h2>
                  <p className="text-lg text-gray-600">We invest in our team's wellbeing, growth, and happiness</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                    className="flex items-start gap-3 bg-white/80 rounded-xl p-4 hover:bg-white transition-colors duration-200"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-green-500" />
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Job Postings Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore opportunities across various departments and find your perfect role
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {jobPostings.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#F49446]/30"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F49446]/10 text-[#F49446] text-sm font-semibold">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, reqIndex) => (
                          <span
                            key={reqIndex}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Link href="/contact">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#F49446] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#F49446] text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full lg:w-auto"
                        >
                          Apply Now
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12">
              <Award className="w-16 h-16 text-[#F49446] mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Don't See Your Role?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                We're always looking for exceptional talent. Send us your resume and let us know how you can contribute
                to our mission.
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white hover:bg-gray-100 text-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
