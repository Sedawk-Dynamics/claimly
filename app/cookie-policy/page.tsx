import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Cookie Policy | Claimly",
  description: "Cookie Policy for Claimly - Automated Insurance Claims Settlement Platform",
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <a href="/" className="hover:text-[#F49446] transition-colors">
                Home
              </a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground/70">Cookie Policy</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">Cookie Policy</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="inline-flex items-center gap-2 text-base">
                <span className="font-semibold text-foreground">Effective Date:</span>
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="bg-card rounded-xl border border-border shadow-sm p-10 md:p-14 space-y-10">
            {/* Introduction */}
            <section className="space-y-5">
              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-[#F49446] p-6 rounded-r-lg">
                <p className="text-foreground leading-relaxed text-base">
                  This Cookie Policy explains how Tech Life Invention Pvt. Ltd ("we," "us," or "our") uses cookies and
                  similar tracking technologies in connection with the Claimly mobile application and website
                  (collectively, the "Services"). This policy provides you with clear and comprehensive information
                  about the cookies we use and the purposes for using them.
                </p>
              </div>
            </section>

            {/* What are cookies */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Understanding Cookies</h2>
              </div>
              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed text-base">
                  Cookies are small text files containing a string of characters that are stored on your device
                  (computer, smartphone, or tablet) when you visit a website or use a mobile application. They serve
                  various purposes and help us provide you with a better, faster, and safer experience.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-900/10 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-foreground mb-3">Key Functions of Cookies:</h4>
                  <ul className="space-y-2 text-foreground/90 text-base">
                    <li className="flex items-center gap-3">
                      <span className="text-[#F49446]">✓</span>
                      <span>Remember your preferences and settings</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F49446]">✓</span>
                      <span>Enable authentication and security features</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F49446]">✓</span>
                      <span>Analyze how you use our Services to improve performance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-[#F49446]">✓</span>
                      <span>Provide personalized content and recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Types of cookies we use */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Types of Cookies We Use</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-900/10 rounded-xl p-8 border-2 border-green-200 dark:border-green-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">Essential Cookies</h3>
                      <p className="text-foreground/90 leading-relaxed text-base mb-3">
                        These cookies are strictly necessary for the Services to function properly and cannot be
                        disabled in our systems.
                      </p>
                      <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 mt-3">
                        <p className="text-sm font-semibold text-foreground/80 mb-2">Examples:</p>
                        <ul className="text-sm text-foreground/80 space-y-1">
                          <li>• Authentication and security</li>
                          <li>• Network management and load balancing</li>
                          <li>• Remembering items in your shopping cart</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-900/10 rounded-xl p-8 border-2 border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">Performance Cookies</h3>
                      <p className="text-foreground/90 leading-relaxed text-base mb-3">
                        These cookies collect aggregated information about how visitors use our Services, helping us
                        identify areas for improvement.
                      </p>
                      <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 mt-3">
                        <p className="text-sm font-semibold text-foreground/80 mb-2">Data Collected:</p>
                        <ul className="text-sm text-foreground/80 space-y-1">
                          <li>• Most visited pages and features</li>
                          <li>• Error messages encountered</li>
                          <li>• Time spent on pages</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-900/10 rounded-xl p-8 border-2 border-purple-200 dark:border-purple-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">Functionality Cookies</h3>
                      <p className="text-foreground/90 leading-relaxed text-base mb-3">
                        These cookies enable enhanced functionality and personalization based on your interactions with
                        our Services.
                      </p>
                      <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 mt-3">
                        <p className="text-sm font-semibold text-foreground/80 mb-2">Features Enabled:</p>
                        <ul className="text-sm text-foreground/80 space-y-1">
                          <li>• Language and region preferences</li>
                          <li>• Username and profile settings</li>
                          <li>• Customized content display</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-900/10 rounded-xl p-8 border-2 border-orange-200 dark:border-orange-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">Analytics Cookies</h3>
                      <p className="text-foreground/90 leading-relaxed text-base mb-3">
                        We use analytics cookies to understand usage patterns and improve our Services based on
                        data-driven insights.
                      </p>
                      <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 mt-3">
                        <p className="text-sm font-semibold text-foreground/80 mb-2">Analytics Tools:</p>
                        <ul className="text-sm text-foreground/80 space-y-1">
                          <li>• Google Analytics (anonymized data)</li>
                          <li>• Firebase Analytics</li>
                          <li>• Custom analytics platform</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-900/10 rounded-xl p-8 border-2 border-red-200 dark:border-red-800">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3">Marketing Cookies</h3>
                      <p className="text-foreground/90 leading-relaxed text-base mb-3">
                        These cookies track your online activity to help us deliver more relevant advertising and
                        measure campaign effectiveness.
                      </p>
                      <div className="bg-white/50 dark:bg-black/20 rounded-lg p-4 mt-3">
                        <p className="text-sm font-semibold text-foreground/80 mb-2">Purpose:</p>
                        <ul className="text-sm text-foreground/80 space-y-1">
                          <li>• Display relevant advertisements</li>
                          <li>• Limit ad frequency</li>
                          <li>• Measure advertising performance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Third-party cookies */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Third-Party Cookies and Service Providers</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-4">
                We partner with trusted third-party service providers who may set cookies on your device when you use
                our Services. These providers operate under their own privacy policies and cookie policies.
              </p>
              <div className="bg-muted/30 rounded-xl p-8 border border-muted">
                <h3 className="text-xl font-semibold text-foreground mb-4">Our Service Providers:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
                    <p className="text-sm text-foreground/80 mb-3">Website analytics and performance monitoring</p>
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#F49446] hover:underline flex items-center gap-1"
                    >
                      View Privacy Policy <span>↗</span>
                    </a>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Firebase</h4>
                    <p className="text-sm text-foreground/80 mb-3">App analytics and crash reporting</p>
                    <a
                      href="https://firebase.google.com/support/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#F49446] hover:underline flex items-center gap-1"
                    >
                      View Privacy Policy <span>↗</span>
                    </a>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Advertising Partners</h4>
                    <p className="text-sm text-foreground/80 mb-3">Delivering relevant advertisements</p>
                    <span className="text-sm text-foreground/60">Various providers</span>
                  </div>
                  <div className="bg-card p-6 rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">Social Media Platforms</h4>
                    <p className="text-sm text-foreground/80 mb-3">Social sharing and integration features</p>
                    <span className="text-sm text-foreground/60">Facebook, Twitter, LinkedIn</span>
                  </div>
                </div>
              </div>
            </section>

            {/* How to manage cookies */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Managing Your Cookie Preferences</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-4">
                You have control over which cookies you accept. However, please note that limiting cookies may impact
                your experience and some features may not function properly.
              </p>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-900/10 border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Browser-Specific Instructions</h3>
                <div className="space-y-6">
                  <div className="bg-white/70 dark:bg-black/30 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        C
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Google Chrome</h4>
                    </div>
                    <p className="text-foreground/80 text-sm">
                      Settings → Privacy and security → Cookies and other site data → Manage cookies
                    </p>
                  </div>

                  <div className="bg-white/70 dark:bg-black/30 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                        F
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Mozilla Firefox</h4>
                    </div>
                    <p className="text-foreground/80 text-sm">
                      Settings → Privacy & Security → Cookies and Site Data → Manage Data
                    </p>
                  </div>

                  <div className="bg-white/70 dark:bg-black/30 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold">
                        S
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Safari</h4>
                    </div>
                    <p className="text-foreground/80 text-sm">
                      Preferences → Privacy → Manage Website Data → Remove cookies
                    </p>
                  </div>

                  <div className="bg-white/70 dark:bg-black/30 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                        E
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Microsoft Edge</h4>
                    </div>
                    <p className="text-foreground/80 text-sm">
                      Settings → Privacy, search, and services → Cookies and site permissions
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Mobile applications */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Mobile Device Settings</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-4">
                For mobile applications, you can manage tracking and data collection through your device settings:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-950/20 dark:to-slate-900/10 p-8 rounded-lg border-2 border-gray-300 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-foreground mb-4">iOS Devices</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#F49446] text-xl">📱</span>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Tracking Settings</p>
                        <p className="text-sm text-foreground/80">Settings → Privacy → Tracking</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#F49446] text-xl">🔒</span>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Advertising</p>
                        <p className="text-sm text-foreground/80">
                          Settings → Privacy → Apple Advertising → Limit Ad Tracking
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/10 p-8 rounded-lg border-2 border-green-300 dark:border-green-700">
                  <h3 className="text-xl font-bold text-foreground mb-4">Android Devices</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-[#F49446] text-xl">📱</span>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Ad Settings</p>
                        <p className="text-sm text-foreground/80">Settings → Google → Ads</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-[#F49446] text-xl">🔒</span>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Reset Advertising ID</p>
                        <p className="text-sm text-foreground/80">Settings → Google → Ads → Reset advertising ID</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Do Not Track signals */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Do Not Track (DNT) Signals</h2>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <p className="text-foreground/90 leading-relaxed text-base">
                  Some web browsers offer a "Do Not Track" (DNT) feature that signals to websites that you do not want
                  your online activity to be tracked. Currently, there is no industry-standard for recognizing or
                  responding to DNT signals. As such, our Services do not currently respond to DNT browser signals.
                  However, you can still manage cookies through your browser settings as described above.
                </p>
              </div>
            </section>

            {/* Changes to this policy */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Updates to This Cookie Policy</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base">
                We may update this Cookie Policy periodically to reflect changes in our practices, technologies, legal
                requirements, or for other operational reasons. We will notify you of any material changes by posting
                the updated policy on this page with a revised "Last updated" date. We encourage you to review this
                policy regularly to stay informed about how we use cookies.
              </p>
            </section>

            {/* Contact us */}
            <section className="space-y-6 pt-8 border-t-2 border-muted">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-6">
                If you have any questions, concerns, or requests regarding our use of cookies or this Cookie Policy,
                please don't hesitate to contact us:
              </p>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/10 rounded-xl p-8 border border-orange-200 dark:border-orange-800">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-foreground/70 mb-1">Company Name</p>
                    <p className="text-lg font-semibold text-foreground">Tech Life Invention Pvt. Ltd</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/70 mb-1">Email Address</p>
                    <a
                      href="mailto:support@claimly.co.in"
                      className="text-lg font-semibold text-[#F49446] hover:underline"
                    >
                      support@claimly.co.in
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/70 mb-1">Location</p>
                    <p className="text-lg font-semibold text-foreground">Chandigarh, India</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground/70 mb-1">Support Hours</p>
                    <p className="text-lg font-semibold text-foreground">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
