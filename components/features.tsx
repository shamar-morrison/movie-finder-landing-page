"use client"

import { motion } from "framer-motion"
import { PhoneMockup } from "@/components/phone-mockup"

const FeatureSection = ({
  title,
  description,
  features,
  imageSrc,
  imageAlt,
  reversed = false,
}: {
  title: string
  description: string
  features: string[]
  imageSrc: string
  imageAlt: string
  reversed?: boolean
}) => {
  return (
    <div className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div
          className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${reversed ? "lg:grid-flow-dense" : ""}`}
        >
          <motion.div
            initial={{ opacity: 0, x: reversed ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={reversed ? "lg:col-start-2" : ""}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="space-y-4"
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    show: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-lg">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: reversed ? -20 : 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex justify-center ${reversed ? "lg:col-start-1" : ""}`}
          >
            <PhoneMockup src={imageSrc} alt={imageAlt} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="relative bg-neutral-950/50">
      <FeatureSection
        title="Explore Movies Across Every Genre"
        description="Dive into an extensive collection of movies ranging from action-packed thrillers to heartwarming comedies. Browse by genre, view ratings, and discover your next favorite film with our intuitive interface."
        features={[
          "Browse extensive library across 15+ genres",
          "Instant trailer streaming with one tap",
          "Detailed movie information and IMDb ratings",
          "Curated lists and trending movies",
        ]}
        imageSrc="/images/app-home.png"
        imageAlt="Genre Discovery"
      />

      <FeatureSection
        title="Cinema-Quality Downloads"
        description="Experience movies the way they were meant to be seen. Choose from multiple quality formats including crystal clear 4K and immersive 3D. Download directly to your device for offline viewing anytime, anywhere."
        features={[
          "Multiple formats: 720p, 1080p, 4K, and 3D",
          "Fast torrent download speeds",
          "Background downloading support",
          "Built-in media player for preview",
        ]}
        imageSrc="/images/app-details.png"
        imageAlt="Quality Downloads"
        reversed
      />

      <FeatureSection
        title="Find Exactly What You're Looking For"
        description="Our advanced search engine helps you pinpoint the perfect movie in seconds. Filter by quality, genre, year, and more to narrow down your choices and find hidden gems."
        features={[
          "Smart search with instant results",
          "Advanced filters for Quality and Genre",
          "Clean, distraction-free search interface",
          "Search history and saved queries",
        ]}
        imageSrc="/images/app-search.png"
        imageAlt="Search and Filter"
      />
    </section>
  )
}
