import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva('button', {
  variants: {
    variant: {
      gold: 'button-gold',
      outline: 'button-outline',
      ghost: 'button-ghost',
    },
    size: {
      default: 'button-default',
      icon: 'button-icon',
    },
  },
  defaultVariants: {
    variant: 'gold',
    size: 'default',
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  const classes = [buttonVariants({ variant, size }), className].filter(Boolean).join(' ')
  return <Component className={classes} {...props} />
}
