"use client"
import Image from "next/image"
import Link from "next/link"
import { Linkedin, Twitter, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import config from "@/data/config.json"

export function Founders() {
  return (
    <section id="founders" className="bg-black py-20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Meet Our Founders</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            Visionary leaders combining decades of experience in finance, AI, and technology
          </p>
          <Link href="/founders">
            <Button className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300 px-8 py-3 font-semibold rounded-xl">
              View Full Profiles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Founders Grid - Fixed Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {config.founders.map((founder, index) => (
            <Link key={founder.id} href="/founders" className="group">
              <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300 cursor-pointer flex flex-col">
                {/* Profile Image */}
                <div className="text-center mb-6">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="rounded-2xl object-cover border-2 border-emerald-500/30 group-hover:border-emerald-500/50 transition-all duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{founder.name}</h3>
                  <p className="text-emerald-400 font-semibold text-sm">{founder.role}</p>
                </div>

                {/* Bio - Fixed Height */}
                <div className="flex-1 mb-6">
                  <p className="text-gray-400 text-sm leading-relaxed text-center line-clamp-3">{founder.shortBio}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-2 mt-auto">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/5 backdrop-blur-sm border-white/20 text-gray-400 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10 w-8 h-8"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.open(founder.linkedin, "_blank")
                    }}
                  >
                    <Linkedin className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/5 backdrop-blur-sm border-white/20 text-gray-400 hover:border-blue-400/50 hover:text-blue-400 hover:bg-blue-400/10 w-8 h-8"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      window.open(founder.twitter, "_blank")
                    }}
                  >
                    <Twitter className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
