import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import Icon from "./icon";

export const buttonIconVariants = cva(`
    inline-flex items-center justify-center 
    cursor-pointer transition
    `, {
    variants: {
        variant: {
            primary: "fill-yellow hover:fill-yellow-dark"
        },
        size: {
            md: "size-8"
        },
        disabled: {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md",
        disabled: false
    }
})

interface ButtonIconProps 
    extends Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonIconVariants>{
        icon: React.ComponentProps<typeof Icon>["svg"];
}

export default function ButtonIcon({
    variant,
    size,
    disabled,
    className,
    icon,
    ...props
}: ButtonIconProps) {
    return (
        <button className={buttonIconVariants({
            variant, 
            size, 
            disabled, 
            className})}
            {...props}
        >
            <Icon svg={icon} />
        </button>
    )
}