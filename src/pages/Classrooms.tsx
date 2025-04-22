
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Users } from "lucide-react";

const Classrooms = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">الفصول الدراسية</h1>
        
        <div className="grid md:grid-cols-3 gap-6">
          {['فصل العلوم', 'فصل الرياضيات', 'فصل اللغة العربية', 'فصل اللغة الإنجليزية', 'فصل الدراسات الاجتماعية'].map((classroom, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <School className="h-8 w-8 text-primary" />
                <CardTitle>{classroom}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-5 w-5" />
                  <span>{Math.floor(Math.random() * 10) + 20} طالب</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>الأستاذ:</span>
                    <span>محمد عبدالله</span>
                  </div>
                  <div className="flex justify-between">
                    <span>القاعة:</span>
                    <span>B{index + 10}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>المواعيد:</span>
                    <span>الأحد - الثلاثاء</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  عرض التفاصيل
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Classrooms;
