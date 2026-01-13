import { useState } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Specialist from '@/components/Specialist';
import Booking from '@/components/Booking';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <section id="home" className="min-h-screen">
          <Hero />
        </section>
        
        <section id="services" className="min-h-screen py-20">
          <Services />
        </section>
        
        <section id="specialist" className="py-20 bg-muted/30">
          <Specialist />
        </section>
        
        <section id="booking" className="py-20">
          <Booking />
        </section>
        
        <section id="reviews" className="py-20 bg-muted/30">
          <Reviews />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
      
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2026 Профессиональный подолог с выездом на дом</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;