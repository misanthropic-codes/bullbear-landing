"use client"

import Link from "next/link"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import config from "@/data/config.json"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Logo size="md" showText={true} className="mb-8" />
            <p className="text-gray-400 mb-10 max-w-md leading-relaxed text-lg">{config.company.description}</p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-white/5 backdrop-blur-sm border-white/20 text-gray-400 hover:border-blue-400/50 hover:text-blue-400 hover:bg-blue-400/10"
                onClick={() => window.open(config.social.twitter, "_blank")}
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/5 backdrop-blur-sm border-white/20 text-gray-400 hover:border-blue-500/50 hover:text-blue-500 hover:bg-blue-500/10"
                onClick={() => window.open(config.social.linkedin, "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/5 backdrop-blur-sm border-white/20 text-gray-400 hover:border-gray-300/50 hover:text-gray-300 hover:bg-gray-300/10"
                onClick={() => window.open(config.social.github, "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/5 backdrop-blur-sm border-white/20 text-gray-400 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10"
                onClick={() => window.open(`mailto:${config.social.email}`, "_blank")}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-8 text-lg">Quick Links</h3>
            <div className="space-y-4">
              <Link href="/" className="block text-gray-400 hover:text-emerald-400 transition-colors font-medium">
                Home
              </Link>
              <Link
                href="#founders"
                className="block text-gray-400 hover:text-emerald-400 transition-colors font-medium"
              >
                Founders
              </Link>
              <Link
                href="/join-team"
                className="block text-gray-400 hover:text-emerald-400 transition-colors font-medium"
              >
                Join Team
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-8 text-lg">Contact</h3>
            <div className="space-y-4">
              <a
                href={`mailto:${config.social.email}`}
                className="block text-gray-400 hover:text-emerald-400 transition-colors font-medium"
              >
                {config.social.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © 2024 {config.company.name}. All rights reserved. | Building the future of AI-driven trading.
          </p>
        </div>
      </div>
    </footer>
  )
}
