"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function PhoneMockup({
  src,
  alt,
  className,
  priority = false,
}: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto w-[280px] sm:w-[320px]", className)}>
      <div className="relative aspect-[9/17.5] overflow-hidden rounded-[3rem] border-8 border-neutral-900 bg-neutral-950 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-neutral-900 rounded-b-2xl z-20"></div>

        {/* Screen Content */}
        <div className="relative w-full h-full bg-neutral-900">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-contain"
            priority={priority}
          />
        </div>

        {/* Gloss Effect */}
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-tr from-transparent via-white/5 to-transparent rounded-[2.5rem]"></div>
      </div>

      {/* Shadow */}
      <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full opacity-50"></div>
    </div>
  )
}
