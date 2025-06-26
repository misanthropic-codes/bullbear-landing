"use client"

import { useState } from "react"
import Image from "next/image"
import { Linkedin, Twitter, Mail, Award, Users, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import config from "@/data/config.json"

export function FoundersPage() {
  const [selectedFounder, setSelectedFounder] = useState(0)

  return (
    <section className="bg-black py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-20 h-20 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto mb-12">
            <Users className="h-10 w-10 text-emerald-400" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8">Meet Our Founders</h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Visionary leaders combining decades of experience in finance, AI, and technology to revolutionize trading
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {config.founders.map((founder, index) => (
            <div
              key={founder.id}
              className={`group cursor-pointer transition-all duration-500 ${
                selectedFounder === index ? "scale-105" : "hover:scale-102"
              }`}
              onClick={() => setSelectedFounder(index)}
            >
              <div
                className={`p-8 backdrop-blur-sm border rounded-3xl transition-all duration-500 ${
                  selectedFounder === index
                    ? "bg-emerald-500/15 border-emerald-500/40 shadow-2xl shadow-emerald-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                }`}
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="relative w-24 h-24 mx-auto">
                    <Image
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      fill
                      className="rounded-2xl object-cover border-2 border-emerald-500/30"
                    />
                    {selectedFounder === index && (
                      <div className="absolute -inset-1 bg-emerald-500/20 rounded-2xl animate-pulse" />
                    )}
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{founder.name}</h3>
                  <p className="text-emerald-400 font-semibold text-sm">{founder.role}</p>
                </div>

                {/* Short Bio */}
                <p className="text-gray-400 text-sm text-center mb-6 leading-relaxed">{founder.shortBio}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/5 backdrop-blur-sm border-white/20 text-gray-400 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10 w-8 h-8"
                    onClick={(e) => {
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
                      e.stopPropagation()
                      window.open(founder.twitter, "_blank")
                    }}
                  >
                    <Twitter className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-white/5 backdrop-blur-sm border-white/20 text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10 w-8 h-8"
                    onClick={(e) => {
                      e.stopPropagation()
                      window.open(`mailto:${founder.email}`, "_blank")
                    }}
                  >
                    <Mail className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Founder Details */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Profile */}
            <div className="lg:col-span-1">
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl sticky top-32">
                <div className="text-center mb-8">
                  <div className="relative w-40 h-40 mx-auto mb-6">
                    <Image
                      src={config.founders[selectedFounder].image || "/placeholder.svg"}
                      alt={config.founders[selectedFounder].name}
                      fill
                      className="rounded-2xl object-cover border-4 border-emerald-500/50"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{config.founders[selectedFounder].name}</h2>
                  <p className="text-emerald-400 font-semibold text-lg mb-6">{config.founders[selectedFounder].role}</p>

                  {/* Contact Buttons */}
                  <div className="flex justify-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/5 backdrop-blur-sm border-white/20 text-gray-400 hover:border-blue-500/50 hover:text-blue-400 hover:bg-blue-500/10"
                      onClick={() => window.open(config.founders[selectedFounder].linkedin, "_blank")}
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-white/5 backdrop-blur-sm border-white/20 text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10"
                      onClick={() => window.open(`mailto:${config.founders[selectedFounder].email}`, "_blank")}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio */}
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-xl flex items-center justify-center mr-4">
                    <Users className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">About</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">{config.founders[selectedFounder].fullBio}</p>
              </div>

              {/* Expertise */}
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-xl flex items-center justify-center mr-4">
                    <Brain className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Expertise</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {config.founders[selectedFounder].expertise.map((skill, index) => (
                    <div
                      key={index}
                      className="p-4 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-xl"
                    >
                      <p className="text-emerald-400 font-medium text-center">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-xl flex items-center justify-center mr-4">
                    <Award className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Key Achievements</h3>
                </div>
                <div className="space-y-3">
                  {config.founders[selectedFounder].achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl"
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mr-4" />
                      <p className="text-gray-300 font-medium">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
