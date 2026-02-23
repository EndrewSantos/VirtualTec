"use client"

import { FileText } from "lucide-react"

export function TermosTab() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <FileText className="h-6 w-6 text-primary" />
        <h2 className="font-heading text-2xl font-bold text-foreground">Termos e Condições</h2>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <p className="mb-4 text-xs text-muted-foreground">Última atualização: Fevereiro de 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-foreground">
          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">1. Aceitação dos Termos</h3>
            <p className="text-muted-foreground">
              Ao acessar e utilizar a plataforma VirtualTec, você concorda integralmente com os presentes Termos e Condições de Uso. Caso não concorde com qualquer disposição aqui estabelecida, recomendamos que não utilize nossos serviços. O uso contínuo da plataforma constitui aceitação tácita de eventuais atualizações destes termos.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">2. Descrição dos Serviços</h3>
            <p className="text-muted-foreground">
              A VirtualTec é uma plataforma digital de cursos online que oferece conteúdos educacionais profissionalizantes e técnicos, acervo digital de materiais educacionais, e ferramentas de aprendizado. Os cursos disponibilizados podem ser de autoria própria ou de instituições parceiras, sendo devidamente creditados aos respectivos autores.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">3. Cadastro e Conta do Usuário</h3>
            <p className="text-muted-foreground">
              Para utilizar a plataforma, o usuário deve criar uma conta fornecendo informações verdadeiras e atualizadas. O usuário é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades realizadas em sua conta. Em caso de uso não autorizado, o usuário deve notificar imediatamente a VirtualTec.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">4. Assinatura e Pagamentos</h3>
            <p className="text-muted-foreground">
              A VirtualTec oferece um plano de assinatura mensal no valor de R$19,90 (dezenove reais e noventa centavos), com período de teste gratuito de 7 (sete) dias. Após o período de teste, a cobrança será realizada automaticamente. O cancelamento pode ser solicitado a qualquer momento, sendo efetivado ao final do período já pago. Não há reembolso proporcional para períodos parcialmente utilizados.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">5. Programa de Indicações</h3>
            <p className="text-muted-foreground">
              O Programa de Indicações concede descontos progressivos na assinatura mensal com base no número de indicações válidas realizadas durante o período da assinatura vigente. Os descontos são: 10% para 10 a 19 indicações, 20% para 20 a 29 indicações e 30% para 30 ou mais indicações. Os descontos são aplicados na renovação da assinatura e não são cumulativos com outras promoções.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">6. Propriedade Intelectual</h3>
            <p className="text-muted-foreground">
              Todo o conteúdo disponibilizado na plataforma, incluindo textos, vídeos, imagens, gráficos, logotipos e materiais didáticos, é protegido por direitos autorais e propriedade intelectual. O acesso ao conteúdo não confere ao usuário qualquer direito de reprodução, distribuição ou comercialização sem autorização prévia por escrito da VirtualTec ou dos respectivos titulares.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">7. Conduta do Usuário</h3>
            <p className="text-muted-foreground">
              O usuário compromete-se a utilizar a plataforma de forma ética e legal, sendo vedado: compartilhar credenciais de acesso, reproduzir ou distribuir conteúdo sem autorização, utilizar a plataforma para fins ilegais, tentar acessar sistemas ou dados de forma não autorizada, e praticar qualquer ação que comprometa o funcionamento da plataforma.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">8. Limitação de Responsabilidade</h3>
            <p className="text-muted-foreground">
              A VirtualTec não se responsabiliza por eventuais interrupções temporárias no serviço, por danos decorrentes do uso ou impossibilidade de uso da plataforma, nem por decisões tomadas com base nos conteúdos educacionais disponibilizados. Os cursos de instituições parceiras têm seus conteúdos sob responsabilidade dos respectivos autores.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">9. Privacidade e Proteção de Dados</h3>
            <p className="text-muted-foreground">
              A VirtualTec compromete-se a proteger os dados pessoais dos usuários em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018). Os dados coletados são utilizados exclusivamente para prestação dos serviços, personalização da experiência e comunicações relevantes. O usuário pode solicitar a exclusão de seus dados a qualquer momento.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">10. Alterações nos Termos</h3>
            <p className="text-muted-foreground">
              A VirtualTec reserva-se o direito de modificar estes Termos e Condições a qualquer momento, sendo as alterações comunicadas aos usuários por meio da plataforma ou por e-mail. O uso continuado dos serviços após a comunicação das alterações constitui aceitação dos novos termos.
            </p>
          </section>

          <section>
            <h3 className="mb-2 font-heading text-base font-bold text-foreground">11. Foro Competente</h3>
            <p className="text-muted-foreground">
              Fica eleito o foro da Comarca de São Paulo, Estado de São Paulo, para dirimir quaisquer controvérsias decorrentes destes Termos e Condições, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
