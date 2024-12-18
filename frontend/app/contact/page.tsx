"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageSquare, Mail, Twitter } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    services: {
      webDesign: false,
      uxDesign: false,
      userResearch: false,
      contentCreation: false,
      strategyConsulting: false,
      other: false,
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleServiceChange = (
    serviceId: keyof (typeof formData)["services"],
  ) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceId]: !prev.services[serviceId],
      },
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form data
    const selectedServices = Object.entries(formData.services)
      .filter((entry) => entry[1]) // Use the second element of the entry directly
      .map(([service]) => service);

    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill in required fields");
      return;
    }

    // Here you would typically send the data to a backend
    console.log("Form submitted:", {
      ...formData,
      selectedServices,
    });
  };

  return (
    <div className="flex min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative mt-24">
      {/* Left Section */}
      <div className="flex-1 relative overflow-hidden">
        {/* Particle effects */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Background beams effect */}
        <BackgroundBeams className="absolute inset-0" />

        <div className="max-w-2xl mx-auto px-4 py-12 relative z-10">
          {/* Hero Section */}
          <div className="mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in touch
            </motion.h1>
            <motion.p
              className="text-neutral-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We &apos;re here to help. Chat to our friendly team 24/7 and get
              set up and ready to go in just 5 minutes.
            </motion.p>
          </div>

          {/* Quick contact options */}
          <div className="grid gap-4 mb-12">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4 p-4 bg-black/40 border border-neutral-800 rounded-lg backdrop-blur-sm hover:bg-black/60 transition-colors"
            >
              <MessageSquare className="h-6 w-6 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold text-neutral-200">
                  Start a live chat
                </h3>
                <p className="text-sm text-neutral-400">Available 24/7</p>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-black/40 border border-neutral-800 rounded-lg backdrop-blur-sm hover:bg-black/60 transition-colors"
            >
              <Mail className="h-6 w-6 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold text-neutral-200">
                  Shoot us an email
                </h3>
                <p className="text-sm text-neutral-400">
                  Get response within 24h
                </p>
              </div>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-4 p-4 bg-black/40 border border-neutral-800 rounded-lg backdrop-blur-sm hover:bg-black/60 transition-colors"
            >
              <Twitter className="h-6 w-6 text-primary" />
              <div className="text-left">
                <h3 className="font-semibold text-neutral-200">
                  Message us on Twitter
                </h3>
                <p className="text-sm text-neutral-400">Quick responses</p>
              </div>
            </motion.button>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-black/40 border border-neutral-800 rounded-lg backdrop-blur-sm p-6"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-neutral-200">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="bg-neutral-950 border-neutral-800 text-neutral-200 placeholder:text-neutral-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-neutral-200">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="bg-neutral-950 border-neutral-800 text-neutral-200 placeholder:text-neutral-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-200">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@company.com"
                  className="bg-neutral-950 border-neutral-800 text-neutral-200 placeholder:text-neutral-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-neutral-200">
                  Phone number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 (555) 000-0000"
                  className="bg-neutral-950 border-neutral-800 text-neutral-200 placeholder:text-neutral-500"
                />
              </div>

              <div className="space-y-4">
                <Label className="text-neutral-200">Services</Label>
                <div className="grid grid-cols-2 gap-4">
                  {(
                    [
                      { id: "webDesign", label: "Website design" },
                      { id: "uxDesign", label: "UX design" },
                      { id: "userResearch", label: "User research" },
                      { id: "contentCreation", label: "Content creation" },
                      {
                        id: "strategyConsulting",
                        label: "Strategy & consulting",
                      },
                      { id: "other", label: "Other" },
                    ] as const
                  ).map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={service.id}
                        checked={formData.services[service.id]}
                        onCheckedChange={() => handleServiceChange(service.id)}
                        className="border-neutral-700 data-[state=checked]:bg-primary"
                      />
                      <label
                        htmlFor={service.id}
                        className="text-sm font-medium leading-none text-neutral-300 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {service.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Send message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
      {/* Right Section - Full Map */}
      <div className="w-1/2 hidden lg:block">
        <div className="h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4725137946443!2d77.36948895194043!3d28.61559722233175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59d969ba857%3A0x9a234478868502b9!2sPaddleLift%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1734004896279!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
