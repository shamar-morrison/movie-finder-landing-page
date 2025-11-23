"use client"

import { motion } from "framer-motion"
import { Download, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DownloadCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-primary/10 -z-10"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Ready to Start <span className="text-primary">Watching?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of users and transform your mobile movie experience
            today. Free forever, open source, and no hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white h-16 px-8 rounded-xl text-lg gap-3 shadow-xl shadow-primary/20"
            >
              <Download className="w-6 h-6" />
              <div className="flex flex-col items-start text-xs">
                <span className="opacity-80">Download APK</span>
                <span className="text-base font-bold">Direct Download</span>
              </div>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 h-16 px-8 rounded-xl text-lg gap-3"
            >
              <Play className="w-6 h-6 fill-current" />
              <div className="flex flex-col items-start text-xs">
                <span className="opacity-80">Get it on</span>
                <span className="text-base font-bold">Google Play</span>
              </div>
            </Button>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>Version 2.0.1 • 45MB • Android 8.0+</p>
            <p className="opacity-50 mt-2">
              Movies available for download are subject to regional
              availability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
