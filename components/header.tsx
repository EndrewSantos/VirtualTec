"use client"

import { useUser } from "@/contexts/user-context"
import { BookOpen, User } from "lucide-react"

export function Header() {
  const { profile } = useUser()

  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-6 py-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
          <BookOpen className="h-5 w-5 text-primary-foreground" />
        </div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          VirtualTec
        </h1>
      </div>
      <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
        <User className="h-4 w-4 text-primary" />
        <span className="text-sm font-medium text-foreground">{profile.name}</span>
      </div>
    </header>
  )
}
