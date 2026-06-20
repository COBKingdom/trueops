import { LegalLayout } from "@/components/legal/legal-layout"

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service">

      <h2>Platform Usage</h2>

      <p>
        TrueOps operational software platforms are intended for lawful business and operational use.
      </p>

      <h2>Accounts & Access</h2>

      <p>
        Users are responsible for protecting their access credentials and maintaining secure device access.
      </p>

      <h2>Operational Responsibility</h2>

      <p>
        Businesses remain fully responsible for operational decisions,
        financial management, reporting accuracy and regulatory compliance.
      </p>

      <h2>Availability</h2>

      <p>
        While TrueOps aims to maintain reliable infrastructure,
        uninterrupted service availability cannot be guaranteed.
      </p>

      <h2>Subscriptions</h2>

      <p>
        Certain features or products may require subscriptions or premium access.
      </p>

    </LegalLayout>
  )
}