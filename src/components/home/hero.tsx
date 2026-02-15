"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 md:py-32 lg:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />
      
      <div className="container relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm"
        >
          <Sparkles className="mr-2 h-4 w-4 text-accent" />
          <span>ZK-Powered Social Login</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-br from-white via-zinc-300 to-zinc-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
        >
          Your Identity. <br className="hidden sm:inline" />
          Private & Secure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl"
        >
          Log in with Google, own your keys. Zero-Knowledge proofs ensure your privacy remains intact while giving you full control of your assets. No seed phrases.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <Link href="/login">
            <Button size="lg" className="group h-12 w-full sm:w-auto" variant="default">
              Start with Google
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button size="lg" variant="outline" className="h-12 w-full sm:w-auto">
              How it works
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
    </section>
  )
}
