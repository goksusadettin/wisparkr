"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={CONTACT.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <MessageCircle size={26} fill="white" strokeWidth={0} />
    </motion.a>
  );
}
