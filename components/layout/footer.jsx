import Link from "next/link"
import { BarChartIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "lucide-react" 

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-16 lg:py-20 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
      <div className="container grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 px-4 md:px-6">
        <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4">
          <Link href="#" className="flex items-center justify-start">
            <div className="relative w-8 h-8 rounded-full overflow-hidden bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
              <BarChartIcon className="h-5 w-5 text-blue-600" />
            </div>
            <span className="ml-2 text-xl font-extrabold text-gray-900 dark:text-gray-50">LeMiCi Analytics</span>
          </Link>
          <p className="text-sm max-w-md leading-relaxed">
            LeMiCi Analytics provides powerful, intuitive, and real-time analytics to drive your business forward.
          </p>
          <div className="flex space-x-4 pt-2">
            <Link href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <TwitterIcon className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <LinkedinIcon className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <InstagramIcon className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Product</h3>
          <nav className="space-y-2 flex flex-col">
            <Link href="#features" className="text-sm hover:underline underline-offset-4 transition-colors">
              Features
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors">
              Integrations
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors">
              API
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Company</h3>
          <nav className="space-y-2 flex flex-col">
            <Link href="#about" className="text-sm hover:underline underline-offset-4 transition-colors">
              About Us
            </Link>
            <Link href="#testimonials" className="text-sm hover:underline underline-offset-4 transition-colors">
              Customers
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors">
              Careers
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors">
              Blog
            </Link>
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-50">Resources</h3>
          <nav className="space-y-2 flex flex-col">
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors">
              Documentation
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors">
              Support
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors">
              FAQs
            </Link>
            <Link href="#" className="text-sm hover:underline underline-offset-4 transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
      <div className="container px-4 md:px-6 pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} LeMiCi Analytics. All rights reserved.</p>
      </div>
    </footer>
  )
}
