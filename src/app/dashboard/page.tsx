import { WalletView } from "@/components/dashboard/wallet-view"

export default function DashboardPage() {
  return (
    <div className="container mx-auto max-w-4xl py-10 px-4">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-white">Your Dashboard</h1>
      <WalletView />
    </div>
  )
}
