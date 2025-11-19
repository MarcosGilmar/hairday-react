import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

export const containerVariants = cva(`
    flex  rounded-xl
    my-3 ml-3
    `,{
        variants: {
            variant: {
                primary: "bg-gray-700",
                secondary: "bg-gray-800"
            },
            size: {
                md: "w-125 h-219 px-20 py-20",
                lg: "w-227 h-219 px-28 py-20"
            }
        },
        defaultVariants: {
            variant: "primary",
            size: "md"
        }
    })

interface ContainerProps 
    extends React.ComponentProps<"div">,
    VariantProps<typeof containerVariants> {
        as?: keyof React.JSX.IntrinsicElements
}

export default function Container({
    as = "div",
    variant,
    size,
    className,
    children,
    ...props

}: ContainerProps) {
    return React.createElement(
        as,
        {
            className: containerVariants({variant, size, className}),
            ...props
        },
        children
    )
}