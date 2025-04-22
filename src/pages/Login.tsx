
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Mock successful login
      localStorage.setItem("user", JSON.stringify({ 
        name: "محمد أحمد", 
        email, 
        type: "طالب",
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" 
      }));
      toast({
        title: "تم تسجيل الدخول بنجاح",
        description: "مرحباً بك في المنصة التعليمية",
      });
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-primary/5 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-tajawal">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-primary">المنصة التعليمية</h2>
          <p className="mt-2 text-sm text-gray-600">تسجيل الدخول إلى حسابك</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">تسجيل الدخول</CardTitle>
            <CardDescription>أدخل بريدك الإلكتروني وكلمة المرور للدخول</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input 
                  id="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">كلمة المرور</Label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    نسيت كلمة المرور؟
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="أدخل كلمة المرور" 
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-center">
              ليس لديك حساب؟{" "}
              <Link to="/register" className="text-primary hover:underline">
                إنشاء حساب جديد
              </Link>
            </div>
          </CardFooter>
        </Card>
        
        <div className="text-center">
          <Link to="/landing" className="text-sm text-primary hover:underline">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
