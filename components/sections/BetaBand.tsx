"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function BetaBand() {
  return (
    <motion.div
      className="bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-blue-900/40 border-y border-white/10 py-4 px-gutter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-container-max mx-auto flex items-center justify-center gap-3 text-center flex-wrap">
        <Sparkles size={16} className="text-primary shrink-0" />
        <span className="text-sm text-on-surface">
          <span className="font-semibold text-primary">Beta dönemi:</span>{" "}
          İlk müşterilerimize özel{" "}
          <span className="font-bold text-white">%20 indirim</span>
        </span>
        <Link
          href="/iletisim"
          className="text-xs font-semibold text-primary underline underline-offset-2 hover:text-white transition-colors"
        >
          Hemen başvur →
        </Link>
      </div>
    </motion.div>
  );
}
