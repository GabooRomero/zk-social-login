import { ZKProofAnimation } from "@/components/auth/zk-proof-animation"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black p-4">
      {/* Background effects */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-black to-black" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-[100px]" />
      <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-[100px]" />

      <div className="relative z-10 w-full max-w-lg">
        <ZKProofAnimation />
      </div>
    </div>
  )
}
