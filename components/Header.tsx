"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-surface/70 backdrop-blur-md border-b border-white/10 shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center px-gutter py-4 max-w-container-max mx-auto">
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-90 transition-opacity">
          <Image src="/logo.png" alt="Wisparkr" width={32} height={32} className="rounded-lg" />
          <span className="text-body-lg font-bold tracking-tight text-on-surface">Wisparkr</span>
        </Link>

        <nav className="hidden md:flex space-x-8" aria-label="Ana menü">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-label-sm font-medium transition-colors duration-200",
                pathname === link.href
                  ? "text-primary border-b-2 border-primary pb-0.5"
                  : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/iletisim"
            className="bg-primary-container text-on-primary px-6 py-2 rounded-full text-label-sm font-medium hover:opacity-90 transition-all"
          >
            Hemen Başla
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-on-surface-variant hover:text-on-surface transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden glass-strong border-t border-white/5"
          >
            <nav className="px-gutter py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-3 px-4 rounded-xl text-label-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-surface-container text-on-surface"
                      : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/iletisim"
                className="mt-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-label-sm font-semibold text-center"
              >
                Hemen Başla
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
