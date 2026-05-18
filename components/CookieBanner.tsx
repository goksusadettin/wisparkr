"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("wisparkr-cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => { localStorage.setItem("wisparkr-cookie-consent", "accepted"); setVisible(false); };
  const reject = () => { localStorage.setItem("wisparkr-cookie-consent", "rejected"); setVisible(false); };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed bottom-4 left-4 z-40 max-w-md"
        >
          <div className="glass-strong rounded-2xl p-5 shadow-card">
            <p className="text-sm font-semibold text-on-surface mb-1">Çerez Kullanımı</p>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Size daha iyi bir deneyim sunmak için çerezler kullanıyoruz.{" "}
              <Link href="/gizlilik" className="text-primary hover:underline">
                Gizlilik Politikası
              </Link>{" "}
              sayfamızı inceleyebilirsiniz.
            </p>
            <div className="flex gap-2 mt-4">
              <button onClick={accept} className="flex-1 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold transition-colors">
                Kabul Et
              </button>
              <button onClick={reject} className="flex-1 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-on-surface-variant hover:text-on-surface text-xs font-medium transition-colors">
                Reddet
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
