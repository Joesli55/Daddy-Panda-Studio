import { Language } from '../content';
import { Menu, X, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Props {
  lang: Language;
  setLang: (l: Language) => void;
  t: any;
}

export default function Header({ lang, setLang, t }: Props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#inicio', label: t.nav.home },
    { href: '#servicios', label: t.nav.services },
    { href: '#trayectoria', label: t.nav.trackRecord },
    { href: '#metodo', label: t.nav.method },
    { href: '#contacto', label: t.nav.contact },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-header py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center space-x-3 text-xl font-display font-bold tracking-tight text-[#F5F5F0]">
          <img src="/logo-daddy-panda-opt.jpeg" alt="Daddy Panda Studio Logo" className="h-10 w-10 rounded-full object-cover border border-white/10" />
          <span id="header-fallback-title">Daddy Panda Studio</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className="text-sm font-medium text-[#D9D9D2] hover:text-[#7CFF2B] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2 text-sm font-medium">
            <button 
              onClick={() => setLang('es')} 
              className={`transition-colors ${lang === 'es' ? 'text-[#7CFF2B]' : 'text-[#D9D9D2] hover:text-white'}`}
            >
              ES
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => setLang('en')} 
              className={`transition-colors ${lang === 'en' ? 'text-[#7CFF2B]' : 'text-[#D9D9D2] hover:text-white'}`}
            >
              EN
            </button>
          </div>
          <a 
            href="https://wa.me/34633655887?text=Hola%20Daddy%20Panda!%20Quiero%20mi%20bamb%C3%BA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-[#163A1B] text-[#7CFF2B] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#1f4f25] transition-colors border border-[#7CFF2B]/20"
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <div className="flex items-center space-x-2 text-sm font-medium">
            <button 
              onClick={() => setLang('es')} 
              className={lang === 'es' ? 'text-[#7CFF2B]' : 'text-[#D9D9D2]'}
            >
              ES
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => setLang('en')} 
              className={lang === 'en' ? 'text-[#7CFF2B]' : 'text-[#D9D9D2]'}
            >
              EN
            </button>
          </div>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[#F5F5F0] hover:text-[#7CFF2B] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel absolute top-full left-0 right-0 border-t border-white/5 py-4 px-4 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#D9D9D2] hover:text-[#7CFF2B] transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://wa.me/34633655887?text=Hola%20Daddy%20Panda!%20Quiero%20mi%20bamb%C3%BA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 bg-[#7CFF2B] text-[#050505] px-4 py-3 rounded-full text-sm font-bold mt-4"
          >
            <MessageCircle size={18} />
            <span>WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
