
import Layout from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Feedback = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">التعليقات والتقييم</h1>
        
        <Card>
          <CardHeader className="flex flex-row items-center gap-4">
            <MessageSquare className="h-8 w-8 text-primary" />
            <CardTitle>إضافة تعليق جديد</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Textarea placeholder="أضف تعليقك أو ملاحظاتك هنا..." className="min-h-[120px]" />
              <Button>إرسال التعليق</Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">التعليقات السابقة</h2>
          
          {[1, 2, 3].map((item) => (
            <Card key={item} className="bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <div className="font-semibold">الأستاذ سعيد محمود</div>
                  <div className="text-sm text-muted-foreground">منذ {item} أيام</div>
                </div>
                <div className="mt-2">
                  أداء جيد في الاختبار الأخير. أتمنى الاستمرار في التحسن والمشاركة أكثر في الفصل.
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Feedback;
