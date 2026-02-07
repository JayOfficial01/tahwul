import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function AppLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <section className="flex justify-end min-h-screen bg-slate-100">
      <Sidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />
      <main className={`border ${collapsed ? "lg:ml-16" : "lg:ml-64"} w-full`}>
        <Header setSidebarOpen={setMobileOpen} />
        <article className="p-10">{children}</article>
      </main>
    </section>
  );
}

export default AppLayout;
