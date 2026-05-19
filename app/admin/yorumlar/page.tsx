import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminShell from "@/components/admin/AdminShell";
import ReviewsTable from "@/components/admin/ReviewsTable";

export default async function AdminReviewsPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/giris");

  const { data: reviews } = await supabase
    .from("reviews")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <AdminShell activePage="yorumlar">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-on-surface mb-1">Müşteri Yorumları</h1>
          <p className="text-on-surface-variant text-sm">{reviews?.length ?? 0} yorum</p>
        </div>
        <ReviewsTable reviews={reviews ?? []} />
      </div>
    </AdminShell>
  );
}
