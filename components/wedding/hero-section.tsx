"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <Image
          src="/images/temple-1.jpg"
          alt="Temple background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f0a]/80 via-[#2a1810]/60 to-[#1a0f0a]/90" />
      </motion.div>

      <div className="absolute inset-4 md:inset-8 lg:inset-12 border border-gold/20 pointer-events-none z-10" />
      <div className="absolute inset-8 md:inset-16 lg:inset-20 border border-gold/10 pointer-events-none z-10" />

      <OrnamentCorner className="top-4 left-4 md:top-8 md:left-8" />
      <OrnamentCorner className="top-4 right-4 md:top-8 md:right-8 rotate-90" />
      <OrnamentCorner className="bottom-4 left-4 md:bottom-8 md:left-8 -rotate-90" />
      <OrnamentCorner className="bottom-4 right-4 md:bottom-8 md:right-8 rotate-180" />

      <FloatingParticles />

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 text-center px-4"
      >
        {/* Top Blessing */}
      <motion.div
         initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8"
>
      <p className="text-gold font-medium text-base md:text-lg tracking-[0.15em] text-center leading-relaxed">
      ॐ <br></br>श्री गणेशाय नमः
      </p>
      </motion.div>

        {/* Groom Name */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="font-[family-name:var(--font-great-vibes)] text-6xl md:text-8xl lg:text-9xl text-cream drop-shadow-2xl">
            Sudhanvi
          </h1>
        </motion.div>

        {/* Decorative Weds */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4 md:gap-6 my-4 md:my-6"
        >
          <span className="w-16 md:w-28 h-[1px] bg-gradient-to-r from-transparent via-gold to-gold" />
          <div className="relative">
            <span className="font-[family-name:var(--font-cormorant)] text-xl md:text-3xl text-gold font-semibold tracking-[0.4em]">
              WEDS
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-3 -right-3 w-6 h-6 opacity-50"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="text-gold">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </motion.div>
          </div>
          <span className="w-16 md:w-28 h-[1px] bg-gradient-to-l from-transparent via-gold to-gold" />
        </motion.div>

        {/* Bride Name */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h1 className="font-[family-name:var(--font-great-vibes)] text-6xl md:text-8xl lg:text-9xl text-cream drop-shadow-2xl">
            Shreyas
          </h1>
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 md:mt-16"
        >
          <p className="text-gold font-medium text-lg md:text-2xl tracking-wide mb-2">
            We are getting married <br></br>
            <span className="text-sm md:text-lg">On</span>
          </p>
          <p className="text-cream/70 text-base md:text-lg tracking-widest uppercase">
    May 8th, 2026
  </p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-gold/60 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gold rounded-full" 
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function OrnamentCorner({ className }: { className?: string }) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <svg 
        width="60" 
        height="60" 
        viewBox="0 0 60 60" 
        fill="none" 
        className="text-gold/50"
      >
        <path 
          d="M0 0 L30 0 L30 5 L5 5 L5 30 L0 30 Z" 
          fill="currentColor" 
        />
        <path 
          d="M10 10 L25 10 L25 15 L15 15 L15 25 L10 25 Z" 
          fill="currentColor" 
          opacity="0.5"
        />
        <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    </div>
  )
}

// Pre-defined particle positions to avoid hydration mismatch
const particlePositions = [
  { left: 5, top: 10 }, { left: 15, top: 25 }, { left: 25, top: 5 }, { left: 35, top: 45 },
  { left: 45, top: 15 }, { left: 55, top: 35 }, { left: 65, top: 8 }, { left: 75, top: 55 },
  { left: 85, top: 20 }, { left: 95, top: 40 }, { left: 10, top: 60 }, { left: 20, top: 80 },
  { left: 30, top: 70 }, { left: 40, top: 90 }, { left: 50, top: 65 }, { left: 60, top: 85 },
  { left: 70, top: 75 }, { left: 80, top: 95 }, { left: 90, top: 50 }, { left: 12, top: 42 },
]

function FloatingParticles() {
  return (
    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
      {particlePositions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gold/30 rounded-full"
          style={{
            left: `${pos.left}%`,
            top: `${pos.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            delay: (i % 5) * 0.4,
          }}
        />
      ))}
    </div>
  )
}
