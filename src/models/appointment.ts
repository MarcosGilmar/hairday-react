export const APPOINTMENTS_KEY = 'appointments'

export enum AppointmentState {
    Creating= 'creating',
    Created= 'created'
}

export interface Appointment {
    id: string,
    date: string,
    hour: string,
    name: string
}