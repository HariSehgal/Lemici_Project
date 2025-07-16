import { Card } from "@/components/ui/card"
import {
  RocketIcon,
  BarChartIcon,
  ShieldCheckIcon as LucideShieldCheckIcon,
  TrendingUpIcon,
} from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-16 md:py-28 lg:py-36 bg-white dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-50">
              Powerful Features for Your Success
            </h2>
            <p className="max-w-[900px] text-lg text-gray-600 md:text-xl dark:text-gray-300 leading-relaxed">
              LeMiCi Analytics provides a comprehensive suite of tools designed to give you a competitive edge in the
              ever-evolving digital landscape.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl">
            <Card className="flex flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center w-20 h-20">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <RocketIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Real-time Data</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                  Access up-to-the-minute data to react quickly to market changes and user behavior, ensuring you're
                  always ahead.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center w-20 h-20">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <BarChartIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Customizable Dashboards</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                  Tailor your dashboards to display the metrics that matter most to your business, providing a
                  personalized view.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center w-20 h-20">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <LucideShieldCheckIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Secure & Scalable</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                  Your data is safe with us. Our infrastructure is built for enterprise-grade security and scales
                  seamlessly.
                </p>
              </div>
            </Card>

            <Card className="flex flex-col items-center justify-center p-8 text-center bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-100 dark:border-gray-700">
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center w-20 h-20">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <TrendingUpIcon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">Predictive Analytics</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs">
                  Leverage AI-powered forecasts to anticipate market trends and customer behavior, staying ahead of the
                  curve.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
