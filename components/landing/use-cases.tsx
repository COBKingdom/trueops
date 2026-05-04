import { Droplets, Store, Factory } from "lucide-react"
import { Button } from "@/components/ui/button"

const useCases = [
  {
    icon: Droplets,
    name: "AquaOps",
    description: "Built for water production and distribution businesses. Track bottles, deliveries, and customer accounts.",
    status: "active",
    color: "bg-primary"
  },
  {
    icon: Store,
    name: "RetailOps",
    description: "Designed for retail stores. Manage inventory, track sales, and monitor supplier payments.",
    status: "coming",
    color: "bg-muted"
  },
  {
    icon: Factory,
    name: "FactoryOps",
    description: "Perfect for manufacturing businesses. Monitor production costs, raw materials, and output.",
    status: "coming",
    color: "bg-muted"
  }
]

export function UseCases() {
  return (
    <section id="products" className="border-t border-border/40 bg-card px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Products
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Solutions tailored for your industry
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Choose the platform designed for your specific business needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border p-8 transition-all ${
                useCase.status === "active"
                  ? "border-primary/40 bg-background shadow-lg"
                  : "border-border/60 bg-background/50"
              }`}
            >
              {useCase.status === "active" && (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Available Now
                  </span>
                </div>
              )}
              {useCase.status === "coming" && (
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                    Coming Soon
                  </span>
                </div>
              )}

              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${
                useCase.status === "active" ? "bg-primary" : "bg-muted"
              }`}>
                <useCase.icon className={`h-7 w-7 ${
                  useCase.status === "active" ? "text-primary-foreground" : "text-muted-foreground"
                }`} />
              </div>

              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {useCase.name}
              </h3>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>

              {useCase.status === "active" ? (
                <Button className="w-full">Get Started</Button>
              ) : (
                <Button variant="outline" className="w-full" disabled>
                  Notify Me
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
