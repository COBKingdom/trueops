"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const goToAqua = () => {
    window.location.href = "https://aqua.trueops.app/aquaops"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90">

      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <div className="flex items-center gap-4">

          <img
            src="/logo.png"
            alt="TrueOps Logo"
            className="h-16 w-auto object-contain sm:h-20"
          />

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold text-[#071533]">
              TrueOps
            </h1>

            <p className="text-xs text-gray-500">
              Operations Platform
            </p>
          </div>

        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 md:flex">

          <a
            href="#problem"
            className="text-sm font-medium text-gray-600 transition hover:text-[#2563eb]"
          >
            Problem
          </a>

          <a
            href="#solution"
            className="text-sm font-medium text-gray-600 transition hover:text-[#2563eb]"
          >
            Solution
          </a>

          <a
            href="#products"
            className="text-sm font-medium text-gray-600 transition hover:text-[#2563eb]"
          >
            Products
          </a>

        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">

          <Button
            variant="outline"
            className="border-[#2563eb] text-[#2563eb] hover:bg-blue-50"
            onClick={goToAqua}
          >
            Login
          </Button>

          <Button
            className="bg-[#2563eb] hover:bg-blue-700"
            onClick={goToAqua}
          >
            Start Free
          </Button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-[#071533]" />
          ) : (
            <Menu className="h-6 w-6 text-[#071533]" />
          )}
        </button>

      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden">

          <nav className="flex flex-col gap-4 px-6 py-6">

            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700"
            >
              Problem
            </a>

            <a
              href="#solution"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700"
            >
              Solution
            </a>

            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-medium text-gray-700"
            >
              Products
            </a>

            <Button
              className="mt-3 bg-[#2563eb] hover:bg-blue-700"
              onClick={() => {
                setMobileMenuOpen(false)
                goToAqua()
              }}
            >
              Launch AquaOps
            </Button>

          </nav>

        </div>
      )}
    </header>
  )
}