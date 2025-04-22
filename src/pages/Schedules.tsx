
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const Schedules = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">الجداول الدراسية</h1>
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <CalendarDays className="h-8 w-8 text-primary" />
            <CardTitle>جدول الأسبوع الحالي</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 text-center font-medium">
              <div className="bg-muted p-3 rounded-lg">الأحد</div>
              <div className="bg-muted p-3 rounded-lg">الإثنين</div>
              <div className="bg-muted p-3 rounded-lg">الثلاثاء</div>
              <div className="bg-muted p-3 rounded-lg">الأربعاء</div>
              <div className="bg-muted p-3 rounded-lg">الخميس</div>
              <div className="bg-muted p-3 rounded-lg">الجمعة</div>
              <div className="bg-muted p-3 rounded-lg">السبت</div>
            </div>
            <div className="mt-6 space-y-4">
              {[1, 2, 3].map((period) => (
                <div key={period} className="border rounded-lg p-4">
                  <div className="flex justify-between">
                    <div className="font-bold">الرياضيات</div>
                    <div className="text-muted-foreground">09:00 - 10:30</div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">الأستاذ محمد أحمد - قاعة B12</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Schedules;
