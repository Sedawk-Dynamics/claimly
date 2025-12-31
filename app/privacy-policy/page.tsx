import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Claimly",
  description: "Privacy Policy for Claimly - Automated Insurance Claims Settlement Platform",
}

export default function PrivacyPolicyPage() {
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
              <span className="text-foreground/70">Privacy Policy</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6 tracking-tight">Privacy Policy</h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="inline-flex items-center gap-2 text-base">
                <span className="font-semibold text-foreground">Effective Date:</span>
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>
          </div>

          {/* Content */}
          {/* Enhanced visual hierarchy with improved cards and section styling */}
          <div className="bg-card rounded-xl border border-border shadow-sm p-10 md:p-14 space-y-10">
            {/* Introduction */}
            <section className="space-y-5">
              <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-[#F49446] p-6 rounded-r-lg">
                <p className="text-foreground leading-relaxed text-base">
                  This Privacy Policy governs the manner in which Tech Life Invention Pvt. Ltd ("we," "us," or "our")
                  collects, uses, maintains, and discloses information collected from users of the Claimly mobile
                  application (the "Application"). This policy applies to the Application and all products and services
                  offered by Tech Life Invention Pvt. Ltd.
                </p>
              </div>
            </section>

            {/* Information Collection */}
            <section className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                  <h2 className="text-3xl font-bold text-foreground">Information Collection and Use</h2>
                </div>

                <div className="space-y-8">
                  <div className="border-l-2 border-muted pl-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">User-Provided Information</h3>
                    <p className="text-foreground/90 leading-relaxed mb-4 text-base">
                      When you download, register, or use the Application, we may collect information that you provide
                      directly to us. While registration is optional, certain features may require you to create an
                      account to access full functionality.
                    </p>
                    <p className="text-foreground/90 leading-relaxed text-base">
                      The information we collect may include your name, email address, phone number, insurance policy
                      details, and claim-related documentation. We use this information to provide, maintain, and
                      improve our services, communicate with you about your claims, and send you important notifications
                      and updates.
                    </p>
                  </div>

                  <div className="border-l-2 border-muted pl-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Automatically Collected Information</h3>
                    <p className="text-foreground/90 leading-relaxed text-base">
                      The Application may automatically collect certain technical information, including but not limited
                      to: device type and model, unique device identifiers, IP address, operating system version, mobile
                      network information, and usage statistics. This data helps us understand how users interact with
                      our Application and allows us to improve performance and user experience.
                    </p>
                  </div>

                  <div className="border-l-2 border-muted pl-6">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Location Information</h3>
                    <p className="text-foreground/90 leading-relaxed text-base">
                      The Application does not collect precise real-time location information from your mobile device.
                      However, we may collect approximate location data based on your IP address to provide
                      region-specific services and comply with local regulations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Third Party Access */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Third-Party Access and Disclosure</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-4">
                We may share your information with third parties only in the following circumstances:
              </p>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-3 text-foreground/90 text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-[#F49446] mt-1">•</span>
                    <span>
                      <strong>Legal Compliance:</strong> When required by law, such as to comply with a subpoena, court
                      order, or similar legal process
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F49446] mt-1">•</span>
                    <span>
                      <strong>Protection of Rights:</strong> When we believe in good faith that disclosure is necessary
                      to protect our rights, your safety, or the safety of others, investigate fraud, or respond to a
                      government request
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F49446] mt-1">•</span>
                    <span>
                      <strong>Business Transfers:</strong> In connection with, or during negotiations of, any merger,
                      sale of company assets, financing, or acquisition of all or a portion of our business
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#F49446] mt-1">•</span>
                    <span>
                      <strong>Service Providers:</strong> With trusted third-party service providers who assist us in
                      operating our Application, conducting our business, or servicing you, provided they agree to keep
                      this information confidential
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Opt-Out Rights */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Your Rights and Choices</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-4">
                You have the following rights regarding your personal information:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/10 p-6 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-foreground mb-2">Access and Correction</h4>
                  <p className="text-sm text-foreground/80">
                    You may access and update your personal information through your account settings.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-foreground mb-2">Data Deletion</h4>
                  <p className="text-sm text-foreground/80">
                    You may request deletion of your account and personal data by contacting us.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/10 p-6 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-foreground mb-2">Opt-Out</h4>
                  <p className="text-sm text-foreground/80">
                    You can opt out of marketing communications by following the unsubscribe instructions in our emails.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/10 p-6 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-foreground mb-2">Uninstall</h4>
                  <p className="text-sm text-foreground/80">
                    You may cease all data collection by uninstalling the Application from your device.
                  </p>
                </div>
              </div>
            </section>

            {/* Data Retention */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Data Retention Policy</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base">
                We retain your personal information for as long as necessary to provide you with our services and as
                required by applicable law. When you request deletion of your data, we will take reasonable steps to
                remove your information from our active databases within 30 days, unless we are required to retain it
                for legal, regulatory, or legitimate business purposes.
              </p>
            </section>

            {/* Security */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Security Measures</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-4">
                We are committed to protecting the confidentiality and security of your personal information. We
                implement industry-standard security measures including:
              </p>
              <div className="bg-muted/30 rounded-lg p-6">
                <ul className="space-y-2 text-foreground/90 text-base">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Encryption of data in transit and at rest</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Regular security audits and vulnerability assessments</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Restricted access to personal information on a need-to-know basis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500">✓</span>
                    <span>Secure data storage infrastructure with backup and recovery systems</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Children's Privacy */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Children's Privacy</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base">
                The Application is not intended for use by children under the age of 18. We do not knowingly collect
                personal information from children under 18. If we become aware that we have collected personal
                information from a child under 18, we will take steps to delete such information promptly.
              </p>
            </section>

            {/* Changes to Privacy Policy */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Changes to This Privacy Policy</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base">
                We reserve the right to update or modify this Privacy Policy at any time. When we make changes, we will
                update the "Last updated" date at the top of this page. We encourage you to review this Privacy Policy
                periodically to stay informed about how we are protecting your information. Your continued use of the
                Application after any modifications indicates your acceptance of the updated Privacy Policy.
              </p>
            </section>

            {/* Contact Us */}
            <section className="space-y-6 pt-8 border-t-2 border-muted">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-1 w-12 bg-[#F49446] rounded-full"></div>
                <h2 className="text-3xl font-bold text-foreground">Contact Information</h2>
              </div>
              <p className="text-foreground/90 leading-relaxed text-base mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                please contact us:
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
