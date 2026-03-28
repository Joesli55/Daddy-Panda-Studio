import { useState } from 'react';
import { content, Language } from '../content';
import { MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import TrackRecord from '../components/TrackRecord';
import Method from '../components/Method';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  const [lang, setLang] = useState<Language>('es');
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F0] font-sans selection:bg-[#7CFF2B] selection:text-[#050505] relative">
      <Header lang={lang} setLang={setLang} t={t} />
      
      <main>
        <Hero t={t} lang={lang} />
        <About t={t} />
        <Services t={t} />
        <TrackRecord t={t} />
        <Method t={t} />
        <CTA t={t} />
      </main>

      <Footer t={t} lang={lang} setLang={setLang} />

      {/* Floating WhatsApp Button for Mobile */}
      <a 
        href="https://wa.me/34633655887?text=Hola%20Daddy%20Panda!%20Quiero%20mi%20bamb%C3%BA"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#7CFF2B] text-[#050505] rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(124,255,43,0.4)] hover:scale-110 transition-transform duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
