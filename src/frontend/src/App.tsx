import { useEffect, useState } from "react";
import MainLayout from "./components/site/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import AcademicsPage from "./pages/AcademicsPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import PlacementsPage from "./pages/PlacementsPage";
import NewsEventsPage from "./pages/NewsEventsPage";
import ContactPage from "./pages/ContactPage";

// Main app component with hash-based routing and layout composition
export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash || "#/");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderPage = () => {
    switch (currentRoute) {
      case "#/":
        return <HomePage />;
      case "#/about":
        return <AboutPage />;
      case "#/academics":
        return <AcademicsPage />;
      case "#/admissions":
        return <AdmissionsPage />;
      case "#/placements":
        return <PlacementsPage />;
      case "#/news-events":
        return <NewsEventsPage />;
      case "#/contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return <MainLayout>{renderPage()}</MainLayout>;
}
