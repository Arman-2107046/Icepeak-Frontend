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
import Knitwear from "./pages/ProductPages/Knitwear";
import Sweater from "./pages/ProductPages/Sweater";
import WovenDenim from "./pages/ProductPages/WovenDenim";
import WovenNonDenim from "./pages/ProductPages/WovenNonDenim";
import WovenOuterwear from "./pages/ProductPages/WovenOuterwear";
import Activewear from "./pages/ProductPages/Activewear";
import Lingerie from "./pages/ProductPages/Lingerie";
import Workwear from "./pages/ProductPages/Workwear";
import Sleepwear from "./pages/ProductPages/Sleepwear";
import LeatherItems from "./pages/ProductPages/LeatherItems";
import Handicraft from "./pages/ProductPages/Handicraft";
import HomeTextile from "./pages/ProductPages/HomeTextile";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide splash after 2.5 seconds (adjust as you like)
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <CookieConsent />
      <ScrollToTop />
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

          <Route path="/knitwear" element={<Knitwear />} />
          <Route path="/sweater" element={<Sweater />} />
          <Route path="/woven-denim" element={<WovenDenim />} />
          <Route path="/woven-non-denim" element={<WovenNonDenim />} />
          <Route path="/woven-outerwear" element={<WovenOuterwear />} />
          <Route path="/activewear" element={<Activewear />} />
          <Route path="/activewear" element={<Lingerie />} />
          <Route path="/workwear" element={<Workwear />} />
          <Route path="/sleepwear" element={<Sleepwear />} />
          <Route path="/leather-items" element={<LeatherItems />} />
          <Route path="/handicraft" element={<Handicraft />} />
          <Route path="/home-textile" element={<HomeTextile />} />
          <Route path="/lingerie" element={<Lingerie />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
