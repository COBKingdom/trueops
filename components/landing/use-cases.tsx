"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Droplets,
  Store,
  Factory,
  Sparkles,
} from "lucide-react"

export function UseCases() {
  const goToAqua = () => {
    window.location.href = "https://aqua.trueops.app/aquaops"
  }

  return (
    <section
      id="products"
      className="bg-[#f5f7fb] px-4 py-20 sm:px-6 lg:px-8"
    >

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-[#2563eb]">

            <Sparkles className="h-4 w-4" />
            TrueOps Product Ecosystem

          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-[#071533]">

            Operations Software Built For Real Businesses

          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">

            TrueOps provides specialized business management applications
            designed for different industries — helping businesses manage
            operations, production, sales, expenses, reporting and growth
            from a single ecosystem.

          </p>

        </div>

        {/* PRODUCT GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {/* AQUAOPS */}
{/* AQUAOPS */}
<Card
  onClick={goToAqua}
  className="group relative cursor-pointer overflow-hidden rounded-3xl border-0 bg-[#071533] text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]"
>

  {/* GLOW */}
  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

  <CardContent className="relative p-7">

    {/* TOP */}
    <div className="flex items-start justify-between">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">

        <Droplets className="h-7 w-7 text-blue-300" />

      </div>

      <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1">

        <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

        <span className="text-[11px] font-semibold text-green-300">
          LIVE OPERATIONS
        </span>

      </div>

    </div>

    {/* TITLE */}
    <div className="mt-6">

      <h3 className="text-3xl font-bold tracking-tight">
        AquaOps
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-blue-100">

        Operational intelligence software for water factories —
        helping businesses manage production, sales, expenses,
        debts, reporting and profitability from one platform.

      </p>

    </div>

    {/* LIVE METRICS */}
    <div className="mt-7 grid grid-cols-2 gap-3">

      <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
        <p className="text-xs text-blue-200">
          Revenue Today
        </p>

        <p className="mt-1 text-xl font-bold">
          $524K
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
        <p className="text-xs text-blue-200">
          Production
        </p>

        <p className="mt-1 text-xl font-bold">
          700 Bags
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
        <p className="text-xs text-blue-200">
          Net Cash Profit
        </p>

        <p className="mt-1 text-xl font-bold text-green-300">
          $239K
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
        <p className="text-xs text-blue-200">
          Outstanding Debt
        </p>

        <p className="mt-1 text-xl font-bold text-orange-300">
          $205K
        </p>
      </div>

    </div>

    {/* FEATURES */}
    <div className="mt-7 space-y-2 text-sm text-blue-100">

      <p>• Cloud synchronized operations</p>
      <p>• Multi-device operational access</p>
      <p>• Real-time business reporting</p>
      <p>• Financial intelligence dashboard</p>

    </div>

    {/* CTA */}
    <div className="mt-8 flex items-center gap-2 font-semibold text-blue-300 transition group-hover:translate-x-1">

      Launch AquaOps
      <ArrowRight className="h-4 w-4" />

    </div>

  </CardContent>
</Card>

          {/* RETAILOPS */}
          <Card className="rounded-3xl border-0 bg-white shadow-md">

            <CardContent className="p-7">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">

                <Store className="h-7 w-7 text-orange-500" />

              </div>

              <div className="mt-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold text-[#071533]">
                    RetailOps
                  </h3>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                    Coming Soon
                  </span>

                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">

                  Retail operations platform for inventory,
                  sales tracking, customer management and
                  retail business analytics.

                </p>

              </div>

            </CardContent>
          </Card>

          {/* FACTORYOPS */}
          <Card className="rounded-3xl border-0 bg-white shadow-md">

            <CardContent className="p-7">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">

                <Factory className="h-7 w-7 text-green-600" />

              </div>

              <div className="mt-6">

                <div className="flex items-center justify-between">

                  <h3 className="text-2xl font-bold text-[#071533]">
                    FactoryOps
                  </h3>

                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500">
                    Coming Soon
                  </span>

                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">

                  Manufacturing operations management for
                  production facilities, industrial tracking,
                  workflow monitoring and operational reporting.

                </p>

              </div>

            </CardContent>
          </Card>

        </div>

      </div>
    </section>
  )
}