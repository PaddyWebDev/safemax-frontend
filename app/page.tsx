"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, AlertTriangle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-6 w-6" />
          <span className="sr-only">Cyber Shield Security</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/admin/Appointments"
          >
            Admin
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Secure Your Digital Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Book an appointment with our expert cybersecurity team to
                  protect your business from evolving threats.
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={()=>{
                  redirect("/Appointments/Book")
                }}>Book Appointment</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Lock className="w-8 h-8 mb-2" />
                  <CardTitle>Network Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Protect your network infrastructure from unauthorized access
                    and cyber threats.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Eye className="w-8 h-8 mb-2" />
                  <CardTitle>Threat Detection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Advanced monitoring and detection of potential security
                    breaches and anomalies.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <AlertTriangle className="w-8 h-8 mb-2" />
                  <CardTitle>Incident Response</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Rapid response and mitigation strategies for security
                    incidents and data breaches.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="w-8 h-8 mb-2" />
                  <CardTitle>Security Audits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Comprehensive assessment of your security posture and
                    compliance requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  About Cyber Shield Security
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  With over a decade of experience in cybersecurity, our team of
                  experts is dedicated to protecting businesses from the
                  ever-evolving landscape of digital threats. We combine
                  cutting-edge technology with industry best practices to
                  deliver unparalleled security solutions.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  alt="Cybersecurity team"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="300"
                  src="/download.jpg"
                  width="400"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Cyber Shield Security. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
