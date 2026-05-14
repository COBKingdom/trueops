"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Layers3,
  Globe,
  Database,
  BarChart3,
} from "lucide-react"

export function Hero() {
  const goToAqua = () => {
    window.location.href = "https://aqua.trueops.app/aquaops"
  }

  const scrollToProducts = () => {
    const section = document.getElementById("products")

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative overflow-hidden bg-[#071533] px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute right-0 top-0 h-[450px] w-[450px] translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] -translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-400/10 blur-3xl" />

      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-200">

            <Layers3 className="h-4 w-4" />
            Operations Software Ecosystem

          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

            Business Operations Software Built For Real Industries

          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">

            TrueOps provides industry-focused operational software
            that helps businesses manage production, sales,
            expenses, reporting and operational performance
            using specialized cloud-powered applications.

          </p>

          {/* FEATURE LIST */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur">

              <Database className="mt-1 h-5 w-5 text-blue-300" />

              <div>
                <p className="font-medium text-white">
                  Cloud Synchronization
                </p>

                <p className="mt-1 text-sm text-blue-100">
                  Real-time operational syncing across devices.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur">

              <BarChart3 className="mt-1 h-5 w-5 text-blue-300" />

              <div>
                <p className="font-medium text-white">
                  Operational Visibility
                </p>

                <p className="mt-1 text-sm text-blue-100">
                  Monitor business performance with clarity.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur">

              <Globe className="mt-1 h-5 w-5 text-blue-300" />

              <div>
                <p className="font-medium text-white">
                  Global Ready
                </p>

                <p className="mt-1 text-sm text-blue-100">
                  Universal currency support for international businesses.
                </p>
              </div>

            </div>

            <div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 backdrop-blur">

              <Layers3 className="mt-1 h-5 w-5 text-blue-300" />

              <div>
                <p className="font-medium text-white">
                  Industry Apps
                </p>

                <p className="mt-1 text-sm text-blue-100">
                  Specialized software products for different industries.
                </p>
              </div>

            </div>

          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <Button
              size="lg"
              className="gap-2 bg-[#2563eb] text-white hover:bg-blue-700"
              onClick={scrollToProducts}
            >
              Explore Products
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-blue-300 bg-transparent text-white hover:bg-white hover:text-[#071533]"
              onClick={goToAqua}
            >
              Launch AquaOps
            </Button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative">

          {/* MAIN CARD */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">

            <div className="flex items-center justify-between border-b border-white/10 pb-4">

              <div>
                <p className="text-sm text-blue-200">
                  Featured Product
                </p>

                <h3 className="text-2xl font-bold text-white">
                  AquaOps
                </h3>
              </div>

              <div className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-300">
                Live
              </div>

            </div>

            {/* SCREENSHOT */}
            <div className="mt-6 overflow-hidden rounded-2xl">

              <img
                src="/dashboard-preview.png"
                alt="AquaOps Dashboard"
                className="w-full rounded-2xl"
              />

            </div>

            {/* STATS */}
            <div className="mt-6 grid grid-cols-3 gap-4">

              <div className="rounded-2xl bg-[#0d1b3e] p-4 text-center">
                <p className="text-xs text-blue-200">
                  Sync
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  Live
                </p>
              </div>

              <div className="rounded-2xl bg-[#0d1b3e] p-4 text-center">
                <p className="text-xs text-blue-200">
                  Access
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  Multi-Device
                </p>
              </div>

              <div className="rounded-2xl bg-[#0d1b3e] p-4 text-center">
                <p className="text-xs text-blue-200">
                  Currency
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  Global
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}