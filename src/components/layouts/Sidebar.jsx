import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeftToLine, PanelLeft } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import clsx from "clsx";
import {
  LayoutDashboard,
  Layers,
  CheckSquare,
  FileText,
  BarChart,
  Users,
} from "lucide-react";
import { SiteButton } from "../common";

export default function Sidebar({
  mobileOpen,
  setMobileOpen,
  collapsed,
  setCollapsed,
}) {
  const sidebarItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/" },
    {
      label: "Degital Transformation",
      icon: Layers,
      path: "/digital-transformation",
    },
    { label: "Tasks", icon: CheckSquare, path: "/tasks" },
    { label: "Documents", icon: FileText, path: "/documents" },
    { label: "Reports", icon: BarChart, path: "/reports" },
    { label: "Users & Roles", icon: Users, path: "/users" },
  ];

  const handleToggle = () => {
    if (window.innerWidth < 1024) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={clsx(
          "fixed z-50 h-screen bg-linear-to-b from-[#1E3A5F] to-[#142B45] text-white transition-all duration-300",

          collapsed ? "w-16" : "w-64",
          mobileOpen ? "left-0" : "-left-64 lg:left-0",
        )}
      >
        <div className="relative flex items-center justify-between px-4 py-4">
          {!collapsed ? (
            <picture className="block w-37.5">
              <img src="./images/site-logo.png" alt="" className="w-full" />
            </picture>
          ) : (
            <picture className="block w-5 mt-5">
              <img
                src="./images/site-mini-logo.png"
                alt=""
                className="w-full"
              />
            </picture>
          )}

          <SiteButton
            onClick={handleToggle}
            className={`absolute -right-4 hidden lg:flex items-center justify-center bg-white text-neutral-600 w-8 h-8 rounded-full border hover:bg-neutral-100 ${collapsed && "top-3 rotate-180"}`}
          >
            <ArrowLeftToLine />
          </SiteButton>
        </div>

        <nav className="mt-4 space-y-1 px-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  clsx(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-slate-300 hover:bg-white/5",
                  )
                }
              >
                {collapsed ? (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span>
                        <Icon size={18} />
                      </span>
                    </TooltipTrigger>
                    <TooltipContent side="right">{item.label}</TooltipContent>
                  </Tooltip>
                ) : (
                  <>
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
