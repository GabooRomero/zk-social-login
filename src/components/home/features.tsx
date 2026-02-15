import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ShieldCheck, Fingerprint, Zap } from "lucide-react"

export function Features() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-3">
        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:bg-zinc-800/80">
          <CardHeader>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <CardTitle>Zero-Knowledge Privacy</CardTitle>
          </CardHeader>
          <CardContent>
            Your identity is verified mathematically without revealing sensitive data. Only you control your private keys.
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:bg-zinc-800/80">
          <CardHeader>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20 text-accent">
              <Fingerprint className="h-6 w-6" />
            </div>
            <CardTitle>Social Onboarding</CardTitle>
          </CardHeader>
          <CardContent>
            No more complex seed phrases. Log in with Google, Twitter, or email, and get a secure non-custodial wallet instantly.
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-all hover:bg-zinc-800/80">
          <CardHeader>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20 text-blue-500">
              <Zap className="h-6 w-6" />
            </div>
            <CardTitle>Instant Setup</CardTitle>
          </CardHeader>
          <CardContent>
            Get started in seconds. Seamlessly interact with DeFi, NFTs, and dApps with a friction-free experience.
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
