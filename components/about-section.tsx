"use client"

import { Heart, Eye, Target, Lightbulb } from "lucide-react"

export function AboutSection() {
  return (
    <section className="space-y-6">
      <h2 className="mb-6 font-heading text-2xl font-bold text-foreground">Sobre nós</h2>
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          A VirtualTec nasceu com o propósito de transformar tecnologia em soluções simples, acessíveis e eficientes para pessoas e empresas. Acreditamos que a inovação não deve ser complicada — ela deve facilitar a vida, otimizar processos e gerar resultados reais.
        </p>
        <p>
          Somos uma empresa comprometida com qualidade, confiança e evolução constante. Trabalhamos com dedicação para oferecer serviços e soluções tecnológicas modernas, acompanhando as tendências do mercado e as necessidades dos nossos clientes.
        </p>

        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-3">
          <div className="rounded-lg bg-secondary p-5">
            <div className="mb-3 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-sm font-bold text-foreground">Nossa Missão</h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Conectar pessoas à tecnologia de forma inteligente, oferecendo suporte, desenvolvimento e inovação com responsabilidade e profissionalismo.
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-5">
            <div className="mb-3 flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-sm font-bold text-foreground">Nossa Visão</h3>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Ser reconhecida como referência em soluções tecnológicas, destacando-se pela excelência no atendimento e pela capacidade de adaptação às constantes mudanças do mundo digital.
            </p>
          </div>
          <div className="rounded-lg bg-secondary p-5">
            <div className="mb-3 flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              <h3 className="font-heading text-sm font-bold text-foreground">Nossos Valores</h3>
            </div>
            <ul className="space-y-1 text-xs leading-relaxed text-muted-foreground">
              <li>Ética e transparência</li>
              <li>Comprometimento com resultados</li>
              <li>Inovação contínua</li>
              <li>Foco no cliente</li>
              <li>Qualidade em cada detalhe</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-primary/5 p-4 pt-4">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <p className="text-sm font-medium text-foreground">
            Na VirtualTec, acreditamos que a tecnologia é o futuro — e estamos prontos para construí-lo ao seu lado.
          </p>
        </div>
      </div>
    </section>
  )
}
