import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminShell from "@/components/admin/AdminShell";

export default async function AdminPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/giris");

  const [
    { count: reviewCount },
    { count: contactCount },
    { count: visitorCount },
    { data: recentViews },
  ] = await Promise.all([
    supabase.from("reviews").select("*", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
    supabase.from("page_views").select("*", { count: "exact", head: true }),
    supabase.from("page_views").select("path, created_at").order("created_at", { ascending: false }).limit(5),
  ]);

  return (
    <AdminShell activePage="dashboard">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-on-surface mb-1">Genel Bakış</h1>
          <p className="text-on-surface-variant text-sm">Sitenizin anlık durumu</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: "Toplam Ziyaretçi", value: visitorCount ?? 0, color: "from-blue-600 to-blue-500" },
            { label: "Müşteri Yorumu", value: reviewCount ?? 0, color: "from-purple-600 to-purple-500" },
            { label: "İletişim Talebi", value: contactCount ?? 0, color: "from-emerald-600 to-emerald-500" },
          ].map((stat) => (
            <div key={stat.label} className="glass border border-white/5 rounded-2xl p-6">
              <p className="text-on-surface-variant text-sm mb-2">{stat.label}</p>
              <p className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value.toLocaleString("tr-TR")}
              </p>
            </div>
          ))}
        </div>

        {/* Son ziyaretler */}
        <div className="glass border border-white/5 rounded-2xl p-6">
          <h2 className="text-on-surface font-semibold mb-4">Son Ziyaretler</h2>
          {recentViews && recentViews.length > 0 ? (
            <div className="space-y-3">
              {recentViews.map((view, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-on-surface font-mono">{view.path}</span>
                  <span className="text-on-surface-variant">
                    {new Date(view.created_at).toLocaleString("tr-TR")}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-on-surface-variant text-sm">Henüz ziyaret kaydı yok.</p>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
