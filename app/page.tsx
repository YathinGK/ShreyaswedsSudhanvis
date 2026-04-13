"use client"

import { HeroSection } from "@/components/wedding/hero-section"
import { InvitationSection } from "@/components/wedding/invitation-section"
import { EventsSection } from "@/components/wedding/events-section"
import { CoupleSection } from "@/components/wedding/couple-section"
import { RSVPSection } from "@/components/wedding/rsvp-section"
import { ThingsToKnow } from "@/components/wedding/things-to-know"

import { CountdownSection } from "@/components/wedding/countdown-section"
import { Footer } from "@/components/wedding/footer"
import { ParallaxTemple } from "@/components/wedding/parallax-temple"

export default function WeddingInvitation() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <HeroSection />
      <InvitationSection />
      <EventsSection />
      <CoupleSection />
      {/* Temple Parallax Section */}
<ParallaxTemple 
  imageSrc="/images/temple-2.jpg"
  subtitle="A Sacred Union"
  title="Two Souls, One Journey"
/>

{/* Add spacing here */}
<div className="mt-16 md:mt-24">
  <ParallaxTemple 
    imageSrc="/images/temple-1.jpg"
    subtitle="Your Presence Matters"
    title="Join Us in Celebration"
    overlay="golden"
  />
</div>
      
      <RSVPSection />
      <ThingsToKnow />
      <CountdownSection />
      <Footer />
    </main>
  )
}
