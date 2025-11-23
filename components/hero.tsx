"use client"

import { motion } from "framer-motion"
import { Download, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhoneMockup } from "@/components/phone-mockup"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-background to-background -z-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px]"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs font-medium text-neutral-400">
                Movie Torrent Downloader
              </span>
            </div> */}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Discover. Stream. <br />
              <span className="text-primary">Download.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Your ultimate movie companion. Browse thousands of titles, watch
              trailers instantly, and download in 4K quality directly to your
              device.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8 rounded-full text-base shadow-lg shadow-primary/25 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download APK
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-neutral-800 hover:bg-neutral-900 gap-2 h-12 px-8 rounded-full text-base bg-transparent"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </Button> */}
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-foreground">
                  100k+
                </span>
                <span className="text-sm">Movies</span>
              </div>
              <div className="w-px h-10 bg-neutral-800"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-foreground">4K</span>
                <span className="text-sm">Quality</span>
              </div>
              <div className="w-px h-10 bg-neutral-800"></div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-2xl font-bold text-foreground">Free</span>
                <span className="text-sm">No Ads</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <PhoneMockup src="/images/app-hero.png" alt="App Screen" priority />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
