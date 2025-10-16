import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Gem, HeartHandshake, Search } from 'lucide-react';
const values = [{
  icon: Zap,
  title: "Inovação Prática",
  description: "Tecnologia que resolve problemas reais."
}, {
  icon: Gem,
  title: "Simplicidade",
  description: "Soluções intuitivas que qualquer pessoa usa."
}, {
  icon: HeartHandshake,
  title: "Parceria Real",
  description: "Crescemos junto com você rumo ao sucesso."
}, {
  icon: Search,
  title: "Transparência",
  description: "Comunicação clara em cada etapa."
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};
const About = () => {
  return <section id="quem-somos" className="py-28 px-4 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-10 gap-16 items-center">
          
          <motion.div className="lg:col-span-4" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true,
          amount: 0.3
        }}>
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 !leading-tight max-w-md">QUEM SOMOS</motion.h2>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg text-justify">Desde 2023, transformamos processos manuais em automação inteligente para PMEs que querem crescer sem complicação. A Amplus Solutions nasceu da vivência real dentro das empresas — de quem sente no dia a dia o peso dos processos manuais, retrabalhos e falta de integração entre setores.

Nossa missão é simplificar a rotina das empresas com soluções de automação sob medida, que otimizam tempo, reduzem erros e aumentam a produtividade.

Mais do que desenvolver sistemas, entendemos a operação de dentro pra fora — ouvimos o cliente, mapeamos o processo e criamos fluxos inteligentes que realmente funcionam na prática.

A Amplus é uma parceira estratégica pra quem quer crescer com eficiência, organização e tecnologia acessível.</motion.p>
            
            <motion.div variants={itemVariants} className="flex items-center gap-6 text-center">
              <div>
                <span className="text-3xl font-bold text-emerald-500">Diversas</span>
                <p className="text-sm text-slate-500">empresas transformadas</p>
              </div>
              <div className="w-px h-10 bg-slate-200"></div>
              <div>
                <span className="text-3xl font-bold text-emerald-500">80%</span>
                <p className="text-sm text-slate-500">redução em erros</p>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((value, index) => {
            const Icon = value.icon;
            return <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              amount: 0.5
            }} transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: 'easeOut'
            }} whileHover={{
              y: -3,
              borderColor: 'rgb(16 185 129)',
              boxShadow: '0 8px 20px rgba(16,185,129,0.12)',
              transition: {
                duration: 0.3
              }
            }} className="group bg-gradient-to-br from-white to-slate-50 p-7 rounded-2xl border border-slate-200 transition-all duration-300">
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-emerald-500 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{value.title}</h3>
                  <p className="text-slate-500">{value.description}</p>
                </motion.div>;
          })}
          </div>

        </div>
      </div>
    </section>;
};
export default About;