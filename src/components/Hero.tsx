import { generateVCard } from '../lib/vcard';
import { MessageCircle, Download, CheckCircle2 } from 'lucide-react';
import { Language } from '../content';
import { motion } from 'motion/react';

interface Props {
  t: any;
  lang: Language;
}

export default function Hero({ t, lang }: Props) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-24 sm:pt-24 sm:pb-16 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#7CFF2B] rounded-full blur-[150px] opacity-[0.03] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#7CFF2B] rounded-full blur-[120px] opacity-[0.02] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Text Content (First on all devices now) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6 sm:space-y-8"
          >
            <div className="space-y-4">
              <div className="mb-4 sm:mb-6">
                <h1 id="hero-fallback-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#F5F5F0]">
                  {t.hero.name}
                </h1>
              </div>

              <div className="inline-flex items-center space-x-2 bg-[#163A1B]/50 border border-[#7CFF2B]/20 rounded-full px-3 py-1 sm:px-4 sm:py-1.5">
                <span className="w-2 h-2 rounded-full bg-[#7CFF2B] animate-pulse"></span>
                <span className="text-[10px] sm:text-xs font-medium text-[#7CFF2B] tracking-wide uppercase">
                  {t.hero.subtitle}
                </span>
              </div>
              
              <h2 className="text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-[#F5F5F0]">
                {t.hero.headline[0]} <br className="hidden sm:block" />
                <span className="text-[#7CFF2B] text-glow">{t.hero.headline[1]}</span> <br className="hidden sm:block" />
                {t.hero.headline[2]}
              </h2>
              
              <p className="text-base sm:text-xl text-[#D9D9D2] max-w-2xl leading-relaxed font-light">
                {t.hero.paragraph}
              </p>
            </div>

            {/* Trust Badges (High visibility for QR traffic) */}
            <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
              {t.hero.trustBadges.map((badge: string, i: number) => (
                <div key={i} className="flex items-center space-x-1.5 text-xs sm:text-sm font-medium text-[#D9D9D2]/90 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  <CheckCircle2 size={14} className="text-[#7CFF2B]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* Desktop CTAs (Hidden on mobile to favor sticky bar) */}
            <div className="hidden sm:flex flex-row items-center gap-4 pt-4">
              <a 
                href={`https://wa.me/34633655887?text=${encodeURIComponent(t.hero.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-[#7CFF2B] text-[#050505] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#96FF4D] transition-all glow-accent-hover transform hover:-translate-y-1"
              >
                <MessageCircle size={20} />
                <span>{t.hero.ctaPrimary}</span>
              </a>
              
              <button 
                onClick={generateVCard}
                className="flex items-center justify-center space-x-2 bg-transparent border border-white/20 text-[#F5F5F0] px-8 py-4 rounded-full font-medium text-lg hover:border-[#7CFF2B]/50 hover:text-[#7CFF2B] transition-all"
              >
                <Download size={20} />
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

            <div className="hidden sm:block pt-8 border-t border-white/10">
              <p className="text-sm text-[#D9D9D2]/60 font-medium tracking-wide">
                {t.hero.trustLine}
              </p>
            </div>
          </motion.div>

          {/* Mobile Image (Second on mobile) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:hidden w-full max-w-sm mx-auto mt-4 relative"
          >
            <div className="aspect-square sm:aspect-[3/4] rounded-2xl overflow-hidden bg-[#0D0D0D] border border-white/5 relative">
              <img 
                src="/foto-daddy-panda.png" 
                alt="Daddy Panda" 
                className="w-full h-full object-cover opacity-90 grayscale transition-all duration-700"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80"></div>
            </div>
          </motion.div>

          {/* Desktop Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:block relative w-full h-full min-h-[600px]"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-[#0D0D0D] border border-white/5 ml-12">
              <img 
                src="/foto-daddy-panda.png" 
                alt="Daddy Panda" 
                className="w-full h-full object-cover opacity-90 grayscale transition-all duration-700"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#050505] opacity-80"></div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Mobile Sticky Action Bar (For QR Traffic) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#050505]/90 backdrop-blur-xl border-t border-white/10 z-50 flex gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <button 
          onClick={generateVCard}
          className="flex-1 flex items-center justify-center space-x-2 bg-white/5 border border-white/10 text-[#F5F5F0] px-4 py-3.5 rounded-xl font-medium text-sm active:bg-white/10 transition-colors"
        >
          <Download size={18} />
          <span>{t.hero.ctaSecondary}</span>
        </button>
        <a 
          href={`https://wa.me/34633655887?text=${encodeURIComponent(t.hero.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center space-x-2 bg-[#7CFF2B] text-[#050505] px-4 py-3.5 rounded-xl font-bold text-sm glow-accent active:bg-[#96FF4D] transition-colors"
        >
          <MessageCircle size={18} />
          <span>{t.hero.ctaPrimary}</span>
        </a>
      </div>
    </section>
  );
}
