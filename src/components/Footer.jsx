import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8 text-sm">
          <div className="md:col-span-2">
            <a href="#home">
              <img loading="lazy" src="https://horizons-cdn.hostinger.com/b617257d-912a-4ff7-8810-6a353dd8a8ba/gemini_generated_image_do1h2jdo1h2jdo1h1-Z4mJ3.png" alt="Logo da Amplus Solutions em branco" className="h-10 mb-4 brightness-0 invert" />
            </a>
            <p className="text-slate-400 max-w-md">Transformando processos empresariais através da automação inteligente para PMEs no Brasil.</p>
          </div>
          
          <div>
            <span className="font-bold text-lg mb-4 block">Contato</span>
            <div className="space-y-3 text-slate-300">
              <a href="mailto:contato@amplussolutions.com.br" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} />
                <span>contato@amplussolutions.com.br</span>
              </a>
              <a href="https://wa.me/5522996131004" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} />
                <span>(22) 99613-1004</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Av. Evaldo Costa, 588 - Sol e Mar, Macaé - RJ</span>
              </div>
            </div>
          </div>

          <div>
            <span className="font-bold text-lg mb-4 block">Siga-nos</span>
            <div className="flex space-x-4">
              <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm flex flex-col sm:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Amplus Solutions. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;