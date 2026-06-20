"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const goToAqua = () => {
    window.location.href = "https://aqua.trueops.app/aquaops"
  }

  const goToPoultry = () => {
    window.location.href = "https://poultry.trueops.app"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/70 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">

      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT */}
        <div className="flex items-center gap-3">

          <img
            src="/logo.png"
            alt="TrueOps Logo"
            className="h-11 w-auto object-contain sm:h-14"
          />

          <div className="flex flex-col leading-tight">

            <h1 className="text-[17px] font-bold tracking-tight text-[#071533] sm:text-[20px]">
              TrueOps
            </h1>

            <div className="flex items-center gap-2">

              <p className="text-[11px] text-gray-500 sm:text-xs">
                Operational Platform
              </p>

              <div className="hidden sm:flex items-center gap-1 rounded-full bg-green-50 px-2 py-[2px]">

                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

                <span className="text-[10px] font-medium text-green-700">
                  2 LIVE PRODUCTS
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 md:flex">

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

        {/* DESKTOP CTA */}
        <div className="hidden items-center gap-3 md:flex">

          <Button
            variant="outline"
            className="h-11 rounded-xl border-[#2563eb] text-[#2563eb] hover:bg-blue-50"
            onClick={goToAqua}
          >
            AquaOps
          </Button>

          <Button
            variant="outline"
            className="h-11 rounded-xl border-green-600 text-green-700 hover:bg-green-50"
            onClick={goToPoultry}
          >
            PoultryOps
          </Button>

          <Button
            className="h-11 rounded-xl bg-[#2563eb] px-5 text-sm font-semibold shadow-sm transition hover:bg-blue-700"
            onClick={goToAqua}
          >
            Start Free
          </Button>

        </div>

        {/* MOBILE RIGHT */}
        <div className="flex items-center gap-3 md:hidden">

          <Button
            size="sm"
            className="h-9 rounded-lg bg-[#2563eb] px-3 text-xs font-semibold shadow-sm hover:bg-blue-700"
            onClick={goToAqua}
          >
            Launch
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="rounded-lg border border-gray-200 p-2"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-[#071533]" />
            ) : (
              <Menu className="h-5 w-5 text-[#071533]" />
            )}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur md:hidden">

          <nav className="flex flex-col gap-5 px-5 py-6">

            <div className="flex items-center gap-2 rounded-xl bg-green-50 px-3 py-2">

              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

              <p className="text-xs font-medium text-green-700">
                AquaOps & PoultryOps Live
              </p>

            </div>

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
              className="mt-2 h-11 rounded-xl bg-[#2563eb] text-sm font-semibold hover:bg-blue-700"
              onClick={() => {
                setMobileMenuOpen(false)
                goToAqua()
              }}
            >
              Launch AquaOps
            </Button>

            <Button
              className="h-11 rounded-xl bg-green-600 text-sm font-semibold hover:bg-green-700"
              onClick={() => {
                setMobileMenuOpen(false)
                goToPoultry()
              }}
            >
              Launch PoultryOps
            </Button>

          </nav>

        </div>
      )}
    </header>
  )
}