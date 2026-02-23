"use client"

import { useState } from "react"
import { useUser } from "@/contexts/user-context"
import { Settings, Bell, Moon, Lock, Headphones, Send } from "lucide-react"

export function ConfiguracoesTab() {
  const { darkMode, toggleDarkMode } = useUser()
  const [notifEmail, setNotifEmail] = useState(true)
  const [notifCurso, setNotifCurso] = useState(true)
  const [notifPromo, setNotifPromo] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [passwordMsg, setPasswordMsg] = useState("")
  const [sacMessage, setSacMessage] = useState("")
  const [sacSent, setSacSent] = useState(false)

  const handlePasswordChange = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPasswordMsg("Preencha todos os campos.")
      return
    }
    if (newPassword !== confirmPassword) {
      setPasswordMsg("As senhas não coincidem.")
      return
    }
    if (newPassword.length < 6) {
      setPasswordMsg("A nova senha deve ter pelo menos 6 caracteres.")
      return
    }
    setPasswordMsg("Senha alterada com sucesso!")
    setCurrentPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Configurações e Suporte</h2>
        <p className="mt-1 text-sm text-muted-foreground">Personalize sua experiência na plataforma</p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
          <Moon className="h-5 w-5 text-primary" />
          Aparência
        </h3>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">Modo escuro</p>
            <p className="text-xs text-muted-foreground">Altera o tema de cores da plataforma</p>
          </div>
          <button
            type="button"
            onClick={toggleDarkMode}
            className={`relative h-7 w-12 rounded-full transition-colors ${
              darkMode ? "bg-primary" : "bg-muted"
            }`}
            aria-label="Alternar modo escuro"
          >
            <span
              className={`absolute top-0.5 h-6 w-6 rounded-full bg-card shadow-sm transition-transform ${
                darkMode ? "left-[22px]" : "left-0.5"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
          <Bell className="h-5 w-5 text-primary" />
          Notificações
        </h3>
        <div className="space-y-4">
          {[
            { label: "Notificações por e-mail", desc: "Receba atualizações por e-mail", value: notifEmail, setter: setNotifEmail },
            { label: "Atualizações de cursos", desc: "Avisos sobre novos módulos e cursos", value: notifCurso, setter: setNotifCurso },
            { label: "Promoções", desc: "Ofertas especiais e descontos", value: notifPromo, setter: setNotifPromo },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
              <button
                type="button"
                onClick={() => item.setter(!item.value)}
                className={`relative h-7 w-12 rounded-full transition-colors ${
                  item.value ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`Alternar ${item.label}`}
              >
                <span
                  className={`absolute top-0.5 h-6 w-6 rounded-full bg-card shadow-sm transition-transform ${
                    item.value ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
          <Lock className="h-5 w-5 text-primary" />
          Alterar Senha
        </h3>
        <div className="space-y-3">
          <div>
            <label htmlFor="current-pw" className="mb-1 block text-xs font-medium text-foreground">Senha atual</label>
            <input
              id="current-pw"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Digite sua senha atual"
            />
          </div>
          <div>
            <label htmlFor="new-pw" className="mb-1 block text-xs font-medium text-foreground">Nova senha</label>
            <input
              id="new-pw"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Digite a nova senha"
            />
          </div>
          <div>
            <label htmlFor="confirm-pw" className="mb-1 block text-xs font-medium text-foreground">Confirmar nova senha</label>
            <input
              id="confirm-pw"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Confirme a nova senha"
            />
          </div>
          {passwordMsg && (
            <p className={`text-xs ${passwordMsg.includes("sucesso") ? "text-green-600" : "text-destructive"}`}>
              {passwordMsg}
            </p>
          )}
          <button
            type="button"
            onClick={handlePasswordChange}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Alterar Senha
          </button>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
          <Headphones className="h-5 w-5 text-primary" />
          SAC - Atendimento ao Cliente
        </h3>
        {sacSent ? (
          <div className="rounded-lg bg-secondary p-4 text-center">
            <p className="text-sm font-medium text-secondary-foreground">
              Mensagem enviada! Responderemos em até 24 horas.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <textarea
              value={sacMessage}
              onChange={(e) => setSacMessage(e.target.value)}
              className="h-28 w-full resize-none rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Descreva sua dúvida ou problema..."
            />
            <button
              type="button"
              onClick={() => {
                if (sacMessage.trim()) setSacSent(true)
              }}
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
            >
              <Send className="h-4 w-4" />
              Enviar Mensagem
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
