"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web5-hL8qoJUi4hLCntYc4UMwOD14sGogx3.jpeg",
    alt: "Engaged moment with mehndi",
    span: "col-span-2 row-span-2"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web6-4U9UcuQSoUTpsH6YdZst7D1RsWvpHu.jpeg",
    alt: "Couple portrait in traditional attire",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web2-301SsTb40t9xVoC7wYlmtpl8lOlWNB.jpeg",
    alt: "Couple walking together outdoors",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web3-KF3jxY3SeNd1uLfooIAlwJ0rOzVO7v.jpeg",
    alt: "Intimate moment sepia tone",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web1-90pjsUJoS9cXXENj4FvJ4HMldBliSm.jpeg",
    alt: "Bride and groom sitting together",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web7-2LLv7ZyrLszFoGnSdFEHORBPlEFtO4.jpeg",
    alt: "Hands with mehndi and bangles",
    span: "col-span-1 row-span-2"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web4-YzLsFDOL8eze46Wfx7m9cBmxJqlfcf.jpeg",
    alt: "Couple seated on decorated backdrop",
    span: "col-span-2 row-span-1"
  },
]

function GalleryItem({ image, variants }: any) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      variants={variants}
      className={`${image.span} relative overflow-hidden rounded-2xl md:rounded-3xl group h-full w-full cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={`object-cover transition-all duration-500 ${
          isHovered ? "object-center scale-110" : "object-top"
        }`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-burgundy/20 via-transparent to-transparent transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`} />
    </motion.div>
  )
}

export function CoupleSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400">
          <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q10 10 20 20 Q30 30 20 40 Q10 30 0 20" 
              fill="currentColor" className="text-burgundy" opacity="0.3"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-dark text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
            Meet the
          </span>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-5xl md:text-6xl text-burgundy mt-2">
            Bride and Groom
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-16 h-[1px] bg-gold-dark" />
            <span className="text-gold-dark text-xl">✦</span>
            <span className="w-16 h-[1px] bg-gold-dark" />
          </div>
        </motion.div>

        {/* Modern Collage Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-4 grid-rows-3 gap-3 md:gap-4 h-[600px] md:h-[700px] mb-12 auto-rows-fr"
        >
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} image={image} variants={itemVariants} />
          ))}
        </motion.div>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <p className="font-serif text-sm md:text-base text-muted-foreground tracking-widest uppercase mb-4">
            The Beautiful Love Story of
          </p>
          <h3 className="font-serif text-4xl md:text-5xl text-burgundy font-light tracking-wider">
            Shreyas <span className="text-gold-dark mx-2">&</span> Sudhanvi
          </h3>
        </motion.div>
      </div>
    </section>
  )
}
