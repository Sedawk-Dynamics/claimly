import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Terms & Conditions | Claimly",
  description: "Terms & Conditions for Claimly - Automated Insurance Claims Settlement Platform",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      {/* Improved spacing and typography for better readability */}
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
              <a href="/" className="hover:text-[#F49446] transition-colors">
                Home
              </a>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground/70">Terms & Conditions</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">Terms & Conditions</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="inline-flex items-center gap-2 text-base">
                <span className="font-semibold text-foreground">Effective Date:</span>
                January 15, 2025
              </span>
            </div>
          </div>

          {/* Content */}
          {/* Enhanced visual hierarchy with improved cards and section styling */}
          <div className="bg-card rounded-xl border border-border shadow-sm p-10 md:p-14 space-y-10">
            {/* Introduction */}
            <section className="space-y-5">
              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-[#F49446] p-6 rounded-r-lg">
                <p className="text-foreground leading-relaxed text-base mb-4">
                  These Terms and Conditions ("Terms") govern your access to and use of the Claimly mobile application
                  (the "Application") developed and operated by Tech Life Invention Pvt. Ltd (the "Service Provider,"
                  "we," "us," or "our").
                </p>
                <p className="text-foreground leading-relaxed text-base">
                  By downloading, installing, accessing, or using the Application, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms. If you do not agree with these Terms, you must not
                  use the Application.
                </p>
              </div>
            </section>

            {/* License and Restrictions */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">License Grant and Restrictions</h2>
              </div>
              <div className="space-y-6">
                <div className="border-l-2 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Limited License</h3>
                  <p className="text-foreground/90 leading-relaxed text-base">
                    Subject to your compliance with these Terms, we grant you a limited, non-exclusive,
                    non-transferable, revocable license to access and use the Application for your personal,
                    non-commercial use.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Prohibited Activities</h3>
                  <p className="text-foreground/90 leading-relaxed text-base mb-4">
                    You agree not to engage in any of the following prohibited activities:
                  </p>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <ul className="space-y-3 text-foreground/90 text-base">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Copy, modify, distribute, sell, or lease any part of the Application</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Reverse engineer, decompile, or attempt to extract the source code</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Create derivative works or translations of the Application</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Remove, alter, or obscure any proprietary notices or trademarks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 mt-1">✗</span>
                        <span>Use the Application for any unlawful or fraudulent purpose</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Intellectual Property Rights</h3>
                  <p className="text-foreground/90 leading-relaxed text-base">
                    All trademarks, copyrights, database rights, patents, and other intellectual property rights related
                    to the Application and its content remain the exclusive property of Tech Life Invention Pvt. Ltd.
                    You are granted no rights or licenses except as expressly set forth in these Terms.
                  </p>
                </div>
              </div>
            </section>

            {/* Service Modifications */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Service Modifications and Fees</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-4">
                We are committed to providing you with the best possible experience. To achieve this, we reserve the
                right to:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/10 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-foreground mb-2">Modify Services</h4>
                  <p className="text-sm text-foreground/80">
                    Update, modify, or discontinue any feature or functionality of the Application at our discretion.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-foreground mb-2">Introduce Fees</h4>
                  <p className="text-sm text-foreground/80">
                    Charge fees for certain services or features, with prior notice and clear disclosure.
                  </p>
                </div>
              </div>
            </section>

            {/* User Responsibilities */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">User Responsibilities</h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Account Security</h3>
                  <p className="text-foreground/90 leading-relaxed text-base">
                    You are responsible for maintaining the confidentiality of your account credentials and for all
                    activities that occur under your account. You must immediately notify us of any unauthorized use of
                    your account.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Device Security</h3>
                  <p className="text-foreground/90 leading-relaxed text-base mb-4">
                    You are responsible for maintaining the security of your mobile device. We strongly advise against:
                  </p>
                  <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-200 dark:border-red-800">
                    <ul className="space-y-2 text-foreground/90 text-base">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">⚠</span>
                        <span>
                          <strong>Jailbreaking or Rooting:</strong> Removing software restrictions on your device can
                          expose it to security vulnerabilities and may cause the Application to malfunction.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Accurate Information</h3>
                  <p className="text-foreground/90 leading-relaxed text-base">
                    You agree to provide accurate, current, and complete information when using the Application,
                    particularly when submitting insurance claims. Providing false or misleading information may result
                    in account termination and legal consequences.
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Services */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Third-Party Services and Links</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-4">
                The Application integrates with third-party services to enhance functionality. These services are
                governed by their respective Terms and Conditions:
              </p>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://policies.google.com/terms"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F49446] hover:underline font-medium flex items-center gap-2"
                    >
                      Google Play Services
                      <span className="text-xs">↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://firebase.google.com/terms/analytics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F49446] hover:underline font-medium flex items-center gap-2"
                    >
                      Google Analytics for Firebase
                      <span className="text-xs">↗</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://firebase.google.com/terms/crashlytics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#F49446] hover:underline font-medium flex items-center gap-2"
                    >
                      Firebase Crashlytics
                      <span className="text-xs">↗</span>
                    </a>
                  </li>
                </ul>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mt-4">
                We are not responsible for the content, privacy policies, or practices of third-party services. Your use
                of third-party services is at your own risk.
              </p>
            </section>

            {/* Limitations of Liability */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Limitations of Liability and Disclaimers</h2>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">"AS IS" Service</h3>
                <p className="text-foreground/90 leading-relaxed text-base">
                  The Application is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind,
                  either express or implied, including but not limited to warranties of merchantability, fitness for a
                  particular purpose, or non-infringement.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed text-base">We do not guarantee that:</p>
                <div className="bg-muted/30 rounded-lg p-6">
                  <ul className="space-y-3 text-foreground/90 text-base">
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground mt-1">○</span>
                      <span>The Application will be error-free, secure, or uninterrupted</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground mt-1">○</span>
                      <span>Defects will be corrected promptly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground mt-1">○</span>
                      <span>The Application will be compatible with all devices and operating systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-muted-foreground mt-1">○</span>
                      <span>Information provided through the Application is accurate or complete</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-l-2 border-muted pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Internet Connectivity</h3>
                <p className="text-foreground/90 leading-relaxed text-base">
                  The Application requires an active internet connection (Wi-Fi or mobile data). We are not responsible
                  for service disruptions due to connectivity issues or data charges incurred from your mobile network
                  provider. If you use the Application outside your home territory without disabling data roaming, you
                  are responsible for any roaming charges.
                </p>
              </div>

              <div className="border-l-2 border-muted pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Device Battery and Maintenance</h3>
                <p className="text-foreground/90 leading-relaxed text-base">
                  You are responsible for ensuring your device is charged and maintained. We cannot be held responsible
                  if you are unable to access the Application due to a depleted battery or device malfunction.
                </p>
              </div>
            </section>

            {/* Updates and Termination */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Application Updates and Termination</h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Updates</h3>
                  <p className="text-foreground/90 leading-relaxed text-base">
                    We may release updates to improve functionality, security, or compatibility. While we do not
                    guarantee continuous updates, you agree to accept updates when offered. Failure to update may result
                    in reduced functionality or security vulnerabilities.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Service Termination</h3>
                  <p className="text-foreground/90 leading-relaxed text-base mb-4">
                    We reserve the right to terminate or suspend the Application at any time without prior notice. Upon
                    termination:
                  </p>
                  <div className="bg-muted/30 rounded-lg p-6">
                    <ul className="space-y-2 text-foreground/90 text-base">
                      <li className="flex items-center gap-3">
                        <span className="text-[#F49446]">•</span>
                        <span>All rights and licenses granted to you will immediately cease</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="text-[#F49446]">•</span>
                        <span>You must immediately cease using the Application and delete it from your device</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Governing Law and Dispute Resolution</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base">
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes
                arising from or relating to these Terms or your use of the Application shall be subject to the exclusive
                jurisdiction of the courts located in Chandigarh, India.
              </p>
            </section>

            {/* Changes to Terms */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Changes to These Terms</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base">
                We may update these Terms from time to time to reflect changes in our practices, legal requirements, or
                for other operational reasons. We will notify you of material changes by posting the updated Terms
                within the Application or by other reasonable means. Your continued use of the Application after such
                changes constitutes your acceptance of the updated Terms.
              </p>
            </section>

            {/* Contact Us */}
            <section className="space-y-6 pt-8 border-t-2 border-muted">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-6">
                If you have any questions, concerns, or feedback regarding these Terms and Conditions, please contact
                us:
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
