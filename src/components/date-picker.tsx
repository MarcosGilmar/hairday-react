    import React from "react"
    import { cva, type VariantProps, cx } from "class-variance-authority"
    import { textVariants } from "./text"
    import Icon from "./icon"

    export const datePickerVariants = cva(`
        border border-solid rounded-xl focus:border-yellow-dark outline-none
        `, {
        variants: {
            variant: {
                empty: "border-gray-500",
                filled: "border-yellow-dark"
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

    export const datePickerIconVariants = cva(`
        fill-yellow size-5
        `)

    interface DatePickerProps
        extends Omit<React.ComponentProps<"input">, "size" | "disabled" | "value">,
        VariantProps<typeof datePickerVariants> {
            icon: React.ComponentProps<typeof Icon>["svg"],
            value: string,
    }

    export default function DatePicker({
        variant,
        size,
        disabled,
        icon,
        className,
        ...props
    }: DatePickerProps) {
        return (
            <label className="relative">
                { icon && (
                <Icon svg={icon} className={`
                    absolute left-3 top-1/2 -translate-y-1/2 size-5 fill-yellow
                `}
                /> 
                )}
                <input 
                    type="date" 
                    className={cx(
                        "pl-10 cursor-pointer",
                        datePickerVariants({variant, size, disabled}),
                        textVariants(),
                        className
                    )}
                    {...props}
                    
                />
            </label>
        )
    }