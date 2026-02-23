"use client"

import { useState, useEffect } from "react"
import { useUser } from "@/contexts/user-context"
import { Palette, RotateCcw } from "lucide-react"

function rgbToHex(r: number, g: number, b: number) {
  return (
    "#" +
    [r, g, b]
      .map((v) => {
        const hex = v.toString(16)
        return hex.length === 1 ? "0" + hex : hex
      })
      .join("")
  )
}

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
    : { r: 127, g: 60, b: 200 }
}

const presetColors = [
  { name: "Roxo (Padrao)", r: 127, g: 63, b: 211 },
  { name: "Azul", r: 59, g: 130, b: 246 },
  { name: "Verde", r: 34, g: 197, b: 94 },
  { name: "Vermelho", r: 239, g: 68, b: 68 },
  { name: "Laranja", r: 249, g: 115, b: 22 },
  { name: "Rosa", r: 236, g: 72, b: 153 },
  { name: "Ciano", r: 6, g: 182, b: 212 },
  { name: "Amarelo", r: 234, g: 179, b: 8 },
]

export function PersonalizacaoTab() {
  const { secondaryColor, setSecondaryColor } = useUser()
  const [r, setR] = useState(secondaryColor?.r ?? 127)
  const [g, setG] = useState(secondaryColor?.g ?? 63)
  const [b, setB] = useState(secondaryColor?.b ?? 211)
  const [hexInput, setHexInput] = useState(rgbToHex(r, g, b))

  useEffect(() => {
    setHexInput(rgbToHex(r, g, b))
  }, [r, g, b])

  function applyColor(red: number, green: number, blue: number) {
    setR(red)
    setG(green)
    setB(blue)
    setSecondaryColor({ r: red, g: green, b: blue })
  }

  function handleSliderChange(channel: "r" | "g" | "b", value: number) {
    const newR = channel === "r" ? value : r
    const newG = channel === "g" ? value : g
    const newB = channel === "b" ? value : b
    setR(newR)
    setG(newG)
    setB(newB)
    setSecondaryColor({ r: newR, g: newG, b: newB })
  }

  function handleHexChange(hex: string) {
    setHexInput(hex)
    if (/^#[a-fA-F0-9]{6}$/.test(hex)) {
      const rgb = hexToRgb(hex)
      applyColor(rgb.r, rgb.g, rgb.b)
    }
  }

  function handleReset() {
    setSecondaryColor(null)
    setR(127)
    setG(63)
    setB(211)
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">Personalizacao</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Personalize as cores da plataforma ao seu gosto
        </p>
      </div>

      {/* Color Preview */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 flex items-center gap-2 font-heading text-lg font-bold text-foreground">
          <Palette className="h-5 w-5 text-primary" />
          Cor do Tema
        </h3>

        <div className="mb-6 flex items-center gap-4">
          <div
            className="h-20 w-20 shrink-0 rounded-xl border-2 border-border shadow-inner"
            style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">Cor selecionada</p>
            <p className="mt-0.5 font-mono text-xs text-muted-foreground">
              RGB({r}, {g}, {b})
            </p>
            <p className="font-mono text-xs text-muted-foreground">{rgbToHex(r, g, b).toUpperCase()}</p>
          </div>
        </div>

        {/* RGB Sliders */}
        <div className="space-y-5">
          {/* Red */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="r-slider" className="text-sm font-medium text-foreground">
                Vermelho (R)
              </label>
              <input
                type="number"
                min={0}
                max={255}
                value={r}
                onChange={(e) => handleSliderChange("r", Math.min(255, Math.max(0, Number(e.target.value))))}
                className="w-16 rounded-md border border-input bg-background px-2 py-1 text-center text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <input
              id="r-slider"
              type="range"
              min={0}
              max={255}
              value={r}
              onChange={(e) => handleSliderChange("r", Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg"
              style={{
                background: `linear-gradient(to right, rgb(0, ${g}, ${b}), rgb(255, ${g}, ${b}))`,
              }}
            />
          </div>

          {/* Green */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="g-slider" className="text-sm font-medium text-foreground">
                Verde (G)
              </label>
              <input
                type="number"
                min={0}
                max={255}
                value={g}
                onChange={(e) => handleSliderChange("g", Math.min(255, Math.max(0, Number(e.target.value))))}
                className="w-16 rounded-md border border-input bg-background px-2 py-1 text-center text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <input
              id="g-slider"
              type="range"
              min={0}
              max={255}
              value={g}
              onChange={(e) => handleSliderChange("g", Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg"
              style={{
                background: `linear-gradient(to right, rgb(${r}, 0, ${b}), rgb(${r}, 255, ${b}))`,
              }}
            />
          </div>

          {/* Blue */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="b-slider" className="text-sm font-medium text-foreground">
                Azul (B)
              </label>
              <input
                type="number"
                min={0}
                max={255}
                value={b}
                onChange={(e) => handleSliderChange("b", Math.min(255, Math.max(0, Number(e.target.value))))}
                className="w-16 rounded-md border border-input bg-background px-2 py-1 text-center text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
            <input
              id="b-slider"
              type="range"
              min={0}
              max={255}
              value={b}
              onChange={(e) => handleSliderChange("b", Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-lg"
              style={{
                background: `linear-gradient(to right, rgb(${r}, ${g}, 0), rgb(${r}, ${g}, 255))`,
              }}
            />
          </div>
        </div>

        {/* Hex Input */}
        <div className="mt-5">
          <label htmlFor="hex-input" className="mb-1 block text-sm font-medium text-foreground">
            Codigo HEX
          </label>
          <input
            id="hex-input"
            type="text"
            value={hexInput}
            onChange={(e) => handleHexChange(e.target.value)}
            placeholder="#7F3FD3"
            maxLength={7}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>

        {/* Native Color Picker */}
        <div className="mt-5">
          <label htmlFor="native-picker" className="mb-1 block text-sm font-medium text-foreground">
            Seletor de cor
          </label>
          <input
            id="native-picker"
            type="color"
            value={rgbToHex(r, g, b)}
            onChange={(e) => {
              const rgb = hexToRgb(e.target.value)
              applyColor(rgb.r, rgb.g, rgb.b)
            }}
            className="h-10 w-full cursor-pointer rounded-lg border border-input bg-background"
          />
        </div>
      </div>

      {/* Preset Colors */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 font-heading text-lg font-bold text-foreground">Cores Predefinidas</h3>
        <div className="grid grid-cols-4 gap-3 sm:grid-cols-8">
          {presetColors.map((color) => (
            <button
              key={color.name}
              type="button"
              onClick={() => applyColor(color.r, color.g, color.b)}
              className="group flex flex-col items-center gap-1.5"
              title={color.name}
            >
              <div
                className={`h-10 w-10 rounded-full border-2 shadow-sm transition-transform group-hover:scale-110 ${
                  r === color.r && g === color.g && b === color.b
                    ? "border-foreground ring-2 ring-foreground ring-offset-2 ring-offset-background"
                    : "border-border"
                }`}
                style={{ backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})` }}
              />
              <span className="text-[10px] text-muted-foreground">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Reset */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleReset}
          className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
        >
          <RotateCcw className="h-4 w-4" />
          Restaurar Cores Padrao
        </button>
      </div>
    </div>
  )
}
