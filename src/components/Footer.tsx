import { Language } from '../content';
import { Instagram, Mail, Phone, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { generateVCard } from '../lib/vcard';
import { Link } from 'react-router-dom';

interface Props {
  t: any;
  lang: Language;
  setLang: (l: Language) => void;
}

export default function Footer({ t, lang, setLang }: Props) {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-3xl font-display font-bold text-[#F5F5F0] tracking-tight">
              {t.footer.name}
            </h3>
            <p className="text-[#D9D9D2] font-light leading-relaxed max-w-sm">
              {t.footer.subtitle}
            </p>
            <p className="text-sm text-white/40 font-medium tracking-wide uppercase">
              {t.footer.location}
            </p>
          </div>

          {/* Contact Links */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="text-lg font-display font-bold text-[#F5F5F0] tracking-tight mb-8">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="https://wa.me/34633655887" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-[#D9D9D2] hover:text-[#7CFF2B] transition-colors group">
                  <Phone size={18} className="text-white/40 group-hover:text-[#7CFF2B] transition-colors" />
                  <span>+34 633 655 887</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@daddypandastudio.com" className="flex items-center space-x-3 text-[#D9D9D2] hover:text-[#7CFF2B] transition-colors group">
                  <Mail size={18} className="text-white/40 group-hover:text-[#7CFF2B] transition-colors" />
                  <span>info@daddypandastudio.com</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/daddypanda.r" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-[#D9D9D2] hover:text-[#7CFF2B] transition-colors group">
                  <Instagram size={18} className="text-white/40 group-hover:text-[#7CFF2B] transition-colors" />
                  <span>@daddypanda.r</span>
                </a>
              </li>
              <li>
                <a href="https://t.me/daddypanda.r" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-[#D9D9D2] hover:text-[#7CFF2B] transition-colors group">
                  <Send size={18} className="text-white/40 group-hover:text-[#7CFF2B] transition-colors" />
                  <span>daddypanda.r</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Language & Legal */}
          <div className="md:col-span-3 space-y-6 flex flex-col justify-between">
            <div>
              <h4 className="text-lg font-display font-bold text-[#F5F5F0] tracking-tight mb-8">
                Idioma
              </h4>
              <div className="flex items-center space-x-4 text-sm font-medium">
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
            </div>
            
            <div className="pt-8 md:pt-0">
              <ul className="space-y-2 text-sm text-white/40">
                <li><button onClick={generateVCard} className="hover:text-[#7CFF2B] transition-colors text-left">Descargar Contacto (vCard)</button></li>
                <li><Link to="/aviso-legal" className="hover:text-white transition-colors">{t.footer.legal}</Link></li>
                <li><Link to="/politica-privacidad" className="hover:text-white transition-colors">{t.footer.privacy}</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/30 font-medium tracking-wide">
          <p>&copy; {new Date().getFullYear()} Daddy Panda Studio. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">daddypandastudio.com</p>
        </div>

      </motion.div>
    </footer>
  );
}
