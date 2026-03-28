import { Award, BookOpen, Users } from 'lucide-react';
import { motion } from 'motion/react';

const collaborationsData = [
  { src: '/colaboracion-purple-city-genetics-daddy-panda.jpg', alt: 'Colaboración con Purple City Genetics Europe', fallback: 'https://picsum.photos/seed/collab1/400/400?grayscale' },
  { src: '/consultoria-cultivo-cannabis-clubes-sociales.jpg', alt: 'Consultoría de cultivo para Cannabis Social Clubs', fallback: 'https://picsum.photos/seed/collab2/400/400?grayscale' },
  { src: '/master-cannabis-hub-upc-daddy-panda.png', alt: 'Máster UPC y Cannabis Hub', fallback: 'https://picsum.photos/seed/collab3/400/400?grayscale', isLogo: true },
  { src: '/asesoramiento-tecnico-cultivo-marihuana.jpg', alt: 'Asesoramiento técnico en cultivo de marihuana', fallback: 'https://picsum.photos/seed/collab4/400/400?grayscale' }
];

const eventsData = [
  { src: '/juez-spannabis-champions-cup-barcelona.png', alt: 'Juez en la Spannabis Champions Cup Barcelona', fallback: 'https://picsum.photos/seed/event1/600/400?grayscale' },
  { src: '/premios-copas-cannabicas-daddy-panda.png', alt: 'Premios y participación en copas cannábicas', fallback: 'https://picsum.photos/seed/event2/600/400?grayscale' },
  { src: '/cata-evaluacion-calidad-cannabis.jpg.png', alt: 'Cata y evaluación de calidad de cannabis', fallback: 'https://picsum.photos/seed/event3/600/400?grayscale' },
  { src: '/eventos-profesionales-sector-cannabis.jpg', alt: 'Eventos profesionales del sector cannabis', fallback: 'https://picsum.photos/seed/event4/600/400?grayscale' }
];

interface Props {
  t: any;
}

export default function TrackRecord({ t }: Props) {
  return (
    <section id="trayectoria" className="py-32 bg-[#0D0D0D] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-24 space-y-6"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-[#F5F5F0] tracking-tight">
            {t.trackRecord.title}
          </h2>
          <div className="w-16 h-1 bg-[#7CFF2B] rounded-full mx-auto"></div>
          <p className="text-xl text-[#D9D9D2] font-light leading-relaxed">
            {t.trackRecord.intro}
          </p>
        </motion.div>

        {/* Part A: Timeline */}
        <div className="mb-32">
          <div className="relative border-l-2 border-[#163A1B] ml-4 md:ml-0 md:border-l-0 md:border-t-2 md:flex justify-between pt-8 md:pt-12">
            {t.trackRecord.timeline.map((item: any, index: number) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index} 
                className="mb-12 md:mb-0 relative pl-8 md:pl-0 md:w-1/5 md:text-center group"
              >
                {/* Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 md:-top-[57px] w-4 h-4 rounded-full bg-[#0D0D0D] border-2 border-[#7CFF2B] group-hover:bg-[#7CFF2B] transition-colors duration-300 shadow-[0_0_10px_rgba(124,255,43,0.5)]"></div>
                
                <div className="font-display font-bold text-2xl text-[#7CFF2B] mb-2 tracking-tighter">
                  {item.year}
                </div>
                <div className="text-[#D9D9D2] font-medium leading-snug">
                  {item.event}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part B & C: Galleries */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
          
          {/* Collaborations */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <Users className="text-[#7CFF2B]" size={28} />
              <h3 className="text-2xl font-display font-bold text-[#F5F5F0]">Colaboraciones</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {collaborationsData.map((item, index) => (
                <div key={index} className={`aspect-square rounded-2xl bg-[#050505] border border-white/5 overflow-hidden relative group cursor-pointer ${item.isLogo ? 'bg-white/5' : ''}`}>
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className={`w-full h-full opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal ${item.isLogo ? 'object-contain p-6' : 'object-cover'}`} 
                    onError={(e) => {
                      e.currentTarget.src = item.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-sm font-medium text-[#F5F5F0] leading-tight">{item.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Judgeships */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <Award className="text-[#7CFF2B]" size={28} />
              <h3 className="text-2xl font-display font-bold text-[#F5F5F0]">Participación y Copas</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {eventsData.map((item, index) => (
                <div key={index} className="aspect-video rounded-2xl bg-[#050505] border border-white/5 overflow-hidden relative group cursor-pointer">
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-full object-contain p-2 opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal" 
                    onError={(e) => {
                      e.currentTarget.src = item.fallback;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-sm font-medium text-[#F5F5F0] leading-tight">{item.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Part D: Education Highlight */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-panel p-10 sm:p-16 rounded-[2rem] relative overflow-hidden group hover:border-[#7CFF2B]/50 transition-colors duration-500">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7CFF2B] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
              <div className="w-20 h-20 rounded-full bg-[#163A1B] border border-[#7CFF2B]/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(124,255,43,0.2)]">
                <BookOpen className="text-[#7CFF2B]" size={36} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-display font-bold text-[#F5F5F0] tracking-tight">
                  {t.trackRecord.educationCard.title}
                </h3>
                <p className="text-xl text-[#7CFF2B] font-medium tracking-wide">
                  {t.trackRecord.educationCard.subtitle}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
