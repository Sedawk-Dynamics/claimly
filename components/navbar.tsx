"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      if (isHomePage) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
          setIsMobileMenuOpen(false)
        }
      } else {
        setIsMobileMenuOpen(false)
      }
    } else {
      setIsMobileMenuOpen(false)
    }
  }

  const handleMobileClick = (href: string) => {
    if (isHomePage && href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const NavItem = ({ label, href }: { label: string; href: string }) => {
    const finalHref = href.startsWith("#") && !isHomePage ? `/${href}` : href

    return (
      <motion.a
        href={finalHref}
        onClick={(e) => handleSmoothScroll(e, href)}
        className="relative text-lg font-semibold transition-colors group pointer-events-auto cursor-pointer whitespace-nowrap text-[#1a1a1a]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <span className="relative z-10 hover:text-[#F49446] transition-all duration-200">{label}</span>
      </motion.a>
    )
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-start"
          >
            <Link href="/">
              <Image
                src="/claimly-logo.png"
                alt="Claimly Logo"
                width={180}
                height={64}
                className="h-12 md:h-16 w-auto cursor-pointer"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center justify-center gap-8">
            <NavItem label="Features" href="#features" />
            <NavItem label="How It Works" href="#how-it-works" />
            <NavItem label="USP" href="/usp" />
            <NavItem label="About Us" href="#about" />
            <NavItem label="Investors" href="/investors" />
            <NavItem label="Careers" href="/careers" />
            <NavItem label="Contact" href="/contact" />
          </div>

          {/* Buttons - Right */}
          <div className="hidden md:flex items-center justify-end gap-3">
            {/* Android Download Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="https://play.google.com/store/apps/details?id=com.webelio.claimly"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="relative overflow-hidden group pointer-events-auto border-gray-300 hover:border-green-600 hover:bg-green-50 transition-all duration-300 bg-transparent"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                        className="text-green-600 group-hover:text-green-700 transition-colors"
                      />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-[10px] text-gray-600 leading-none">GET IT ON</span>
                      <span className="text-sm font-semibold text-gray-900 leading-none">Google Play</span>
                    </div>
                  </div>
                </Button>
              </a>
            </motion.div>

            {/* iOS Download Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto"
              >
                <Button
                  size="sm"
                  className="relative overflow-hidden bg-black hover:bg-gray-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 pointer-events-auto border-0"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                    </svg>
                    <div className="flex flex-col items-start">
                      <span className="text-[10px] text-gray-300 leading-none">Download on the</span>
                      <span className="text-sm font-semibold text-white leading-none">App Store</span>
                    </div>
                  </div>
                </Button>
              </a>
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-black rounded-lg opacity-0 blur-lg pointer-events-none"
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-end">
            <button
              className="text-foreground p-2 touch-manipulation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-2 max-h-[70vh] overflow-y-auto">
              <Link href={isHomePage ? "#features" : "/#features"} onClick={() => handleMobileClick("#features")}>
                <motion.div
                  className="text-base font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer text-[#1a1a1a] hover:text-[#F49446] touch-manipulation"
                  whileHover={{ x: 5, backgroundColor: "rgba(244, 148, 70, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  Features
                </motion.div>
              </Link>
              <Link
                href={isHomePage ? "#how-it-works" : "/#how-it-works"}
                onClick={() => handleMobileClick("#how-it-works")}
              >
                <motion.div
                  className="text-base font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer text-[#1a1a1a] hover:text-[#F49446] touch-manipulation"
                  whileHover={{ x: 5, backgroundColor: "rgba(244, 148, 70, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  How It Works
                </motion.div>
              </Link>
              <Link href="/usp" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div
                  className="text-base font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer w-full text-[#1a1a1a] hover:text-[#F49446] touch-manipulation"
                  whileHover={{ x: 5, backgroundColor: "rgba(244, 148, 70, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  USP
                </motion.div>
              </Link>
              <Link href={isHomePage ? "#about" : "/#about"} onClick={() => handleMobileClick("#about")}>
                <motion.div
                  className="text-base font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer text-[#1a1a1a] hover:text-[#F49446] touch-manipulation"
                  whileHover={{ x: 5, backgroundColor: "rgba(244, 148, 70, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  About Us
                </motion.div>
              </Link>
              <Link href="/investors" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div
                  className="text-base font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer w-full text-[#1a1a1a] hover:text-[#F49446] touch-manipulation"
                  whileHover={{ x: 5, backgroundColor: "rgba(244, 148, 70, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  Investors
                </motion.div>
              </Link>
              <Link href="/careers" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div
                  className="text-base font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer w-full text-[#1a1a1a] hover:text-[#F49446] touch-manipulation"
                  whileHover={{ x: 5, backgroundColor: "rgba(244, 148, 70, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  Careers
                </motion.div>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <motion.div
                  className="text-base font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer w-full text-[#1a1a1a] hover:text-[#F49446] touch-manipulation"
                  whileHover={{ x: 5, backgroundColor: "rgba(244, 148, 70, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  Contact
                </motion.div>
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-border mt-2">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="block">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full border-gray-300 hover:border-green-600 hover:bg-green-50 bg-transparent touch-manipulation"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
                          className="text-green-600"
                        />
                      </svg>
                      Download on Google Play
                    </Button>
                  </a>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="lg" className="w-full bg-black hover:bg-gray-800 touch-manipulation">
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                      </svg>
                      Download on App Store
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
