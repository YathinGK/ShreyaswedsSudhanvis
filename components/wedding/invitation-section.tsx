"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function InvitationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#1a0f0a]/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cream-dark/50 to-transparent" />
      
      {/* Side Decorations */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-64 opacity-10">
        <svg viewBox="0 0 100 200" className="w-full h-full text-burgundy">
          <path d="M50 0 Q70 50 50 100 Q30 150 50 200" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="50" r="8" fill="currentColor"/>
          <circle cx="50" cy="100" r="8" fill="currentColor"/>
          <circle cx="50" cy="150" r="8" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-64 opacity-10 rotate-180">
        <svg viewBox="0 0 100 200" className="w-full h-full text-burgundy">
          <path d="M50 0 Q70 50 50 100 Q30 150 50 200" stroke="currentColor" strokeWidth="2" fill="none"/>
          <circle cx="50" cy="50" r="8" fill="currentColor"/>
          <circle cx="50" cy="100" r="8" fill="currentColor"/>
          <circle cx="50" cy="150" r="8" fill="currentColor"/>
        </svg>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        {/* Top Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <svg className="w-20 h-20 mx-auto text-gold-dark" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5"/>
            <path d="M50 15 L55 45 L85 50 L55 55 L50 85 L45 55 L15 50 L45 45 Z" fill="currentColor" opacity="0.2"/>
            <path d="M50 25 L53 47 L75 50 L53 53 L50 75 L47 53 L25 50 L47 47 Z" fill="currentColor"/>
          </svg>
        </motion.div>

        

        <div className="space-y-3 mb-10">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-lg md:text-xl text-foreground"
          >
            Dr.Saritha Chakrasali & Sri Anand R.K
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center justify-center gap-3"
          >
            <span className="w-8 h-[1px] bg-gold-dark" />
            <span className="text-gold-dark text-xl">&#10022;</span>
            <span className="w-8 h-[1px] bg-gold-dark" />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-serif text-lg md:text-xl text-foreground"
          >
            Smt.Sujaya & Sr Sadananda Moolya
          </motion.p>
        </div>

        {/* Decorative Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4 my-10"
        >
          <span className="w-20 md:w-32 h-[1px] bg-gradient-to-r from-transparent to-burgundy/50" />
          <svg className="w-8 h-8 text-burgundy" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C14.96 5.55 14 6.68 14 8V14C14 15.1 14.9 16 16 16H18V22H20V15C20 13.9 19.1 13 18 13H16V8H21V9ZM12 8C10.9 8 10 8.9 10 10V15H8V10C8 7.79 9.79 6 12 6C14.21 6 16 7.79 16 10V15H14V10C14 8.9 13.1 8 12 8Z"/>
          </svg>
          <span className="w-20 md:w-32 h-[1px] bg-gradient-to-l from-transparent to-burgundy/50" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="font-medium text-xs md:text-sm tracking-[0.4em] uppercase text-gold-dark mb-4">
            INVITE
          </p>
          <p className="font-serif text-xl md:text-2xl text-foreground mb-10">
            You to join us in the wedding celebrations of
          </p>

          <motion.h3 
            whileHover={{ scale: 1.05 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-burgundy text-center font-light tracking-wider"
          >
            Shreyas Anand <span className="text-gold-dark">&</span> Sudhanvi S
          </motion.h3>


        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 flex flex-col items-center"
        >
          <span className="w-[1px] h-12 bg-gradient-to-b from-gold-dark to-transparent" />
          <p className="mt-4 font-medium text-xs tracking-[0.3em] uppercase text-gold-dark">
            On the following events
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
