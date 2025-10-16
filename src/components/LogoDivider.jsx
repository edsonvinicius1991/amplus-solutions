import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Coloque as imagens do portifolio
const portfolioImages = [
  'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760545000/WMS-auth_z0cp3p.png',
  'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-dashboard1_cg2l8s.png',
  'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-dashboard2_olk0b4.png',
  'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760544999/WMS-produtos_fpjv38.png',
  'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760566472/responsividade_nfjrvw.png'
];
const portfolioImages2 = [
  'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623631/NutriPlan_-_index_dmn7ju.png',
  'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623630/NutriPlan_-_index2_xiqz1h.png',
  'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623630/NutriPlan_-_Painel_ADM_qomj02.png',
  'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623630/NutriPlan_-_Dashboard_Nutri_zvmlqe.png',
  'https://res.cloudinary.com/dgkhdoh8j/image/upload/v1760623630/NutriPlan_-_Dashboard_Nutri_zvmlqe.png'
];

const PortfolioCarousel = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => prev === 0 ? portfolioImages.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrent((prev) => prev === portfolioImages.length - 1 ? 0 : prev + 1);
  };

  return (
    <section id="logodivider" className="py-16 px-4 bg-white text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Portfólio</h2>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">Projetos realizados sob demanda.</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"> </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <hr style={{ margin: "30px 10px" }} />
          <h3 className="font-semibold text-lg mb-4">Gestão Inteligente de Almoxarifado</h3>
          <div className="relative flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2"
              aria-label="Anterior"
            >
              &#8592;
            </button>
            <img
              src={portfolioImages[current]}
              alt={`Portfolio Slide ${current + 1}`}
              className="rounded-lg shadow w-full max-h-96 object-cover"
              style={{ maxWidth: '600px' }}
            />
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2"
              aria-label="Próximo"
            >
              &#8594;
            </button>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {portfolioImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          {/* Descrição abaixo do carrossel */}
          <div className="mt-8 text-left bg-slate-50 rounded-xl px-8 py-6 mx-auto max-w-2xl shadow">
            <p className="mb-2 text-base text-slate-800">
              O <strong>Armazém Vivo</strong> é uma aplicação web responsiva para operar e controlar processos de almoxarifado ponta a ponta, reduzindo erros, melhorando acurácia de estoque e aumentando produtividade operacional.
            </p>
            <p className="text-base text-slate-700">
              A solução consolida operações de recebimento, armazenagem, transferências e controle de lotes, com relatórios e dashboards gerenciais para decisão rápida.
            </p>
          </div>
        </motion.div>

        {/* Portfolio Nutriplan */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <hr style={{ margin: "30px 10px" }} />
          <h3 className="font-semibold text-lg mb-4">Gestão de rotina de Consultório</h3>
          <div className="relative flex items-center justify-center">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2"
              aria-label="Anterior"
            >
              &#8592;
            </button>
            <img
              src={portfolioImages2[current]}
              alt={`Portfolio Slide ${current + 1}`}
              className="rounded-lg shadow w-full max-h-96 object-cover"
              style={{ maxWidth: '600px' }}
            />
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2"
              aria-label="Próximo"
            >
              &#8594;
            </button>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            {portfolioImages2.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          {/* Descrição abaixo do carrossel */}
          <div className="mt-8 text-left bg-slate-50 rounded-xl px-8 py-6 mx-auto max-w-2xl shadow">
            <p className="mb-2 text-base text-slate-800">
              O <strong>NutriPlan</strong> é um sistema completo de gestão de consultórios, feito especialmente para nutricionistas que desejam automatizar processos, economizar tempo e oferecer uma experiência diferenciada aos pacientes. 
            </p>
            <p className="text-base text-slate-700">
              Com foco em tecnologia, produtividade e segurança, a plataforma integra gestão de pacientes, recomendações personalizadas de refeições e automação do fluxo de trabalho do consultório.
            </p>
          </div>
        </motion.div>

        {/* Espaço para novos projetos */}
        <div className="mt-10 border-2 border-dashed rounded-lg py-8 flex flex-col items-center">
          <span className="text-gray-400 text-lg">Em breve, novos projetos serão adicionados ao portfólio!</span>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCarousel;