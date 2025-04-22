
import { Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-primary py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-primary-foreground">المنصة التعليمية</div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-primary-foreground relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </Button>
        <Button variant="ghost" size="icon" className="text-primary-foreground">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
