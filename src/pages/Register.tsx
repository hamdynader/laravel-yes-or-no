
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";

type UserType = "طالب" | "ولي أمر" | "معلم";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userType, setUserType] = useState<UserType>("طالب");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "كلمة المرور غير متطابقة",
        description: "يرجى التأكد من تطابق كلمة المرور",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      setIsLoading(false);
      // Mock successful registration
      localStorage.setItem("user", JSON.stringify({ 
        name, 
        email, 
        type: userType,
        avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d" 
      }));
      toast({
        title: "تم إنشاء الحساب بنجاح",
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
          <p className="mt-2 text-sm text-gray-600">إنشاء حساب جديد</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">إنشاء حساب</CardTitle>
            <CardDescription>أدخل بياناتك لإنشاء حساب جديد</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم</Label>
                <Input 
                  id="name"
                  placeholder="أدخل اسمك الكامل"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="أدخل كلمة المرور" 
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">تأكيد كلمة المرور</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="أعد إدخال كلمة المرور" 
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label>نوع المستخدم</Label>
                <RadioGroup 
                  value={userType} 
                  onValueChange={(value) => setUserType(value as UserType)}
                  className="flex flex-col space-y-2 mt-2"
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="طالب" id="student" />
                    <Label htmlFor="student" className="cursor-pointer">طالب</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="ولي أمر" id="parent" />
                    <Label htmlFor="parent" className="cursor-pointer">ولي أمر</Label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="معلم" id="teacher" />
                    <Label htmlFor="teacher" className="cursor-pointer">معلم</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <Button className="w-full" type="submit" disabled={isLoading}>
                {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <div className="text-sm text-center">
              لديك حساب بالفعل؟{" "}
              <Link to="/login" className="text-primary hover:underline">
                تسجيل الدخول
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

export default Register;
