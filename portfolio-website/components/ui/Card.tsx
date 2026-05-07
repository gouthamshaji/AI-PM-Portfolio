import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-zinc-800 bg-[#111111] text-zinc-100 shadow p-6",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

export { Card }
