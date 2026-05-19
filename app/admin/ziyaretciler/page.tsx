import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminShell from "@/components/admin/AdminShell";

export default async function AdminVisitorsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/giris");

  const { data: views } = await supabase
    .from("page_views")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(200);

  const pathCounts: Record<string, number> = {};
  views?.forEach((v) => {
    pathCounts[v.path] = (pathCounts[v.path] ?? 0) + 1;
  });
  const topPages = Object.entries(pathCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  return (
    <AdminShell activePage="ziyaretciler">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-on-surface mb-1">Ziyaretçi Analitikleri</h1>
          <p className="text-on-surface-variant text-sm">Son 200 sayfa görüntülenmesi</p>
        </div>

        {/* En çok ziyaret edilen sayfalar */}
        <div className="glass border border-white/5 rounded-2xl p-6">
          <h2 className="font-semibold text-on-surface mb-4">En Çok Ziyaret Edilen Sayfalar</h2>
          {topPages.length > 0 ? (
            <div className="space-y-3">
              {topPages.map(([path, count]) => (
                <div key={path} className="flex items-center gap-4">
                  <span className="text-on-surface font-mono text-sm flex-1">{path}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        style={{ width: `${(count / topPages[0][1]) * 100}%` }}
                      />
                    </div>
                    <span className="text-on-surface-variant text-sm w-8 text-right">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-on-surface-variant text-sm">Henüz ziyaret kaydı yok.</p>
          )}
        </div>

        {/* Son ziyaretler */}
        <div className="glass border border-white/5 rounded-2xl p-6">
          <h2 className="font-semibold text-on-surface mb-4">Son Ziyaretler</h2>
          {views && views.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-on-surface-variant border-b border-white/5">
                    <th className="text-left py-2 pr-4 font-medium">Sayfa</th>
                    <th className="text-left py-2 pr-4 font-medium">Kaynak</th>
                    <th className="text-left py-2 font-medium">Tarih</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {views.map((view) => (
                    <tr key={view.id} className="text-on-surface-variant hover:text-on-surface transition-colors">
                      <td className="py-2 pr-4 font-mono">{view.path}</td>
                      <td className="py-2 pr-4 truncate max-w-[200px]">{view.referrer || "Doğrudan"}</td>
                      <td className="py-2 whitespace-nowrap">
                        {new Date(view.created_at).toLocaleString("tr-TR")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-on-surface-variant text-sm">Henüz ziyaret kaydı yok.</p>
          )}
        </div>
      </div>
    </AdminShell>
  );
}
