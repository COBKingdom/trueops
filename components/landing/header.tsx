"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const goToAqua = () => {
    window.location.href = "https://aqua.trueops.app/onboarding"
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-sm font-bold text-primary-foreground">T</span>
          </div>
          <span className="text-xl font-semibold text-foreground">TrueOps</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#problem" className="text-sm text-muted-foreground hover:text-foreground">
            Problem
          </a>
          <a href="#solution" className="text-sm text-muted-foreground hover:text-foreground">
            Solution
          </a>
          <a href="#products" className="text-sm text-muted-foreground hover:text-foreground">
            Products
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button onClick={goToAqua}>
            Start with AquaOps
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <nav className="flex flex-col gap-4 px-4 py-6">
            <a href="#problem" onClick={() => setMobileMenuOpen(false)}>
              Problem
            </a>
            <a href="#solution" onClick={() => setMobileMenuOpen(false)}>
              Solution
            </a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>
              Products
            </a>

            <Button
              className="mt-2 w-full"
              onClick={() => {
                setMobileMenuOpen(false)
                goToAqua()
              }}
            >
              Start with AquaOps
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}