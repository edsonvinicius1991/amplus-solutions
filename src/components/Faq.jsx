import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "O que é automação de processos empresariais (BPA)?",
    answer: "É o uso de tecnologia para executar tarefas ou processos recorrentes em um negócio onde o esforço manual pode ser substituído. O objetivo é minimizar custos, aumentar a eficiência e otimizar os fluxos de trabalho."
  },
  {
    question: "Quanto tempo leva para implementar uma solução?",
    answer: "O tempo de implementação varia conforme a complexidade do processo a ser automatizado. Projetos mais simples podem levar algumas semanas, enquanto soluções mais complexas podem levar alguns meses. Sempre fornecemos um cronograma detalhado após a análise inicial."
  },
  {
    question: "Preciso ter conhecimento técnico para usar as ferramentas?",
    answer: "Não! Nossas soluções são projetadas para serem intuitivas e fáceis de usar. Além disso, oferecemos treinamento completo para sua equipe e suporte contínuo para garantir que todos se sintam confortáveis com a nova tecnologia."
  },
  {
    question: "Qual o investimento necessário?",
    answer: "O investimento é personalizado para cada projeto e depende da complexidade e do escopo da automação. Nosso foco é oferecer um alto retorno sobre o investimento (ROI), com soluções acessíveis para PMEs e planos de pagamento flexíveis."
  },
  {
    question: "Vocês oferecem suporte após a implementação?",
    answer: "Sim! O suporte contínuo é um dos nossos maiores diferenciais. Estamos sempre disponíveis para ajudar com dúvidas, realizar ajustes e garantir que a solução continue funcionando perfeitamente à medida que seu negócio evolui."
  },
  {
    question: "Minha empresa é muito pequena. A automação serve para mim?",
    answer: "Com certeza! A automação é benéfica para empresas de todos os portes. Para pequenas empresas, ela pode ser um diferencial competitivo enorme, liberando tempo valioso para que você se concentre no crescimento do seu negócio."
  },
  {
    question: "Como vocês garantem a segurança dos meus dados?",
    answer: "A segurança dos dados é nossa prioridade máxima. Utilizamos as melhores práticas de segurança do setor, como criptografia, controle de acesso rigoroso e armazenamento em nuvens seguras, para garantir que suas informações estejam sempre protegidas."
  },
  {
    question: "Posso testar a solução antes de contratar?",
    answer: "Dependendo do projeto, podemos oferecer uma prova de conceito (PoC) ou uma demonstração detalhada da solução proposta. Isso permite que você veja o potencial da automação em ação antes de se comprometer."
  }
];

const Faq = () => {
  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-slate-600">
            Tire suas dúvidas sobre como podemos ajudar seu negócio.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-slate-50 border border-slate-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-slate-800 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;