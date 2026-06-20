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
<div className="mt-10 flex flex-col gap-3 sm:flex-row">

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
    className="gap-2 border-green-600 text-green-700 hover:bg-green-50"
    onClick={() => {
      window.location.href = "https://poultry.trueops.app"
    }}
  >
    Launch PoultryOps
    <ArrowRight className="h-4 w-4" />
  </Button>

</div>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="rounded-3xl bg-[#071533] p-8 text-white shadow-2xl">

              <p className="text-sm uppercase tracking-wider text-blue-300">
                Live Ecosystem
              </p>

              {/* AQUAOPS */}
              <div className="mt-6 border-b border-white/10 pb-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-3xl font-bold">
                    AquaOps
                  </h3>

                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                    LIVE
                  </span>

                </div>

                <p className="mt-3 text-blue-100">
                  Operational intelligence platform for water factories.
                </p>

                <div className="mt-4 space-y-2 text-sm text-blue-100">
                  <div>✓ Production Tracking</div>
                  <div>✓ Sales & Expenses</div>
                  <div>✓ Debt Management</div>
                  <div>✓ Multi-Currency Support</div>
                </div>

              </div>

              {/* POULTRYOPS */}
              <div className="pt-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-3xl font-bold">
                    PoultryOps
                  </h3>

                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-300">
                    LIVE
                  </span>

                </div>

                <p className="mt-3 text-blue-100">
                  Operational intelligence platform for modern poultry farms.
                </p>

                <div className="mt-4 space-y-2 text-sm text-blue-100">
                  <div>✓ Flock Management</div>
                  <div>✓ Egg Production Tracking</div>
                  <div>✓ Feed Monitoring</div>
                  <div>✓ Health & Mortality Records</div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}