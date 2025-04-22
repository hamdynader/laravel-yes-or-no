
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

const feedbacks = [
  {
    subject: "اللغة العربية",
    teacher: "أ. سارة أحمد",
    message: "أحسنت في المشروع الأخير. استمر في العمل الجيد واهتم أكثر بالقواعد النحوية.",
    date: "20 أبريل 2025"
  },
  {
    subject: "الرياضيات",
    teacher: "أ. محمد علي",
    message: "تحتاج إلى مزيد من التدريب على المعادلات. راجع الفصل السابع من الكتاب.",
    date: "18 أبريل 2025"
  }
];

const FeedbackCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">آخر التعليقات</CardTitle>
        <MessageSquare className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {feedbacks.map((item, index) => (
            <div key={index} className="border-b border-border pb-3 last:border-0 last:pb-0">
              <div className="flex justify-between">
                <h4 className="font-medium text-sm">{item.subject}</h4>
                <span className="text-xs text-muted-foreground">{item.date}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{item.teacher}</p>
              <p className="text-sm mt-2">{item.message}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FeedbackCard;
