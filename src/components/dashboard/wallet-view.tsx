import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Send, Download, Key, Activity, Copy, Eye } from "lucide-react"

export function WalletView() {
  return (
    <div className="space-y-8">
      {/* Identity Card */}
      <Card className="border-accent/20 bg-accent/5 backdrop-blur-sm">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-lg font-medium text-accent">ZK Identity Verified</CardTitle>
          <ShieldCheck className="h-5 w-5 text-accent" />
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 text-2xl font-bold text-white">
            <span>user@example.com</span>
            <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs text-accent">ZK-ID</span>
          </div>
          <p className="text-xs text-zinc-500 mt-1">
            Identity provider: Google (via ZK-Circuit-v3)
          </p>
        </CardContent>
      </Card>

      {/* Wallet Balance */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-zinc-400">Total Balance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-white">$12,450.00</div>
          <p className="text-xs text-zinc-500 mt-1">+2.5% past 24h</p>
          
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button className="w-full space-x-2" variant="default">
              <Send className="h-4 w-4" />
              <span>Send</span>
            </Button>
             <Button className="w-full space-x-2" variant="secondary">
              <Download className="h-4 w-4" />
              <span>Receive</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Activity / Info */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
           <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Public Key</CardTitle>
            <Key className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between rounded-md bg-zinc-900 p-2 text-xs font-mono text-zinc-400">
              <span className="truncate">0x71C...9e21</span>
              <Button size="icon" variant="ghost" className="h-6 w-6">
                <Copy className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>

         <Card>
           <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Privacy Level</CardTitle>
            <Eye className="h-4 w-4 text-zinc-500" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full w-[95%] bg-green-500" />
              </div>
              <span className="text-xs font-bold text-green-500">High</span>
            </div>
            <p className="mt-1 text-xs text-zinc-500">Only ZK proofs are shared on-chain.</p>
          </CardContent>
        </Card>
      </div>

       <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between border-b border-zinc-800 pb-2 last:border-0 last:pb-0">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800">
                    <Activity className="h-4 w-4 text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Smart Contract Interaction</p>
                    <p className="text-xs text-zinc-500">2 mins ago</p>
                  </div>
                </div>
                <span className="text-sm text-zinc-400">-0.005 ETH</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
