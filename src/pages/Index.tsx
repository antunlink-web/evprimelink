import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import Process from '@/components/landing/Process';
import Segments from '@/components/landing/Segments';
import Platform from '@/components/landing/Platform';
import RevenueModels from '@/components/landing/RevenueModels';
import Expansion from '@/components/landing/Expansion';
import WhyChooseUs from '@/components/landing/WhyChooseUs';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Features />
          <Process />
          <Segments />
          <Platform />
          <RevenueModels />
          <Expansion />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
