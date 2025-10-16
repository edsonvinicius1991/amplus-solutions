import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users, Shield } from 'lucide-react';

const differentials = [
  {
    icon: Target,
    title: "Soluções Personalizadas",
    description: "Automações sob medida para suas necessidades."
  },
  {
    icon: Zap,
    title: "Tecnologia Acessível",
    description: "Investimento adequado ao porte da sua empresa."
  },
  {
    icon: Users,
    title: "Consultoria Completa",
    description: "Análise e otimização de processos."
  },
  {
    icon: Shield,
    title: "Suporte Contínuo",
    description: "Acompanhamento constante para sua evolução."
  }
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-20 px-4 bg-white overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nossos Diferenciais</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">O que nos torna a escolha ideal para automatizar seu negócio</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-br from-brand-teal to-green-400 rounded-md flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{differential.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{differential.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;