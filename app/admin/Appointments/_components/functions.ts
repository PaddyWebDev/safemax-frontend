import axios from "axios";

export async function handleStatus(id: number, Status: string): Promise<string> {
  try {
    console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
    const response = await axios.patch(`${process.env.NEXT_PUBLIC_BACKEND_URL}appointments/update-status/${id}`, {status: Status});
    console.log(response)
    return "Appointment status updated";
  } catch (error: unknown) {
    console.log(error)
    return "Failed to change the status of appointment";
  }
}
