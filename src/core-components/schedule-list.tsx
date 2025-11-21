import Container from "../components/container"
import Text from "../components/text"
import DatePicker from "../components/date-picker"
import CalendarBlank from "../assets/icons/CalendarBlank.svg?react"
import type React from "react"
import { cx } from "class-variance-authority"
import ScheduleItem from "../components/schedule-item"

type ScheduleListProps = React.ComponentProps<"div"> 

export default function ScheduleList({
    className,
    ...props
}: ScheduleListProps) {
    return (
        <Container 
            variant="secondary" 
            size="lg" 
            className={cx("flex flex-col", className)}
            {...props}
        >
            <div className="flex w-full items-end justify-between ">
                <div className="flex flex-col gap-2">
                <Text variant="title-lg" className="text-gray-100">
                    Sua agenda
                </Text>

                <Text variant="text-sm" className="text-gray-300">
                    Consulte os seus cortes de cabelo agendados por dia
                </Text>
                </div>
                <DatePicker icon={CalendarBlank}>
                </DatePicker>
            </div>
            <div className="py-8">
                <ScheduleItem className="my-3">

                </ScheduleItem>
                <ScheduleItem className="my-3">

                </ScheduleItem>
                <ScheduleItem className="my-3">

                </ScheduleItem>
            </div>
            
        </Container> 
    )
}

