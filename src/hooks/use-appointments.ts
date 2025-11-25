import useLocalStorage from "use-local-storage";
import { APPOINTMENTS_KEY } from "../models/appointment";
import type { Appointment } from "../models/appointment";

export default function useAppointments() {
    const [appointments, setAppointments] = useLocalStorage<Appointment[]>(APPOINTMENTS_KEY, [])

    function AddAppointment(newAppointment: Appointment) {
        setAppointments([...appointments, newAppointment]);
    }

    return {
        appointments,
        AddAppointment
    }
}