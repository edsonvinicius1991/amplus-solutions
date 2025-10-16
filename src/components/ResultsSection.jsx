import React, { useEffect } from 'react';
import { motion, useInView, useAnimate, useMotionValue, useTransform } from 'framer-motion';
import { Zap, Smile, TrendingUp, Repeat } from 'lucide-react';

const AnimatedCounter = ({ to }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest));
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration: 2, ease: "circOut" });
    }
  }, [isInView, animate, count, to]);

  return <motion.span ref={scope}>{rounded}</motion.span>;
};

const results = [
  {
    icon: Repeat,
    value: 80,
    suffix: "%",
    label: "mais rápido",
  },
  {
    icon: Smile,
    value: 95,
    suffix: "%",
    label: "menos erros",
  },
  {
    icon: Zap,
    value: 3,
    suffix: "x",
    label: "produtividade",
  },
  {
    icon: TrendingUp,
    value: 6,
    suffix: "m",
    label: "ROI médio",
  },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-20 px-4 bg-gradient-to-b from-blue-50/50 via-slate-50 to-blue-50/50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Resultados Reais</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Veja o impacto que a automação pode gerar no seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="bg-white p-4 rounded-full aspect-square flex flex-col items-center justify-center shadow-lg text-center border border-slate-200 hover:-translate-y-2 transition-transform duration-300"
              >
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-teal to-green-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon className="text-white" size={24} />
                </motion.div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark-blue">
                  <AnimatedCounter to={result.value} />
                  {result.suffix}
                </p>
                <p className="text-slate-600 font-medium text-xs md:text-sm tracking-tight sm:tracking-normal">{result.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;