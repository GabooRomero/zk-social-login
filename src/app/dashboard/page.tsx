"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WalletView } from "@/components/dashboard/wallet-view"
import { TransferModal } from "@/components/dashboard/transfer-modal"
import { ShieldCheck, Wallet, Activity } from "lucide-react"
import { useLanguage } from "@/context/language-context"

export default function DashboardPage() {
  const { t } = useLanguage()

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950 pointer-events-none" />
      
      <main className="container mx-auto flex-1 px-4 py-8">
        <header className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
             <h1 className="text-3xl font-bold tracking-tight">{t("dashboard.title")}</h1>
             <p className="text-zinc-400">{t("dashboard.subtitle")}</p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row items-start md:items-center gap-4 md:mt-0">
             <TransferModal />
             <div className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm text-primary">
                <ShieldCheck className="h-4 w-4" />
                {t("dashboard.verified")}
             </div>
          </div>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Identity Card */}
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm lg:col-span-1">
             <CardHeader>
               <CardTitle className="flex items-center gap-2">
                 <ShieldCheck className="h-5 w-5 text-accent" />
                 {t("dashboard.status")}
               </CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex flex-col gap-4">
                 <div className="flex items-center justify-between rounded-lg bg-zinc-800/50 p-3">
                   <span className="text-sm text-zinc-400">Google ID</span>
                   <span className="font-mono text-sm text-green-400">Verified ✓</span>
                 </div>
                 <div className="flex items-center justify-between rounded-lg bg-zinc-800/50 p-3">
                   <span className="text-sm text-zinc-400">ZK Proof</span>
                   <span className="font-mono text-sm text-green-400">Valid on-chain</span>
                 </div>
               </div>
             </CardContent>
          </Card>

          {/* Wallet Card */}
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm lg:col-span-2">
             <CardHeader>
               <CardTitle className="flex items-center gap-2">
                 <Wallet className="h-5 w-5 text-accent" />
                 {t("dashboard.address")}
               </CardTitle>
               <CardDescription>
                  0x71C...9A23
               </CardDescription>
             </CardHeader>
             <CardContent>
                <WalletView />
             </CardContent>
          </Card>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
           <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
             <CardHeader>
               <CardTitle>{t("dashboard.assets")}</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="space-y-4">
                 <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-full bg-blue-500/20" />
                       <div>
                          <p className="font-medium">ETH</p>
                          <p className="text-xs text-zinc-400">Ethereum</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="font-medium">1.245</p>
                       <p className="text-xs text-zinc-400">$3,240.50</p>
                    </div>
                 </div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <div className="flex items-center gap-3">
                       <div className="h-8 w-8 rounded-full bg-yellow-500/20" />
                       <div>
                          <p className="font-medium">USDC</p>
                          <p className="text-xs text-zinc-400">USD Coin</p>
                       </div>
                    </div>
                    <div className="text-right">
                       <p className="font-medium">500.00</p>
                       <p className="text-xs text-zinc-400">$500.00</p>
                    </div>
                 </div>
               </div>
             </CardContent>
           </Card>

           <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
             <CardHeader>
               <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-accent" />
                  {t("dashboard.activity")}
               </CardTitle>
             </CardHeader>
             <CardContent>
                <p className="text-sm text-zinc-400">No recent transactions.</p>
             </CardContent>
           </Card>
        </div>

      </main>
    </div>
  )
}
