"use client"

import React, { createContext, useContext, useEffect, useState } from "react"
import { translations } from "@/utils/translations"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let initialLang: Language = "en"
    try {
      const savedLang = localStorage.getItem("app-language") as Language
      if (savedLang) {
        initialLang = savedLang
      } else {
        initialLang = navigator.language.startsWith("es") ? "es" : "en"
      }
    } catch (e) {
      console.error(e)
    }
    
    // Only update state if different from default "en"
    if (initialLang !== "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(initialLang)
    }
    setMounted(true)
  }, []) 

  const updateLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("app-language", lang)
  }

  const t = (key: string) => {
    // Use 'en' as fallback if key is missing in selected language
    // @ts-expect-error - key type is string, but we know it matches structure
    return translations[language][key] || translations["en"][key] || key
  }
  
  if (!mounted) {
    return null
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: updateLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
