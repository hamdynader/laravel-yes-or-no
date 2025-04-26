
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  studentId: z.string().min(1, "رقم الطالب مطلوب"),
  subject: z.string().min(1, "المادة مطلوبة"),
  grade: z.string().min(1, "الدرجة مطلوبة"),
});

const TeacherGradesForm = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "تم إضافة الدرجة بنجاح",
      description: `تم إضافة درجة ${values.grade} للطالب في مادة ${values.subject}`,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="studentId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رقم الطالب</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
          name="grade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>الدرجة</FormLabel>
              <FormControl>
                <Input type="number" min="0" max="100" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">إضافة الدرجة</Button>
      </form>
    </Form>
  );
};

export default TeacherGradesForm;
