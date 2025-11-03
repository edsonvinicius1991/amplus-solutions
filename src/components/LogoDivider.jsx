import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

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
  // Estados para navegação entre cards e modal com carrossel
  const [selectedCard, setSelectedCard] = useState('armazem'); // 'armazem' | 'nutriplan'
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null); // 'armazem' | 'nutriplan'
  const [modalIndex, setModalIndex] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => prev === 0 ? portfolioImages.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrent((prev) => prev === portfolioImages.length - 1 ? 0 : prev + 1);
  };

  const openDetails = (project) => {
    setModalProject(project);
    setModalIndex(0);
    setIsModalOpen(true);
  };

  const modalImages = modalProject === 'nutriplan' ? portfolioImages2 : portfolioImages;
  const modalTitle = modalProject === 'nutriplan' ? 'NutriPlan' : 'Armazém Vivo';
  const modalDescription = modalProject === 'nutriplan'
    ? 'O NutriPlan é um sistema completo de gestão de consultórios, feito especialmente para nutricionistas que desejam automatizar processos, economizar tempo e oferecer uma experiência diferenciada aos pacientes.'
    : 'O Armazém Vivo é uma aplicação web responsiva para operar e controlar processos de almoxarifado ponta a ponta, reduzindo erros, melhorando acurácia de estoque e aumentando produtividade operacional.';

  return (
    <section id="logodivider" className="py-16 px-4 bg-white text-center">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Portfólio</h2>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">Projetos realizados sob demanda.</p>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"> </h2>

        {/* Navegação entre cards de portfólio (abaixo do parágrafo) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className={`px-4 py-2 rounded-full border ${selectedCard === 'armazem' ? 'bg-brand-teal text-white border-brand-teal' : 'bg-white text-slate-800 border-slate-300'} shadow-sm hover:shadow-md transition-all`}
            aria-pressed={selectedCard === 'armazem'}
            onClick={() => setSelectedCard('armazem')}
          >
            Gestão Almoxarifado
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-full border ${selectedCard === 'nutriplan' ? 'bg-brand-teal text-white border-brand-teal' : 'bg-white text-slate-800 border-slate-300'} shadow-sm hover:shadow-md transition-all`}
            aria-pressed={selectedCard === 'nutriplan'}
            onClick={() => setSelectedCard('nutriplan')}
          >
            Gestão Consultório
          </button>
        </div>

        {/* Grid de cards responsivo (centralizado e com 1 coluna ao filtrar) */}
        <div className="mt-8 grid grid-cols-1 gap-6 justify-items-center max-w-3xl mx-auto">
          {/* Card Armazém Vivo */}
          {(selectedCard === 'armazem' || selectedCard === null) && (
            <article className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden max-w-md w-full">
              <img
                src={portfolioImages[0]}
                alt="Imagem do projeto Armazém Vivo"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-900">Armazém Vivo</h3>
                <p className="text-sm font-semibold text-brand-teal">Gestão Almoxarifado</p>
                <p className="text-slate-600 text-sm leading-relaxed mt-2 line-clamp-3">
                  Gestão inteligente de almoxarifado com recebimento, armazenagem, transferências e controle de lotes.
                </p>
                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="px-4 py-2 bg-brand-teal text-white rounded-md shadow hover:shadow-lg transition-all"
                    onClick={() => openDetails('armazem')}
                    aria-haspopup="dialog"
                    aria-controls="portfolio-dialog"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* Card NutriPlan */}
          {(selectedCard === 'nutriplan' || selectedCard === null) && (
            <article className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden max-w-md w-full">
              <img
                src={portfolioImages2[0]}
                alt="Imagem do projeto NutriPlan"
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-slate-900">NutriPlan</h3>
                <p className="text-sm font-semibold text-brand-teal">Gestão Consultório</p>
                <p className="text-slate-600 text-sm leading-relaxed mt-2 line-clamp-3">
                  Sistema completo de gestão de consultórios para nutricionistas com automação de rotinas.
                </p>
                <div className="mt-4 text-right">
                  <button
                    type="button"
                    className="px-4 py-2 bg-brand-teal text-white rounded-md shadow hover:shadow-lg transition-all"
                    onClick={() => openDetails('nutriplan')}
                    aria-haspopup="dialog"
                    aria-controls="portfolio-dialog"
                  >
                    Ver Detalhes
                  </button>
                </div>
              </div>
            </article>
          )}
        </div>
        
        {/* Portfolio Armazem Vivo */}
        {/*}
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
          //Descrição abaixo do carrossel 
          <div className="mt-8 text-left bg-slate-50 rounded-xl px-8 py-6 mx-auto max-w-2xl shadow">
            <p className="mb-2 text-base text-slate-800">
              O <strong>Armazém Vivo</strong> é uma aplicação web responsiva para operar e controlar processos de almoxarifado ponta a ponta, reduzindo erros, melhorando acurácia de estoque e aumentando produtividade operacional.
            </p>
            <p className="text-base text-slate-700">
              A solução consolida operações de recebimento, armazenagem, transferências e controle de lotes, com relatórios e dashboards gerenciais para decisão rápida.
            </p>
          </div>
        </motion.div>
        
        //Portfolio Nutriplan 
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
          //Descrição abaixo do carrossel           <div className="mt-8 text-left bg-slate-50 rounded-xl px-8 py-6 mx-auto max-w-2xl shadow">
            <p className="mb-2 text-base text-slate-800">
              O <strong>NutriPlan</strong> é um sistema completo de gestão de consultórios, feito especialmente para nutricionistas que desejam automatizar processos, economizar tempo e oferecer uma experiência diferenciada aos pacientes. 
            </p>
            <p className="text-base text-slate-700">
              Com foco em tecnologia, produtividade e segurança, a plataforma integra gestão de pacientes, recomendações personalizadas de refeições e automação do fluxo de trabalho do consultório.
            </p>
          </div>
        </motion.div>
        */}
        {/* Espaço para novos projetos */}
        <div className="mt-10 border-2 border-dashed rounded-lg py-8 flex flex-col items-center">
          <span className="text-gray-400 text-lg">Em breve, novos projetos serão adicionados ao portfólio!</span>
        </div>
      </div>

      {/* Modal com carrossel reutilizando arrays existentes */}
      {modalProject && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent id="portfolio-dialog" className="sm:max-w-[720px]">
            <DialogHeader>
              <DialogTitle>{modalTitle}</DialogTitle>
              <DialogDescription>{modalDescription}</DialogDescription>
            </DialogHeader>

            <div className="mt-4">
              <div className="relative flex items-center justify-center">
                <button
                  onClick={() => setModalIndex((idx) => (idx === 0 ? modalImages.length - 1 : idx - 1))}
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2"
                  aria-label="Anterior"
                >
                  &#8592;
                </button>
                <img
                  src={modalImages[modalIndex]}
                  alt={`Imagem ${modalIndex + 1} de ${modalImages.length} do projeto ${modalTitle}`}
                  className="rounded-lg shadow w-full max-h-96 object-cover"
                  style={{ maxWidth: '600px' }}
                  loading="lazy"
                />
                <button
                  onClick={() => setModalIndex((idx) => (idx === modalImages.length - 1 ? 0 : idx + 1))}
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-2"
                  aria-label="Próximo"
                >
                  &#8594;
                </button>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {modalImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setModalIndex(idx)}
                    className={`w-3 h-3 rounded-full ${modalIndex === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                    aria-label={`Ir para imagem ${idx + 1}`}
                    aria-selected={modalIndex === idx}
                  />
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default PortfolioCarousel;