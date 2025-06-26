"use client"

import { Button } from "@/components/ui/button"
import { Users, Rocket, Star, Zap, Heart, Trophy, ArrowRight } from "lucide-react"
import config from "@/data/config.json"

export function JoinTeam() {
  const handleJoinClick = () => {
    window.open(config.careers.formUrl, "_blank")
  }

  return (
    <section className="bg-black min-h-screen py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(16,185,129,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="w-20 h-20 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-12">
            <Users className="h-10 w-10 text-emerald-400" />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">{config.careers.title}</h1>

          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-10 font-medium leading-relaxed">
            {config.careers.subtitle}
          </p>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">{config.careers.description}</p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {config.careers.perks.map((perk, index) => {
            const icons = [Rocket, Star, Zap, Heart, Trophy, Users]
            const Icon = icons[index % icons.length]

            return (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-all duration-300">
                  <Icon className="h-7 w-7 text-emerald-400" />
                </div>
                <p className="text-white font-medium leading-relaxed">{perk}</p>
              </div>
            )
          })}
        </div>

        {/* Important Note */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-8 bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Important Note</h3>
            <p className="text-amber-200 leading-relaxed">{config.careers.note}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            onClick={handleJoinClick}
            size="lg"
            className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300 px-16 py-6 text-xl font-semibold rounded-xl shadow-2xl transition-all duration-300"
          >
            Join Our Team
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          <p className="text-gray-400 mt-8 text-lg">
            Ready to shape the future of fintech? Let's build something amazing together.
          </p>
        </div>
      </div>
    </section>
  )
}
