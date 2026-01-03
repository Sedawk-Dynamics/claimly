"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
  TrendingUp,
  FileText,
  Shield,
  Bell,
  Mail,
  Briefcase,
  CheckCircle2,
  Calendar,
  Download,
  Zap,
  Globe,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InvestorsPage() {
  const keyMetrics = [
    {
      label: "Early Traction",
      value: "Growing",
      description: "Rapid user adoption post-launch",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-600",
    },
    {
      label: "Market Size",
      value: "$10M",
      description: "India insurance market by 2027",
      icon: Globe,
      color: "from-blue-500 to-cyan-600",
    },
    {
      label: "Time Savings",
      value: "10 days",
      description: "Average reduction in claim time",
      icon: Zap,
      color: "from-orange-500 to-amber-600",
    },
    {
      label: "Platform Status",
      value: "Live",
      description: "Operating across India",
      icon: Award,
      color: "from-purple-500 to-pink-600",
    },
  ]

  const companyMilestones = [
    {
      period: "Dec 2025",
      achievement: "Series A Funding Secured",
      userGrowth: "Strong month-over-month growth",
      keyUpdate: "Major insurance partnership announced",
      status: "completed",
    },
    {
      period: "Nov 2025",
      achievement: "Platform Scale-Up",
      userGrowth: "Consistent user acquisition momentum",
      keyUpdate: "Expanded to 15+ insurance providers",
      status: "completed",
    },
    {
      period: "Oct 2025",
      achievement: "Official Market Launch",
      userGrowth: "Strong initial adoption",
      keyUpdate: "Platform goes live nationwide",
      status: "completed",
    },
  ]

  const reports = [
    {
      title: "Q4 2025 Investor Update",
      description: "Strategic progress, platform adoption metrics, and growth initiatives since launch",
      date: "December 30, 2025",
      type: "Quarterly Update",
      size: "2.1 MB",
    },
    {
      title: "Platform Performance Overview",
      description: "User engagement metrics, operational efficiency, and technology milestones",
      date: "December 5, 2025",
      type: "Performance Report",
      size: "1.5 MB",
    },
    {
      title: "Investor Deck 2025",
      description: "Vision, market opportunity, competitive advantages, and growth strategy",
      date: "November 15, 2025",
      type: "Presentation",
      size: "4.8 MB",
    },
  ]

  const governance = [
    {
      title: "Board of Directors",
      description: "Experienced leaders providing strategic oversight and governance",
      members: ["Seasoned industry veterans", "Independent board representation", "Strong governance framework"],
    },
    {
      title: "Executive Leadership",
      description: "Proven track record in insurance, technology, and healthcare sectors",
      members: ["Deep domain expertise", "Prior exits and scale experience", "Customer-first culture"],
    },
    {
      title: "Compliance & Security",
      description: "Committed to highest standards of data protection and regulatory compliance",
      members: ["ISO 27001 Certified", "SOC 2 Type II Compliant", "GDPR & Data Privacy Compliant"],
    },
  ]

  const announcements = [
    {
      date: "Dec 28, 2025",
      title: "Claimly Closes Successful Series A Funding Round",
      description:
        "Secured strategic investment from leading venture capital firms to accelerate product development and geographic expansion",
      category: "Funding",
    },
    {
      date: "Dec 15, 2025",
      title: "Major Partnership with National Insurance Provider",
      description:
        "Strategic collaboration announced with top-tier insurance company to transform claims experience for millions of policyholders",
      category: "Partnership",
    },
    {
      date: "Nov 20, 2025",
      title: "Platform Adoption Exceeds Early Projections",
      description:
        "Rapid user growth and engagement metrics demonstrate strong product-market fit within first 30 days",
      category: "Milestone",
    },
    {
      date: "Oct 20, 2025",
      title: "Claimly Officially Launches AI-Powered Platform",
      description:
        "Next-generation insurance claims platform goes live, bringing transparency and speed to Indian insurance market",
      category: "Launch",
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
                Investor Relations
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Building the Future of{" "}
              <span className="bg-gradient-to-r from-[#F49446] to-[#FF6B35] bg-clip-text text-transparent">
                Insurance Claims
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Revolutionizing a multi-trillion dollar industry through AI-powered automation, transparency, and
              exceptional user experience
            </motion.p>
          </div>

          {/* Overview - Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
            id="overview"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Claimly</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Strong momentum and market validation since our October 2025 launch
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <metric.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
            id="financials"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Growth Milestones</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tracking our journey from launch to market leadership
              </p>
            </div>
            <div className="space-y-6">
              {companyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Period</div>
                        <div className="text-sm font-bold text-gray-900">{milestone.period}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Major Achievement</div>
                        <div className="text-sm font-semibold text-gray-900">{milestone.achievement}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">User Growth</div>
                        <div className="text-sm text-gray-700">{milestone.userGrowth}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Key Update</div>
                        <div className="text-sm text-gray-700">{milestone.keyUpdate}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Reports Section
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
            id="reports"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Investor Resources</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access our latest updates, metrics, and strategic presentations
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {reports.map((report, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#F49446]/30"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F49446] to-[#FF6B35] flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold mb-2">
                        {report.type}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{report.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{report.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {report.date}
                    </div>
                    <div>{report.size}</div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-[#F49446] text-[#F49446] hover:bg-[#F49446] hover:text-white transition-all duration-300 bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Governance Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-20"
            id="governance"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Leadership & Governance</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced leadership committed to transparency, compliance, and long-term value creation
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {governance.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                  <div className="space-y-2">
                    {item.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{member}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Announcements Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mb-20"
            id="announcements"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Company Updates</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Latest news on partnerships, funding, and platform milestones
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {announcements.map((announcement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-[#F49446]/30"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F49446] to-[#FF6B35] flex items-center justify-center">
                        <Bell className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-sm text-gray-500">{announcement.date}</span>
                        <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#F49446]/10 text-[#F49446] text-xs font-semibold">
                          {announcement.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{announcement.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{announcement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact IR Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            id="contact"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 sm:p-12 text-center">
              <div className="w-16 h-16 rounded-full bg-[#F49446] flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Connect With Our Team</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Questions about our growth strategy, market opportunity, or partnership inquiries? Our investor
                relations team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#F49446] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#F49446] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Contact Investor Relations
                    <Mail className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="mt-8 text-gray-400 text-sm">
                Email:{" "}
                <a href="mailto:investors@claimly.co.in" className="text-[#F49446] hover:underline">
                  investors@claimly.co.in
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
