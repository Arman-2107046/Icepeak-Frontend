import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import SplashScreen from "./components/SplashScreen"; // 👈 import your splash
import ScrollToTop from "./components/ScrollToTop";
import CookieConsent from "./components/Cookies";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide splash after 2.5 seconds (adjust as you like)
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />; // 👈 show splash first
  }

  return (
    <Router>
      <CookieConsent/>
      <ScrollToTop/>
      <Routes>
        {/* All pages wrapped by Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/service" element={<TermsOfService />} />

          {/* blog */}
           <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
