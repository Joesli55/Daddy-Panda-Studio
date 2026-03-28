import { generateVCard } from '../lib/vcard';
import { MessageCircle, Download, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  t: any;
}

export default function CTA({ t }: Props) {
  return (
    <section id="contacto" className="py-40 bg-[#0D0D0D] relative border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full bg-[#7CFF2B] rounded-full blur-[200px] opacity-[0.04] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
      >
        
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-[#F5F5F0] tracking-tight mb-8">
          {t.cta.title}
        </h2>
        
        <p className="text-xl sm:text-2xl text-[#D9D9D2] font-light leading-relaxed mb-16 max-w-2xl mx-auto">
          {t.cta.text}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <a 
            href="https://wa.me/34633655887?text=Hola%20Daddy%20Panda!%20Quiero%20mi%20bamb%C3%BA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-[#7CFF2B] text-[#050505] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#96FF4D] transition-all glow-accent-hover transform hover:-translate-y-1 shadow-[0_10px_40px_rgba(124,255,43,0.2)]"
          >
            <MessageCircle size={24} />
            <span>{t.cta.btnWhatsapp}</span>
          </a>
          
          <button 
            onClick={generateVCard}
            className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-transparent border-2 border-white/20 text-[#F5F5F0] px-10 py-5 rounded-full font-medium text-xl hover:border-[#7CFF2B]/50 hover:text-[#7CFF2B] transition-all"
          >
            <Download size={24} />
            <span>{t.cta.btnSave}</span>
          </button>
        </div>

        <div className="flex flex-col items-center space-y-8">
          <a 
            href="https://instagram.com/daddypanda.r" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#D9D9D2] hover:text-[#7CFF2B] transition-colors font-medium text-lg"
          >
            <Instagram size={20} />
            <span>{t.cta.btnInsta}</span>
          </a>

          <div className="w-24 h-[1px] bg-white/10"></div>

          <p className="text-sm text-[#D9D9D2]/60 font-medium tracking-widest uppercase">
            {t.cta.supportLine}
          </p>
        </div>

      </motion.div>
    </section>
  );
}
