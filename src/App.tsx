
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Schedules from "./pages/Schedules";
import Grades from "./pages/Grades";
import Feedback from "./pages/Feedback";
import Classrooms from "./pages/Classrooms";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfileEdit from "./pages/ProfileEdit";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  
  useEffect(() => {
    // Check if user is logged in
    const userData = localStorage.getItem("user");
    setIsAuthenticated(!!userData);
  }, []);

  // While checking authentication status, return nothing
  if (isAuthenticated === null) {
    return null;
  }

  return (
    <div dir="rtl">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/landing" element={<Landing />} />
              <Route path="/" element={isAuthenticated ? <Index /> : <Navigate to="/landing" />} />
              <Route path="/schedules" element={isAuthenticated ? <Schedules /> : <Navigate to="/login" />} />
              <Route path="/grades" element={isAuthenticated ? <Grades /> : <Navigate to="/login" />} />
              <Route path="/feedback" element={isAuthenticated ? <Feedback /> : <Navigate to="/login" />} />
              <Route path="/classrooms" element={isAuthenticated ? <Classrooms /> : <Navigate to="/login" />} />
              <Route path="/teacher-dashboard" element={isAuthenticated ? <TeacherDashboard /> : <Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile-edit" element={isAuthenticated ? <ProfileEdit /> : <Navigate to="/login" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
