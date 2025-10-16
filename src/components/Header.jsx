import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#servicos", label: "Serviços" },
  { href: "#logodivider", label: "Portfólio" },
  { href: "#resultados", label: "Resultados" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#faq", label: "FAQ" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <img src="https://horizons-cdn.hostinger.com/b617257d-912a-4ff7-8810-6a353dd8a8ba/gemini_generated_image_do1h2jdo1h2jdo1h1-Z4mJ3.png" alt="Logo da Amplus Solutions" className="h-10" />
          </a>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-slate-700 hover:text-brand-dark-blue transition-colors font-medium">
                {link.label}
              </a>
            ))}
            <a href="#contato">
              <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                Fale Conosco
              </Button>
            </a>
          </div>

          <button className="md:hidden text-slate-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="block text-slate-700 hover:text-brand-dark-blue transition-colors font-medium" onClick={handleLinkClick}>
                {link.label}
              </a>
            ))}
             <a href="#diferenciais" className="block text-slate-700 hover:text-brand-dark-blue transition-colors font-medium" onClick={handleLinkClick}>Diferenciais</a>
            <a href="#contato" onClick={handleLinkClick}>
              <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white">
                Fale Conosco
              </Button>
            </a>
          </motion.div>
        )}
      </nav>
    </header>
  );
};

export default Header;