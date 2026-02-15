"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Menu, Globe } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/context/language-context"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <span>ZK Identity</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            {t("nav.features")}
          </Link>
          <Link href="/how-it-works" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            {t("nav.howItWorks")}
          </Link>
           <Link href="/dashboard" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
            {t("nav.dashboard")}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="text-zinc-400 hover:text-white"
          >
            <Globe className="mr-2 h-4 w-4" />
            {language.toUpperCase()}
          </Button>
          <Link href="/login">
            <Button size="sm" variant="secondary">
              {t("nav.login")}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-zinc-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-800 bg-zinc-900"
          >
            <div className="container mx-auto flex flex-col gap-4 p-4">
              <Link 
                href="/#features" 
                className="text-sm font-medium text-zinc-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.features")}
              </Link>
              <Link 
                href="/how-it-works" 
                className="text-sm font-medium text-zinc-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.howItWorks")}
              </Link>
              <Link 
                href="/dashboard" 
                className="text-sm font-medium text-zinc-400 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.dashboard")}
              </Link>
              
              <div className="h-px bg-zinc-800 my-2" />
              
              <div className="flex items-center justify-between">
                 <span className="text-sm text-zinc-400">Language</span>
                 <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={toggleLanguage}
                    className="text-white"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    {language === "en" ? "English" : "Español"}
                  </Button>
              </div>

              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button className="w-full" variant="secondary">
                  {t("nav.login")}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
