
import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const ProfileEdit = () => {
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Load user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setName(parsedUser.name || "");
      setEmail(parsedUser.email || "");
      setPhone(parsedUser.phone || "");
      setBio(parsedUser.bio || "");
    } else {
      // Redirect to login if no user data found
      navigate("/login");
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate saving profile
    setTimeout(() => {
      const updatedUser = {
        ...user,
        name,
        email,
        phone,
        bio
      };
      
      // Update localStorage
      localStorage.setItem("user", JSON.stringify(updatedUser));
      
      setIsLoading(false);
      toast({
        title: "تم تحديث البيانات بنجاح",
        description: "تم تحديث بيانات الملف الشخصي بنجاح",
      });
    }, 1000);
  };

  if (!user) {
    return null; // Or a loading state
  }

  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">تعديل الملف الشخصي</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>الصورة الشخصية</CardTitle>
            <CardDescription>قم بتحديث صورتك الشخصية</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <Button variant="outline">تغيير الصورة</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>المعلومات الشخصية</CardTitle>
            <CardDescription>قم بتحديث معلوماتك الشخصية</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم</Label>
                <Input 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="الاسم الكامل"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="البريد الإلكتروني"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input 
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="رقم الهاتف"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">نبذة شخصية</Label>
                <Textarea 
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="اكتب نبذة مختصرة عن نفسك"
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="userType">نوع المستخدم</Label>
                <Input 
                  id="userType"
                  value={user.type}
                  disabled
                  readOnly
                />
              </div>
              
              <div className="flex justify-end">
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "جاري الحفظ..." : "حفظ التعديلات"}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter className="justify-between">
            <Button
              variant="outline"
              onClick={() => navigate("/")}
            >
              إلغاء
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                if (window.confirm("هل أنت متأكد من أنك تريد تغيير كلمة المرور؟")) {
                  // Logic to change password
                  toast({
                    title: "تنبيه",
                    description: "تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني",
                  });
                }
              }}
            >
              تغيير كلمة المرور
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
};

export default ProfileEdit;
