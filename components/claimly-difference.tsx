"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function ClaimlyDifference() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null)

  const assets = {
    // -----------------------------
    // CARD 1 — GREEN
    // -----------------------------
    card1: {
      video: "https://dapulse-res.cloudinary.com/video/upload/v1750596452/1_Flexible_yet_standardized.mp4",

      headshot: "https://i.pravatar.cc/150?img=56",

      logo: "https://dapulse-res.cloudinary.com/image/upload/v1750332191/growth-marketing/web-experience/hp-jun-25/monday-difference/diff-logo-1.png",

      title: "Flexible yet standardized",
      copy: "Claimly adapts to your workflow—custom rules, smart routing, and seamless policy integrations.",

      personTitle: "Product Lead, Claimly Partners",

      quote: "“Claimly eliminated 90% of our manual checks. The automation feels magical and extremely reliable.”",

      bg: "#00C875",

      metricValue: "6,970",
      metricText: "hours saved per month",
    },

    // -----------------------------
    // CARD 2 — PURPLE
    // -----------------------------
    card2: {
      video: "https://dapulse-res.cloudinary.com/video/upload/v1751888837/2_Products_teams_love_to_use.webm",

      headshot: "https://i.pravatar.cc/150?img=32",

      logo: "https://dapulse-res.cloudinary.com/image/upload/v1750332191/growth-marketing/web-experience/hp-jun-25/monday-difference/diff-logo-2.png",

      title: "Products teams love to use",
      copy: "Powerful tools your teams actually enjoy using—designed for clarity, speed, and collaboration.",

      personTitle: "Operations Manager, Claimly Enterprise",

      quote: "“Our entire team adopted Claimly in days. It feels modern, fast and removes all confusion from claims.”",

      bg: "#6161FE",

      metricValue: "+15%",
      metricText: "conversion rate increase",
    },

    // -----------------------------
    // CARD 3 — ORANGE
    // -----------------------------
    card3: {
      video: "https://dapulse-res.cloudinary.com/video/upload/v1752492882/3_Fast_time_to_value_opt2.mp4",

      headshot: "https://i.pravatar.cc/150?img=12",

      logo: "https://dapulse-res.cloudinary.com/image/upload/v1750332191/growth-marketing/web-experience/hp-jun-25/monday-difference/diff-logo-3.png",

      title: "Fast time to value",
      copy: "Start seeing results instantly—Claimly activates fast with plug-and-play integrations.",

      personTitle: "Director of Claims, Claimly Network",

      quote: "“The onboarding was shockingly fast. Claimly started delivering measurable impact on day one.”",

      bg: "#FF7575",

      metricValue: "28,000",
      metricText: "manual actions saved per month",
    },
  }

  return (
    <section className="hidden md:block py-28 bg-gradient-to-b from-[#D9E3FD] to-[#E1EAFE]">
      {/* ---------------- HEADING (CENTERED) ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 container mx-auto px-4"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">The Claimly Difference</h2>
      </motion.div>

      {/* ---------------- FULL WIDTH CARDS ---------------- */}
      <div className="w-full space-y-12 px-17">
        <FlipCard
          id={1}
          flippedCard={flippedCard}
          setFlippedCard={setFlippedCard}
          data={assets.card1}
          videoOnRight={false}
        />

        <FlipCard
          id={2}
          flippedCard={flippedCard}
          setFlippedCard={setFlippedCard}
          data={assets.card2}
          videoOnRight={true}
        />

        <FlipCard
          id={3}
          flippedCard={flippedCard}
          setFlippedCard={setFlippedCard}
          data={assets.card3}
          videoOnRight={false}
        />
      </div>
    </section>
  )
}

// =================================================
// FLIP CARD COMPONENT
// =================================================

function FlipCard({ id, flippedCard, setFlippedCard, data, videoOnRight }) {
  const isFlipped = flippedCard === id

  return (
    <motion.div
      className="cursor-pointer w-full"
      onHoverStart={() => setFlippedCard(id)}
      onHoverEnd={() => setFlippedCard(null)}
    >
      <motion.div
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative w-full [transform-style:preserve-3d] h-[280px]"
      >
        {/* ---------------- FRONT ---------------- */}
        <div
          className="absolute inset-0 h-[280px] grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          {!videoOnRight ? (
            <>
              {/* Video Left */}
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <video src={data.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>

              {/* Text Right — NEW 2-COLUMN LAYOUT */}
              <div
                className="md:col-span-2 rounded-3xl p-10 shadow-xl flex items-center"
                style={{ background: data.bg }}
              >
                <div className="grid grid-cols-2 w-full">
                  {/* Title */}
                  <h3 className="text-4xl font-bold text-black leading-tight pl-8">{data.title}</h3>

                  {/* Paragraph */}
                  <p className="text-xl text-black opacity-80 leading-relaxed pr-8">{data.copy}</p>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Text Left — NEW 2-COLUMN LAYOUT */}
              <div
                className="md:col-span-2 rounded-3xl p-10 shadow-xl flex items-center"
                style={{ background: data.bg }}
              >
                <div className="grid grid-cols-2 w-full">
                  {/* Title */}
                  <h3 className="text-4xl font-bold text-black leading-tight pl-8">{data.title}</h3>

                  {/* Paragraph */}
                  <p className="text-xl text-black opacity-80 leading-relaxed pr-8">{data.copy}</p>
                </div>
              </div>

              {/* Video Right */}
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <video src={data.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
            </>
          )}
        </div>

        {/* ---------------- BACK ---------------- */}
        <div
          className="absolute inset-0 h-[280px] grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
        >
          {/* Testimonial */}
          <div className="md:col-span-2 h-full rounded-3xl bg-[#F3F6FF] p-8 flex flex-col justify-between shadow">
            <div className="flex items-center gap-4">
              <img
                src={data.headshot || "/placeholder.svg"}
                alt="headshot"
                className="w-12 h-12 rounded-full object-cover shadow"
              />
              <p className="text-gray-700 text-sm md:text-base font-medium">{data.personTitle}</p>
            </div>

            <p className="text-gray-800 text-lg md:text-xl leading-relaxed mt-4">{data.quote}</p>

            {/* <div className="mt-4">
              <img
                src={data.logo || "/placeholder.svg"}
                className="h-10 md:h-12 object-contain"
                alt="company logo"
              />
            </div> */}
          </div>

          {/* Metrics */}
          <div
            className="rounded-3xl shadow flex flex-col items-center justify-center text-white"
            style={{ background: data.bg }}
          >
            <h3 className="text-4xl font-bold mb-2">{data.metricValue}</h3>
            <p className="text-center text-lg opacity-90 leading-tight">{data.metricText}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
