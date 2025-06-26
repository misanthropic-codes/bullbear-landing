"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, BarChart3, Brain, Shield, ArrowRight } from "lucide-react"
import config from "@/data/config.json"

export function Hero() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            <div className="w-1 h-1 bg-emerald-400/30 rounded-full" />
          </div>
        ))}
      </div>

      {/* Main Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-full mb-12">
            <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-emerald-400 font-semibold text-sm tracking-wide">{config.company.status}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            {config.company.name}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-10 leading-relaxed font-medium max-w-4xl mx-auto">
            {config.hero.subtitle}
          </p>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto leading-relaxed">{config.hero.description}</p>

          {/* CTA Button */}
          <Button
            size="lg"
            className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300 px-12 py-6 text-xl font-semibold rounded-xl shadow-2xl transition-all duration-300"
          >
            {config.hero.ctaText}
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Powered by Advanced AI Technology</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our cutting-edge platform combines machine learning, real-time data analysis, and automated trading
            strategies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Brain,
              title: "AI-Powered Predictions",
              desc: "Advanced machine learning algorithms analyze market patterns and predict trends with unprecedented accuracy",
            },
            {
              icon: Shield,
              title: "Risk Assessment",
              desc: "Real-time financial health tracking and comprehensive risk analysis to protect your investments",
            },
            {
              icon: BarChart3,
              title: "Smart Trading",
              desc: "Automated trading strategies that execute optimal trades based on your risk tolerance and goals",
            },
            {
              icon: TrendingUp,
              title: "Market Integration",
              desc: "Unified platform supporting stocks, cryptocurrency, and forex markets in one comprehensive dashboard",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/30 transition-all duration-300">
                <feature.icon className="h-7 w-7 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
