"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 bg-[#1a0f0a] relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Monogram */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="font-[family-name:var(--font-great-vibes)] text-4xl text-gold">S</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-5 h-5 text-burgundy-light fill-burgundy-light" />
          </motion.div>
          <span className="font-[family-name:var(--font-great-vibes)] text-4xl text-gold">S</span>
        </div>

        <p className="font-serif text-lg text-cream/70 mb-2">
          May 8, 2026
        </p>
        <p className="font-serif text-cream/50 text-sm">
          Kalsa, Karnataka
        </p>

        <div className="flex items-center justify-center gap-3 my-8">
          <span className="w-16 h-[1px] bg-gold/30" />
          <svg className="w-4 h-4 text-gold/50" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
          <span className="w-16 h-[1px] bg-gold/30" />
        </div>

        <p className="text-cream/40 text-xs tracking-widest uppercase">
          Made with love
        </p>
      </motion.div>
    </footer>
  )
}
