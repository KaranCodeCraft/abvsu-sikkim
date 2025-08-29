import * as React from "react"
import { cn } from "@/lib/utils"

const RadioGroupContext = React.createContext()

function RadioGroup({ value, onValueChange, className, children, ...props }) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange }}>
      <div
        data-slot="radio-group"
        className={cn("flex flex-col gap-2", className)}
        role="radiogroup"
        {...props}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

function RadioGroupItem({ className, value, id, ...props }) {
  const context = React.useContext(RadioGroupContext)

  return (
    <input
      type="radio"
      id={id}
      value={value}
      checked={context?.value === value}
      onChange={() => context?.onValueChange?.(value)}
      className={cn(
        "h-4 w-4 rounded-full border border-input text-primary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { RadioGroup, RadioGroupItem }
