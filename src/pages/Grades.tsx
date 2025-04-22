
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, TrendingUp } from "lucide-react";

const Grades = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">الدرجات</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Book className="h-8 w-8 text-primary" />
              <CardTitle>الدرجات الحالية</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['الرياضيات', 'العلوم', 'اللغة العربية', 'اللغة الإنجليزية'].map((subject) => (
                  <div key={subject} className="flex justify-between items-center border-b pb-2">
                    <span>{subject}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">{Math.floor(Math.random() * 30) + 70}/100</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <TrendingUp className="h-8 w-8 text-primary" />
              <CardTitle>التقدم الدراسي</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['الفصل الأول', 'الفصل الثاني', 'الاختبارات النصفية', 'المشاريع'].map((term) => (
                  <div key={term} className="space-y-2">
                    <div className="flex justify-between">
                      <span>{term}</span>
                      <span className="font-bold">{Math.floor(Math.random() * 20) + 80}%</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary" 
                        style={{ width: `${Math.floor(Math.random() * 20) + 80}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Grades;
