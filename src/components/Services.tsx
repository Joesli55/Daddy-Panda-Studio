import { Leaf, Wrench, Droplets, Scissors, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  t: any;
}

export default function Services({ t }: Props) {
  const icons = [Wrench, Leaf, Droplets, Scissors, Users];

  return (
    <section id="servicios" className="py-32 bg-[#050505] relative border-t border-white/5">
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
            {t.services.title}
          </h2>
          <div className="w-16 h-1 bg-[#7CFF2B] rounded-full mx-auto"></div>
          <p className="text-xl text-[#D9D9D2] font-light leading-relaxed">
            {t.services.intro}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.cards.map((card: any, index: number) => {
            const Icon = icons[index];
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className={`glass-panel p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:border-[#7CFF2B]/40 hover:bg-[#163A1B]/20 group ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#163A1B]/50 border border-[#7CFF2B]/20 flex items-center justify-center mb-6 group-hover:bg-[#7CFF2B] group-hover:border-[#7CFF2B] transition-colors duration-500">
                  <Icon className="text-[#7CFF2B] group-hover:text-[#050505] transition-colors duration-500" size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#F5F5F0] mb-4 group-hover:text-[#7CFF2B] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-[#D9D9D2] leading-relaxed font-light">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="inline-block px-6 py-3 rounded-full border border-white/10 text-sm text-[#D9D9D2] font-medium tracking-wide uppercase bg-[#0D0D0D]">
            {t.services.closing}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
