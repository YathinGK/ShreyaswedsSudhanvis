"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface ParallaxTempleProps {
  imageSrc: string
  title?: string
  subtitle?: string
  overlay?: "dark" | "light" | "golden"
}

export function ParallaxTemple({ 
  imageSrc, 
  title, 
  subtitle,
  overlay = "golden"
}: ParallaxTempleProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  const overlayClasses = {
    dark: "bg-gradient-to-b from-black/60 via-black/40 to-black/60",
    light: "bg-gradient-to-b from-cream/80 via-cream/60 to-cream/80",
    golden: "bg-gradient-to-b from-[#2a1810]/70 via-[#3d2518]/50 to-[#2a1810]/70"
  }

  return (
    <section 
      ref={ref} 
      className="relative h-[60vh] md:h-[70vh] overflow-hidden z-0"
    >
      {/* Parallax Background */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 w-full h-[140%] -top-[20%]"
      >
        <Image
          src={imageSrc}
          alt="Temple background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />

      {/* Decorative Border Frame */}
      <div className="absolute inset-4 md:inset-8 border border-gold/30 pointer-events-none" />
      <div className="absolute inset-6 md:inset-12 border border-gold/20 pointer-events-none" />

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4"
      >
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold font-medium text-sm md:text-base tracking-[0.4em] uppercase mb-4"
          >
            {subtitle}
          </motion.p>
        )}

        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-[family-name:var(--font-great-vibes)] text-4xl md:text-6xl lg:text-7xl text-cream text-center max-w-4xl"
          >
            {title}
          </motion.h2>
        )}

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-4 mt-8"
        >
          <span className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold" />
          <svg 
            className="w-6 h-6 text-gold" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <span className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold" />
        </motion.div>
      </motion.div>

      {/* Corner Ornaments */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-16 h-16 border-t-2 border-l-2 border-gold/40" />
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-16 h-16 border-t-2 border-r-2 border-gold/40" />
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-16 h-16 border-b-2 border-l-2 border-gold/40" />
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-16 h-16 border-b-2 border-r-2 border-gold/40" />
    </section>
  )
}
