import { AlertCircle, HelpCircle, TrendingDown } from "lucide-react"

const problems = [
  {
    icon: TrendingDown,
    title: "Revenue without clarity",
    description: "You see money coming in but have no idea how much you actually keep after all expenses."
  },
  {
    icon: HelpCircle,
    title: "Hidden costs everywhere",
    description: "Production costs, operational expenses, and unexpected charges eat into your margins."
  },
  {
    icon: AlertCircle,
    title: "Customer debts pile up",
    description: "Outstanding payments from customers grow while you struggle to track who owes what."
  }
]

export function Problem() {
  return (
    <section id="problem" className="border-t border-border/40 bg-card px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            You are making sales but don&apos;t know your real profit
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Most business owners face these challenges every day
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-border/60 bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <problem.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
