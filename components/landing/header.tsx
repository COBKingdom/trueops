"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const goToAuth = () => {
    window.location.href = "https://aqua.trueops.app/auth"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#071533]/95 backdrop-blur">

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <div className="flex items-center gap-3">

          <img
            src="/trueops-logo.png"
            alt="TrueOps Logo"
            className="h-9 w-9 object-contain"
          />

          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold text-white">
              TrueOps
            </span>

            <span className="text-[10px] uppercase tracking-wider text-blue-200">
              Operations Software
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">

          <a
            href="#problem"
            className="text-sm text-blue-100 transition hover:text-white"
          >
            Problem
          </a>

          <a
            href="#solution"
            className="text-sm text-blue-100 transition hover:text-white"
          >
            Solution
          </a>

          <a
            href="#products"
            className="text-sm text-blue-100 transition hover:text-white"
          >
            Products
          </a>

        </nav>

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-3 md:flex">

          <Button
            variant="outline"
            className="border-blue-300 bg-transparent text-white hover:bg-white hover:text-[#071533]"
            onClick={goToAuth}
          >
            Login
          </Button>

          <Button
            className="bg-[#2563eb] text-white hover:bg-blue-700"
            onClick={goToAuth}
          >
            Start Free
          </Button>

        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-[#071533] md:hidden">

          <nav className="flex flex-col gap-5 px-4 py-6">

            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-blue-100"
            >
              Problem
            </a>

            <a
              href="#solution"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-blue-100"
            >
              Solution
            </a>

            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-blue-100"
            >
              Products
            </a>

            <div className="flex flex-col gap-3 pt-2">

              <Button
                variant="outline"
                className="w-full border-blue-300 bg-transparent text-white hover:bg-white hover:text-[#071533]"
                onClick={() => {
                  setMobileMenuOpen(false)
                  goToAuth()
                }}
              >
                Login
              </Button>

              <Button
                className="w-full bg-[#2563eb] text-white hover:bg-blue-700"
                onClick={() => {
                  setMobileMenuOpen(false)
                  goToAuth()
                }}
              >
                Start Free
              </Button>

            </div>

          </nav>
        </div>
      )}
    </header>
  )
}