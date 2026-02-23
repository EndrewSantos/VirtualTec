"use client"

import { useUser } from "@/contexts/user-context"
import type { Course } from "@/lib/courses-data"
import { ArrowLeft, Clock, User, Play, RotateCcw } from "lucide-react"

interface CourseDetailProps {
  course: Course
  onBack: () => void
}

export function CourseDetail({ course, onBack }: CourseDetailProps) {
  const { getCourseProgress, updateCourseProgress } = useUser()
  const progress = getCourseProgress(course.id)
  const completedModules = progress?.completedModules ?? []
  const progressPercent = Math.round((completedModules.length / course.modules.length) * 100)

  return (
    <div className="space-y-6">
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <ArrowLeft className="h-4 w-4" />
        Voltar aos cursos
      </button>

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground">{course.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{course.description}</p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
            {progressPercent}%
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Carga horária: {course.hours}h</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>Autor: {course.author}</span>
          </div>
        </div>

        <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <button
          type="button"
          onClick={() => {
            const nextModule = course.modules.findIndex((_, i) => !completedModules.includes(i))
            if (nextModule !== -1) {
              updateCourseProgress(course.id, nextModule)
            }
          }}
          className="mb-6 flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
        >
          {completedModules.length === 0 ? (
            <>
              <Play className="h-4 w-4" /> Iniciar Curso
            </>
          ) : completedModules.length === course.modules.length ? (
            <>
              <RotateCcw className="h-4 w-4" /> Curso Concluído
            </>
          ) : (
            <>
              <Play className="h-4 w-4" /> Continuar Curso
            </>
          )}
        </button>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-6 font-heading text-lg font-bold text-foreground">Trilha de Módulos</h3>
        <div className="space-y-3">
          {course.modules.map((mod, index) => {
            const isCompleted = completedModules.includes(index)
            return (
              <div key={index} className="flex items-start gap-4">
                <button
                  type="button"
                  onClick={() => {
                    if (!isCompleted) {
                      updateCourseProgress(course.id, index)
                    }
                  }}
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold transition-all ${
                    isCompleted
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:border-primary"
                  }`}
                >
                  {index + 1}
                </button>
                <div className="flex-1 pt-1">
                  <h4 className={`text-sm font-semibold ${isCompleted ? "text-primary" : "text-foreground"}`}>
                    {mod.title}
                  </h4>
                  <p className="mt-0.5 text-xs text-muted-foreground">{mod.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
