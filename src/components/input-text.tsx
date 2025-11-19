import React from "react"
import { cva, type VariantProps, cx } from "class-variance-authority"
import { textVariants } from "./text"
import Icon from "./icon"

export const inputTextVariants = cva(`
    border-2 border-solid rounded-lg focus:border-yellow-dark outline-none
    `, {
    variants: {
        variant: {
            empty: "border-gray-500",
            filled: "border-yellow-dark",
        },
        size: {
            md: "py-3 px-3"
        },
        disabled: {
            true: "pointer-events-none"
        }
    },
    defaultVariants: {
        variant: "empty",
        size: "md",
        disabled: false
    }
})

export const inputTextIconVariants = cva(`
    fill-yellow size-5
    `)

interface TextInputProps
    extends Omit<React.ComponentProps<"input">,"size" | "disabled">,
    VariantProps<typeof inputTextVariants>{
        icon: React.ComponentProps<typeof Icon>["svg"]
}

export default function TextInput({
    variant,
    size,
    disabled,
    className,
    icon,
    ...props
}: TextInputProps) {
    return (
        <label className="relative w-full">
            { icon && (
            <Icon svg={icon} className={`
                absolute left-3 top-1/2 -translate-y-1/2 size-5 fill-yellow
                `}
            /> 
            )}
            <input className={cx(
                "pl-10",
                inputTextVariants({variant, size, disabled}),
                textVariants(),
                className
                )}
                {...props}
            />
        </label>
    )
}