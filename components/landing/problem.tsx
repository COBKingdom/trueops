import {
  AlertCircle,
  HelpCircle,
  TrendingDown,
} from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "Revenue without operational clarity",
    description:
      "Many businesses generate sales daily but still struggle to understand real profitability, cash flow and operational performance.",
  },

  {
    icon: HelpCircle,
    title: "Manual processes slow growth",
    description:
      "Business operations are often spread across notebooks, spreadsheets and disconnected systems that create confusion and inefficiency.",
  },

  {
    icon: AlertCircle,
    title: "Poor visibility across operations",
    description:
      "Tracking production, expenses, debts, inventory and business activities becomes difficult as operations grow.",
  },
]

export function Problem() {
  return (
    <section
      id="problem"
      className="border-t border-white/10 bg-[#071533] px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
    >

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full bg-blue-500/10 px-4 py-1 text-sm font-medium text-blue-300">

            Business Operations Challenges

          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">

            Businesses Need Better Operational Control

          </h2>

          <p className="mt-5 text-lg leading-relaxed text-blue-100">

            TrueOps was created to help businesses manage operations,
            monitor performance and gain visibility into critical
            business activities using industry-focused software tools.

          </p>

        </div>

        {/* CARDS */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {problems.map((problem, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition-all hover:border-blue-400/30 hover:bg-white/10"
            >

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">

                <problem.icon className="h-7 w-7 text-blue-300" />

              </div>

              <h3 className="mb-4 text-xl font-semibold text-white">

                {problem.title}

              </h3>

              <p className="leading-relaxed text-blue-100">

                {problem.description}

              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}