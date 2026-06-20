"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Droplets,
  Factory,
  Sparkles,
  Egg,
} from "lucide-react"
export function UseCases() {
  const goToAqua = () => {
    window.location.href = "https://aqua.trueops.app/aquaops"
  }
  const goToPoultry = () => {
  window.location.href = "https://poultry.trueops.app"
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

{/* LIVE DASHBOARD PREVIEW */}
<div className="relative mt-8">

  {/* GLOW */}
  <div className="absolute inset-0 rounded-[28px] bg-blue-500/10 blur-2xl" />

  {/* MAIN IMAGE */}
  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#091a3d] shadow-2xl">

    <img
      src="/aqua-dashboard-mobile.png"
      alt="AquaOps Dashboard"
      className="w-full object-cover"
    />

    {/* FLOATING STATUS */}
    <div className="absolute left-4 top-4 rounded-full bg-green-500/90 px-3 py-1 text-[11px] font-semibold text-white shadow-lg">

      ● LIVE OPERATIONS

    </div>

    {/* FLOATING METRIC */}
    <div className="absolute bottom-4 right-4 rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl">

      <p className="text-[11px] text-gray-300">
        Net Cash Profit
      </p>

      <p className="text-lg font-bold text-green-300">
        $439K
      </p>

    </div>

  </div>

  {/* FLOATING REPORT CARD */}
  <div className="absolute -bottom-10 -left-2 hidden w-40 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1b3e] shadow-2xl sm:block">

    <img
      src="/aqua-reports-mobile.png"
      alt="AquaOps Reports"
      className="w-full object-cover"
    />

  </div>

</div>

{/* LIVE METRICS */}
<div className="mt-16 grid grid-cols-2 gap-3">

  <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
    <p className="text-xs text-blue-200">
      Revenue
    </p>

    <p className="mt-1 text-xl font-bold">
      $952K
    </p>
  </div>

  <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
    <p className="text-xs text-blue-200">
      Production
    </p>

    <p className="mt-1 text-xl font-bold">
      5746 Bags
    </p>
  </div>

  <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
    <p className="text-xs text-blue-200">
      Net Cash Profit
    </p>

    <p className="mt-1 text-xl font-bold text-green-300">
      $439K
    </p>
  </div>

  <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
    <p className="text-xs text-blue-200">
      Outstanding Debt
    </p>

    <p className="mt-1 text-xl font-bold text-orange-300">
      $2.7K
    </p>
  </div>

</div>

{/* FEATURES */}
<div className="mt-7 space-y-2 text-sm text-blue-100">

  <p>• Cloud synchronized operations</p>
  <p>• Multi-device operational access</p>
  <p>• Financial intelligence reporting</p>
  <p>• Real-time production visibility</p>

</div>

    {/* CTA */}
    <div className="mt-8 flex items-center gap-2 font-semibold text-blue-300 transition group-hover:translate-x-1">

      Launch AquaOps
      <ArrowRight className="h-4 w-4" />

    </div>

  </CardContent>
</Card>

{/* POULTRYOPS */}
<Card
  onClick={goToPoultry}
  className="group relative cursor-pointer overflow-hidden rounded-3xl border-0 bg-[#071533] text-white shadow-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.25)]"
>

  <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />

  <CardContent className="relative p-7">

    {/* TOP */}
    <div className="flex items-start justify-between">

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
        <Egg className="h-7 w-7 text-blue-300" />
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
        PoultryOps
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-blue-100">

        Operational intelligence platform for modern poultry farms —
        helping farmers manage flocks, egg production, feed usage,
        health records, mortality, sales, expenses and profitability.

      </p>

    </div>

    {/* SCREENSHOT AREA */}
    <div className="relative mt-8">

      <div className="absolute inset-0 rounded-[28px] bg-blue-500/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#091a3d] shadow-2xl">

        <img
          src="/poultryops-dashboard.png"
          alt="PoultryOps Dashboard"
          className="w-full object-cover"
        />

        <div className="absolute left-4 top-4 rounded-full bg-green-500 px-3 py-1 text-[11px] font-semibold text-white shadow-lg">

          ● LIVE FARM DATA

        </div>

      </div>

      {/* FLOATING FEATURE IMAGE */}
      <div className="absolute -bottom-6 -left-2 hidden w-28 overflow-hidden rounded-2xl border border-white/10 bg-[#0d1b3e] shadow-2xl sm:block">

        <img
          src="/poultry-menu-mobile.png"
          alt="PoultryOps Features"
          className="w-full object-cover"
        />

      </div>

    </div>

    {/* METRICS */}
    <div className="mt-14 grid grid-cols-2 gap-3">

      <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
        <p className="text-xs text-blue-200">
          Active Birds
        </p>

        <p className="mt-1 text-xl font-bold">
          1.1K
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
        <p className="text-xs text-blue-200">
          Eggs Today
        </p>

        <p className="mt-1 text-xl font-bold">
          3.9K
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
        <p className="text-xs text-blue-200">
          Revenue
        </p>

        <p className="mt-1 text-xl font-bold text-green-300">
          $606K
        </p>
      </div>

      <div className="rounded-2xl bg-white/5 p-4 backdrop-blur">
        <p className="text-xs text-blue-200">
          Profit
        </p>

        <p className="mt-1 text-xl font-bold text-green-300">
          $560K
        </p>
      </div>

    </div>

    {/* FEATURES */}
    <div className="mt-7 space-y-2 text-sm text-blue-100">

      <p>• Flock management</p>
      <p>• Egg production tracking</p>
      <p>• Feed & inventory management</p>
      <p>• Health & mortality monitoring</p>
      <p>• Sales, expenses & reporting</p>

    </div>

    {/* CTA */}
    <div className="mt-8 flex items-center gap-2 font-semibold text-blue-300 transition group-hover:translate-x-1">

      Launch PoultryOps
      <ArrowRight className="h-4 w-4" />

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