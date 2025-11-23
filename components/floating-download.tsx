"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingDownload() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const downloadSection = document.getElementById("download")
      const isScrolled = window.scrollY > 500

      if (!downloadSection) {
        setIsVisible(isScrolled)
        return
      }

      const rect = downloadSection.getBoundingClientRect()
      // Check if download section is in viewport
      const isFooterVisible = rect.top < window.innerHeight && rect.bottom >= 0

      setIsVisible(isScrolled && !isFooterVisible)
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToDownload = () => {
    const downloadSection = document.getElementById("download")
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            size="lg"
            onClick={scrollToDownload}
            className="rounded-full h-14 px-6 shadow-2xl bg-primary hover:bg-primary/90 text-white gap-2"
          >
            <Download className="w-5 h-5" />
            <span className="font-semibold">Download App</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
