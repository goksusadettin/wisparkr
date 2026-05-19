"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  service: string;
  message: string;
  created_at: string;
}

export default function ContactTable({ submissions }: { submissions: Submission[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  if (submissions.length === 0) {
    return (
      <div className="glass border border-white/5 rounded-2xl p-12 text-center text-on-surface-variant">
        Henüz iletişim talebi yok.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {submissions.map((s) => (
        <div key={s.id} className="glass border border-white/5 rounded-2xl overflow-hidden">
          <button
            onClick={() => setExpanded(expanded === s.id ? null : s.id)}
            className="w-full flex items-center gap-4 p-5 text-left hover:bg-white/3 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 border-2 border-emerald-500/20 flex items-center justify-center text-sm font-bold text-emerald-400 shrink-0">
              {s.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <p className="font-semibold text-sm text-on-surface">{s.name}</p>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{s.service}</span>
              </div>
              <p className="text-xs text-on-surface-variant mt-0.5">{s.email} · {new Date(s.created_at).toLocaleString("tr-TR")}</p>
            </div>
            {expanded === s.id ? <ChevronUp size={16} className="text-on-surface-variant shrink-0" /> : <ChevronDown size={16} className="text-on-surface-variant shrink-0" />}
          </button>

          {expanded === s.id && (
            <div className="px-5 pb-5 pt-0 border-t border-white/5 space-y-3">
              <div className="grid grid-cols-2 gap-3 pt-4 text-sm">
                {s.phone && (
                  <div>
                    <p className="text-on-surface-variant text-xs mb-0.5">Telefon</p>
                    <p className="text-on-surface">{s.phone}</p>
                  </div>
                )}
                {s.company && (
                  <div>
                    <p className="text-on-surface-variant text-xs mb-0.5">Şirket</p>
                    <p className="text-on-surface">{s.company}</p>
                  </div>
                )}
              </div>
              <div>
                <p className="text-on-surface-variant text-xs mb-1">Mesaj</p>
                <p className="text-on-surface text-sm leading-relaxed bg-white/3 rounded-xl p-3">{s.message}</p>
              </div>
              <a
                href={`mailto:${s.email}`}
                className="inline-block text-sm font-medium text-primary hover:underline"
              >
                Yanıtla →
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
