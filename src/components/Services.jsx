import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Stethoscope, Calculator, Package, Wrench, CheckCircle, Anchor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
const services = [{
  icon: Building2,
  title: "Locadoras de Equipamentos",
  description: "Contratos, agendamentos e estoque automatizados.",
  details: {
    title: "Solução Completa para Locadoras de Equipamentos",
    description: "Transforme a gestão da sua locadora com uma plataforma que integra todas as operações, do primeiro contato com o cliente à devolução do equipamento.",
    features: ["Controle de inventário em tempo real e status de cada item.", "Criação e gestão de contratos digitais de forma ágil.", "Agendamento automático de manutenções preventivas.", "Faturamento integrado e controle financeiro simplificado.", "Portal do cliente para acompanhamento de locações e faturas."]
  }
}, {
  icon: Stethoscope,
  title: "Clínicas Médicas",
  description: "Agendamento inteligente e gestão de pacientes simplificada.",
  details: {
    title: "Otimização e Cuidado para Clínicas Médicas",
    description: "Modernize sua clínica, reduza a carga administrativa e foque no mais importante: o cuidado com seus pacientes. Nossa solução integra agendamento, atendimento e faturamento.",
    features: ["Agenda online com confirmação automática de consultas.", "Prontuário Eletrônico do Paciente (PEP) seguro e acessível.", "Gestão de faturamento e convênios médicos (TISS).", "Telemedicina integrada para consultas à distância.", "Relatórios de desempenho e indicadores de gestão."]
  }
}, {
  icon: Calculator,
  title: "Escritórios de Engenharia/Contabilidade",
  description: "Documentos, projetos e prazos sob controle total.",
  details: {
    title: "Precisão e Eficiência para Escritórios",
    description: "Elimine a papelada e os processos manuais. Nossa plataforma centraliza a gestão de projetos, documentos e tarefas, garantindo prazos e qualidade.",
    features: ["Gestão de tarefas e fluxos de trabalho (Kanban).", "Controle de documentos com versionamento e acesso seguro.", "Automação da emissão de propostas e relatórios.", "Acompanhamento de horas trabalhadas por projeto.", "Integração com softwares de contabilidade e engenharia."]
  }
}, {
  icon: Package,
  title: "Lojas com Estoque",
  description: "Inventário em tempo real e vendas automatizadas.",
  details: {
    title: "Inteligência de Vendas para seu Comércio",
    description: "Venda mais e gerencie melhor. Tenha controle total do seu estoque, automatize o processo de vendas e obtenha insights para impulsionar seu negócio.",
    features: ["Sincronização de estoque entre loja física e online.", "Frente de Caixa (PDV) ágil e intuitiva.", "Gestão de compras e relacionamento com fornecedores.", "Relatórios de produtos mais vendidos e curva ABC.", "Programa de fidelidade e CRM integrado."]
  }
}, {
  icon: Wrench,
  title: "Empresas de Manutenção",
  description: "Ordens de serviço e equipes organizadas.",
  details: {
    title: "Controle Total para Empresas de Manutenção",
    description: "Organize suas operações de campo, melhore a comunicação com a equipe e garanta a satisfação dos seus clientes com um sistema feito para o setor de serviços.",
    features: ["Abertura e gestão de ordens de serviço pelo app.", "Alocação inteligente da equipe técnica por geolocalização.", "Controle de estoque de peças e materiais.", "Checklists digitais e relatórios fotográficos.", "Pesquisa de satisfação automatizada após o serviço."]
  }
}, {
  icon: Anchor,
  title: "Setor Offshore",
  description: "Gestão de logística, pessoal e certificações de forma integrada.",
  details: {
    title: "Soluções Robustas para o Setor Offshore",
    description: "Otimize operações complexas em ambientes exigentes. Nossa plataforma garante segurança, conformidade e eficiência para toda a sua operação offshore.",
    features: ["Controle de embarque e desembarque de pessoal (Pob Control).", "Gestão de certificações e treinamentos da equipe.", "Logística de materiais e equipamentos para plataformas.", "Digitalização de permissões de trabalho e checklists de segurança.", "Relatórios de conformidade e auditoria em tempo real."]
  }
}];
const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = service => {
    setSelectedService(service);
    setIsModalOpen(true);
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <section id="servicos" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/50 overflow-hidden">
      <div className="container mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.5
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Nossos Serviços</h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">Automação sob medida para cada segmento</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
          const Icon = service.icon;
          return <motion.div key={index} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{
            once: true,
            amount: 0.3
          }} transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }} whileHover={{
            y: -4,
            scale: 1.02,
            boxShadow: '0 12px 32px rgba(16,185,129,0.15)',
            transition: {
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }
          }} className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-brand-teal/20 border border-slate-200 hover:border-brand-teal transition-all duration-400 cursor-pointer flex flex-col" onClick={() => openModal(service)}>
                <div className="w-12 h-12 bg-gradient-to-br from-teal-50 to-teal-100 rounded-full flex items-center justify-center mb-5 transition-transform duration-400 ease-in-out group-hover:scale-110 group-hover:rotate-6">
                  <Icon className="text-emerald-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed flex-grow mb-4">{service.description}</p>
                 <span className="text-base font-semibold text-emerald-600 mt-auto">Saiba mais</span>
              </motion.div>;
        })}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        amount: 0.8
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="text-center mt-16">
          <a href="#contato">
             <Button size="lg" className="group bg-gradient-to-r from-brand-teal to-emerald-500 text-white text-base font-semibold px-8 py-7 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus-visible:ring-emerald-400 focus-visible:ring-offset-2">
                Quero Automatizar Meu Negócio
              </Button>
          </a>
        </motion.div>
      </div>

      {selectedService && <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-slate-900">{selectedService.details.title}</DialogTitle>
              <DialogDescription className="text-slate-600 pt-2">
                {selectedService.details.description}
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <h4 className="font-semibold text-slate-800 mb-3">Principais Funcionalidades:</h4>
              <ul className="space-y-2">
                {selectedService.details.features.map((feature, i) => <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </li>)}
              </ul>
            </div>
            <a href="#contato" onClick={() => setIsModalOpen(false)} className="w-full">
              <Button size="lg" className="w-full mt-4 bg-brand-teal hover:bg-brand-teal/90">
                Quero essa solução para meu negócio
              </Button>
            </a>
          </DialogContent>
        </Dialog>}
    </section>;
};
export default Services;