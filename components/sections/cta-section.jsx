import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section
      id="cta"
      className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 text-white text-center relative overflow-hidden"
    >
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-indigo-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="space-y-8 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl leading-tight">
            Ready to Transform Your Data?
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-blue-100 leading-relaxed">
            Join thousands of forward-thinking businesses already using LeMiCi Analytics to make smarter, faster
            decisions. Start your free trial today and experience the difference!
          </p>

          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="px-10 py-4 text-xl font-bold bg-white text-blue-700 hover:bg-blue-100 hover:text-blue-900 rounded-full shadow-2xl hover:shadow-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Link href="#">Get Started Now</Link>
            </Button>
          </div>

          <p className="text-sm text-blue-200 mt-4 italic">
            No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
