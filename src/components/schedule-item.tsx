import React from "react"
import { cva, type VariantProps} from "class-variance-authority"
import Text from "./text"
import Icon from "./icon"

export const scheduleItemVariants = cva(`
    flex items-center justify-center 
    rounded-t-xl border
    border-gray-500 py-5 px-5
    `, {
    variants: {
        size: {
            md: "w-171 h-11 "
        }
    },
    defaultVariants: {
        size: "md"
    }
})

interface ScheduleItemProps 
    extends VariantProps<typeof scheduleItemVariants>,
    React.ComponentProps<"div"> {
        icon: React.ComponentProps<typeof Icon>["svg"],
        period: "morning" | "afternoon" | "night"
    }

export default function ScheduleItem({
    size,
    className,
    icon,
    period,
    ...props
}: ScheduleItemProps) {

    const periodLabels = {
        morning: "Manhã",
        afternoon: "Tarde",
        night: "Noite"
    }

    const periodRanges = {
        morning: "9h-12h",
        afternoon: "13h-18h",
        night: "19h-21h"
    }
    
    return (
        <div className={scheduleItemVariants({
            size, 
            className
        })}
        {...props}
        >
            <div className="flex w-full justify-between items-center">
                <div className="flex gap-2">
                    <Icon svg={icon} className="size-5 fill-yellow"/>
                    <Text variant="text-md" className="text-gray-300">
                        {periodLabels[period]}
                    </Text>
                </div>
                    <Text variant="text-md" className="text-gray-400">
                        {periodRanges[period]}
                    </Text>
            </div> 
        </div> 
    )
}