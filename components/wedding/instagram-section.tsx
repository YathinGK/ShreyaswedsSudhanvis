"use client"

import { motion } from "framer-motion"
import { Instagram, Camera, Heart } from "lucide-react"

export function InstagramSection() {
  const instagramUrl = "https://instagram.com"

  return (
    <section className="py-20 md:py-24 px-4 bg-gradient-to-b from-cream to-cream-dark relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Camera className="w-16 h-16 text-burgundy" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Heart className="w-16 h-16 text-burgundy" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold-dark text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
            Share the Moments
          </span>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-5xl md:text-6xl text-burgundy mt-2 mb-4">
            Follow the Action
          </h2>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-gold-dark" />
            <span className="text-gold-dark">✦</span>
            <span className="w-12 h-[1px] bg-gold-dark" />
          </div>
          <p className="font-serif text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            Follow us on Instagram for wedding updates, behind-the-scenes moments, and more memories to cherish
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block"
        >
          {/* Button glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#833AB4]/30 via-[#FD1D1D]/30 to-[#F77737]/30 blur-xl rounded-full" />
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-full font-medium text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>@VishuWedsKavya</span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-muted-foreground text-sm"
        >
          Tag your photos with <span className="text-burgundy font-semibold">#VishuWedsKavya</span>
        </motion.p>
      </div>
    </section>
  )
}
