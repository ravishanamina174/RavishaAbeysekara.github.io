import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutSection from './components/AboutSection';
import ArticlesSection from './components/ArticlesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroSection from './components/IntroSection';
import ServicesSection from './components/ServicesSection';
import TabsSection from './components/TabsSection';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import ArticlesPage from './pages/ArticlesPage';

function App() {
  useIntersectionObserver();

  return (
    <Router>
      <div className="bg-white text-gray-900 min-h-screen relative overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <IntroSection />
              <AboutSection />
              <TabsSection />
              <ServicesSection />
              <ArticlesSection />
              <ContactSection />
            </>
          } />
          <Route path="/articles/:id" element={<ArticlesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;