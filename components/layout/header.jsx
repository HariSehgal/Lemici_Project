"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { BarChartIcon, MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const sections = ["about", "features", "testimonials", "cta"];

export function Header() {
  const [activeSection, setActiveSection] = useState("");
  const handleSmoothScroll = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0.1 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm sticky top-0 z-50">
      <Link href="#" className="flex items-center justify-center">
        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
          <BarChartIcon className="h-6 w-6 text-blue-600" />
        </div>
        <span className="ml-2 text-xl font-extrabold text-gray-900 dark:text-gray-50">LeMiCi Analytics</span>
      </Link>

      <nav className="ml-auto hidden md:flex gap-6 sm:gap-8">
        {sections.map((id) => (
          <Link
            key={id}
            href={`#${id}`}
            onClick={handleSmoothScroll(id)}
            className={clsx(
              "text-sm font-medium transition-colors duration-200",
              activeSection === id
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
            )}
          >
            {id === "cta" ? "CTA" : id.charAt(0).toUpperCase() + id.slice(1)}
          </Link>
        ))}
      </nav>

      <Sheet>
        <SheetTrigger asChild className="md:hidden ml-auto">
          <Button variant="outline" size="icon">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col gap-6 p-6">
            {sections.map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                onClick={handleSmoothScroll(id)}
                className={clsx(
                  "text-lg font-medium transition-colors duration-200",
                  activeSection === id
                    ? "text-blue-600 dark:text-blue-400 font-semibold"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                )}
              >
                {id === "cta" ? "CTA" : id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
