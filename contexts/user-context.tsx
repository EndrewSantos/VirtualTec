"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"

export interface UserProfile {
  name: string
  email: string
  phone: string
}

export interface Subscription {
  active: boolean
  startDate: string | null
  renewalDate: string | null
  paymentHistory: { date: string; amount: string; status: string }[]
}

export interface CourseProgress {
  courseId: number
  completedModules: number[]
  progress: number
}

export interface SecondaryColor {
  r: number
  g: number
  b: number
}

export interface UserContextType {
  profile: UserProfile
  setProfile: (p: UserProfile) => void
  subscription: Subscription
  setSubscription: (s: Subscription) => void
  courseProgress: CourseProgress[]
  updateCourseProgress: (courseId: number, moduleIndex: number) => void
  getCourseProgress: (courseId: number) => CourseProgress | undefined
  referrals: number
  setReferrals: (n: number) => void
  darkMode: boolean
  toggleDarkMode: () => void
  secondaryColor: SecondaryColor | null
  setSecondaryColor: (color: SecondaryColor | null) => void
}

const UserContext = createContext<UserContextType | null>(null)

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Usuário",
    email: "usuario@email.com",
    phone: "(11) 99999-9999",
  })

  const [subscription, setSubscription] = useState<Subscription>({
    active: false,
    startDate: null,
    renewalDate: null,
    paymentHistory: [],
  })

  const [courseProgress, setCourseProgress] = useState<CourseProgress[]>([])

  const [referrals, setReferrals] = useState(0)
  const [darkMode, setDarkMode] = useState(false)
  const [secondaryColor, setSecondaryColor] = useState<SecondaryColor | null>(null)

  // Apply secondary color as CSS custom properties when it changes
  useEffect(() => {
    const root = document.documentElement
    if (secondaryColor) {
      const { r, g, b } = secondaryColor
      // Convert RGB to HSL for CSS custom properties
      const rNorm = r / 255
      const gNorm = g / 255
      const bNorm = b / 255
      const max = Math.max(rNorm, gNorm, bNorm)
      const min = Math.min(rNorm, gNorm, bNorm)
      const l = (max + min) / 2
      let h = 0
      let s = 0
      if (max !== min) {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
          case rNorm: h = ((gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0)) / 6; break
          case gNorm: h = ((bNorm - rNorm) / d + 2) / 6; break
          case bNorm: h = ((rNorm - gNorm) / d + 2) / 6; break
        }
      }
      const hDeg = Math.round(h * 360)
      const sPct = Math.round(s * 100)
      const lPct = Math.round(l * 100)

      // Secondary color
      root.style.setProperty("--secondary", `${hDeg} ${sPct}% ${Math.min(lPct + 35, 95)}%`)
      root.style.setProperty("--secondary-foreground", `${hDeg} ${Math.min(sPct + 10, 100)}% ${Math.max(lPct - 10, 20)}%`)
      // Accent color (similar to secondary)
      root.style.setProperty("--accent", `${hDeg} ${sPct}% ${Math.min(lPct + 30, 92)}%`)
      root.style.setProperty("--accent-foreground", `${hDeg} ${Math.min(sPct + 10, 100)}% ${Math.max(lPct - 15, 15)}%`)
      // Primary from same hue
      root.style.setProperty("--primary", `${hDeg} ${Math.min(sPct + 20, 100)}% ${lPct}%`)
      root.style.setProperty("--ring", `${hDeg} ${Math.min(sPct + 20, 100)}% ${lPct}%`)
      root.style.setProperty("--sidebar-primary", `${hDeg} ${Math.min(sPct + 20, 100)}% ${lPct}%`)
      root.style.setProperty("--sidebar-accent", `${hDeg} ${sPct}% ${Math.min(lPct + 35, 95)}%`)
      root.style.setProperty("--sidebar-accent-foreground", `${hDeg} ${Math.min(sPct + 10, 100)}% ${Math.max(lPct - 15, 15)}%`)
      root.style.setProperty("--sidebar-ring", `${hDeg} ${Math.min(sPct + 20, 100)}% ${lPct}%`)
    } else {
      // Reset to defaults by removing inline styles
      const props = [
        "--secondary", "--secondary-foreground", "--accent", "--accent-foreground",
        "--primary", "--ring", "--sidebar-primary", "--sidebar-accent",
        "--sidebar-accent-foreground", "--sidebar-ring"
      ]
      props.forEach((p) => root.style.removeProperty(p))
    }
  }, [secondaryColor, darkMode])

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      return next
    })
  }, [])

  const updateCourseProgress = useCallback((courseId: number, moduleIndex: number) => {
    setCourseProgress((prev) => {
      const existing = prev.find((c) => c.courseId === courseId)
      if (existing) {
        const newModules = existing.completedModules.includes(moduleIndex)
          ? existing.completedModules
          : [...existing.completedModules, moduleIndex]
        const updated = { ...existing, completedModules: newModules, progress: 0 }
        return prev.map((c) => (c.courseId === courseId ? updated : c))
      }
      return [...prev, { courseId, completedModules: [moduleIndex], progress: 0 }]
    })
  }, [])

  const getCourseProgress = useCallback(
    (courseId: number) => courseProgress.find((c) => c.courseId === courseId),
    [courseProgress]
  )

  return (
    <UserContext.Provider
      value={{
        profile,
        setProfile,
        subscription,
        setSubscription,
        courseProgress,
        updateCourseProgress,
        getCourseProgress,
        referrals,
        setReferrals,
        darkMode,
        toggleDarkMode,
        secondaryColor,
        setSecondaryColor,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const ctx = useContext(UserContext)
  if (!ctx) throw new Error("useUser must be used within UserProvider")
  return ctx
}
