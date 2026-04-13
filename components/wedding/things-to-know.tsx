"use client"

import { motion } from "framer-motion"
import { Hash, Sun, Hotel, Car } from "lucide-react"

const items = [
  {
    icon: Hash,
    title: "Hashtag",
    description: "While posting photos on social media please use the hashtag",
    highlight: "#ShreyasWedsSudhanvi",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: Sun,
    title: "Weather",
    description: "It will be mostly sunny with temperature reaching up to",
    highlight: "28°C",
    gradient: "from-amber-500/20 to-yellow-500/20"
  },
  //{
    //icon: Hotel,
    //title: "Accommodation",
    //description: "We recommend the nearby hotel",
    //highlight: "Bhola Bhawan",
    //gradient: "from-blue-500/20 to-cyan-500/20"
  //},
  {
    icon: Car,
    title: "Parking",
    description: "Valet parking for all our guests will be available",
    highlight: "At the Venue",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
]

export function ThingsToKnow() {
  return (
    <section className="py-24 md:py-32 px-4 bg-cream-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 60 60">
          <pattern id="dots" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="2" fill="currentColor" className="text-burgundy"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold-dark text-xs md:text-sm tracking-[0.4em] uppercase font-medium">
            Important Information
          </span>
          <h2 className="font-[family-name:var(--font-great-vibes)] text-5xl md:text-6xl text-burgundy mt-2 mb-4">
            Things to Know
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-16 h-[1px] bg-gold-dark" />
            <span className="text-gold-dark">✦</span>
            <span className="w-16 h-[1px] bg-gold-dark" />
          </div>
          <p className="font-serif text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            To help you feel at ease and enjoy every moment of the celebrations, we&apos;ve gathered 
            a few thoughtful details we&apos;d love for you to know before the big day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border border-gold/20 hover:border-gold/50 hover:shadow-xl transition-all duration-500 h-full`}>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-cream shadow-md flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-burgundy" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <p className="mt-2 font-semibold text-burgundy text-lg">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
