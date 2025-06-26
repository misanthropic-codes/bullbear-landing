import { Hero } from "@/components/hero"
import { Founders } from "@/components/founders"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Founders />
      <Footer />
    </main>
  )
}
