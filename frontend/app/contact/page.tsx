"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validate form data
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

    const emailData = {
      id: process.env.NEXT_PUBLIC_EMAIL_ID,
      subject: `New Message from ${formData.email}`,
      body: `
<div style="max-width: 600px; margin: 0 auto; font-family: 'Arial', sans-serif; background-color: #ffffff; color: #333333; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); overflow: hidden;">
  <!-- Header with Name Initial Circle -->
  <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 40px 20px; text-align: center; border-radius: 12px 12px 0 0;">
    <div style="width: 100px; height: 100px; background-color: white; border-radius: 50%; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 48px; color: #6366f1; font-weight: bold; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
      ${formData.firstName.charAt(0).toUpperCase()}
    </div>
    <h1 style="color: #ffffff; margin: 0; font-size: 48px; font-weight: 700; letter-spacing: 1px;">${formData.firstName} ${formData.lastName}</h1>
    <p style="color: #e2e8f0; margin-top: 12px; font-size: 16px;">${new Date().toLocaleDateString()}</p>
  </div>

  <!-- Main Content -->
  <div style="background-color: #f9fafb; padding: 40px; border-radius: 0 0 12px 12px;">
    <!-- Contact Details -->
    <div style="margin-bottom: 32px;">
      <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 16px 0; font-weight: 700;">Contact Details</h2>
      <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border-left: 6px solid #6366f1; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
        <p style="color: #4b5563; margin: 8px 0; font-size: 16px;">
          <strong style="color: #6366f1;">Email:</strong> ${formData.email}
        </p>
        <p style="color: #4b5563; margin: 8px 0; font-size: 16px;">
          <strong style="color: #6366f1;">Phone:</strong> ${formData.phone}
        </p>
      </div>
    </div>

    <!-- Message -->
    <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; margin-top: 24px; border-left: 6px solid #6366f1; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
      <h2 style="color: #1f2937; font-size: 24px; margin: 0 0 16px 0; font-weight: 700;">Message</h2>
      <p style="color: #4b5563; line-height: 1.7; white-space: pre-wrap; font-size: 16px;">${formData.message}</p>
    </div>

    <!-- Footer -->
    <div style="margin-top: 32px; padding-top: 24px; border-top: 2px solid #e5e7eb; text-align: center;">
      <p style="color: #9ca3af; font-size: 14px;">
        Sent via <span style="color: #6366f1; font-weight: 700;">GetSetDeployed</span> Contact Form
      </p>
    </div>
  </div>
</div>
      `,
      recipient_list: JSON.parse(
        process.env.NEXT_PUBLIC_RECIPIENT_LIST || "[]",
      ),
      smtp_host: "smtp.gmail.com",
      smtp_port: 465,
      use_tls: false,
      use_ssl: true,
      email_host_user: process.env.NEXT_PUBLIC_EMAIL_HOST_USER,
      email_host_password: process.env.NEXT_PUBLIC_EMAIL_HOST_PASSWORD,
    };

    try {
      const response = await axios.post(
        "https://email-client-paddlelift.onrender.com/send/",
        emailData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("Email sent successfully:", response.data);
      alert("Message sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Axios error:", error.response?.data || error.message);
        setError("Failed to send message. Please try again.");
      } else {
        console.error("Unexpected error:", error);
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
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
                We &apos;re here to help.
              </motion.p>
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

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send message"}
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
      <Footer />
    </>
  );
}
