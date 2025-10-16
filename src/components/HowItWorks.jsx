import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Análise Gratuita",
    description: "Avaliamos seus processos para identificar gargalos e oportunidades de automação, sem custo.",
  },
  {
    icon: Code,
    title: "Desenvolvimento Personalizado",
    description: "Criamos uma solução de automação sob medida, utilizando as melhores tecnologias para seu negócio.",
  },
  {
    icon: Rocket,
    title: "Implementação e Suporte",
    description: "Integramos a solução ao seu fluxo de trabalho e oferecemos acompanhamento contínuo.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como Funciona</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Nosso processo é simples, transparente e focado em resultados.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            className="absolute left-1/2 top-12 bottom-12 w-0.5 bg-blue-200/70 hidden md:block" 
            aria-hidden="true"
            initial={{ height: 0 }}
            whileInView={{ height: "auto" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          ></motion.div>
          
          <div className="md:hidden absolute top-8 left-4 sm:left-6 bottom-8 w-0.5 bg-blue-200/70" aria-hidden="true"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex-1 md:text-center flex md:flex-col items-center relative z-10 w-full md:w-auto px-2"
                >
                  <div className="flex-shrink-0 mr-5 md:mr-0 md:mb-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center border-4 border-blue-200/70 text-brand-dark-blue font-bold text-xl md:text-2xl relative">
                         {index + 1}
                         <motion.div 
                           initial={{ scale: 0 }}
                           whileInView={{ scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ delay: index * 0.2 + 0.5, type: "spring", stiffness: 300, damping: 15 }}
                           className="absolute -top-3 -right-3 w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-brand-teal to-green-400 text-white rounded-full flex items-center justify-center shadow-lg">
                           <Icon size={20} />
                         </motion.div>
                      </div>
                  </div>
                  <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed max-w-xs md:mx-auto text-sm sm:text-base">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;