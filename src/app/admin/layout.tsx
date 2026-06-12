"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, ShoppingBag, Settings, LogOut, Menu } from "lucide-react";
import { useState } from "react";

const sidebarLinks = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Products", href: "/admin/products", icon: ShoppingBag },
  { name: "Packages", href: "/admin/packages", icon: Package },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F7F5] font-sans flex text-[#1A1A1A]">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 shadow-sm flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-72 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex items-center justify-between h-20 px-8 border-b border-gray-50">
          <Link href="/" className="text-xl font-[family-name:var(--font-serif)] tracking-tight">
            Exclusive <span className="text-gray-400">Admin</span>
          </Link>
          <button className="lg:hidden text-gray-400 hover:text-black" onClick={() => setIsSidebarOpen(false)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 px-4 py-8 overflow-y-auto">
          <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4">Management</p>
          <nav className="space-y-1">
            {sidebarLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200 ${
                    isActive 
                      ? "bg-black text-white shadow-md" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-black"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-gray-50">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200"
          >
            <LogOut className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between h-16 px-4 bg-white border-b border-gray-100 shrink-0">
          <Link href="/admin" className="text-lg font-[family-name:var(--font-serif)]">
            Exclusive <span className="text-gray-400">Admin</span>
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 rounded-full bg-gray-50 text-black hover:bg-gray-100 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#F7F7F5] p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
