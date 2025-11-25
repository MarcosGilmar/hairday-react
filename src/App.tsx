import ScheduleList from "./core-components/schedule-list"
import SideBar from "./core-components/side-bar"
//import { useState } from "react";
//import type { Appointment } from "./models/appointment";

export default function App() {

  //const [appointment, setAppointment] = useState<Appointment[]>([])

  return (
    <main className={`
    flex flex-col sm:flex-row
    items-center sm:items-stretch
    `}>
      <SideBar />
      <ScheduleList />
    </main> 
  )
}