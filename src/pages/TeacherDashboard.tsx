
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TeacherGradesForm from "@/components/teacher/TeacherGradesForm";
import TeacherScheduleForm from "@/components/teacher/TeacherScheduleForm";
import TeacherFeedbackForm from "@/components/teacher/TeacherFeedbackForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TeacherDashboard = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">لوحة تحكم المعلم</h1>
        
        <Tabs defaultValue="grades" dir="rtl" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="grades">إضافة الدرجات</TabsTrigger>
            <TabsTrigger value="schedule">الجداول الدراسية</TabsTrigger>
            <TabsTrigger value="feedback">التعليقات والتقييم</TabsTrigger>
          </TabsList>
          
          <TabsContent value="grades">
            <Card>
              <CardHeader>
                <CardTitle>إضافة الدرجات</CardTitle>
              </CardHeader>
              <CardContent>
                <TeacherGradesForm />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="schedule">
            <Card>
              <CardHeader>
                <CardTitle>إضافة جدول دراسي</CardTitle>
              </CardHeader>
              <CardContent>
                <TeacherScheduleForm />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle>إضافة تعليق أو تقييم</CardTitle>
              </CardHeader>
              <CardContent>
                <TeacherFeedbackForm />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default TeacherDashboard;
