"use server"
import { Appointment } from "@prisma/client";
import prisma from "@/lib/prismadb";

export async function getAppointments(): Promise<Appointment[]> {
  return await prisma.appointment.findMany();
}
