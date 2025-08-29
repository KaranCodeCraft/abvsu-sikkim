import React from "react"
import { cn } from "@/lib/utils" // optional: helper for merging classes

export function Badge({ className = "", variant = "default", ...props }) {
  const baseStyles = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"

  const variants = {
    default: "bg-gray-800 text-white",
    secondary: "bg-gray-100 text-gray-700",
    outline: "border border-gray-300 text-gray-700"
  }

  return (
    <div
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    />
  )
}
