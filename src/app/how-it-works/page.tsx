"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Shield, Key, Lock, CheckCircle } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function HowItWorksPage() {
  const { t } = useLanguage()

  const steps = [
    {
      icon: <Key className="h-8 w-8 text-accent" />,
      title: t("how.step1.title"),
      description: t("how.step1.desc"),
    },
    {
      icon: <Lock className="h-8 w-8 text-accent" />,
      title: t("how.step2.title"),
      description: t("how.step2.desc"),
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: t("how.step3.title"),
      description: t("how.step3.desc"),
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: t("how.step4.title"),
      description: t("how.step4.desc"),
    },
  ]

  return (
    <div className="container relative mx-auto flex min-h-screen flex-col items-center px-4 py-24">
       {/* Background gradient similar to home */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950 pointer-events-none" />

      <div className="mb-12 text-center">
        <Link href="/">
           <Button variant="ghost" className="mb-8">
             <ArrowLeft className="mr-2 h-4 w-4" /> {t("how.back")}
           </Button>
        </Link>
        <h1 className="bg-gradient-to-br from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl">
          {t("how.title")}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-zinc-400">
          {t("how.subtitle")}
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
              {t("how.cta")}
            </Button>
        </Link>
      </div>
    </div>
  )
}
