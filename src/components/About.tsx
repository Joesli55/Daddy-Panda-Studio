import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  t: any;
}

export default function About({ t }: Props) {
  return (
    <section id="quien-es" className="py-24 bg-[#0D0D0D] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#F5F5F0] tracking-tight">
              {t.about.title}
            </h2>
            <div className="w-12 h-1 bg-[#7CFF2B] rounded-full"></div>
            
            <div className="space-y-6 text-[#D9D9D2] text-lg leading-relaxed font-light">
              <p>{t.about.text1}</p>
              <p>{t.about.text2}</p>
            </div>
          </motion.div>

          {/* Credentials Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.about.credentials.map((cred: string, index: number) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className={`glass-panel p-6 rounded-2xl flex items-start space-x-4 transition-all duration-300 hover:border-[#7CFF2B]/30 hover:bg-[#163A1B]/10 ${
                  index === t.about.credentials.length - 1 ? 'sm:col-span-2' : ''
                }`}
              >
                <CheckCircle2 className="text-[#7CFF2B] shrink-0 mt-1" size={20} />
                <p className="text-[#F5F5F0] font-medium leading-snug">
                  {cred}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
