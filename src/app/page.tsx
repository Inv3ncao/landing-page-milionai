"use client"

import { useState } from 'react'
import { Play, Check, Star, Shield, Users, TrendingUp, Zap, Target, Award, Clock, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react'

export default function MilionAILanding() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showVideo, setShowVideo] = useState(false)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      {/* Header Fixo */}
      <header className="fixed top-0 w-full z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#6B3BFF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#FFDD00] to-[#6B3BFF] bg-clip-text text-transparent">
                MilionA.I
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#sobre" className="text-[#BDBDBD] hover:text-[#FFDD00] transition-colors">Sobre</a>
              <a href="#metodo" className="text-[#BDBDBD] hover:text-[#FFDD00] transition-colors">O Método</a>
              <a href="#depoimentos" className="text-[#BDBDBD] hover:text-[#FFDD00] transition-colors">Depoimentos</a>
              <a href="#garantia" className="text-[#BDBDBD] hover:text-[#FFDD00] transition-colors">Garantia</a>
              <a href="#precos" className="text-[#BDBDBD] hover:text-[#FFDD00] transition-colors">Preços</a>
              <a href="#faq" className="text-[#BDBDBD] hover:text-[#FFDD00] transition-colors">FAQ</a>
            </nav>

            <button className="bg-[#FFDD00] text-[#0A0A0A] px-6 py-2 rounded-full font-bold hover:bg-[#FFDD00]/90 transition-all duration-300 hover:scale-105">
              QUERO ACESSAR
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B3BFF]/10 via-transparent to-[#FFDD00]/5"></div>
        
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">TRANSFORME SUA</span>
              <span className="block bg-gradient-to-r from-[#FFDD00] to-[#6B3BFF] bg-clip-text text-transparent">
                CRIATIVIDADE EM RECEITA
              </span>
              <span className="block">COM I.A</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-[#BDBDBD] max-w-4xl mx-auto mb-8 leading-relaxed">
              Aprenda o método MilionA.I
            </p>
            
            <p className="text-lg text-[#BDBDBD] max-w-3xl mx-auto mb-12">
              Curso prático que ensina passo a passo como usar ferramentas de inteligência artificial 
              para criar produtos digitais e ganhar dinheiro online — sem sair de casa.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-[#FFDD00] text-[#0A0A0A] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FFDD00]/90 transition-all duration-300 hover:scale-105 shadow-2xl">
              QUERO A AULA GRÁTIS
            </button>
            <button className="border-2 border-[#6B3BFF] text-[#6B3BFF] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#6B3BFF] hover:text-white transition-all duration-300">
              VER PLANOS
            </button>
          </div>

          {/* Hero Visual */}
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#6B3BFF]/20 to-[#FFDD00]/20 rounded-3xl p-8 backdrop-blur-sm border border-[#6B3BFF]/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#FFDD00]">10K+</div>
                  <div className="text-[#BDBDBD]">Alunos Treinados</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#6B3BFF]">R$ 50K+</div>
                  <div className="text-[#BDBDBD]">Média de Ganhos</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-[#FFDD00]">7 Dias</div>
                  <div className="text-[#BDBDBD]">Garantia Total</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-[#6B3BFF]/10 to-transparent border border-[#6B3BFF]/20">
              <Users className="w-8 h-8 text-[#FFDD00]" />
              <div>
                <div className="text-xl font-bold">+10.000 alunos já treinados</div>
                <div className="text-[#BDBDBD]">Comunidade ativa</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-[#FFDD00]/10 to-transparent border border-[#FFDD00]/20">
              <Award className="w-8 h-8 text-[#6B3BFF]" />
              <div>
                <div className="text-xl font-bold">Aulas práticas + suporte VIP</div>
                <div className="text-[#BDBDBD]">Metodologia comprovada</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-[#6B3BFF]/10 to-transparent border border-[#6B3BFF]/20">
              <Shield className="w-8 h-8 text-[#FFDD00]" />
              <div>
                <div className="text-xl font-bold">Garantia de 7 dias ou reembolso</div>
                <div className="text-[#BDBDBD]">Risco zero</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que é MilionA.I */}
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              O que é o <span className="text-[#FFDD00]">MilionA.I</span>?
            </h2>
            <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto">
              O método mais completo para transformar inteligência artificial em receita recorrente
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-[#FFDD00] p-3 rounded-full">
                  <Target className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Método Comprovado</h3>
                  <p className="text-[#BDBDBD]">Sistema passo a passo testado por mais de 10.000 alunos com resultados reais e mensuráveis.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#6B3BFF] p-3 rounded-full">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Ferramentas de IA</h3>
                  <p className="text-[#BDBDBD]">Acesso às melhores ferramentas de inteligência artificial com templates e prompts prontos para usar.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#FFDD00] p-3 rounded-full">
                  <Users className="w-6 h-6 text-[#0A0A0A]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Suporte VIP</h3>
                  <p className="text-[#BDBDBD]">Comunidade exclusiva com suporte direto e mentorias semanais para acelerar seus resultados.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#6B3BFF] p-3 rounded-full">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Resultados Práticos</h3>
                  <p className="text-[#BDBDBD]">Foco total em aplicação prática com cases reais e estratégias de monetização imediata.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#6B3BFF]/20 to-[#FFDD00]/20 rounded-3xl p-8 border border-[#6B3BFF]/30">
                {!showVideo ? (
                  <div className="relative cursor-pointer" onClick={() => setShowVideo(true)}>
                    <div className="aspect-video bg-gradient-to-br from-[#0A0A0A] to-[#6B3BFF]/20 rounded-2xl flex items-center justify-center">
                      <div className="bg-[#FFDD00] p-6 rounded-full hover:scale-110 transition-transform duration-300">
                        <Play className="w-12 h-12 text-[#0A0A0A] ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-[#0A0A0A]/80 px-4 py-2 rounded-full">
                      <span className="text-sm font-bold">▶ Assista ao vídeo explicativo</span>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-video bg-[#0A0A0A] rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[#FFDD00] mb-4">🎥</div>
                      <p className="text-[#BDBDBD]">Vídeo explicativo seria carregado aqui</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="metodo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6B3BFF]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Como <span className="text-[#6B3BFF]">Funciona</span>
            </h2>
            <p className="text-xl text-[#BDBDBD] max-w-3xl mx-auto">
              3 passos simples para transformar IA em receita
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-[#FFDD00]/10 to-transparent p-8 rounded-3xl border border-[#FFDD00]/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="bg-[#FFDD00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#0A0A0A]">1</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#FFDD00]">APRENDA</h3>
                <p className="text-[#BDBDBD] mb-6">
                  Domine os fundamentos da IA e descubra as ferramentas mais poderosas do mercado
                </p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FFDD00] mr-2" /> Fundamentos de IA</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FFDD00] mr-2" /> Ferramentas essenciais</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FFDD00] mr-2" /> Prompts avançados</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#6B3BFF]/10 to-transparent p-8 rounded-3xl border border-[#6B3BFF]/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="bg-[#6B3BFF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#6B3BFF]">APLIQUE</h3>
                <p className="text-[#BDBDBD] mb-6">
                  Coloque em prática com templates prontos e automações inteligentes
                </p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#6B3BFF] mr-2" /> Templates prontos</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#6B3BFF] mr-2" /> Automações</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#6B3BFF] mr-2" /> Casos práticos</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-[#FFDD00]/10 to-transparent p-8 rounded-3xl border border-[#FFDD00]/20 text-center hover:scale-105 transition-transform duration-300">
                <div className="bg-[#FFDD00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-[#0A0A0A]">3</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#FFDD00]">VENDA</h3>
                <p className="text-[#BDBDBD] mb-6">
                  Monetize seus conhecimentos com funis otimizados e estratégias de lançamento
                </p>
                <ul className="text-left space-y-2 text-sm">
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FFDD00] mr-2" /> Funis de venda</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FFDD00] mr-2" /> Estratégias de preço</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-[#FFDD00] mr-2" /> Lançamentos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              O que nossos <span className="text-[#FFDD00]">alunos</span> dizem
            </h2>
            <p className="text-xl text-[#BDBDBD]">Resultados reais de pessoas reais</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#6B3BFF]/10 to-transparent p-6 rounded-3xl border border-[#6B3BFF]/20">
              <div className="flex items-center mb-4">
                <div className="flex text-[#FFDD00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[#BDBDBD] mb-4">
                "Em 30 dias consegui meu primeiro R$ 10.000 usando as estratégias do MilionA.I. 
                O método realmente funciona!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FFDD00] to-[#6B3BFF] rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-[#0A0A0A]">MC</span>
                </div>
                <div>
                  <div className="font-bold">Maria Clara</div>
                  <div className="text-sm text-[#BDBDBD]">Designer Digital</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#FFDD00]/10 to-transparent p-6 rounded-3xl border border-[#FFDD00]/20">
              <div className="flex items-center mb-4">
                <div className="flex text-[#FFDD00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[#BDBDBD] mb-4">
                "Saí do zero e hoje tenho uma renda recorrente de R$ 25.000/mês. 
                O suporte da comunidade é incrível!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#6B3BFF] to-[#FFDD00] rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-white">RS</span>
                </div>
                <div>
                  <div className="font-bold">Roberto Silva</div>
                  <div className="text-sm text-[#BDBDBD]">Empreendedor Digital</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#6B3BFF]/10 to-transparent p-6 rounded-3xl border border-[#6B3BFF]/20">
              <div className="flex items-center mb-4">
                <div className="flex text-[#FFDD00]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-[#BDBDBD] mb-4">
                "As ferramentas de IA me poupam 20 horas por semana. 
                Agora posso focar no que realmente importa: crescer!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FFDD00] to-[#6B3BFF] rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-[#0A0A0A]">AS</span>
                </div>
                <div>
                  <div className="font-bold">Ana Santos</div>
                  <div className="text-sm text-[#BDBDBD]">Criadora de Conteúdo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que você recebe */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6B3BFF]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              O que você <span className="text-[#6B3BFF]">recebe</span>
            </h2>
            <p className="text-xl text-[#BDBDBD]">Conteúdo completo + bônus exclusivos</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#FFDD00] mb-6">📚 Módulos Principais</h3>
              
              <div className="bg-gradient-to-r from-[#6B3BFF]/10 to-transparent p-6 rounded-2xl border border-[#6B3BFF]/20">
                <h4 className="text-xl font-bold mb-2">Módulo 1 — Fundamentos</h4>
                <p className="text-[#BDBDBD]">O que funciona em 2025: tendências, oportunidades e mindset vencedor</p>
              </div>

              <div className="bg-gradient-to-r from-[#FFDD00]/10 to-transparent p-6 rounded-2xl border border-[#FFDD00]/20">
                <h4 className="text-xl font-bold mb-2">Módulo 2 — Ferramentas</h4>
                <p className="text-[#BDBDBD]">Prompts, automações e templates prontos para usar imediatamente</p>
              </div>

              <div className="bg-gradient-to-r from-[#6B3BFF]/10 to-transparent p-6 rounded-2xl border border-[#6B3BFF]/20">
                <h4 className="text-xl font-bold mb-2">Módulo 3 — Monetização</h4>
                <p className="text-[#BDBDBD]">Funis, ofertas e lançamentos passo a passo para maximizar receita</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#FFDD00] mb-6">🎁 Bônus Exclusivos</h3>
              
              <div className="bg-gradient-to-r from-[#FFDD00]/10 to-transparent p-6 rounded-2xl border border-[#FFDD00]/20">
                <h4 className="text-xl font-bold mb-2">Planilhas de Controle</h4>
                <p className="text-[#BDBDBD]">Templates para acompanhar métricas e resultados</p>
              </div>

              <div className="bg-gradient-to-r from-[#6B3BFF]/10 to-transparent p-6 rounded-2xl border border-[#6B3BFF]/20">
                <h4 className="text-xl font-bold mb-2">Scripts de Cold Message</h4>
                <p className="text-[#BDBDBD]">Mensagens prontas para prospecção e vendas</p>
              </div>

              <div className="bg-gradient-to-r from-[#FFDD00]/10 to-transparent p-6 rounded-2xl border border-[#FFDD00]/20">
                <h4 className="text-xl font-bold mb-2">Templates de Anúncio</h4>
                <p className="text-[#BDBDBD]">Criativos testados para Facebook, Instagram e Google</p>
              </div>

              <div className="bg-gradient-to-r from-[#6B3BFF]/10 to-transparent p-6 rounded-2xl border border-[#6B3BFF]/20">
                <h4 className="text-xl font-bold mb-2">Grupo VIP no Telegram</h4>
                <p className="text-[#BDBDBD]">Acesso exclusivo à comunidade e suporte direto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section id="garantia" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#FFDD00]/10 to-[#6B3BFF]/10 p-12 rounded-3xl border border-[#FFDD00]/30">
            <Shield className="w-20 h-20 text-[#FFDD00] mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-[#FFDD00]">Garantia</span> de 7 Dias
            </h2>
            <p className="text-xl text-[#BDBDBD] mb-8">
              Teste o MilionA.I por 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro. 
              Sem perguntas, sem burocracia.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-[#BDBDBD]">
              <div className="flex items-center">
                <Check className="w-5 h-5 text-[#FFDD00] mr-2" />
                Pagamento Seguro
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-[#FFDD00] mr-2" />
                SSL Certificado
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 text-[#FFDD00] mr-2" />
                Dados Protegidos
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#6B3BFF]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Escolha seu <span className="text-[#FFDD00]">plano</span>
            </h2>
            <p className="text-xl text-[#BDBDBD]">Investimento que se paga em semanas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <div className="bg-gradient-to-br from-[#6B3BFF]/10 to-transparent p-8 rounded-3xl border border-[#6B3BFF]/20 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">BÁSICO</h3>
                <div className="text-4xl font-bold text-[#6B3BFF] mb-2">R$ 497</div>
                <div className="text-[#BDBDBD]">ou 12x de R$ 49,70</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#6B3BFF] mr-3" />
                  Acesso aos 3 módulos principais
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#6B3BFF] mr-3" />
                  Templates e prompts básicos
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#6B3BFF] mr-3" />
                  Suporte por email
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#6B3BFF] mr-3" />
                  Garantia de 7 dias
                </li>
              </ul>
              
              <button className="w-full bg-[#6B3BFF] text-white py-4 rounded-full font-bold hover:bg-[#6B3BFF]/90 transition-all duration-300">
                ESCOLHER BÁSICO
              </button>
            </div>

            {/* Plano Premium - MAIS VENDIDO */}
            <div className="bg-gradient-to-br from-[#FFDD00]/10 to-[#6B3BFF]/10 p-8 rounded-3xl border-2 border-[#FFDD00] relative transform scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#FFDD00] text-[#0A0A0A] px-6 py-2 rounded-full font-bold text-sm">
                  MAIS VENDIDO
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">PREMIUM</h3>
                <div className="text-4xl font-bold text-[#FFDD00] mb-2">R$ 997</div>
                <div className="text-[#BDBDBD]">ou 12x de R$ 99,70</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#FFDD00] mr-3" />
                  Tudo do plano Básico
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#FFDD00] mr-3" />
                  Todos os bônus exclusivos
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#FFDD00] mr-3" />
                  Grupo VIP no Telegram
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#FFDD00] mr-3" />
                  Mentorias semanais ao vivo
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#FFDD00] mr-3" />
                  Suporte prioritário
                </li>
              </ul>
              
              <button className="w-full bg-[#FFDD00] text-[#0A0A0A] py-4 rounded-full font-bold hover:bg-[#FFDD00]/90 transition-all duration-300 hover:scale-105">
                ESCOLHER PREMIUM
              </button>
            </div>

            {/* Plano Turbo */}
            <div className="bg-gradient-to-br from-[#6B3BFF]/10 to-transparent p-8 rounded-3xl border border-[#6B3BFF]/20 relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">TURBO</h3>
                <div className="text-4xl font-bold text-[#6B3BFF] mb-2">R$ 1.997</div>
                <div className="text-[#BDBDBD]">ou 12x de R$ 199,70</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#6B3BFF] mr-3" />
                  Tudo do plano Premium
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#6B3BFF] mr-3" />
                  Consultoria 1:1 (2 sessões)
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#6B3BFF] mr-3" />
                  Análise do seu negócio
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#6B3BFF] mr-3" />
                  Estratégia personalizada
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-[#6B3BFF] mr-3" />
                  WhatsApp direto do mentor
                </li>
              </ul>
              
              <button className="w-full bg-[#6B3BFF] text-white py-4 rounded-full font-bold hover:bg-[#6B3BFF]/90 transition-all duration-300">
                ESCOLHER TURBO
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-[#BDBDBD] max-w-2xl mx-auto">
              <strong>Aviso legal:</strong> Resultados variam. MilionA.I oferece metodologia, ferramentas e suporte — 
              o sucesso depende da execução do aluno.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Perguntas <span className="text-[#FFDD00]">Frequentes</span>
            </h2>
            <p className="text-xl text-[#BDBDBD]">Tire suas dúvidas antes de começar</p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "Preciso ter conhecimento técnico para usar o MilionA.I?",
                answer: "Não! O método foi desenvolvido para iniciantes. Explicamos tudo passo a passo, desde o básico até estratégias avançadas."
              },
              {
                question: "Quanto tempo leva para ver os primeiros resultados?",
                answer: "A maioria dos nossos alunos consegue os primeiros resultados em 30 dias aplicando o método corretamente. Alguns conseguem ainda mais rápido."
              },
              {
                question: "O curso funciona para qualquer nicho?",
                answer: "Sim! As estratégias de IA que ensinamos podem ser aplicadas em qualquer nicho: saúde, educação, tecnologia, marketing, etc."
              },
              {
                question: "Posso acessar o conteúdo pelo celular?",
                answer: "Claro! Nossa plataforma é 100% responsiva. Você pode assistir as aulas e acessar os materiais de qualquer dispositivo."
              },
              {
                question: "Como funciona a garantia de 7 dias?",
                answer: "Se por qualquer motivo você não ficar satisfeito, basta solicitar o reembolso em até 7 dias e devolvemos 100% do valor pago."
              },
              {
                question: "Vou ter suporte se tiver dúvidas?",
                answer: "Sim! Oferecemos suporte por email para todos os planos, e suporte prioritário + grupo VIP para os planos Premium e Turbo."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-[#6B3BFF]/10 to-transparent rounded-2xl border border-[#6B3BFF]/20">
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#6B3BFF]/5 transition-colors rounded-2xl"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-[#FFDD00]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#FFDD00]" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-[#BDBDBD] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] border-t border-[#6B3BFF]/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-[#FFDD00] to-[#6B3BFF] bg-clip-text text-transparent mb-4">
                MilionA.I
              </div>
              <p className="text-[#BDBDBD] text-sm">
                Transformando criatividade em receita através da inteligência artificial.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-sm text-[#BDBDBD]">
                <li><a href="#sobre" className="hover:text-[#FFDD00] transition-colors">Sobre o Curso</a></li>
                <li><a href="#metodo" className="hover:text-[#FFDD00] transition-colors">Metodologia</a></li>
                <li><a href="#depoimentos" className="hover:text-[#FFDD00] transition-colors">Depoimentos</a></li>
                <li><a href="#precos" className="hover:text-[#FFDD00] transition-colors">Preços</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-[#BDBDBD]">
                <li><a href="#" className="hover:text-[#FFDD00] transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-[#FFDD00] transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-[#FFDD00] transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-[#FFDD00] transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-[#6B3BFF] rounded-full flex items-center justify-center hover:bg-[#6B3BFF]/80 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">IG</span>
                </div>
                <div className="w-10 h-10 bg-[#FFDD00] rounded-full flex items-center justify-center hover:bg-[#FFDD00]/80 transition-colors cursor-pointer">
                  <span className="text-sm font-bold text-[#0A0A0A]">YT</span>
                </div>
                <div className="w-10 h-10 bg-[#6B3BFF] rounded-full flex items-center justify-center hover:bg-[#6B3BFF]/80 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">TG</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-[#6B3BFF]/20 pt-8 text-center">
            <p className="text-[#BDBDBD] text-sm">
              © 2024 MilionA.I. Todos os direitos reservados. | CNPJ: XX.XXX.XXX/0001-XX
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300">
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* CTA Fixo Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#FFDD00] p-4 z-40 md:hidden">
        <button className="w-full bg-[#0A0A0A] text-[#FFDD00] py-3 rounded-full font-bold text-lg">
          QUERO A AULA GRÁTIS
        </button>
      </div>
    </div>
  )
}