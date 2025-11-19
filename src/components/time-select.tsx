import React from "react"
import { cva, type VariantProps} from "class-variance-authority"
import Text, { textVariants } from "./text"

export const timeSelectVariants = cva(`
    flex items-center justify-center rounded-lg 
    cursor-pointer border border-gray-400  

    `, {
    variants: {
        variant: {
            primary: "bg-gray-700 hover:bg-gray-500  text-gray-400",
            selected: "bg-gray-600 border-yellow text-yellow",
            disabled: "bg-transparent border-gray-500 text-gray-500 pointer-events-none" //provavelmente será retirado depois
        },
        size: {
            md: "h-10 w-20 py-2 px-5"
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

interface TimeSelectProps 
    extends VariantProps<typeof timeSelectVariants>,
    Omit<React.ComponentProps<"button">, "size" | "disabled"> {

}

export default function TimeSelect({
    variant,
    size,
    disabled,
    className,
    children,
    ...props
}: TimeSelectProps) {
    return (
        <button className={timeSelectVariants({
            variant,
            size,
            disabled,
            className
        })}
            {...props}
        >
            <Text className={(textVariants({
                variant: "text-md"   
            }))}
            >
                {children}
            </Text>
        </button>
    );
}