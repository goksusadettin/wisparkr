"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { LayoutDashboard, MessageSquare, Mail, Users, LogOut } from "lucide-react";

const navItems = [
  { key: "dashboard", label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { key: "yorumlar", label: "Yorumlar", href: "/admin/yorumlar", icon: MessageSquare },
  { key: "iletisim", label: "İletişim", href: "/admin/iletisim", icon: Mail },
  { key: "ziyaretciler", label: "Ziyaretçiler", href: "/admin/ziyaretciler", icon: Users },
];

export default function AdminShell({
  children,
  activePage,
}: {
  children: React.ReactNode;
  activePage: string;
}) {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/admin/giris");
    router.refresh();
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 shrink-0 border-r border-white/5 flex flex-col py-6 px-4">
        <Link href="/admin" className="flex items-center gap-2.5 mb-10 px-2">
          <Image src="/logo.png" alt="Wisparkr" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-on-surface">Wisparkr</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {navItems.map(({ key, label, href, icon: Icon }) => (
            <Link
              key={key}
              href={href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activePage === key
                  ? "bg-primary/10 text-primary"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-white/5"
              }`}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-on-surface-variant hover:text-red-400 hover:bg-red-400/10 transition-all"
        >
          <LogOut size={18} />
          Çıkış Yap
        </button>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
