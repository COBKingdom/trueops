import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="px-4 py-12 text-center border-t">
      <div className="max-w-3xl mx-auto space-y-6">
        <h3 className="text-xl font-semibold">
          Ready to track your real profit?
        </h3>

        <Button
          size="lg"
          onClick={() => {
            window.location.href = "https://aqua.trueops.app/onboarding"
          }}
        >
          Start with AquaOps
        </Button>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} TrueOps
        </p>
      </div>
    </footer>
  )
}