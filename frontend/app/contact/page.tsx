"use client";

import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Upload } from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.message
    ) {
      setError("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    // ... (rest of the handleSubmit function remains the same)
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative mt-24">
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
        <BackgroundBeams className="absolute inset-0" />

        <div className="container mx-auto px-4 py-12 relative z-10 pt-14">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400 mb-4">
              Get in <span className="text-red-600">Touch</span>
            </h1>
            <p className="text-neutral-400">We&apos;re here to help.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-black/40 border-neutral-800 backdrop-blur-sm">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                          disabled={isLoading}
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
                          disabled={isLoading}
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
                        disabled={isLoading}
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
                        placeholder="+91 91234-XXXXX"
                        className="bg-neutral-950 border-neutral-800 text-neutral-200 placeholder:text-neutral-500"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-neutral-200">
                        Message
                      </Label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your message"
                        rows={5}
                        className="w-full px-3 py-2 bg-neutral-950 border border-neutral-800 rounded-md text-neutral-200 placeholder:text-neutral-500 resize-none"
                        disabled={isLoading}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="attachment" className="text-neutral-200">
                        Attachment (optional)
                      </Label>
                      <div className="relative group cursor-pointer">
                        <input
                          id="attachment"
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          disabled={isLoading}
                        />
                        <div className="flex items-center justify-center w-full h-32 px-4 transition bg-neutral-950 border-2 border-neutral-800 border-dashed rounded-lg appearance-none hover:border-neutral-600 focus:outline-none">
                          <div className="flex flex-col items-center space-y-2">
                            <Upload className="w-8 h-8 text-neutral-400" />
                            <span className="font-medium text-neutral-400">
                              {file ? file.name : "Drop your Documents here"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isLoading}
                    >
                      {isLoading ? "Sending..." : "Send message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information and Map Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-black/40 border-neutral-800 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className="text-neutral-200">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-neutral-400" />
                    <p className="text-neutral-400">
                      Call or WhatsApp: +91-99710 23294
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-neutral-400" />
                    <p className="text-neutral-400">
                      Email Us: info@paddlelift.com
                    </p>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-neutral-400" />
                    <p className="text-neutral-400">
                      Visit Us: B-4, First Floor, Workspaces By Innova, B Block,
                      Sector 63, Noida, Uttar Pradesh 201301
                    </p>
                  </div>
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-neutral-200">
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-[460px]">
                  {" "}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.4725137946443!2d77.36948895194043!3d28.61559722233175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59d969ba857%3A0x9a234478868502b9!2sPaddleLift%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1734004896279!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      borderRadius: "0.5rem",
                      filter: "invert(90%) hue-rotate(180deg)",
                    }}
                    allowFullScreen
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </>
  );
}
