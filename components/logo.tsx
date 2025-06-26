"use client"

import { TrendingUp, TrendingDown } from "lucide-react"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
  className?: string
}

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div
        className={`${sizeClasses[size]} bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-xl flex items-center justify-center relative overflow-hidden`}
      >
        {/* Bull (up trend) */}
        <TrendingUp
          className={`h-${size === "sm" ? "4" : size === "md" ? "6" : "7"} w-${size === "sm" ? "4" : size === "md" ? "6" : "7"} text-emerald-400 absolute transition-all duration-300 hover:scale-110`}
        />
        {/* Bear (down trend) - subtle overlay */}
        <TrendingDown
          className={`h-${size === "sm" ? "3" : size === "md" ? "4" : "5"} w-${size === "sm" ? "3" : size === "md" ? "4" : "5"} text-red-400/30 absolute translate-x-1 translate-y-1`}
        />

        {/* AI Circuit Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-emerald-400/20 to-transparent rounded-xl" />
          <div className="absolute top-1 left-1 w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
          <div
            className="absolute bottom-1 right-1 w-1 h-1 bg-emerald-400 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>
      </div>

      {showText && (
        <span className={`${textSizeClasses[size]} font-bold text-white`}>
          <span className="text-emerald-400">Bull</span>
          <span className="text-red-400">Bear</span>
          <span className="text-gray-300"> AI</span>
        </span>
      )}
    </div>
  )
}
