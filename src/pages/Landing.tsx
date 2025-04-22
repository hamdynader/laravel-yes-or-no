import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarDays, Book, MessageSquare, School, LayoutDashboard, Bell } from "lucide-react";

const Landing = () => {
  return (
    <div className="font-tajawal">
      {/* الرأس */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <div className="text-2xl font-bold">المنصة التعليمية</div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="hover:underline">المميزات</a>
            <a href="#about" className="hover:underline">من نحن</a>
            <a href="#contact" className="hover:underline">اتصل بنا</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/">تسجيل الدخول</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* القسم الرئيسي */}
      <section className="bg-primary/5 py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">منصة تعليمية متكاملة</h1>
            <p className="text-xl">
              نوفر منصة تعليمية شاملة تربط الطلاب والمعلمين وأولياء الأمور في بيئة تعليمية متطورة
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/">ابدأ الآن</Link>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="#features">اكتشف المميزات</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="منصة تعليمية"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* المميزات */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="container mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">مميزات المنصة</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              توفر منصتنا العديد من المميزات التي تساعد على تحسين العملية التعليمية وتسهيل التواصل بين الطلاب والمعلمين
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: LayoutDashboard, title: "لوحة تحكم مخصصة", description: "لوحة تحكم سهلة الاستخدام تعرض كل ما يحتاجه المستخدم بشكل منظم" },
              { icon: CalendarDays, title: "الجداول الدراسية", description: "عرض الجداول الدراسية وتنظيم الوقت بشكل فعال" },
              { icon: Book, title: "متابعة الدرجات", description: "متابعة الدرجات والتقدم الدراسي بشكل مستمر" },
              { icon: MessageSquare, title: "نظام التعليقات", description: "نظام تعليقات وتقييم فعال بين المعلمين والطلاب" },
              { icon: School, title: "إدارة الفصول", description: "إدارة الفصول الدراسية بشكل سهل ومرن" },
              { icon: Bell, title: "إشعارات فورية", description: "إشعارات فورية لكل ما هو جديد في المنصة" },
            ].map((feature, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* من نحن */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
              alt="فريق العمل"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">من نحن</h2>
            <p className="text-lg">
              نحن فريق من المتخصصين في مجال التعليم وتقنية المعلومات، نسعى لتقديم أفضل حلول تقنية للمؤسسات التعليمية. هدفنا هو توفير بيئة تعليمية متكاملة تساعد على تحسين العملية التعليمية وتسهيل التواصل بين كافة الأطراف.
            </p>
            <p className="text-lg">
              تم تطوير منصتنا بناءً على أحدث التقنيات وأفضل الممارسات العالمية في مجال التعليم الإلكتروني، مع مراعاة احتياجات المستخدمين في المنطقة العربية.
            </p>
          </div>
        </div>
      </section>

      {/* اتصل بنا */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">اتصل بنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نحن هنا لمساعدتك والإجابة على استفساراتك. يمكنك التواصل معنا من خلال النموذج أدناه
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">الاسم</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="أدخل بريدك الإلكتروني"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">الموضوع</label>
                <input 
                  type="text" 
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="أدخل موضوع الرسالة"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">الرسالة</label>
                <textarea 
                  className="w-full px-3 py-2 border rounded-md min-h-[150px]"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>
              <Button className="w-full">إرسال الرسالة</Button>
            </form>
          </div>
        </div>
      </section>

      {/* الفوتر */}
      <footer className="bg-primary text-primary-foreground py-10 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-bold mb-4">المنصة التعليمية</h3>
              <p className="opacity-80">
                منصة تعليمية متكاملة تربط الطلاب والمعلمين وأولياء الأمور
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2 opacity-80">
                <li><a href="#features" className="hover:underline">المميزات</a></li>
                <li><a href="#about" className="hover:underline">من نحن</a></li>
                <li><a href="#contact" className="hover:underline">اتصل بنا</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
              <ul className="space-y-2 opacity-80">
                <li>البريد الإلكتروني: info@edu-platform.com</li>
                <li>الهاتف: 0123456789</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center opacity-80">
            <p>© {new Date().getFullYear()} المنصة التعليمية. جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
