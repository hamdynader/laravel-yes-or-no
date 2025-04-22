
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";

const scheduleItems = [
  { time: "08:00 - 09:30", subject: "الرياضيات", teacher: "أ. محمد علي", room: "قاعة ١٠٣" },
  { time: "09:45 - 11:15", subject: "اللغة العربية", teacher: "أ. سارة أحمد", room: "قاعة ٢٠١" },
  { time: "11:30 - 13:00", subject: "العلوم", teacher: "أ. خالد محمود", room: "قاعة ١٠٥" },
];

const ScheduleCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">جدول اليوم</CardTitle>
        <CalendarDays className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between border-r-4 border-primary pr-3 py-2"
            >
              <div>
                <h4 className="font-medium text-sm">{item.subject}</h4>
                <p className="text-xs text-muted-foreground">{item.teacher}</p>
                <p className="text-xs text-muted-foreground">{item.room}</p>
              </div>
              <div className="text-sm font-medium">{item.time}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ScheduleCard;
