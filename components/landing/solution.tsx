import { Button } from "@/components/ui/button"

export function Solution() {
  return (
    <section id="solution" className="px-4 py-16 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">
          Finally see your real business performance
        </h2>

        <p className="text-muted-foreground">
          Stop guessing profits. Track every sale, expense and debt clearly.
        </p>

        <Button
          size="lg"
          onClick={() => {
            window.location.href = "https://aqua.trueops.app/onboarding"
          }}
        >
          Start with AquaOps
        </Button>
      </div>
    </section>
  )
}