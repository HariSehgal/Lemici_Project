import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-28 lg:py-36 bg-gray-100 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-50">
              Why Choose LeMiCi Analytics?
            </h2>
            <p className="max-w-[700px] text-lg text-gray-700 md:text-xl dark:text-gray-300 leading-relaxed">
              LeMiCi Analytics is meticulously designed to simplify complex data, providing clear, actionable insights
              without the overwhelm. Our cutting-edge platform empowers businesses of all sizes to deeply understand
              their audience, optimize performance across all channels, and consistently achieve their strategic goals.
              With an intuitive, user-friendly interface and robust, enterprise-grade features, you'll spend less time
              grappling with data and more time focusing on what truly matters: growing your business.
            </p>
            <Button
              asChild
              className="px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link href="#cta">Explore Our Solutions</Link>
            </Button>
          </div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=1255&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=500&width=700"
            width={700}
            height={500}
            alt="Analytics Dashboard Illustration"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-2xl border border-gray-200 dark:border-gray-700"
          />
        </div>
      </div>
    </section>
  )
}
