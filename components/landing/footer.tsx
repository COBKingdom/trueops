"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Droplets,
  Factory,
  Store,
} from "lucide-react"

export function Footer() {
  const goToAqua = () => {
    window.location.href = "https://aqua.trueops.app/auth"
  }

  return (
    <footer className="border-t border-white/10 bg-[#071533] px-4 py-16 text-white sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* CTA SECTION */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur sm:p-12">

          <h2 className="text-3xl font-bold sm:text-4xl">

            Ready to improve your business operations?

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">

            Start with AquaOps and experience real-time operational
            visibility, cloud synchronization and business performance tracking.

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
              Explore Products
            </Button>

          </div>

        </div>

        {/* FOOTER GRID */}
        <div className="mt-16 grid gap-10 md:grid-cols-4">

          {/* BRAND */}
          <div className="md:col-span-2">

            <div className="flex items-center gap-3">

              <img
                src="/logo.png"
                alt="TrueOps Logo"
                className="h-10 w-10 object-contain"
              />

              <div>
                <h3 className="text-xl font-bold">
                  TrueOps
                </h3>

                <p className="text-sm text-blue-200">
                  Operations Software Ecosystem
                </p>
              </div>

            </div>

            <p className="mt-5 max-w-md leading-relaxed text-blue-100">

              TrueOps builds industry-focused operational software
              products that help businesses manage production,
              sales, expenses, reporting and operational performance.

            </p>

          </div>

          {/* PRODUCTS */}
          <div>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              Products
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
                <Store className="h-4 w-4" />
                RetailOps
              </div>

              <div className="flex items-center gap-2 text-blue-200/60">
                <Factory className="h-4 w-4" />
                FactoryOps
              </div>

            </div>

          </div>

          {/* PLATFORM */}
          <div>

            <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              Platform
            </h4>

            <div className="mt-5 space-y-3 text-blue-100">

              <p>Cloud Synchronization</p>
              <p>Operational Reporting</p>
              <p>Multi-Device Access</p>
              <p>Universal Currency Support</p>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-blue-200">

          © {new Date().getFullYear()} TrueOps. All rights reserved.

        </div>

      </div>
    </footer>
  )
}