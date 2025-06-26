"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import config from "@/data/config.json"
import { Logo } from "@/components/logo"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Logo size="md" showText={true} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-emerald-400 font-medium transition-colors">
              Home
            </Link>
            <Link href="/founders" className="text-gray-300 hover:text-emerald-400 font-medium transition-colors">
              Founders
            </Link>
            <Link href="/join-team" className="text-gray-300 hover:text-emerald-400 font-medium transition-colors">
              Join Team
            </Link>
            <Button className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/30 hover:text-emerald-300 px-6 py-2 font-medium">
              {config.company.status}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/40 backdrop-blur-xl rounded-b-lg">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/founders"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Founders
              </Link>
              <Link
                href="/join-team"
                className="block px-3 py-2 text-gray-300 hover:text-emerald-400 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Join Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
