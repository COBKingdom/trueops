import { Factory, ShoppingCart, Receipt, Users, TrendingUp } from "lucide-react"

const solutions = [
  {
    icon: Factory,
    title: "Production",
    description: "Track all production costs and materials in real-time"
  },
  {
    icon: ShoppingCart,
    title: "Sales",
    description: "Monitor revenue streams and sales performance"
  },
  {
    icon: Receipt,
    title: "Expenses",
    description: "Categorize and control every business expense"
  },
  {
    icon: Users,
    title: "Debts",
    description: "Manage customer debts and payment collection"
  },
  {
    icon: TrendingUp,
    title: "Profit",
    description: "See your real profit numbers at a glance"
  }
]

export function Solution() {
  return (
    <section id="solution" className="px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            The Solution
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to know your numbers
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            One platform to track production, sales, expenses, debts, and profit
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl border border-border/60 bg-card p-6 text-center transition-all hover:border-primary/40 hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <solution.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
