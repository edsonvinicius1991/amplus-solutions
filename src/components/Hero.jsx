import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <img
                src="https://horizons-cdn.hostinger.com/b617257d-912a-4ff7-8810-6a353dd8a8ba/ff998700e2b3351e4783348353867e3d.png"
                alt="Amplus Solutions - Automatize Processos. Multiplique Resultados."
                className="w-full max-w-lg mx-auto md:mx-0"
              />
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl"
            >
              Reduza <span className="font-semibold text-brand-teal">80% do tempo</span> em tarefas manuais. Automatize processos e foque no que realmente importa: crescer.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <a href="#contato">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-brand-teal to-emerald-500 text-white text-base font-semibold px-8 py-7 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                >
                  Agendar Consultoria
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-5 flex items-center gap-2 text-sm text-slate-500">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="font-semibold">5.0</span>
              <span>|</span>
              <span>+50 empresas transformadas</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
            className="relative aspect-video rounded-lg shadow-xl overflow-hidden"
          >
            <iframe
              src="https://player.vimeo.com/video/1125839797?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&playsinline=1"
              className="absolute top-0 left-0 w-full h-full"
              frameBorder="0"
              loading="lazy"
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              referrerPolicy="no-referrer-when-downgrade"
              title="Equipe de negócios colaborando em um escritório moderno com gráficos de dados digitais"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Hero;