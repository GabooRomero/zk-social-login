"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, CheckCircle2, Lock, Shield, Loader2, Send } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export function TransferModal() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<"input" | "encrypting" | "proving" | "verifying" | "success">("input")
  const [formData, setFormData] = useState({
    recipient: "",
    amount: "",
    token: "USDC"
  })

  const handleSend = async () => {
    if (!formData.recipient || !formData.amount) return

    setStep("encrypting")
    // Step 1: Encrypting
    await new Promise(r => setTimeout(r, 2000))
    setStep("proving")
    // Step 2: Generating Proof
    await new Promise(r => setTimeout(r, 2500))
    setStep("verifying")
    // Step 3: Verifying on Chain
    await new Promise(r => setTimeout(r, 2000))
    setStep("success")
    // Close after success
    setTimeout(() => {
      setIsOpen(false)
      setStep("input")
      setFormData({ recipient: "", amount: "", token: "USDC" })
    }, 2000)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2 bg-accent hover:bg-accent/90 text-white">
          <Send className="h-4 w-4" />
          {t("dashboard.transfer.btn")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-zinc-800 bg-zinc-950 text-white">
        <DialogHeader>
          <DialogTitle>{t("dashboard.transfer.title")}</DialogTitle>
          <DialogDescription>
            {t("dashboard.transfer.desc")}
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <AnimatePresence mode="wait">
            {step === "input" && (
              <motion.div
                key="input"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">{t("dashboard.transfer.token")}</label>
                  <Select 
                    value={formData.token} 
                    onValueChange={(v) => setFormData({...formData, token: v})}
                  >
                    <SelectTrigger className="border-zinc-800 bg-zinc-900">
                      <SelectValue placeholder="Select token" />
                    </SelectTrigger>
                    <SelectContent className="border-zinc-800 bg-zinc-900">
                      <SelectItem value="USDC">USDC (Confidential)</SelectItem>
                      <SelectItem value="ETH">ETH (Confidential)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">{t("dashboard.transfer.recipient")}</label>
                  <Input 
                    placeholder={t("dashboard.transfer.recipient.placeholder")}
                    className="border-zinc-800 bg-zinc-900"
                    value={formData.recipient}
                    onChange={(e) => setFormData({...formData, recipient: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">{t("dashboard.transfer.amount")}</label>
                  <div className="relative">
                    <Input 
                      type="number"
                      placeholder={t("dashboard.transfer.amount.placeholder")}
                      className="border-zinc-800 bg-zinc-900 pr-12"
                      value={formData.amount}
                      onChange={(e) => setFormData({...formData, amount: e.target.value})}
                    />
                    <div className="absolute right-3 top-2.5 text-xs text-zinc-500 font-bold">
                      {formData.token}
                    </div>
                  </div>
                </div>

                <Button 
                  className="w-full mt-4" 
                  onClick={handleSend}
                  disabled={!formData.recipient || !formData.amount}
                >
                  {t("dashboard.transfer.send")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            )}

            {step !== "input" && step !== "success" && (
              <motion.div
                key="processing"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex flex-col items-center justify-center py-8 space-y-6"
              >
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-accent/20" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800">
                    {step === "encrypting" && <Lock className="h-8 w-8 text-yellow-500 animate-pulse" />}
                    {step === "proving" && <Shield className="h-8 w-8 text-accent animate-pulse" />}
                    {step === "verifying" && <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />}
                  </div>
                </div>
                
                <div className="text-center space-y-2">
                  <h3 className="text-lg font-bold">
                    {step === "encrypting" && t("dashboard.transfer.step1")}
                    {step === "proving" && t("dashboard.transfer.step2")}
                    {step === "verifying" && t("dashboard.transfer.step3")}
                  </h3>
                  <p className="text-sm text-zinc-500 max-w-[200px] mx-auto">
                     {step === "encrypting" && "Using ElGamal encryption..."}
                     {step === "proving" && "Computing zk-SNARK witness..."}
                     {step === "verifying" && "Consensus verification..."}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="w-full max-w-[200px] h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-accent"
                    initial={{ width: "0%" }}
                    animate={{ 
                      width: step === "encrypting" ? "33%" : step === "proving" ? "66%" : "90%" 
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            )}

            {step === "success" && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-8 space-y-4"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20 text-green-500">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-white">{t("dashboard.transfer.success")}</h3>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  )
}
