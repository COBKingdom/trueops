export function TrustSection() {
  return (
    <section className="bg-[#f8fafc] px-4 py-20 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="text-center">

          <div className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-[#2563eb]">
            Built For Real Operations
          </div>

          <h2 className="mt-6 text-4xl font-bold text-[#071533]">
            Trusted Operational Intelligence
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
            TrueOps helps businesses move beyond spreadsheets and
            manual record keeping by providing operational visibility,
            reporting and performance tracking from anywhere.
          </p>

        </div>

        {/* INDUSTRIES */}

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-3xl">💧</div>

            <h3 className="mt-4 font-bold text-[#071533]">
              Water Factories
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Production, sales, expenses, debt tracking and reporting.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-3xl">🐔</div>

            <h3 className="mt-4 font-bold text-[#071533]">
              Poultry Farms
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Flocks, egg production, feed, mortality and profitability.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-3xl">🏢</div>

            <h3 className="mt-4 font-bold text-[#071533]">
              Multi-Site Operations
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Monitor operations across multiple locations and teams.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="text-3xl">📈</div>

            <h3 className="mt-4 font-bold text-[#071533]">
              Growing Businesses
            </h3>

            <p className="mt-2 text-sm text-gray-600">
              Scalable operational systems designed for growth.
            </p>
          </div>

        </div>

        {/* PLATFORM BENEFITS */}

        <div className="mt-14 grid gap-4 md:grid-cols-4">

          <div className="rounded-2xl bg-[#071533] p-6 text-center text-white">
            <h3 className="text-lg font-bold">
              Cloud Based
            </h3>

            <p className="mt-2 text-sm text-blue-100">
              Access data anywhere.
            </p>
          </div>

          <div className="rounded-2xl bg-[#071533] p-6 text-center text-white">
            <h3 className="text-lg font-bold">
              Multi Device
            </h3>

            <p className="mt-2 text-sm text-blue-100">
              Mobile, tablet and desktop access.
            </p>
          </div>

          <div className="rounded-2xl bg-[#071533] p-6 text-center text-white">
            <h3 className="text-lg font-bold">
              Operational Reporting
            </h3>

            <p className="mt-2 text-sm text-blue-100">
              Real-time business intelligence.
            </p>
          </div>

          <div className="rounded-2xl bg-[#071533] p-6 text-center text-white">
            <h3 className="text-lg font-bold">
              Historical Records
            </h3>

            <p className="mt-2 text-sm text-blue-100">
              Long-term operational visibility.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}