
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  subject: z.string().min(1, "المادة مطلوبة"),
  day: z.string().min(1, "اليوم مطلوب"),
  time: z.string().min(1, "الوقت مطلوب"),
  classroom: z.string().min(1, "رقم القاعة مطلوب"),
});

const TeacherScheduleForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "تم إضافة الجدول بنجاح",
      description: `تم إضافة حصة ${values.subject} يوم ${values.day}`,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>المادة</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر المادة" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="math">الرياضيات</SelectItem>
                  <SelectItem value="science">العلوم</SelectItem>
                  <SelectItem value="arabic">اللغة العربية</SelectItem>
                  <SelectItem value="english">اللغة الإنجليزية</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="day"
          render={({ field }) => (
            <FormItem>
              <FormLabel>اليوم</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="اختر اليوم" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="sunday">الأحد</SelectItem>
                  <SelectItem value="monday">الإثنين</SelectItem>
                  <SelectItem value="tuesday">الثلاثاء</SelectItem>
                  <SelectItem value="wednesday">الأربعاء</SelectItem>
                  <SelectItem value="thursday">الخميس</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الوقت</FormLabel>
              <FormControl>
                <Input type="time" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="classroom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رقم القاعة</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">إضافة الجدول</Button>
      </form>
    </Form>
  );
};

export default TeacherScheduleForm;
