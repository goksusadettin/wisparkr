"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Trash2 } from "lucide-react";

interface Review {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function ReviewsTable({ reviews: initial }: { reviews: Review[] }) {
  const [reviews, setReviews] = useState(initial);
  const [deleting, setDeleting] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Bu yorumu silmek istediğinize emin misiniz?")) return;
    setDeleting(id);
    const supabase = createClient();
    const { error } = await supabase.from("reviews").delete().eq("id", id);
    if (!error) setReviews((prev) => prev.filter((r) => r.id !== id));
    setDeleting(null);
  };

  if (reviews.length === 0) {
    return (
      <div className="glass border border-white/5 rounded-2xl p-12 text-center text-on-surface-variant">
        Henüz yorum yok.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {reviews.map((review) => (
        <div key={review.id} className="glass border border-white/5 rounded-2xl p-5 flex gap-4 items-start">
          <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
            {review.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <p className="font-semibold text-sm text-on-surface">{review.name}</p>
              <p className="text-xs text-on-surface-variant">
                {new Date(review.created_at).toLocaleString("tr-TR")}
              </p>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed">{review.message}</p>
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
  );
}
