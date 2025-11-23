import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { DownloadCTA } from "@/components/download-cta"
import { Footer } from "@/components/footer"
import { FloatingDownload } from "@/components/floating-download"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <Features />
      <DownloadCTA />
      <Footer />
      <FloatingDownload />
    </main>
  )
}
