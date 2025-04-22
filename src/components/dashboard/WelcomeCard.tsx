
import { Card, CardContent } from "@/components/ui/card";

const WelcomeCard = () => {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardContent className="pt-6">
        <h2 className="text-2xl font-bold mb-2">مرحبًا، أحمد!</h2>
        <p className="opacity-90">نتمنى لك يومًا دراسيًا موفقًا</p>
        <div className="mt-4 text-sm">
          <p>الثلاثاء، 22 أبريل 2025</p>
          <p className="mt-1">الفصل الدراسي الثاني</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeCard;
