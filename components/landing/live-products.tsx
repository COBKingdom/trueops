"use client"

import { Button } from "@/components/ui/button"

export function LiveProducts() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            ● Live Products
          </div>

          <h2 className="mt-6 text-4xl font-bold text-[#071533]">
            Operational Software Built For Real Industries
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            TrueOps delivers industry-specific operational intelligence
            platforms that help businesses monitor performance,
            improve visibility and make better decisions.
          </p>

        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* AQUAOPS */}

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

            <img
              src="/aqua-dashboard-mobile.png"
              alt="AquaOps Dashboard"
              className="w-full"
            />

            <div className="p-8">

              <div className="flex items-center justify-between">

                <h3 className="text-3xl font-bold text-[#071533]">
                  AquaOps
                </h3>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  LIVE
                </span>

              </div>

              <p className="mt-4 text-gray-600">
                Operational intelligence platform for water factories.
                Manage production, sales, expenses, debts,
                reporting and profitability from one dashboard.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                  Production Tracking
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                  Financial Reporting
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                  Multi Currency
                </span>

              </div>

              <Button
                className="mt-8 bg-[#2563eb] hover:bg-blue-700"
                onClick={() =>
                  window.location.href =
                    "https://aqua.trueops.app/aquaops"
                }
              >
                Launch AquaOps
              </Button>

            </div>

          </div>

          {/* POULTRYOPS */}

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl">

            <img
              src="/poultryops-dashboard.png"
              alt="PoultryOps Dashboard"
              className="w-full"
            />

            <div className="p-8">

              <div className="flex items-center justify-between">

                <h3 className="text-3xl font-bold text-[#071533]">
                  PoultryOps
                </h3>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                  LIVE
                </span>

              </div>

              <p className="mt-4 text-gray-600">
                Operational intelligence platform for modern poultry farms.
                Track flocks, egg production, feed, mortality,
                health records, sales and profitability.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                  Flock Management
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                  Egg Production
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700">
                  Feed Tracking
                </span>

              </div>

              <Button
                className="mt-8 bg-[#2563eb] hover:bg-blue-700"
                onClick={() =>
                  window.location.href =
                    "https://poultry.trueops.app"
                }
              >
                Launch PoultryOps
              </Button>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}