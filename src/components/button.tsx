import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import Text from "./text"

export const buttonVariants = cva(`
    flex items-center justify-center cursor-pointer
    rounded-lg transition group
    `, {
    variants: {
        variant: {
            primary: " bg-yellow hover:bg-yellow-light",
        },
        size: {
            md: "h-14 px-4"

        },
        disabled: {
            true: "opacity-50 pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false
    }
})

export const buttonTextVariants = cva("", {
    variants: {
        variant: {
            primary: "text-gray-900",
        }
    },
    defaultVariants: {
        variant: "primary",
    }
})

interface ButtonProps 
    extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants>{
}

export default function Button({
    variant,
    size,
    disabled,
    className,
    children,
    ...props
}: ButtonProps) {
    return (
        <button className={buttonVariants({
            variant,
            size,
            disabled,
            className,
        })}
        {...props}
        >
            <Text variant="title-sm" className={buttonTextVariants({variant})}>
                {children}
            </Text>
        </button>
    )
}