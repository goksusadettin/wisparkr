import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AdminShell from "@/components/admin/AdminShell";
import ContactTable from "@/components/admin/ContactTable";

export default async function AdminContactPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/giris");

  const { data: submissions } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <AdminShell activePage="iletisim">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-on-surface mb-1">İletişim Talepleri</h1>
          <p className="text-on-surface-variant text-sm">{submissions?.length ?? 0} talep</p>
        </div>
        <ContactTable submissions={submissions ?? []} />
      </div>
    </AdminShell>
  );
}
