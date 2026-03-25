import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Process from '@/components/landing/Process';
import ROICalculator from '@/components/landing/ROICalculator';
import Segments from '@/components/landing/Segments';
import RevenueModels from '@/components/landing/RevenueModels';
import Trust from '@/components/landing/Trust';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import FAQ from '@/components/landing/FAQ';
import Platform from '@/components/landing/Platform';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          {/* B2B conversion flow */}
          <Hero />
          <Features />
          <Process />
          <ROICalculator />
          <Segments />
          <RevenueModels />
          <Trust />
          <WhyChooseUs />
          <FAQ />
          {/* App section (lower priority) */}
          <Platform />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
