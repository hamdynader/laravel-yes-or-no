
import { CalendarDays, Book, MessageSquare, School, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: "لوحة التحكم", href: "/" },
    { icon: CalendarDays, label: "الجداول الدراسية", href: "#" },
    { icon: Book, label: "الدرجات", href: "#" },
    { icon: MessageSquare, label: "التعليقات والتقييم", href: "#" },
    { icon: School, label: "الفصول الدراسية", href: "#" },
  ];

  return (
    <aside
      className={cn(
        "bg-card border-l border-border h-screen transition-all",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-border flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "<<" : ">>"}
          </Button>
        </div>
        <div className="flex-1 py-4 space-y-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn(
                "w-full justify-start text-right px-4",
                collapsed ? "justify-center" : ""
              )}
              asChild
            >
              <a href={item.href}>
                <item.icon className={cn("h-5 w-5 ml-2", collapsed && "mx-0")} />
                {!collapsed && <span>{item.label}</span>}
              </a>
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
