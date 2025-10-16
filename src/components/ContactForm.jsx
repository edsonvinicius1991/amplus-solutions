import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/customSupabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';

const ContactForm = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        segment: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSegmentChange = (value) => {
        setFormData((prev) => ({ ...prev, segment: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.phone || !formData.company || !formData.segment || !formData.message) {
            toast({
                title: "Campos obrigatórios",
                description: "Por favor, preencha todos os campos do formulário.",
                variant: "destructive"
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast({
                title: "Email inválido",
                description: "Por favor, insira um endereço de email válido.",
                variant: "destructive"
            });
            return;
        }
        
        setIsSubmitting(true);

        try {
            const { error } = await supabase.functions.invoke('contact-form-handler', {
                body: JSON.stringify(formData),
            });

            if (error) {
                throw error;
            }
            
            toast({
                title: "Obrigado!",
                description: "Entraremos em contato em breve.",
            });

            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                segment: '',
                message: ''
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            toast({
                title: "Erro ao enviar",
                description: "Houve um problema ao enviar sua mensagem. Tente novamente mais tarde.",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contato" className="py-20 px-4 bg-gradient-to-br from-brand-dark-blue to-brand-light-blue">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Entre em Contato</h2>
                    <p className="text-lg text-brand-teal">Preencha o formulário e descubra como podemos transformar seu negócio</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-2xl p-8 md:p-12"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-slate-900 font-medium">Nome Completo *</Label>
                                <Input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} placeholder="Seu nome completo" className="border-slate-300" required disabled={isSubmitting} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-900 font-medium">Email *</Label>
                                <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="seu@email.com" className="border-slate-300" required disabled={isSubmitting} />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="phone" className="text-slate-900 font-medium">Telefone *</Label>
                                <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} placeholder="(00) 00000-0000" className="border-slate-300" required disabled={isSubmitting} />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company" className="text-slate-900 font-medium">Empresa *</Label>
                                <Input id="company" name="company" type="text" value={formData.company} onChange={handleInputChange} placeholder="Nome da sua empresa" className="border-slate-300" required disabled={isSubmitting} />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="segment" className="text-slate-900 font-medium">Segmento *</Label>
                            <Select value={formData.segment} onValueChange={handleSegmentChange} required disabled={isSubmitting}>
                                <SelectTrigger className="border-slate-300">
                                    <SelectValue placeholder="Selecione seu segmento" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="locadoras">Locadoras de Equipamentos</SelectItem>
                                    <SelectItem value="clinicas">Clínicas Médicas</SelectItem>
                                    <SelectItem value="escritorios">Escritórios de Engenharia / Contabilidade</SelectItem>
                                    <SelectItem value="lojas">Lojas com Estoque</SelectItem>
                                    <SelectItem value="manutencao">Empresas de Manutenção</SelectItem>
                                    <SelectItem value="offshore">Setor Offshore</SelectItem>
                                    <SelectItem value="outro">Outro</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message" className="text-slate-900 font-medium">Mensagem *</Label>
                            <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Conte-nos sobre os desafios do seu negócio e como podemos ajudar..." className="border-slate-300 min-h-[120px]" required disabled={isSubmitting} />
                        </div>

                        <Button type="submit" size="lg" className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Quero Automatizar Meu Negócio'}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactForm;