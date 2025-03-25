"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

interface FlowStep {
  id: string
  type: "client" | "server" | "database" | "middleware" | "encryption"
  label: string
  description?: string
  x: number
  y: number
  width: number
  height: number
}

interface FlowConnection {
  from: string
  to: string
  label?: string
  type?: "success" | "error" | "normal"
}

interface FlowDiagramProps {
  data: {
    steps: FlowStep[]
    connections: FlowConnection[]
  }
}

export default function FlowDiagram({ data }: FlowDiagramProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 1000
    canvas.height = 500

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw steps
    data.steps.forEach((step) => {
      // Set colors based on step type
      let fillColor = "#f9fafb" // Default light gray
      let strokeColor = "#9ca3af" // Default gray

      switch (step.type) {
        case "client":
          fillColor = "#eff6ff" // Light blue
          strokeColor = "#3b82f6" // Blue
          break
        case "server":
          fillColor = "#ecfdf5" // Light green
          strokeColor = "#10b981" // Green
          break
        case "database":
          fillColor = "#fef3c7" // Light yellow
          strokeColor = "#f59e0b" // Yellow
          break
        case "middleware":
          fillColor = "#e0f2fe" // Light cyan
          strokeColor = "#0ea5e9" // Cyan
          break
        case "encryption":
          fillColor = "#fce7f3" // Light pink
          strokeColor = "#ec4899" // Pink
          break
      }

      // Draw rectangle
      ctx.fillStyle = fillColor
      ctx.strokeStyle = strokeColor
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.roundRect(step.x, step.y, step.width, step.height, 8)
      ctx.fill()
      ctx.stroke()

      // Draw label
      ctx.fillStyle = "#1f2937" // Dark gray
      ctx.font = "bold 14px sans-serif"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(step.label, step.x + step.width / 2, step.y + step.height / 2)

      // Draw description if provided
      if (step.description) {
        ctx.font = "12px sans-serif"
        ctx.fillText(step.description, step.x + step.width / 2, step.y + step.height / 2 + 20)
      }
    })

    // Draw connections
    data.connections.forEach((connection) => {
      const fromStep = data.steps.find((step) => step.id === connection.from)
      const toStep = data.steps.find((step) => step.id === connection.to)

      if (!fromStep || !toStep) return

      // Set line style based on connection type
      ctx.strokeStyle = "#9ca3af" // Default gray

      if (connection.type === "success") {
        ctx.strokeStyle = "#10b981" // Green
      } else if (connection.type === "error") {
        ctx.strokeStyle = "#ef4444" // Red
      }

      ctx.lineWidth = 2

      // Calculate start and end points
      const startX = fromStep.x + fromStep.width
      const startY = fromStep.y + fromStep.height / 2
      const endX = toStep.x
      const endY = toStep.y + toStep.height / 2

      // Draw arrow
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(endX, endY)
      ctx.stroke()

      // Draw arrowhead
      const angle = Math.atan2(endY - startY, endX - startX)
      const arrowSize = 10

      ctx.beginPath()
      ctx.moveTo(endX, endY)
      ctx.lineTo(endX - arrowSize * Math.cos(angle - Math.PI / 6), endY - arrowSize * Math.sin(angle - Math.PI / 6))
      ctx.lineTo(endX - arrowSize * Math.cos(angle + Math.PI / 6), endY - arrowSize * Math.sin(angle + Math.PI / 6))
      ctx.closePath()
      ctx.fill()

      // Draw label if provided
      if (connection.label) {
        ctx.fillStyle = connection.type === "error" ? "#ef4444" : connection.type === "success" ? "#10b981" : "#6b7280"
        ctx.font = "12px sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "bottom"
        const midX = (startX + endX) / 2
        const midY = (startY + endY) / 2 - 10
        ctx.fillText(connection.label, midX, midY)
      }
    })
  }, [data])

  return (
    <Card className="overflow-auto p-4">
      <canvas ref={canvasRef} className="w-full" style={{ height: "500px", maxWidth: "100%" }} />
    </Card>
  )
}

