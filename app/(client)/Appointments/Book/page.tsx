"use client";

import axios, { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { formSchema } from "@/lib/types";

type formData = z.infer<typeof formSchema>;

export default function BookAppointments() {
  const { toast } = useToast();
  const form = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      time: "",
      date: "",
      comments: "",
    },
  });

  async function HandleData(data: formData) {
    try {
      data.time = new Date(`${data.date}T${data.time}:00`).toISOString();
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}appointments/book`,
        data
      );
      toast({
        title: "Appointment Submitted",
      });
      form.reset();
    } catch (error: unknown) {
      // Narrowing the error to AxiosError explicitly
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.message || "Something went wrong.";
        toast({
          title: errorMessage,
          variant: "destructive",
        });
      } else if (error instanceof Error) {
        // For generic errors
        const errorMessage = error.message || "Something went wrong.";
        toast({
          title: errorMessage,
          variant: "destructive",
        });
      } else {
        // For unknown error types
        toast({
          title: "An unknown error occurred.",
          variant: "destructive",
        });
      }
    }
  }

  return (
    <section className=" min-h-dvh p-10">
      <div className=" md:w-8/12 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Book an Appointment</h1>
        </div>

        {/* Form Section  */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(HandleData)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe@example.email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Comments</FormLabel>
                  <FormControl>
                    <Textarea
                      className="resize-none"
                      spellCheck="true"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
