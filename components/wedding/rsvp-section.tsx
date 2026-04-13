"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function RSVPSection() {
  const whatsappNumber = "918884840687"
  const whatsappMessage = encodeURIComponent("Hello! I would like to RSVP for the wedding of Shreyas A & Sudhanvi S.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  return (
    <section className="py-24 md:py-32 px-4 bg-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="mandala" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-burgundy"/>
            <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-burgundy"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#mandala)"/>
        </svg>
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative Top Element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-gold-dark" />
            <svg className="w-8 h-8 text-gold-dark" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z"/>
            </svg>
            <span className="w-12 h-[1px] bg-gold-dark" />
          </div>

          <span className="text-gold-dark text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
            We Request
          </span>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-5xl md:text-6xl text-burgundy mt-2 mb-4">
            Your Response
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-10 max-w-md mx-auto">
            Kindly let us know if you will be joining us for our special day
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
          <div className="absolute inset-0 bg-[#25D366]/30 blur-xl rounded-full" />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] text-white rounded-full font-medium text-lg hover:bg-[#20BA5A] transition-all duration-300 hover:shadow-2xl hover:scale-105 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
            <span>Message on WhatsApp</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          {/*<p className="font-serif text-lg text-foreground italic">
            *&ldquo;We would love to have you celebrate this special day with us&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="font-[family-name:var(--font-great-vibes)] text-xl text-burgundy">Shreyas</span>
            <span className="text-gold-dark">&</span>
            <span className="font-[family-name:var(--font-great-vibes)] text-xl text-burgundy">Sudhanvi</span>
          </div>*/}
        </motion.div>
      </div>
    </section>
  )
}
