
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";

const grades = [
  { subject: "الرياضيات", grade: 92, maxGrade: 100 },
  { subject: "اللغة العربية", grade: 85, maxGrade: 100 },
  { subject: "العلوم", grade: 88, maxGrade: 100 },
  { subject: "الدراسات الاجتماعية", grade: 90, maxGrade: 100 },
];

const GradesCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium">آخر الدرجات</CardTitle>
        <Book className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {grades.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{item.subject}</span>
                <span className="text-sm text-muted-foreground">
                  {item.grade} / {item.maxGrade}
                </span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{
                    width: `${(item.grade / item.maxGrade) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GradesCard;
