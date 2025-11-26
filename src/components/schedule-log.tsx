import React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import Icon from "./icon"
import Text from "./text"

export const scheduleLogVariants = cva(`
    flex items-center justify-center 
    border-gray-500 py-5 px-5
    border
    `, {
    variants: {
        size: {
            md: "w-171 h-15"
        }
    },
    defaultVariants: {
        size: "md"
    }
})

interface ScheduleLogProps
    extends React.ComponentProps<"div">,
    VariantProps<typeof scheduleLogVariants> {
        time: string,
        client: string,
        icon: React.ComponentProps<typeof Icon>["svg"],
        onRemove?: () => void;
    }

export default function ScheduleLog({
    size,
    className,
    icon,
    time,
    client,
    onRemove,
    ...props
}: ScheduleLogProps) {  

    return (
        <div className={scheduleLogVariants({
            size,
            className
        })}
        {...props}
        >
            <div className="flex w-full justify-between">
                <div className="flex gap-2">
                    <Text variant="title-md" className="text-gray-200">
                        {time} 
                    </Text>
                    <Text variant="text-md" className="text-gray-200">
                        {client}
                    </Text>
                </div>
                    <Icon 
                        type="button" 
                        svg={icon} 
                        className="size-5 fill-yellow cursor-pointer"
                        onClick={onRemove}
                    />
                </div>
            </div>
            
        
    )
}