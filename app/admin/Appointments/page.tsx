"use client";
import React, { useCallback, useState, useEffect } from "react";
import DataTable from "@/app/admin/Appointments/_components/DataTable";
import { getAppointments } from "@/app/actions/appointmentActions";
import { Appointment } from "@prisma/client";
import io from "socket.io-client";


export default function Admin() {
  const [Data, setData] = useState<Array<Appointment> | null>(null);

  const fetchData = useCallback(async () => {
    const appointments = await getAppointments(); // Assuming getAppointments is a function that fetches data
    return appointments || [];
  }, []);
  
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_BACKEND_URL, {
      withCredentials: true,
    });

    socket.on("connection", function (socket) {
      console.log(socket + "connected");
    });
    socket.on("new-appointment", function (data) {
      setData((previousData) => [...(previousData as Appointment[]), data]);
    });

    socket.on("appointment-status", function (data) {
      setData((prevAppointments) => {
        // Ensure prevAppointments is not null or undefined
        if (!prevAppointments) return [];

        // Update the status of the matching appointment
        return prevAppointments.map((appointment) => {
          if (appointment.id === data.appointmentId) {
            return { ...appointment, status: data.status }; // Update the status
          }
          return appointment; // Return unchanged appointment
        });
      });
    });
    const loadData = async () => {
      setData(await fetchData());
    };
    loadData();

    return () => {
      socket.off("new-appointment");
      socket.off("appointment-approved");
    };
  }, [fetchData]);
  return (
    <main className="min-h-dvh p-10">
      <div>
        <h1 className="text-3xl font-semibold">Appointments</h1>
      </div>
      <DataTable data={Data} />
    </main>
  );
}
