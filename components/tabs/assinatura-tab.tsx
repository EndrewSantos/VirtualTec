"use client"

import { useUser } from "@/contexts/user-context"
import { Check, BookOpen, Headphones, CreditCard } from "lucide-react"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"

export function AssinaturaTab() {
  const { subscription, setSubscription } = useUser()

  if (!subscription.active) {
    return (
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-foreground">Assinatura VirtualTec</h2>
          <p className="mt-1 text-sm text-muted-foreground">Aproveite o máximo da plataforma</p>
        </div>

        <div className="mx-auto max-w-md rounded-2xl border-2 border-primary bg-card p-8 text-center">
          <h3 className="font-heading text-xl font-bold text-foreground">Premium</h3>
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="font-heading text-4xl font-bold text-primary">R$19,90</span>
            <span className="text-sm text-muted-foreground">/mês</span>
          </div>

          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                <Check className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                Acesso ao acervo liberado
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                <Check className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <div className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-primary" />
                Suporte prioritário
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              const today = new Date()
              const renewal = new Date(today)
              renewal.setDate(renewal.getDate() + 30)
              setSubscription({
                active: true,
                startDate: today.toISOString().split("T")[0],
                renewalDate: renewal.toISOString().split("T")[0],
                paymentHistory: [
                  {
                    date: today.toISOString().split("T")[0],
                    amount: "R$ 0,00 (Teste grátis)",
                    status: "Ativo",
                  },
                ],
              })
            }}
            className="mt-6 w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Iniciar teste grátis
          </button>
          <p className="mt-3 text-xs text-muted-foreground">
            {"Válido por 7 dias, após período, R$19,90"}
          </p>
        </div>
      </div>
    )
  }

  const startDate = subscription.startDate ? new Date(subscription.startDate) : new Date()
  const renewalDate = subscription.renewalDate ? new Date(subscription.renewalDate) : new Date()
  const today = new Date()
  const totalDays = Math.ceil((renewalDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))
  const daysPassed = Math.max(0, Math.ceil((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)))
  const daysRemaining = Math.max(0, totalDays - daysPassed)

  const chartData = [
    { name: "Dias passados", value: daysPassed },
    { name: "Dias restantes", value: daysRemaining },
  ]

  const formatDate = (d: Date) =>
    d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Sua Assinatura</h2>
        <p className="mt-1 text-sm text-muted-foreground">Gerencie sua assinatura VirtualTec Premium</p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 font-heading text-lg font-bold text-foreground">Status da Assinatura</h3>
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="relative h-52 w-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  stroke="none"
                >
                  <Cell fill="hsl(270, 60%, 50%)" />
                  <Cell fill="hsl(240, 5%, 90%)" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs text-muted-foreground">{"Renovação"}</span>
              <span className="font-heading text-sm font-bold text-foreground">
                {formatDate(renewalDate)}
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <div className="h-3 w-3 rounded-full" style={{ background: "hsl(270, 60%, 50%)" }} />
              <span className="text-foreground">{"Dias passados:"} {daysPassed}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="h-3 w-3 rounded-full bg-muted" />
              <span className="text-foreground">{"Dias restantes:"} {daysRemaining}</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {"Início:"} {formatDate(startDate)}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
          <CreditCard className="h-5 w-5 text-primary" />
          {"Histórico de Pagamentos"}
        </h3>
        {subscription.paymentHistory.length === 0 ? (
          <p className="text-sm text-muted-foreground">{"Nenhum pagamento registrado."}</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-2 text-left font-semibold text-foreground">Data</th>
                  <th className="pb-2 text-left font-semibold text-foreground">Valor</th>
                  <th className="pb-2 text-left font-semibold text-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {subscription.paymentHistory.map((p, i) => (
                  <tr key={i} className="border-b border-border last:border-0">
                    <td className="py-2 text-muted-foreground">{p.date}</td>
                    <td className="py-2 text-foreground">{p.amount}</td>
                    <td className="py-2">
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
