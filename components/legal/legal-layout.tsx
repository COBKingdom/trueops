import Link from "next/link"
import { ShieldCheck } from "lucide-react"

export function LegalLayout({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen bg-[#071533] text-white">

      {/* HERO */}
      <section className="border-b border-white/10 bg-gradient-to-b from-[#0a1d46] to-[#071533] px-4 py-14 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl">

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-blue-200 transition hover:text-white"
          >
            ← Back to TrueOps
          </Link>

          <div className="mt-8 flex items-center gap-3">

            <div className="rounded-2xl bg-blue-500/10 p-3">
              <ShieldCheck className="h-7 w-7 text-blue-300" />
            </div>

            <div>
              <p className="text-sm text-blue-200">
                TrueOps Platform Documentation
              </p>

              <h1 className="text-4xl font-bold sm:text-5xl">
                {title}
              </h1>
            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur sm:p-12">

          <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-blue-100 prose-strong:text-white prose-li:text-blue-100">
            {children}
          </div>

        </div>

      </section>

    </main>
  )
}