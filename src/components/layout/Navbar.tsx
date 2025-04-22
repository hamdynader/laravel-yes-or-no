
import { Bell, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useToast } from "@/components/ui/use-toast";

interface UserData {
  name: string;
  email: string;
  type: string;
  avatar: string;
}

const Navbar = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    toast({
      title: "تم تسجيل الخروج بنجاح",
      description: "نأمل أن نراك قريباً",
    });
    navigate("/landing");
  };

  const notifications = [
    {
      title: "تم إضافة درجة جديدة",
      description: "تم إضافة درجة اختبار الرياضيات",
      time: "منذ ساعة واحدة"
    },
    {
      title: "تعليق جديد من المعلم",
      description: "أ. سارة: أحسنت في مشروع اللغة العربية",
      time: "منذ 3 ساعات"
    },
    {
      title: "تذكير بالواجب",
      description: "موعد تسليم واجب العلوم غدًا",
      time: "منذ 5 ساعات"
    }
  ];

  return (
    <nav className="bg-primary py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-primary-foreground">المنصة التعليمية</div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0" align="end">
                <div className="p-4 border-b">
                  <h3 className="font-medium text-lg">الإشعارات</h3>
                </div>
                <div className="max-h-[300px] overflow-auto">
                  {notifications.map((notification, index) => (
                    <div key={index} className="p-4 border-b last:border-0 hover:bg-muted/50 cursor-pointer">
                      <p className="font-medium text-sm">{notification.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{notification.description}</p>
                      <span className="text-xs text-primary mt-1 block">{notification.time}</span>
                    </div>
                  ))}
                </div>
                <div className="p-2 border-t text-center">
                  <Button variant="ghost" size="sm" className="w-full">عرض كل الإشعارات</Button>
                </div>
              </PopoverContent>
            </Popover>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary-foreground relative rounded-full h-8 w-8 overflow-hidden">
                  <Avatar>
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>حسابي</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <User className="h-4 w-4" />
                  <span>{user.name}</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 cursor-pointer">
                  <span className="text-xs text-muted-foreground">{user.type}</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/profile-edit")}>
                  <Settings className="h-4 w-4 ml-2" />
                  تعديل الملف الشخصي
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 ml-2" />
                  تسجيل الخروج
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <Button variant="secondary" size="sm" asChild>
            <Link to="/login">تسجيل الدخول</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
