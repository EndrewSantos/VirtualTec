"use client"

import { useState } from "react"
import { courses } from "@/lib/courses-data"
import { CourseDetail } from "@/components/course-detail"
import { Clock, User, Tag, ArrowRight } from "lucide-react"

export function CursosTab() {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null)
  const selectedCourse = courses.find((c) => c.id === selectedCourseId)

  if (selectedCourse) {
    return <CourseDetail course={selectedCourse} onBack={() => setSelectedCourseId(null)} />
  }

  const pairs: (typeof courses)[] = []
  for (let i = 0; i < courses.length; i += 2) {
    pairs.push(courses.slice(i, i + 2))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Cursos Profissionalizantes</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Escolha entre {courses.length} cursos gratuitos de instituições renomadas
        </p>
      </div>
      {pairs.map((pair, pairIndex) => (
        <div key={pairIndex} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {pair.map((course) => (
            <button
              key={course.id}
              type="button"
              onClick={() => setSelectedCourseId(course.id)}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 text-left transition-all hover:border-primary hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                  {course.category}
                </span>
              </div>
              <h3 className="mb-2 font-heading text-lg font-bold text-foreground group-hover:text-primary">
                {course.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 border-t border-border pt-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{course.hours}h</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <User className="h-3.5 w-3.5" />
                  <span>{course.author}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Tag className="h-3.5 w-3.5" />
                  <span>{course.modules.length} módulos</span>
                </div>
                <div className="ml-auto flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Ver curso <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}
