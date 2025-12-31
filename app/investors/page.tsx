"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import {
  TrendingUp,
  DollarSign,
  FileText,
  Shield,
  Bell,
  Mail,
  Users,
  Target,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  Calendar,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function InvestorsPage() {
  const keyMetrics = [
    { label: "Year-over-Year Growth", value: "245%", icon: TrendingUp, color: "from-green-500 to-emerald-600" },
    { label: "Active Users", value: "500K+", icon: Users, color: "from-blue-500 to-cyan-600" },
    { label: "Claims Processed", value: "2M+", icon: Target, color: "from-orange-500 to-amber-600" },
    { label: "Revenue Run Rate", value: "$50M", icon: DollarSign, color: "from-purple-500 to-pink-600" },
  ]

  const financialHighlights = [
    {
      quarter: "Dec 2025",
      revenue: "$4.2M",
      growth: "+45%",
      ebitda: "$1.1M",
      margin: "26.2%",
    },
    {
      quarter: "Nov 2025",
      revenue: "$2.9M",
      growth: "+52%",
      ebitda: "$0.7M",
      margin: "24.1%",
    },
    {
      quarter: "Oct 2025",
      revenue: "$1.9M",
      growth: "Launch",
      ebitda: "$0.4M",
      margin: "21.0%",
    },
  ]

  const reports = [
    {
      title: "Quarterly Report Q4 2025",
      description: "Comprehensive overview of our financial performance since launch and strategic initiatives",
      date: "December 30, 2025",
      type: "Quarterly Report",
      size: "2.1 MB",
    },
    {
      title: "November 2025 Performance Report",
      description: "Monthly financial results with management discussion and market analysis",
      date: "December 5, 2025",
      type: "Monthly Report",
      size: "1.5 MB",
    },
    {
      title: "Investor Presentation 2025",
      description: "Strategic vision, market opportunity, and growth roadmap presentation",
      date: "November 15, 2025",
      type: "Presentation",
      size: "4.8 MB",
    },
  ]

  const governance = [
    {
      title: "Board of Directors",
      description: "Meet our experienced board members who provide strategic oversight and governance",
      members: ["Rajesh Kumar - Chairman & Independent Director", "Dr. Priya Sharma - Independent Director"],
    },
    {
      title: "Executive Leadership",
      description: "Our management team brings decades of experience in insurance, technology, and healthcare",
      members: ["Amit Patel - CEO & Founder", "Sneha Gupta - CFO", "Vikram Singh - CTO"],
    },
    {
      title: "Compliance & Ethics",
      description: "Committed to highest standards of corporate governance and ethical business practices",
      members: ["ISO 27001 Certified", "SOC 2 Type II Compliant", "GDPR & Data Privacy Compliant"],
    },
  ]

  const announcements = [
    {
      date: "Dec 28, 2025",
      title: "Claimly Raises $30M Series A Funding",
      description:
        "Led by prominent venture capital firms to accelerate product development and market expansion across Asia-Pacific region",
      category: "Funding",
    },
    {
      date: "Dec 15, 2025",
      title: "Strategic Partnership with Major Insurance Provider",
      description:
        "Collaboration with leading insurance company to streamline claims processing for 10 million policyholders",
      category: "Partnership",
    },
    {
      date: "Nov 20, 2025",
      title: "Claimly Reaches 500K Active Users Milestone",
      description: "Rapid user adoption with 500K active users within first month of operations, exceeding projections",
      category: "Milestone",
    },
    {
      date: "Oct 20, 2025",
      title: "Claimly Officially Launches Insurance Claims Platform",
      description:
        "Revolutionary AI-powered platform goes live, offering seamless insurance claims settlement for Indian consumers",
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
              Investing in the{" "}
              <span className="bg-gradient-to-r from-[#F49446] to-[#FF6B35] bg-clip-text text-transparent">
                Future of Insurance
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Transforming a $6 trillion global insurance industry with AI-powered automation, transparency, and
              customer-first innovation
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Performance Overview</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Delivering exceptional growth and value creation since our October 2025 launch
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
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Financials Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
            id="financials"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Financial Highlights</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Strong financial performance since launch with rapid month-over-month growth
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Period</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Revenue</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">MoM Growth</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">EBITDA</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">EBITDA Margin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {financialHighlights.map((quarter, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">{quarter.quarter}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{quarter.revenue}</td>
                        <td className="px-6 py-4">
                          {quarter.growth === "Launch" ? (
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                              {quarter.growth}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-green-600">
                              <ArrowUpRight className="w-4 h-4" />
                              {quarter.growth}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{quarter.ebitda}</td>
                        <td className="px-6 py-4 text-sm font-semibold text-gray-900">{quarter.margin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Reports Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
            id="reports"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Reports & Filings</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access our latest financial reports, presentations, and performance updates
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
          </motion.div>

          {/* Governance Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-20"
            id="governance"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Corporate Governance</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Leadership excellence, transparency, and accountability in everything we do
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Latest Announcements</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Stay informed about our latest developments, partnerships, and milestones
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Investor Relations Contact</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                Have questions? Our investor relations team is here to help with financial information, reports, and
                strategic insights.
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
