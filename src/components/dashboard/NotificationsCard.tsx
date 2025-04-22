
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell } from "lucide-react";

const notifications = [
  {
    title: "تم إضافة درجة جديدة",
    description: "تم إضافة درجة اختبار الرياضيات لهذا الأسبوع",
    time: "منذ ساعة واحدة"
  },
  {
    title: "تعليق جديد من المعلم",
    description: "أ. سارة: أحسنت في مشروع اللغة العربية الأخير",
    time: "منذ 3 ساعات"
  },
  {
    title: "تذكير بالواجب",
    description: "موعد تسليم واجب العلوم غدًا",
    time: "منذ 5 ساعات"
  }
];

const NotificationsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">أحدث الإشعارات</CardTitle>
        <Bell className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {notifications.map((item, index) => (
            <div key={index} className="border-b border-border pb-3 last:border-0 last:pb-0">
              <h4 className="font-medium text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              <span className="text-xs text-primary mt-1 block">{item.time}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationsCard;
