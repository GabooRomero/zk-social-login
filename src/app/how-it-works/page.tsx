import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Shield, Key, Lock, CheckCircle } from "lucide-react"

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Key className="h-8 w-8 text-accent" />,
      title: "1. Google Sign-In",
      description: "You log in with your existing Google account. We receive a standard JWT (JSON Web Token) confirming your identity.",
    },
    {
      icon: <Lock className="h-8 w-8 text-accent" />,
      title: "2. Proof Generation",
      description: "Instead of sending this token to a server, your browser generates a Zero-Knowledge Proof locally. This proof confirms you have a valid token without revealing it.",
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "3. On-Chain Verification",
      description: "The ZK proof is sent to a smart contract (Verifier). The contract checks the math to verify the proof is valid.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "4. Identity Verified",
      description: "Once verified, you are granted access or a wallet is generated for you. Your Google ID never touches the blockchain, preserving privacy.",
    },
  ]

  return (
    <div className="container relative mx-auto flex min-h-screen flex-col items-center px-4 py-24">
       {/* Background gradient similar to home */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="mb-12 text-center">
        <Link href="/">
           <Button variant="ghost" className="mb-8">
             <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
           </Button>
        </Link>
        <h1 className="bg-gradient-to-br from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
          How ZK Login Works
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-400">
          Secure, private, and non-custodial. Here is how we bridge Web2 identity to Web3 privacy.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl w-full">
        {steps.map((step, index) => (
          <Card key={index} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
            <CardHeader>
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-zinc-800/50 p-3 ring-1 ring-zinc-700 w-fit">
                {step.icon}
              </div>
              <CardTitle>{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-zinc-400 text-base">
                {step.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Link href="/login">
            <Button size="lg" className="h-12 w-full sm:w-auto" variant="magic">
              Try it now
            </Button>
        </Link>
      </div>
    </div>
  )
}
