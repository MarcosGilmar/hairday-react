import Text from "../components/text"
import Button from "../components/button"
import TextInput from "../components/text-input"
import TimeSelect from "../components/time-select"
import Container from "../components/container"
import DatePicker from "../components/date-picker"
import UserSquare from "../assets/icons/UserSquare.svg?react"
import CalendarBlank from "../assets/icons/CalendarBlank.svg?react"
import type React from "react"
import { cx } from "class-variance-authority"
import { useState } from "react"
//import useAppointments from "../hooks/use-appointments"

const morning = ["9:00", "10:00", "11:00", "12:00"];
const afternoon = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const night = ["19:00 ", "20:00", "21:00"];

type SideBarProps = React.ComponentProps<"div"> 

export default function SideBar({
    className,
    ...props
}: SideBarProps) {
    //const { AddAppointment } = useAppointments()

    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedHour, setSelectedHour] = useState<string>("");
    const [clientName, setClientName] = useState<string>("");

    return (
        <Container className={cx("flex flex-col gap-2 py-20", className)}
        {...props}
        >
            <Text variant="title-lg" className="text-gray-100">
            Agende um atendimento
            </Text>

            <Text variant="text-sm" className="text-gray-300">
            Selecione data, horário e informe o nome do cliente para criar o agendamento
            </Text>

            <Text variant="title-md" className="text-gray-200 mt-4">
            Data
            </Text>

            <DatePicker 
                className="w-full" 
                icon={CalendarBlank}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            />

            <div className="flex flex-col my-6">
                <Text variant="title-md" className="text-gray-200 ">
                Horários
                </Text>

                <Text variant="text-sm" className="text-gray-300 my-3">
                    Manhã
                </Text>

                <div className="flex gap-2">
                    {morning.map((hour) =>
                    <TimeSelect
                        key={hour}
                        variant={selectedHour === hour ? "selected" : "primary"}
                        onClick={() => setSelectedHour(hour)}
                    >
                        {hour}
                    </TimeSelect>
                    )}
                </div>

                <Text variant="text-sm" className="text-gray-300 my-3">
                    Tarde
                </Text>

                <div className="flex flex-wrap gap-2">
                    {afternoon.map((hour) =>
                    <TimeSelect
                        key={hour}
                        variant={selectedHour === hour ? "selected" : "primary"}
                        onClick={() => setSelectedHour(hour)}
                    >
                        {hour}
                    </TimeSelect>
                    )}
                </div>

                <Text variant="text-sm" className="text-gray-300 my-3">
                    Noite
                </Text>

                <div className="flex flex-wrap gap-2">
                    {night.map((hour) =>
                    <TimeSelect
                        key={hour}
                        variant={selectedHour === hour ? "selected" : "primary"}
                        onClick={() => setSelectedHour(hour)}
                    >
                        {hour}
                    </TimeSelect>
                    )}
                </div>
            </div>

            <Text variant="title-md" className="text-gray-200 mb-2">
            Cliente
            </Text>

            <TextInput 
                placeholder="Helena Souza" 
                icon={UserSquare}
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
            >
            </TextInput>

            <Button className="mt-6">
            AGENDAR
            </Button>
        </Container>
    )
}