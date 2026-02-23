"use client"

import {
  BookOpen,
  Library,
  CreditCard,
  Settings,
  FileText,
  User,
  Gift,
  Info,
  Menu,
  X,
  Palette,
} from "lucide-react"
import { useState } from "react"

const allTabs = [
  { id: "cursos", label: "Cursos", icon: BookOpen, group: "principal" },
  { id: "acervo", label: "Acervo", icon: Library, group: "principal" },
  { id: "assinatura", label: "Assinatura", icon: CreditCard, group: "principal" },
  { id: "configuracoes", label: "Configuracoes/Suporte", icon: Settings, group: "conta" },
  { id: "personalizacao", label: "Personalizacao", icon: Palette, group: "conta" },
  { id: "termos", label: "Termos e Condicoes", icon: FileText, group: "conta" },
  { id: "perfil", label: "Perfil", icon: User, group: "conta" },
  { id: "indicacoes", label: "Programa de Indicacoes", icon: Gift, group: "conta" },
  { id: "sobre", label: "Sobre nos", icon: Info, group: "info" },
]

interface MainNavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

function NavButton({ tab, isActive, onClick }: { tab: typeof allTabs[number]; isActive: boolean; onClick: () => void }) {
  const Icon = tab.icon
  return (
    <button
      key={tab.id}
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      }`}
    >
      <Icon className="h-4 w-4 shrink-0" />
      {tab.label}
    </button>
  )
}

function SidebarContent({ activeTab, onTabClick }: { activeTab: string; onTabClick: (id: string) => void }) {
  const principalTabs = allTabs.filter((t) => t.group === "principal")
  const contaTabs = allTabs.filter((t) => t.group === "conta")
  const infoTabs = allTabs.filter((t) => t.group === "info")

  return (
    <div className="flex h-full flex-col">
      <div className="px-5 pb-3 pt-5">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Plataforma
        </span>
      </div>
      <div className="flex flex-col gap-0.5 px-3">
        {principalTabs.map((tab) => (
          <NavButton key={tab.id} tab={tab} isActive={activeTab === tab.id} onClick={() => onTabClick(tab.id)} />
        ))}
      </div>

      <div className="px-5 pb-3 pt-6">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Conta
        </span>
      </div>
      <div className="flex flex-col gap-0.5 px-3">
        {contaTabs.map((tab) => (
          <NavButton key={tab.id} tab={tab} isActive={activeTab === tab.id} onClick={() => onTabClick(tab.id)} />
        ))}
      </div>

      <div className="mt-auto border-t border-border px-3 py-3">
        {infoTabs.map((tab) => (
          <NavButton key={tab.id} tab={tab} isActive={activeTab === tab.id} onClick={() => onTabClick(tab.id)} />
        ))}
      </div>
    </div>
  )
}

export function MainNavigation({ activeTab, onTabChange }: MainNavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleTabClick(tabId: string) {
    onTabChange(tabId)
    setMobileOpen(false)
  }

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-60 shrink-0 border-r border-border bg-card lg:flex lg:flex-col">
        <SidebarContent activeTab={activeTab} onTabClick={handleTabClick} />
      </aside>

      {/* Mobile hamburger button - positioned fixed so it does not break flex layout */}
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-[76px] z-30 flex h-10 w-10 items-center justify-center rounded-lg bg-card shadow-md border border-border lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu className="h-5 w-5 text-foreground" />
      </button>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-foreground/20 lg:hidden"
          onClick={() => setMobileOpen(false)}
          onKeyDown={(e) => { if (e.key === "Escape") setMobileOpen(false) }}
          role="button"
          tabIndex={-1}
          aria-label="Fechar menu"
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-64 flex-col bg-card shadow-xl transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="font-heading text-lg font-bold text-foreground">VirtualTec</span>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-secondary"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <SidebarContent activeTab={activeTab} onTabClick={handleTabClick} />
      </aside>
    </>
  )
}
