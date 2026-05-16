"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Droplets,
  Factory,
  Wheat,
  Fuel,
  ShieldCheck,
  Mail,
  Globe,
} from "lucide-react"

export function Footer() {
  const goToAqua = () => {
    window.location.href = "https://aqua.trueops.app/aquaops"
  }

  return (
    <footer className="border-t border-white/10 bg-[#071533] px-4 py-16 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* CTA SECTION */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:p-12">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to modernize your business operations?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">

            Launch AquaOps and experience operational visibility,
            cloud synchronization, business reporting and real-time
            financial intelligence from anywhere.

          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <Button
              size="lg"
              className="gap-2 bg-[#2563eb] hover:bg-blue-700"
              onClick={goToAqua}
            >
              Launch AquaOps
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-300 bg-transparent text-white hover:bg-white hover:text-[#071533]"
              onClick={() => {
                const section = document.getElementById("products")

                if (section) {
                  section.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              }}
            >
              Explore Ecosystem
            </Button>

          </div>

        </div>

        {/* FOOTER GRID */}
        <div className="mt-16 grid gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-5">

              <div className="rounded-2xl bg-white px-4 py-3 shadow-xl">

                <img
                  src="/logo.png"
                  alt="TrueOps Logo"
                  className="h-20 w-auto object-contain sm:h-24"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-white">
                  TrueOps
                </h3>

                <p className="text-sm text-blue-200">
                  Operational Software Ecosystem
                </p>

              </div>

            </div>

            <p className="mt-6 max-w-md leading-relaxed text-blue-100">

              TrueOps develops industry-focused operational software
              platforms that help businesses improve operational visibility,
              production tracking, financial intelligence and reporting.

            </p>

            {/* TRUST ITEMS */}
            <div className="mt-6 space-y-3 text-sm text-blue-100">

              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-300" />
                Secure cloud-powered infrastructure
              </div>

              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-300" />
                Multi-device operational access
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-300" />
                support@trueops.app
              </div>

            </div>

          </div>

          {/* PRODUCTS */}
          <div>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              Ecosystem Products
            </h4>

            <div className="mt-5 space-y-4">

              <button
                onClick={goToAqua}
                className="flex items-center gap-2 text-blue-100 transition hover:text-white"
              >
                <Droplets className="h-4 w-4" />
                AquaOps
              </button>

              <div className="flex items-center gap-2 text-blue-200/60">
                <Wheat className="h-4 w-4" />
                FarmOps
              </div>

              <div className="flex items-center gap-2 text-blue-200/60">
                <Fuel className="h-4 w-4" />
                FuelOps
              </div>

              <div className="flex items-center gap-2 text-blue-200/60">
                <Factory className="h-4 w-4" />
                FactoryOps
              </div>

            </div>

          </div>

          {/* LEGAL + PLATFORM */}
<div className="mt-5 space-y-3 text-blue-100">

  <a href="/privacy" className="block transition hover:text-white">
    Privacy Policy
  </a>

  <a href="/terms" className="block transition hover:text-white">
    Terms of Service
  </a>

  <a href="/security" className="block transition hover:text-white">
    Data & Security
  </a>

  <a href="/disclaimer" className="block transition hover:text-white">
    Platform Disclaimer
  </a>

  <a
    href="mailto:support@trueops.app"
    className="block transition hover:text-white"
  >
    Contact Support
  </a>

</div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-blue-200 md:flex-row">

          <p>
            © {new Date().getFullYear()} TrueOps. All rights reserved.
          </p>

          <p className="text-center md:text-right">
            Operational Software Infrastructure For Real Industries
          </p>

        </div>

      </div>

    </footer>
  )
}