import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.claimly.co.in"),
  title: {
    default: "Claimly | Automated Insurance Claims Settlement Platform",
    template: "%s | Claimly",
  },
  description:
    "Claimly is India’s first automated insurance claims settlement platform delivering fast, transparent, and secure claim processing for insurers, partners, and customers.",
  generator: "Next.js",
  keywords: [
    "insurance claims settlement",
    "automated insurance claims",
    "health insurance claims India",
    "insurance technology",
    "insurtech India",
    "claim automation",
    "digital claims processing",
    "claim management platform",
    "fast insurance claims",
  ],
  authors: [{ name: "Claimly Technologies" }],
  creator: "Claimly Technologies",
  publisher: "Claimly Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.claimly.co.in",
  },
  openGraph: {
    title: "Claimly | Fast. Transparent. Automated Insurance Claims",
    description:
      "India’s first automatic insurance claim settlement platform. Experience faster approvals, transparent workflows, and secure digital claims processing.",
    url: "https://www.claimly.co.in",
    siteName: "Claimly",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/claimly-og.png",
        width: 1200,
        height: 630,
        alt: "Claimly – Automated Insurance Claims Settlement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claimly | Automated Insurance Claims Platform",
    description:
      "Fast, transparent, and secure insurance claim settlement powered by automation.",
    images: ["/images/claimly-og.png"],
  },
  icons: {
    icon: "/claimly-logo.png",
    apple: "/claimly-logo.png",
  },
  verification: {
    google: "ADD_GOOGLE_SEARCH_CONSOLE_CODE",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2563eb",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Claimly",
    url: "https://www.claimly.co.in",
    logo: "https://www.claimly.co.in/claimly-logo.png",
    description:
      "Claimly is India’s first automated insurance claims settlement platform enabling faster, transparent, and secure claim processing.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: "support@claimly.co.in",
      availableLanguage: ["English"],
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
