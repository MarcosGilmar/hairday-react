import Container from "../components/container"
import Text from "../components/text"
import DatePicker from "../components/date-picker"
import ScheduleItem from "../components/schedule-item"
import ScheduleLog from "../components/schedule-log"
import type React from "react"
import { cx } from "class-variance-authority"
import CalendarBlank from "../assets/icons/CalendarBlank.svg?react"
import CloudSun from "../assets/icons/CloudSun.svg?react"
import SunHorizon from "../assets/icons/SunHorizon.svg?react"
import MoonStars from "../assets/icons/MoonStars.svg?react"
import Trash from "../assets/icons/Trash.svg?react"
import { useState } from "react"

type ScheduleListProps = React.ComponentProps<"div"> 

export default function ScheduleList({
    className,
    ...props
}: ScheduleListProps) {
    
    const [selectedDate, setSelectedDate] = useState<string>("");
    //const [selectedHour, setSelectedHour] = useState<string>("");
    //const [clientName, setClientName] = useState<string>("");

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
                <DatePicker 
                    icon={CalendarBlank}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                >
                </DatePicker>
            </div>
            <div className="py-8">
                <div className="my-3">
                    <ScheduleItem 
                        icon={SunHorizon} 
                        period="morning"
                    >
                    </ScheduleItem>

                    <ScheduleLog 
                        icon={Trash} 
                        time="13:00" 
                        client="Helena Souza" 
                        className="-mt-px"
                    >
                    </ScheduleLog>
                </div>

                <div className="my-3">
                    <ScheduleItem 
                        icon={CloudSun} 
                        period="afternoon"
                    >
                    </ScheduleItem>

                    <ScheduleLog 
                        icon={Trash} 
                        time="13:00" 
                        client="Helena Souza" 
                        className="-mt-px"
                    >
                    </ScheduleLog>
                </div>

                <div className="my-3">
                    <ScheduleItem 
                        icon={MoonStars} 
                        period="night" 
                    >
                    </ScheduleItem>

                    <ScheduleLog 
                        icon={Trash} 
                        time="13:00" 
                        client="Helena Souza" 
                        className="-mt-px"
                    >
                    </ScheduleLog>
                </div>
            </div>
        </Container> 
    )
}

