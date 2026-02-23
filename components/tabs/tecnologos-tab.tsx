"use client"

import { useState } from "react"
import { techCourses } from "@/lib/courses-data"
import { Clock, MapPin, Sun, Moon, Sunset, ExternalLink, ArrowLeft, Building2 } from "lucide-react"

function ShiftIcon({ shift }: { shift: string }) {
  if (shift === "Manhã") return <Sun className="h-3.5 w-3.5" />
  if (shift === "Tarde") return <Sunset className="h-3.5 w-3.5" />
  return <Moon className="h-3.5 w-3.5" />
}

export function TecnologosTab() {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const selected = techCourses.find((c) => c.id === selectedId)

  if (selected) {
    return (
      <div className="space-y-6">
        <button
          type="button"
          onClick={() => setSelectedId(null)}
          className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar aos cursos técnicos
        </button>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            <Building2 className="h-3.5 w-3.5" />
            Presencial
          </div>

          <h2 className="mt-3 font-heading text-2xl font-bold text-foreground">{selected.title}</h2>
          <p className="mt-1 text-lg font-semibold text-primary">{selected.author}</p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Carga horária: {selected.hours}h</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>{selected.address}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Sun className="h-4 w-4 shrink-0" />
              <div className="flex gap-2">
                {selected.shifts.map((s) => (
                  <span key={s} className="flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                    <ShiftIcon shift={s} />
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <a
            href={selected.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
          >
            Saiba mais
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Cursos Tecnólogos</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Cursos técnicos presenciais da ETEC Rio Grande da Serra
        </p>
      </div>
      <div className="space-y-4">
        {techCourses.map((course) => (
          <button
            key={course.id}
            type="button"
            onClick={() => setSelectedId(course.id)}
            className="group flex w-full flex-col rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                <Building2 className="h-3 w-3" />
                Presencial
              </span>
              {course.shifts.map((s) => (
                <span key={s} className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                  <ShiftIcon shift={s} />
                  {s}
                </span>
              ))}
            </div>
            <h3 className="mb-1 font-heading text-lg font-bold text-foreground group-hover:text-primary">
              {course.title}
            </h3>
            <p className="text-sm text-muted-foreground">{course.author}</p>
            <div className="mt-3 flex items-center gap-4 border-t border-border pt-3">
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>{course.hours}h</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span>Rio Grande da Serra - SP</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
