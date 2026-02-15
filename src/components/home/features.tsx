"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { ShieldCheck, UserCheck, KeyRound } from "lucide-react"
import { useLanguage } from "@/context/language-context"

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    titleKey: "features.zk.title",
    descriptionKey: "features.zk.desc",
  },
  {
    icon: <UserCheck className="h-10 w-10 text-accent" />,
    titleKey: "features.ux.title",
    descriptionKey: "features.ux.desc",
  },
  {
    icon: <KeyRound className="h-10 w-10 text-accent" />,
    titleKey: "features.control.title",
    descriptionKey: "features.control.desc",
  },
]

export function Features() {
  const { t } = useLanguage()

  return (
    <section className="container py-24 sm:py-32">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-colors hover:bg-zinc-900/80">
              <CardHeader>
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-zinc-800/50 p-2 ring-1 ring-zinc-700">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{t(feature.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-zinc-400">
                  {t(feature.descriptionKey)}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
