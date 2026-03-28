import { Search, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  t: any;
}

export default function Method({ t }: Props) {
  const icons = [Search, SlidersHorizontal, ShieldCheck];

  return (
    <section id="metodo" className="py-32 bg-[#050505] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20 space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#F5F5F0] tracking-tight">
            {t.method.title}
          </h2>
          <div className="w-16 h-1 bg-[#7CFF2B] rounded-full mx-auto"></div>
          <p className="text-xl text-[#D9D9D2] font-light leading-relaxed">
            {t.method.intro}
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {t.method.pillars.map((pillar: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className="glass-panel p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-[#7CFF2B]/40 hover:bg-[#163A1B]/10 group flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#0D0D0D] border border-white/10 flex items-center justify-center mb-8 group-hover:bg-[#163A1B] group-hover:border-[#7CFF2B]/50 transition-colors duration-500 shadow-lg">
                  <Icon className="text-[#D9D9D2] group-hover:text-[#7CFF2B] transition-colors duration-500" size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#F5F5F0] mb-4 group-hover:text-[#7CFF2B] transition-colors duration-300">
                  {pillar.title}
                </h3>
                <p className="text-[#D9D9D2] leading-relaxed font-light text-lg">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Legal Disclaimer Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="border border-white/10 bg-[#0D0D0D] rounded-2xl p-8 flex items-start space-x-6 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <ShieldCheck className="text-white/40" size={20} />
            </div>
            <p className="text-sm text-white/60 leading-relaxed font-medium">
              {t.method.disclaimer}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
