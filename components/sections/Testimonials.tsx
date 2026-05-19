"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { createClient } from "@/lib/supabase/client";

interface Review {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const supabase = createClient();

  useEffect(() => {
    supabase
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false })
      .then(({ data }) => { if (data) setReviews(data); });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setSending(true);

    const { data, error } = await supabase
      .from("reviews")
      .insert({ name: name.trim(), message: message.trim() })
      .select()
      .single();

    if (!error && data) {
      setReviews((prev) => [data, ...prev]);
      setName("");
      setMessage("");
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }

    setSending(false);
  };

  return (
    <section className="py-section-gap px-gutter max-w-container-max mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-h2-mobile md:text-h2 text-on-surface mb-4">Müşteri Yorumları</h2>
        <p className="text-body-md text-on-surface-variant">Deneyimlerinizi bizimle paylaşın.</p>
      </motion.div>

      {/* Yorum formu */}
      <motion.form
        onSubmit={handleSubmit}
        className="glass border border-white/5 rounded-3xl p-8 mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-on-surface font-semibold text-lg mb-6">Yorum Yaz</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Adınız"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary/50 transition-colors"
            required
          />
          <textarea
            placeholder="Yorumunuzu yazın..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary/50 transition-colors resize-none"
            required
          />
          {success && (
            <p className="text-green-400 text-sm text-center">Yorumunuz başarıyla gönderildi!</p>
          )}
          <button
            type="submit"
            disabled={sending}
            className="w-full py-3 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/20 hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? "Gönderiliyor..." : "Yorumu Gönder"}
          </button>
        </div>
      </motion.form>

      {/* Yorumlar listesi */}
      {reviews.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              className="glass p-6 rounded-3xl border border-white/5 flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <span className="text-[40px] leading-none text-primary/20 font-serif select-none mb-2">&ldquo;</span>
              <p className="text-body-md text-on-surface-variant italic flex-1 mb-6">
                {review.message}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <p className="text-on-surface font-semibold text-sm">{review.name}</p>
                </div>
                <p className="text-on-surface-variant text-xs">
                  {new Date(review.created_at).toLocaleDateString("tr-TR")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
