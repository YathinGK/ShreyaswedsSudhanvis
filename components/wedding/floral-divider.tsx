"use client"

import { cn } from "@/lib/utils"

interface FloralDividerProps {
  className?: string
  variant?: "gold" | "burgundy"
}

export function FloralDivider({ className, variant = "gold" }: FloralDividerProps) {
  const color = variant === "gold" ? "#B8860B" : "#722F37"
  
  return (
    <div className={cn("flex items-center justify-center py-6", className)}>
      <svg 
        width="300" 
        height="40" 
        viewBox="0 0 300 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-[200px] md:w-[300px]"
      >
        {/* Left ornament */}
        <path 
          d="M0 20 Q30 10 60 20 Q30 30 0 20" 
          fill={color} 
          opacity="0.6"
        />
        <circle cx="70" cy="20" r="3" fill={color} />
        <path 
          d="M80 20 L120 20" 
          stroke={color} 
          strokeWidth="1"
        />
        
        {/* Center ornament */}
        <g transform="translate(150, 20)">
          <path 
            d="M-20 0 Q-10 -15 0 -10 Q10 -15 20 0 Q10 15 0 10 Q-10 15 -20 0" 
            fill={color}
            opacity="0.8"
          />
          <circle cx="0" cy="0" r="4" fill={color} />
        </g>
        
        {/* Right ornament */}
        <path 
          d="M180 20 L220 20" 
          stroke={color} 
          strokeWidth="1"
        />
        <circle cx="230" cy="20" r="3" fill={color} />
        <path 
          d="M300 20 Q270 10 240 20 Q270 30 300 20" 
          fill={color} 
          opacity="0.6"
        />
      </svg>
    </div>
  )
}
