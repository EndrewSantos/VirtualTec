"use client"

import { useUser } from "@/contexts/user-context"
import { libraryItems } from "@/lib/courses-data"
import { Lock, BookOpen, FileText, FolderOpen, ClipboardList } from "lucide-react"

function TypeIcon({ type }: { type: string }) {
  switch (type) {
    case "Livro":
      return <BookOpen className="h-4 w-4" />
    case "Manual":
      return <FileText className="h-4 w-4" />
    case "Projeto Modelo":
      return <FolderOpen className="h-4 w-4" />
    case "Passo a Passo":
      return <ClipboardList className="h-4 w-4" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

export function AcervoTab() {
  const { subscription } = useUser()

  if (!subscription.active) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
          <Lock className="h-10 w-10 text-primary" />
        </div>
        <h2 className="font-heading text-3xl font-bold text-foreground">Ops!</h2>
        <p className="mt-3 max-w-md text-center text-base leading-relaxed text-muted-foreground">
          Este é um recurso premium, faça um teste grátis e aproveite o máximo da plataforma!
        </p>
        <div className="mt-6 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
          Iniciar teste grátis
        </div>
      </div>
    )
  }

  const grouped: Record<string, typeof libraryItems> = {}
  for (const item of libraryItems) {
    if (!grouped[item.type]) grouped[item.type] = []
    grouped[item.type].push(item)
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Acervo Digital</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Livros, manuais, projetos modelo e tutoriais exclusivos para assinantes
        </p>
      </div>
      {Object.entries(grouped).map(([type, items]) => (
        <div key={type}>
          <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
            <TypeIcon type={type} />
            {type === "Passo a Passo" ? "Passo a Passo" : `${type}s`}
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-border bg-card p-5 transition-all hover:border-primary hover:shadow-sm"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {item.type}
                  </span>
                </div>
                <h4 className="mb-1 font-heading text-base font-bold text-foreground">{item.title}</h4>
                <p className="mb-2 text-xs text-muted-foreground">por {item.author}</p>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
