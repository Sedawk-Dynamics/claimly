"use client"
import Link from "next/link"


import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Smartphone, Shield, Zap, Bell, FileCheck, Users } from "lucide-react"

export function MobileAppShowcase() {
  const features = [
    {
      icon: Zap,
      title: "Instant Claims",
      description: "Submit and track claims in real-time",
    },
    {
      icon: Shield,
      title: "Automated Verification",
      description: "Advanced fraud detection & security",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Stay updated at every step",
    },
    {
      icon: FileCheck,
      title: "Document Upload",
      description: "Easy photo & document submission",
    },
    {
      icon: Users,
      title: "For Everyone",
      description: "Policyholders & nominees",
    },
    {
      icon: Smartphone,
      title: "User Friendly",
      description: "Intuitive & simple interface",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Experience Claimly on Your <span className="text-primary">Mobile</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Download the Claimly app and settle your insurance claims anytime, anywhere with India's first automatic
              claims platform.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Mobile App Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-sm">
                {/* Gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-3xl rounded-full" />

                {/* Phone mockup */}
                <div className="relative bg-card border-8 border-foreground rounded-[3rem] shadow-2xl overflow-hidden aspect-[9/19]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground rounded-b-3xl" />
                  <div className="p-6 pt-10 h-full bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="flex flex-col h-full">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-3 flex items-center justify-center">
                          <Shield className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="font-bold text-xl">Claimly</h3>
                        <p className="text-xs text-muted-foreground">Automated Claims</p>
                      </div>

                      <div className="space-y-3 flex-1">
                        <div className="bg-background rounded-xl p-4 shadow-sm">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <FileCheck className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-muted rounded w-24 mb-1" />
                              <div className="h-2 bg-muted rounded w-16" />
                            </div>
                          </div>
                          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                            <div className="h-full bg-primary rounded-full w-3/4" />
                          </div>
                        </div>

                        <div className="bg-background rounded-xl p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                              <Zap className="w-5 h-5 text-accent" />
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-muted rounded w-32 mb-1" />
                              <div className="h-2 bg-muted rounded w-20" />
                            </div>
                          </div>
                        </div>

                        <div className="bg-background rounded-xl p-4 shadow-sm opacity-60">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                              <Bell className="w-5 h-5 text-secondary" />
                            </div>
                            <div className="flex-1">
                              <div className="h-3 bg-muted rounded w-28 mb-1" />
                              <div className="h-2 bg-muted rounded w-24" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mt-4">
                        <div className="h-12 bg-primary/10 rounded-lg" />
                        <div className="h-12 bg-accent/10 rounded-lg" />
                        <div className="h-12 bg-secondary/10 rounded-lg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features & Download Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.03 }}
                    className="group flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>

                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 shadow-md relative z-10"
                    >
                      <feature.icon className="w-5 h-5 text-primary" />
                    </motion.div>

                    <div className="relative z-10">
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-foreground">Download Now</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                    Available On
                  </span>
                </div>
               <div className="flex flex-col sm:flex-row gap-4">


                  {/* App Store */}
                  <Link
                    href="https://apps.apple.com/in/app/claimly-manage-your-claims/id6757910346"
                    target="_blank"
                  >
                    <Button className="bg-black hover:bg-black/90 text-white h-14 px-6 shadow-lg hover:scale-105 transition">

                      <svg
                        className="w-6 h-6 mr-3"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09z"/>
                      </svg>

                      <div className="text-left">
                        <div className="text-xs opacity-80">
                          Download on the
                        </div>
                        <div className="text-sm font-semibold">
                          App Store
                        </div>
                      </div>

                    </Button>
                  </Link>



                  {/* Play Store */}
                  <Link
                    href="https://play.google.com/store/apps/details?id=com.webelio.claimly"
                    target="_blank"
                  >

                    <Button className="bg-[#34A853] hover:bg-[#2c8e47] text-white h-14 px-6 shadow-lg hover:scale-105 transition">

                      <svg
                        className="w-6 h-6 mr-3"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M3.609 1.814L13.792 12 3.61 22.186A1 1 0 0 1 3 21.266V2.734a1 1 0 0 1 .609-.92z"/>
                      </svg>

                      <div className="text-left">
                        <div className="text-xs opacity-80">
                          GET IT ON
                        </div>
                        <div className="text-sm font-semibold">
                          Google Play
                        </div>
                      </div>

                    </Button>

                  </Link>



                </div>

                <p className="text-sm text-muted-foreground">
                  Launching soon on iOS 13.0+ and Android 8.0+. Be the first to experience seamless claim settlements!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
