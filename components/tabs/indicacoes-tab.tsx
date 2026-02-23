"use client"

import { useUser } from "@/contexts/user-context"
import { Gift, Users, Calendar } from "lucide-react"

function getDiscount(referrals: number) {
  if (referrals >= 30) return { percent: 30, price: "R$ 13,93" }
  if (referrals >= 20) return { percent: 20, price: "R$ 15,92" }
  if (referrals >= 10) return { percent: 10, price: "R$ 17,91" }
  return { percent: 0, price: "R$ 19,90" }
}

function getNextMilestone(referrals: number) {
  if (referrals >= 30) return null
  if (referrals >= 20) return 30
  if (referrals >= 10) return 20
  return 10
}

const milestones = [10, 20, 30]

export function IndicacoesTab() {
  const { referrals, setReferrals, subscription } = useUser()
  const discount = getDiscount(referrals)
  const nextMilestone = getNextMilestone(referrals)
  const maxMilestone = 30
  const progressPercent = Math.min((referrals / maxMilestone) * 100, 100)

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return null
    const d = new Date(dateStr)
    return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
          <Gift className="h-7 w-7 text-primary" />
        </div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Seus amigos ganham, e você também!</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Convide amigos e ganhe desconto na próxima mensalidade!
        </p>
        <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {subscription.active ? (
            <span>
              Período: {formatDate(subscription.startDate)} a {formatDate(subscription.renewalDate)}
            </span>
          ) : (
            <span>(tenha uma assinatura ativa para participar)</span>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-foreground">
            <Users className="h-5 w-5 text-primary" />
            Progresso de Indicações
          </h3>
          <span className="rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">
            {referrals} indicações
          </span>
        </div>

        <div className="relative mb-2">
          <div className="h-4 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="absolute inset-x-0 top-0 flex h-4 items-center">
            {milestones.map((m) => (
              <div
                key={m}
                className="absolute flex flex-col items-center"
                style={{ left: `${(m / maxMilestone) * 100}%`, transform: "translateX(-50%)" }}
              >
                <div
                  className={`h-4 w-1 rounded-full ${
                    referrals >= m ? "bg-primary-foreground" : "bg-muted-foreground/30"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between text-xs text-muted-foreground">
          <span>0</span>
          {milestones.map((m) => (
            <span key={m} className={`${referrals >= m ? "font-bold text-primary" : ""}`}>
              {m}
            </span>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className={`rounded-xl border p-4 text-center ${referrals >= 10 ? "border-primary bg-secondary" : "border-border bg-card"}`}>
            <p className="font-heading text-2xl font-bold text-primary">10%</p>
            <p className="mt-1 text-xs text-muted-foreground">10-19 indicações</p>
            <p className="text-xs font-medium text-foreground">R$ 17,91</p>
          </div>
          <div className={`rounded-xl border p-4 text-center ${referrals >= 20 ? "border-primary bg-secondary" : "border-border bg-card"}`}>
            <p className="font-heading text-2xl font-bold text-primary">20%</p>
            <p className="mt-1 text-xs text-muted-foreground">20-29 indicações</p>
            <p className="text-xs font-medium text-foreground">R$ 15,92</p>
          </div>
          <div className={`rounded-xl border p-4 text-center ${referrals >= 30 ? "border-primary bg-secondary" : "border-border bg-card"}`}>
            <p className="font-heading text-2xl font-bold text-primary">30%</p>
            <p className="mt-1 text-xs text-muted-foreground">30+ indicações</p>
            <p className="text-xs font-medium text-foreground">R$ 13,93</p>
          </div>
        </div>

        {discount.percent > 0 && (
          <div className="mt-4 rounded-lg bg-primary/10 p-3 text-center">
            <p className="text-sm font-semibold text-primary">
              Desconto atual: {discount.percent}% - Valor: {discount.price}/mês
            </p>
          </div>
        )}

        {nextMilestone && (
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Faltam <span className="font-bold text-primary">{nextMilestone - referrals}</span> indicações para o próximo desconto!
          </p>
        )}

        <div className="mt-6 flex items-center gap-3">
          <label htmlFor="add-referrals" className="text-xs font-medium text-foreground">
            Simular indicações:
          </label>
          <input
            id="add-referrals"
            type="number"
            min={0}
            max={50}
            value={referrals}
            onChange={(e) => setReferrals(Math.max(0, Math.min(50, Number(e.target.value))))}
            className="w-20 rounded-lg border border-input bg-background px-2 py-1 text-center text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>
    </div>
  )
}
