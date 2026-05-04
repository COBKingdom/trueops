import { Card, CardContent } from "@/components/ui/card"

export function UseCases() {
  const handleClick = () => {
    window.location.href = "https://aqua.trueops.app/onboarding"
  }

  return (
    <section id="products" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold mb-10">
          Choose your operation
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {/* AquaOps */}
          <Card
            className="cursor-pointer hover:shadow-lg transition"
            onClick={handleClick}
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">AquaOps</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Track water production, sales, expenses and real profit.
              </p>
            </CardContent>
          </Card>

          {/* RetailOps (future) */}
          <Card className="opacity-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">RetailOps</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Coming soon
              </p>
            </CardContent>
          </Card>

          {/* FactoryOps (future) */}
          <Card className="opacity-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold">FactoryOps</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Coming soon
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}