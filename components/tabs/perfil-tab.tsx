"use client"

import { useState } from "react"
import { useUser } from "@/contexts/user-context"
import { User, Save, Mail, Phone } from "lucide-react"

export function PerfilTab() {
  const { profile, setProfile } = useUser()
  const [name, setName] = useState(profile.name)
  const [email, setEmail] = useState(profile.email)
  const [phone, setPhone] = useState(profile.phone)
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setProfile({ name, email, phone })
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Meu Perfil</h2>
        <p className="mt-1 text-sm text-muted-foreground">Personalize suas informações pessoais</p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
            <User className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground">{profile.name}</h3>
            <p className="text-sm text-muted-foreground">{profile.email}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="profile-name" className="mb-1 flex items-center gap-2 text-xs font-medium text-foreground">
              <User className="h-3.5 w-3.5 text-primary" />
              Nome
            </label>
            <input
              id="profile-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label htmlFor="profile-email" className="mb-1 flex items-center gap-2 text-xs font-medium text-foreground">
              <Mail className="h-3.5 w-3.5 text-primary" />
              E-mail
            </label>
            <input
              id="profile-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="profile-phone" className="mb-1 flex items-center gap-2 text-xs font-medium text-foreground">
              <Phone className="h-3.5 w-3.5 text-primary" />
              Telefone
            </label>
            <input
              id="profile-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={handleSave}
            className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            <Save className="h-4 w-4" />
            Salvar Alterações
          </button>
          {saved && <span className="text-xs font-medium text-green-600">Salvo com sucesso!</span>}
        </div>
      </div>
    </div>
  )
}
