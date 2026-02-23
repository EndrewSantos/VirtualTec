"use client"

import { useState } from "react"
import { UserProvider } from "@/contexts/user-context"
import { Header } from "@/components/header"
import { MainNavigation } from "@/components/main-navigation"
import { AboutSection } from "@/components/about-section"
import { CursosTab } from "@/components/tabs/cursos-tab"
import { AcervoTab } from "@/components/tabs/acervo-tab"
import { AssinaturaTab } from "@/components/tabs/assinatura-tab"
import { ConfiguracoesTab } from "@/components/tabs/configuracoes-tab"
import { TermosTab } from "@/components/tabs/termos-tab"
import { PerfilTab } from "@/components/tabs/perfil-tab"
import { IndicacoesTab } from "@/components/tabs/indicacoes-tab"
import { PersonalizacaoTab } from "@/components/tabs/personalizacao-tab"

function TabContent({ tab }: { tab: string }) {
  switch (tab) {
    case "cursos":
      return <CursosTab />
    case "acervo":
      return <AcervoTab />
    case "assinatura":
      return <AssinaturaTab />
    case "configuracoes":
      return <ConfiguracoesTab />
    case "personalizacao":
      return <PersonalizacaoTab />
    case "termos":
      return <TermosTab />
    case "perfil":
      return <PerfilTab />
    case "indicacoes":
      return <IndicacoesTab />
    case "sobre":
      return <AboutSection />
    default:
      return <CursosTab />
  }
}

function PlatformInner() {
  const [activeTab, setActiveTab] = useState("cursos")

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex flex-1">
        <MainNavigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="flex-1 overflow-y-auto p-6 pt-8 lg:p-8">
          <TabContent tab={activeTab} />
        </main>
      </div>
    </div>
  )
}

export function Platform() {
  return (
    <UserProvider>
      <PlatformInner />
    </UserProvider>
  )
}
