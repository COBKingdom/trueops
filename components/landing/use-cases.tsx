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
    window.location.href = "https://aqua.trueops.app/auth"
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
          <Card
            onClick={goToAqua}
            className="group cursor-pointer overflow-hidden rounded-3xl border-0 bg-[#071533] text-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >

            <CardContent className="p-7">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">

                <Droplets className="h-7 w-7 text-blue-300" />

              </div>

              <div className="mt-6">

                <h3 className="text-2xl font-bold">
                  AquaOps
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-blue-100">

                  Water factory management software for tracking
                  production, sales, expenses, debts, cash flow,
                  reports and operational performance in real time.

                </p>

              </div>

              {/* FEATURES */}
              <div className="mt-6 space-y-2 text-sm text-blue-100">

                <p>• Live cloud synchronization</p>
                <p>• Multi-device access</p>
                <p>• Universal currency support</p>
                <p>• Professional reporting</p>

              </div>

              {/* CTA */}
              <div className="mt-8 flex items-center gap-2 font-medium text-blue-300 transition group-hover:translate-x-1">

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