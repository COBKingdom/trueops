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

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute right-0 top-0 h-[450px] w-[450px] translate-x-1/3 -translate-y-1/3 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-[380px] w-[380px] -translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-400/10 blur-3xl" />

      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1 text-sm text-blue-200">

            <Layers3 className="h-4 w-4" />
            Operational Intelligence Platform

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

          {/* FEATURES */}
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
                  Specialized operational software for different industries.
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

          {/* GLOW */}
          <div className="absolute inset-0 rounded-[40px] bg-blue-500/10 blur-3xl" />

          {/* MAIN CARD */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">

            {/* HEADER */}
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-blue-200">
                  Operational Platform
                </p>

                <h3 className="mt-1 text-3xl font-bold text-white">
                  AquaOps
                </h3>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1">

                <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

                <span className="text-xs font-semibold text-green-300">
                  LIVE
                </span>

              </div>

            </div>

            {/* DASHBOARD */}
            <div className="relative mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-[#091a3d]">

              <img
                src="/aqua-dashboard-mobile.png"
                alt="AquaOps Dashboard"
                className="w-full object-cover"
              />

              {/* FLOATING METRIC */}
              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-xl">

                <p className="text-[11px] text-gray-300">
                  Net Cash Profit
                </p>

                <p className="text-xl font-bold text-green-300">
                  $439K
                </p>

              </div>

              {/* LIVE BADGE */}
              <div className="absolute right-4 top-4 rounded-full bg-green-500/90 px-3 py-1 text-[11px] font-semibold text-white shadow-lg">

                ● LIVE OPERATIONS

              </div>

            </div>

            {/* FLOATING REPORT CARD */}
            <div className="absolute -bottom-10 -right-6 hidden w-44 overflow-hidden rounded-3xl border border-white/10 bg-[#0d1b3e] shadow-2xl xl:block">

              <img
                src="/aqua-reports-mobile.png"
                alt="AquaOps Reports"
                className="w-full object-cover"
              />

            </div>

            {/* METRICS */}
            <div className="mt-8 grid grid-cols-3 gap-3">

              <div className="rounded-2xl bg-[#0d1b3e] p-4 text-center">

                <p className="text-xs text-blue-200">
                  Revenue
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  $952K
                </p>

              </div>

              <div className="rounded-2xl bg-[#0d1b3e] p-4 text-center">

                <p className="text-xs text-blue-200">
                  Production
                </p>

                <p className="mt-1 text-lg font-bold text-white">
                  5746 Bags
                </p>

              </div>

              <div className="rounded-2xl bg-[#0d1b3e] p-4 text-center">

                <p className="text-xs text-blue-200">
                  Access
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