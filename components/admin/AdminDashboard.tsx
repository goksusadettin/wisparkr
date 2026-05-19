"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Image from "next/image";
import { Trash2, LogOut, MessageSquare } from "lucide-react";

interface Review {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function AdminDashboard({ reviews: initial }: { reviews: Review[] }) {
  const [reviews, setReviews] = useState<Review[]>(initial);
  const [deleting, setDeleting] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleDelete = async (id: string) => {
    setDeleting(id);
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    if (!error) {
      setReviews((prev) => prev.filter((r) => r.id !== id));
    }
    setDeleting(null);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/giris");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-on-surface">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Wisparkr" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-lg">Wisparkr Admin</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-on-surface-variant hover:text-red-400 transition-colors"
        >
          <LogOut size={16} />
          Çıkış Yap
        </button>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-8">
          <MessageSquare size={20} className="text-primary" />
          <h1 className="text-xl font-semibold">Müşteri Yorumları</h1>
          <span className="ml-2 bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
            {reviews.length}
          </span>
        </div>

        {reviews.length === 0 ? (
          <div className="glass border border-white/5 rounded-2xl p-12 text-center text-on-surface-variant">
            Henüz yorum yok.
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="glass border border-white/5 rounded-2xl p-6 flex items-start justify-between gap-4"
              >
                <div className="flex gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-on-surface-variant">
                        {new Date(review.created_at).toLocaleDateString("tr-TR")}
                      </p>
                    </div>
                    <p className="text-on-surface-variant text-sm leading-relaxed">{review.message}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(review.id)}
                  disabled={deleting === review.id}
                  className="shrink-0 p-2 rounded-xl text-on-surface-variant hover:text-red-400 hover:bg-red-400/10 transition-all disabled:opacity-40"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
