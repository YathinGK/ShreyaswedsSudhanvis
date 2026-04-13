"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MapPin, Calendar, Clock, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Event {
  id: string
  name: string
  date: string
  venue: string
  time: string
  icon: React.ReactNode
  mapUrl: string
  color: string
}

const events: Event[] = [
  {
    id: "muhurtham",
    name: "Muhurtham",
    date: "Friday, May 8th 2026",
    venue: "Kalasa, Karnataka",
    time: "10:05 AM",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
    mapUrl: "https://maps.app.goo.gl/E1eGTar54Qm4cv2r8",
    color: "from-orange-500/20 to-amber-600/20"
  },
  {
    id: "reception",
    name: "Reception",
    date: "Sunday, May 10th 2026",
    venue: "Mangaluru, Karnataka",
    time: "11:30 AM",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 22L4 12H6L7 22H9L10 12H12L13 22H15L16 12H18L19 22H21L20 11C20 9.9 19.1 9 18 9H6C4.9 9 4 9.9 4 11L2 22ZM5 9V7C5 5.9 5.9 5 7 5H17C18.1 5 19 5.9 19 7V9H17V7H7V9H5ZM12 4C12.55 4 13 3.55 13 3C13 2.45 12.55 2 12 2C11.45 2 11 2.45 11 3C11 3.55 11.45 4 12 4Z"/>
      </svg>
    ),
    mapUrl: "https://maps.app.goo.gl/a7yVgqTA8jWNAD7E9",
    color: "from-purple-500/20 to-violet-600/20"
  },
  {
    id: "beegara",
    name: "Beegara Authana",
    date: "Sunday, May 17th 2026",
    venue: "Bengaluru, Karnataka",
    time: "11:30 AM",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    ),
    mapUrl: "https://maps.app.goo.gl/h5ZUEXFyj2GTs2jV9",
    color: "from-rose-500/20 to-pink-600/20"
  },
]

function EventCard({ event, index }: { event: Event; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-full text-left p-6 md:p-8 rounded-xl transition-all duration-500",
          "bg-gradient-to-br",
          event.color,
          "border border-gold/20 hover:border-gold/50",
          "shadow-sm hover:shadow-xl hover:shadow-gold/5",
          "backdrop-blur-sm",
          isExpanded && "border-gold/50 shadow-xl"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <motion.div 
              className="text-gold-dark"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              {event.icon}
            </motion.div>
            <div>
              <h3 className="font-[family-name:var(--font-great-vibes)] text-3xl md:text-4xl text-burgundy">
                {event.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {event.date}
              </p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gold-dark"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ 
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-6 space-y-4 border-t border-gold/20 mt-6">
            <div className="flex items-center gap-4 text-foreground">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gold-dark" />
              </div>
              <span className="font-serif text-lg">{event.date}</span>
            </div>
            <div className="flex items-center gap-4 text-foreground">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                <Clock className="w-5 h-5 text-gold-dark" />
              </div>
              <span className="font-serif text-lg">{event.time}</span>
            </div>
            <div className="flex items-center gap-4 text-foreground">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center">
                <MapPin className="w-5 h-5 text-gold-dark" />
              </div>
              <span className="font-serif text-lg">{event.venue}</span>
            </div>
            <a
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-burgundy text-cream rounded-full font-medium text-sm hover:bg-burgundy-light transition-all duration-300 hover:shadow-lg"
            >
              <MapPin className="w-4 h-4" />
              See the route
            </a>
          </div>
        </motion.div>
      </button>
    </motion.div>
  )
}

export function EventsSection() {
  return (
    <section className="py-20 md:py-28 px-4 bg-cream-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-burgundy"/>
        </svg>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-dark text-sm tracking-[0.3em] uppercase font-medium">
            Save the Date
          </span>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-5xl md:text-6xl text-burgundy mt-4">
            Wedding Events
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-16 h-[1px] bg-gold-dark" />
            <span className="text-gold-dark">&#10022;</span>
            <span className="w-16 h-[1px] bg-gold-dark" />
          </div>
        </motion.div>
        
        <div className="space-y-4">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
