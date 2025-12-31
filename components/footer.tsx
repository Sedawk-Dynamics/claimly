"use client"
import { Mail, MapPin } from "lucide-react"
import type React from "react"

import Image from "next/image"

export function Footer() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    if (target.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(target)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <footer id="contact" className="bg-muted/50 border-t border-border py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <Image
                src="/claimly-logo.png"
                alt="Claimly Logo"
                width={180}
                height={64}
                className="h-12 md:h-16 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              India's first automatic insurance claim settlement platform by Tech Life Invention Pvt. Ltd.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  onClick={(e) => handleSmoothScroll(e, "#features")}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  onClick={(e) => handleSmoothScroll(e, "#how-it-works")}
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  onClick={(e) => handleSmoothScroll(e, "#about")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>support@claimly.co.in</span>
              </li>
              {/* <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+91 XXX-YYY-ZZZ-A</span>
              </li> */}
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Chandigarh, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2025 Tech Life Invention Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="/privacy-policy"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
