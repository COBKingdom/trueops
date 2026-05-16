"use client"

import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart3,
  Database,
  Globe,
  Layers3,
} from "lucide-react"

export function Solution() {
  const goToAqua = () => {
    window.location.href = "https://aqua.trueops.app/aquaops"
  }

  return (
    <section
      id="solution"
      className="bg-white px-4 py-20 sm:px-6 lg:px-8"
    >

      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-[#2563eb]">

              The TrueOps Solution

            </div>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#071533] sm:text-5xl">

              One Platform.
              Multiple Business Operations Apps.

            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">

              TrueOps provides specialized operational software
              products that help businesses manage production,
              finances, reporting, operational tracking and
              business performance from anywhere.

            </p>

            {/* FEATURES */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="rounded-2xl bg-[#f5f7fb] p-5">

                <Layers3 className="h-8 w-8 text-[#2563eb]" />

                <h3 className="mt-4 font-semibold text-[#071533]">
                  Industry-Specific Apps
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Specialized operational software built for
                  different business sectors.
                </p>

              </div>

              <div className="rounded-2xl bg-[#f5f7fb] p-5">

                <Database className="h-8 w-8 text-[#2563eb]" />

                <h3 className="mt-4 font-semibold text-[#071533]">
                  Cloud Synchronization
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Real-time operational data syncing across
                  multiple devices and locations.
                </p>

              </div>

              <div className="rounded-2xl bg-[#f5f7fb] p-5">

                <BarChart3 className="h-8 w-8 text-[#2563eb]" />

                <h3 className="mt-4 font-semibold text-[#071533]">
                  Operational Visibility
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Gain insight into sales, expenses,
                  production and business performance.
                </p>

              </div>

              <div className="rounded-2xl bg-[#f5f7fb] p-5">

                <Globe className="h-8 w-8 text-[#2563eb]" />

                <h3 className="mt-4 font-semibold text-[#071533]">
                  Global Ready
                </h3>

                <p className="mt-2 text-sm text-gray-600">
                  Universal currency support and scalable
                  architecture for businesses worldwide.
                </p>

              </div>

            </div>

            {/* CTA */}
            <div className="mt-10">

              <Button
                size="lg"
                className="gap-2 bg-[#2563eb] hover:bg-blue-700"
                onClick={goToAqua}
              >
                Launch AquaOps
                <ArrowRight className="h-4 w-4" />
              </Button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <div className="rounded-3xl bg-[#071533] p-8 text-white shadow-2xl">

              <p className="text-sm uppercase tracking-wider text-blue-300">

                Current Product

              </p>

              <h3 className="mt-4 text-4xl font-bold">

                AquaOps

              </h3>

              <p className="mt-5 text-lg leading-relaxed text-blue-100">

                A cloud-powered water factory management system
                built for production businesses that need
                operational visibility and real-time monitoring.

              </p>

              {/* FEATURE LIST */}
              <div className="mt-8 space-y-4 text-blue-100">

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Production Tracking</span>
                  <span>✓</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Sales & Expenses</span>
                  <span>✓</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Debt Management</span>
                  <span>✓</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span>Cloud Synchronization</span>
                  <span>✓</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Multi-Currency Support</span>
                  <span>✓</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}