import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY } from "../models/appointment";
import type { Appointment } from "../models/appointment";

export default function useAppointments() {
    const [appointments, setAppointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, [])

    function AddAppointment(newAppointment: Appointment) {
        setAppointments((prev) => [...(prev ?? []), newAppointment]);
    }

    function RemoveAppointment(id: string) {
        setAppointments((prev) => [...(prev ?? []).filter((appointment) => appointment.id !== id)]);
    }

    return {
        appointments,
        AddAppointment,
        RemoveAppointment
    }
}