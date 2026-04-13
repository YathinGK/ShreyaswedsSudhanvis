"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime()
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function TimeUnit({ value, label, delay }: { value: number; label: string; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gold/20 blur-xl rounded-lg" />
        <div className="relative w-20 h-24 md:w-28 md:h-32 bg-gradient-to-br from-cream to-cream-dark rounded-xl border-2 border-gold/50 flex items-center justify-center shadow-2xl backdrop-blur-sm">
          <span className="font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl font-bold text-burgundy">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
        {/* Decorative corners */}
        <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-gold" />
        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-gold" />
        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-gold" />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-gold" />
      </div>
      <span className="mt-4 text-cream/80 text-xs md:text-sm uppercase tracking-[0.2em] font-medium">
        {label}
      </span>
    </motion.div>
  )
}

export function CountdownSection() {
  const ref = useRef(null)
  const weddingDate = new Date('2026-05-08T09:00:00')
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(weddingDate))
  const [mounted, setMounted] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="relative py-28 md:py-36 px-4 overflow-hidden z-0">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[130%] -top-[15%]"
      >
        <Image
          src="/images/floral-bg.jpg"
          alt="Floral background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2a1810]/90 via-[#3d2518]/85 to-[#2a1810]/90" />
      </motion.div>

      {/* Decorative Frame */}
      <div className="absolute inset-4 md:inset-8 border border-gold/20 pointer-events-none z-10" />
      
      {/* Corner Ornaments */}
      <div className="absolute top-6 left-6 md:top-12 md:left-12 w-12 h-12 border-t-2 border-l-2 border-gold/40 z-10" />
      <div className="absolute top-6 right-6 md:top-12 md:right-12 w-12 h-12 border-t-2 border-r-2 border-gold/40 z-10" />
      <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 w-12 h-12 border-b-2 border-l-2 border-gold/40 z-10" />
      <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-12 h-12 border-b-2 border-r-2 border-gold/40 z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
            Mark Your Calendars
          </span>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-5xl md:text-7xl text-cream mt-4 mb-6">
            The Countdown Begins
          </h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold" />
            <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
            <span className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold" />
          </div>{/*
          <p className="font-serif text-lg md:text-xl text-cream/70 mb-16 max-w-2xl mx-auto leading-relaxed">
            Our families are excited that you are able to join us in celebrating what we hope will be 
            one of the happiest days of our lives.
          </p>*/}
        </motion.div>

        {mounted && (
          <div className="flex items-center justify-center gap-3 md:gap-6 lg:gap-10">
            <TimeUnit value={timeLeft.days} label="Days" delay={0.1} />
            <span className="text-gold text-3xl md:text-4xl font-light mt-[-2rem]">:</span>
            <TimeUnit value={timeLeft.hours} label="Hours" delay={0.2} />
            <span className="text-gold text-3xl md:text-4xl font-light mt-[-2rem]">:</span>
            <TimeUnit value={timeLeft.minutes} label="Minutes" delay={0.3} />
            <span className="text-gold text-3xl md:text-4xl font-light mt-[-2rem]">:</span>
            <TimeUnit value={timeLeft.seconds} label="Seconds" delay={0.4} />
          </div>
        )}

        {!mounted && (
          <div className="flex items-center justify-center gap-3 md:gap-6 lg:gap-10">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label, i) => (
              <TimeUnit key={label} value={0} label={label} delay={i * 0.1} />
            ))}
          </div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-gold font-medium text-lg md:text-xl"
        >
          May 8th, 2026 at 10:05 AM
        </motion.p>
      </div>
    </section>
  )
}
