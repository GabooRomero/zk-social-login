"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { ZKProofAnimation } from "@/components/auth/zk-proof-animation"
import { useLanguage } from "@/context/language-context"

export default function LoginPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const [step, setStep] = useState<"initial" | "generating" | "verifying" | "success">("initial")

  const handleLogin = async () => {
    setStep("generating")
    // Simulate ZK Proof generation time
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setStep("verifying")
    // Simulate On-chain verification time
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setStep("success")
    // Redirect to dashboard
    setTimeout(() => {
      router.push("/dashboard")
    }, 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />

      <Card className="w-full max-w-md border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
            <ShieldCheck className="h-6 w-6 text-accent" />
          </div>
          <CardTitle className="text-2xl">{t("login.title")}</CardTitle>
          <CardDescription>{t("login.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {step === "initial" && (
             <Button 
                size="lg" 
                className="w-full bg-white text-black hover:bg-zinc-200"
                onClick={handleLogin}
              >
               <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
               {t("login.google")}
             </Button>
          )}

          {step !== "initial" && (
            <div className="py-8">
              <ZKProofAnimation />
              <p className="mt-4 text-center text-sm text-zinc-400">
                {step === "generating" && t("login.generating")}
                {step === "verifying" && t("login.verifying")}
                {step === "success" && t("login.success")}
              </p>
            </div>
          )}
        </CardContent>
        <CardFooter className="justify-center text-xs text-zinc-500">
          {step === "success" && t("login.redirecting")}
        </CardFooter>
      </Card>
    </div>
  )
}
