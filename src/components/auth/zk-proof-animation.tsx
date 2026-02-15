"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle2, Lock, Shield, Fingerprint, Loader2, Database } from "lucide-react"
import { useRouter } from "next/navigation"

const JWT_DATA = {
  header: { alg: "RS256", typ: "JWT" },
  payload: {
    iss: "https://accounts.google.com",
    sub: "10769150350006150715113082367",
    email: "user@example.com",
    name: "John Doe",
    picture: "https://example.com/johndoe.jpg",
    iat: 1616161616,
    exp: 1616165216,
  },
}

const ZK_PROOF = "0x7a29f...c8e1"

export function ZKProofAnimation() {
  const router = useRouter()
  const [step, setStep] = useState<"connect" | "jwt" | "hashing" | "proof" | "success">("connect")

  useEffect(() => {
    // Step 1: Connect to Provider (simulated)
    const timer1 = setTimeout(() => setStep("jwt"), 1500)

    // Step 2: Show JWT Data -> Start Hashing
    const timer2 = setTimeout(() => setStep("hashing"), 3500)

    // Step 3: Hashing complete -> Show ZK Proof
    const timer3 = setTimeout(() => setStep("proof"), 6500)

    // Step 4: Verification complete -> Success
    const timer4 = setTimeout(() => setStep("success"), 8500)

    // Step 5: Redirect
    const timer5 = setTimeout(() => router.push("/dashboard"), 10500)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer5)
    }
  }, [router])

  return (
    <div className="flex w-full max-w-lg flex-col items-center justify-center space-y-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 p-8 backdrop-blur-xl shadow-2xl">
      <AnimatePresence mode="wait">
        {step === "connect" && (
          <motion.div
            key="connect"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-ping rounded-full bg-blue-500/20" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800">
                <Database className="h-10 w-10 text-blue-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">Connecting to Identity Provider...</h2>
            <p className="text-zinc-400">Securely retrieving your session data.</p>
          </motion.div>
        )}

        {step === "jwt" && (
          <motion.div
            key="jwt"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full space-y-4"
          >
            <div className="flex items-center justify-center mb-4">
              <Lock className="h-10 w-10 text-yellow-500 mr-3" />
              <h2 className="text-xl font-bold text-white">Private Data Retrieved</h2>
            </div>
            <div className="rounded-lg border border-red-500/30 bg-red-950/10 p-4 font-mono text-xs text-red-200">
              <p className="mb-2 text-red-400 font-bold">{"// SENSITIVE DATA (CLIENT-SIDE ONLY)"}</p>
              <pre className="whitespace-pre-wrap break-all opacity-80">
                {JSON.stringify(JWT_DATA, null, 2)}
              </pre>
            </div>
            <p className="text-center text-sm text-zinc-500">
              This data is visible only to you. We need to verify it without seeing it.
            </p>
          </motion.div>
        )}

        {step === "hashing" && (
          <motion.div
            key="hashing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center space-y-6 text-center"
          >
             <div className="relative flex h-24 w-24 items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-4 border-t-accent border-r-transparent border-b-accent/30 border-l-transparent"
              />
              <Fingerprint className="h-12 w-12 text-accent" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white">Generating Zero-Knowledge Proof</h2>
              <p className="text-zinc-400 max-w-xs mx-auto">
                Transforming your identity into a cryptographic proof using zk-SNARKs.
              </p>
            </div>

            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
            
            <div className="font-mono text-xs text-accent/80 animate-pulse">
              Computing circuit witness...
            </div>
          </motion.div>
        )}

        {step === "proof" && (
          <motion.div
            key="proof"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full space-y-4"
          >
             <div className="flex items-center justify-center mb-4">
              <Shield className="h-10 w-10 text-accent mr-3" />
              <h2 className="text-xl font-bold text-white">Proof Generated</h2>
            </div>
            
            <div className="rounded-lg border border-accent/30 bg-accent/10 p-6 font-mono text-sm text-accent-200 shadow-[0_0_30px_-5px_var(--color-accent)]">
              <p className="mb-2 text-accent font-bold">{"// ZK-PROOF (PUBLICLY VERIFIABLE)"}</p>
              <div className="break-all text-xs opacity-90">
                {ZK_PROOF}
                <span className="animate-pulse">...</span>
              </div>
            </div>
             <p className="text-center text-sm text-zinc-500">
              This proof verifies you are &quot;user@example.com&quot; without revealing the email itself.
            </p>
          </motion.div>
        )}

        {step === "success" && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center space-y-6 text-center"
          >
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20 text-green-500">
              <CheckCircle2 className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold text-white">Identity Verified</h2>
            <p className="text-zinc-400">Redirecting to your secure dashboard...</p>
             <Loader2 className="h-6 w-6 animate-spin text-zinc-600" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
