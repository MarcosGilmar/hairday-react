import React from "react"
import { cva, type VariantProps} from "class-variance-authority"

export const scheduleItemVariants = cva(`
    flex items-center justify-center 
    border-b rounded-xl border
    border-gray-500
    `, {
    variants: {
        size: {
            md: "w-171 h-29 py-5 px-5"
        }
    },
    defaultVariants: {
        size: "md"
    }
})

interface ScheduleItemProps 
    extends VariantProps<typeof scheduleItemVariants>,
    React.ComponentProps<"div"> {
        as?: keyof React.JSX.IntrinsicElements
    }

export default function ScheduleItem({
    as = "div",
    size,
    className,
    children,
    ...props
}: ScheduleItemProps) {
    return React.createElement(
        as,
        {
            className: scheduleItemVariants({size, className}),
            ...props
        },
        children
    )
}