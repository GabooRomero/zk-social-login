import { Hero } from "@/components/home/hero";
import { Features } from "@/components/home/features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-3.5rem)]">
      <Hero />
      <Features />
      
      <footer className="py-8 text-center text-sm text-zinc-500 border-t border-zinc-900 bg-zinc-950">
        <p>© {new Date().getFullYear()} ZK Identity Project. Built for Privacy.</p>
      </footer>
    </div>
  );
}
