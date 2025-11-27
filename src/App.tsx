import ScheduleList from "./core-components/schedule-list"
import SideBar from "./core-components/side-bar"
import useAppointments from "./hooks/use-appointments";

export default function App() {

  const { appointments, AddAppointment, RemoveAppointment} = useAppointments();

  return (
    <main className={`
      flex flex-row
      items-center justify-center sm:items-start
    `}>
      <SideBar 
      onAddAppointment={(appointment) => AddAppointment(appointment)}
      />
      <ScheduleList 
        appointments={appointments}
        onRemoveAppointment={RemoveAppointment}
      />
    </main> 
  )
}