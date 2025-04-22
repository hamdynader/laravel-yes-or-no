
import Layout from "@/components/layout/Layout";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import ScheduleCard from "@/components/dashboard/ScheduleCard";
import GradesCard from "@/components/dashboard/GradesCard";
import NotificationsCard from "@/components/dashboard/NotificationsCard";
import FeedbackCard from "@/components/dashboard/FeedbackCard";

const Index = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full">
          <WelcomeCard />
        </div>
        <div className="lg:col-span-1">
          <ScheduleCard />
        </div>
        <div className="lg:col-span-1">
          <GradesCard />
        </div>
        <div className="lg:col-span-1">
          <NotificationsCard />
        </div>
        <div className="col-span-full">
          <FeedbackCard />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
