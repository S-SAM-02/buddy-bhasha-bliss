import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "gradient-primary text-primary-foreground hover:scale-105 shadow-primary rounded-2xl font-comic font-bold",
        secondary: "gradient-secondary text-secondary-foreground hover:scale-105 shadow-secondary rounded-2xl font-comic font-bold",
        success: "gradient-success text-success-foreground hover:scale-105 shadow-success rounded-2xl font-comic font-bold",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-2xl font-comic",
        outline: "border-2 border-primary bg-card/80 backdrop-blur-sm text-primary hover:gradient-primary hover:text-primary-foreground hover:scale-105 rounded-2xl font-comic font-bold",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground rounded-2xl font-comic",
        link: "text-primary underline-offset-4 hover:underline font-comic",
        quiz: "bg-card/90 backdrop-blur-sm border-2 border-muted hover:border-primary hover:scale-105 shadow-soft rounded-2xl font-comic font-bold text-foreground",
        mascot: "gradient-rainbow text-white hover:scale-110 shadow-primary rounded-full font-playful text-lg",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2",
        lg: "h-14 px-8 py-4 text-lg",
        icon: "h-12 w-12",
        mascot: "h-16 w-16",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
