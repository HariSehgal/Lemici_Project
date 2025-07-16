import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 md:py-28 lg:py-36 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-50">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-lg text-gray-600 md:text-xl dark:text-gray-300 leading-relaxed">
              Hear directly from businesses that have transformed their operations and achieved remarkable growth with
              LeMiCi Analytics.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-2 w-full max-w-5xl">
            <Card className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100 dark:border-gray-700">
              <CardContent className="flex flex-col items-center text-center">
                <QuoteIcon className="h-10 w-10 text-blue-500 dark:text-blue-400 mb-6" />
                <p className="text-xl italic text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                  "LeMiCi Analytics has revolutionized how we understand our customer base. The insights are invaluable,
                  incredibly easy to access, and have directly led to a 25% increase in our conversion rates."
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/user-avatar.png"
                    width={64}
                    height={64}
                    alt="User Avatar"
                    className="rounded-full border-2 border-gray-800 shadow-md" // Changed border color to gray-800
                  />
                  <div>
                    <p className="font-bold text-lg text-gray-900 dark:text-gray-50">Hari Sehgal</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Tech Solutions Inc.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-8 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100 dark:border-gray-700">
              <CardContent className="flex flex-col items-center text-center">
                <QuoteIcon className="h-10 w-10 text-blue-500 dark:text-blue-400 mb-6" />
                <p className="text-xl italic text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                  "The customizable dashboards are a game-changer for our marketing team. We can now track our KPIs with
                  unprecedented clarity and efficiency, saving us hours every week."
                </p>
                <div className="flex items-center space-x-4">
                  <Image
                    src="/images/user-avatar.png"
                    width={64}
                    height={64}
                    alt="User Avatar"
                    className="rounded-full border-2 border-gray-800 shadow-md" // Changed border color to gray-800
                  />
                  <div>
                    <p className="font-bold text-lg text-gray-900 dark:text-gray-50">Manandeep Singh</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Director, Global Corp</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
