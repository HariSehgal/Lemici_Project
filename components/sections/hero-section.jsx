import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full py-20 md:py-32 lg:py-40 xl:py-56 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-center relative overflow-hidden"
    >
      <div className="container px-4 md:px-6 relative z-10">
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl/none text-gray-900 dark:text-gray-50 leading-tight animate-fade-in-up">
            Unlock Insights with <span className="text-blue-600 dark:text-blue-400">LeMiCi Analytics</span>
          </h1>
          <p className="mx-auto max-w-[900px] text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed animate-fade-in-up delay-200">
            Powerful, intuitive, and real-time analytics to drive your business forward. Make data-driven decisions with
            confidence and clarity.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center pt-4 animate-fade-in-up delay-400">
            <Button
              asChild
              className="px-10 py-4 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link href="#cta">Start Free Trial</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-10 py-4 text-lg font-semibold border-2 border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
