"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import type { JobListing } from "@/lib/types";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export function JobApplication({ job }: { job: JobListing }) {
  const [answers, setAnswers] = useState<string[]>([]);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB.");
        e.target.value = "";
        return;
      }
      setFile(selectedFile);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Validate form inputs
      if (!file) throw new Error("Please attach your CV");
      if (answers.length !== (job.Questions?.length || 0) + 2) {
        throw new Error("Please answer all screening questions");
      }
      if (answers.some((answer) => !answer.trim())) {
        throw new Error("All questions must be answered");
      }

      // Convert CV to base64
      const base64CV = await fileToBase64(file);

      // Extract the email from the answers array
      const userEmail = answers[1]; // Assuming the email is the second answer

      // Create email template
      const questions = [
        "What is your Name?",
        "What is Your Email?",
        ...(job.Questions || []),
      ];
      const emailTemplate = `
<div style="max-width: 100%; background: #0a0f1f; font-family: 'Inter', sans-serif; color: #ffffff;">
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #1a1f38 0%, #0d1225 100%); padding: 40px 20px; text-align: center; border-bottom: 2px solid #242942;">
    <h1 style="margin: 0; font-size: 2.5em; background: linear-gradient(45deg, #00d2ff 0%, #3a7bd5 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
      New Application: ${job.Title}
    </h1>
    <p style="color: #8c94b0; margin-top: 15px; font-size: 1.1em;">
      Received on ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
    </p>
  </div>

  <!-- Main Content -->
  <div style="padding: 30px 20px;">
    <!-- Candidate Responses -->
    <div style="margin-bottom: 40px; background: #13182b; border-radius: 12px; padding: 25px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
      <h2 style="font-size: 1.8em; margin: 0 0 25px 0; padding-bottom: 15px; border-bottom: 2px solid #242942; background: linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Candidate Responses
      </h2>
      
      ${questions
        .map(
          (question, index) => `
        <div style="margin-bottom: 30px; padding: 20px; background: #1a1f38; border-radius: 8px; border: 1px solid #242942; position: relative;">
          <div style="position: absolute; top: -10px; left: 20px; background: #3a7bd5; color: white; padding: 4px 12px; border-radius: 20px; font-size: 0.9em;">
            Question ${index + 1}
          </div>
          <h3 style="color: #ffffff; font-size: 1.2em; margin: 15px 0 10px 0;">
            ${question}
          </h3>
          <div style="background: #0d1225; padding: 15px; border-radius: 6px; border-left: 4px solid #3a7bd5;">
            <p style="margin: 0; color: #8c94b0; line-height: 1.6;">
              ${answers[index]?.replace(/\n/g, "<br>") || "No answer provided"}
            </p>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>

    <!-- Application Details -->
    <div style="background: #13182b; border-radius: 12px; padding: 25px; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">
      <h2 style="font-size: 1.8em; margin: 0 0 25px 0; padding-bottom: 15px; border-bottom: 2px solid #242942; background: linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Application Details
      </h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
        <!-- Detail Cards -->
        ${Object.entries({
          Position: job.Title,
          "Experience Level": job.Experience_level,
          "Employment Type": job.Employment_type,
          "Work Mode": job.Work_Mode,
          Location: job.Job_Location,
        })
          .map(
            ([label, value]) => `
          <div style="background: #1a1f38; padding: 20px; border-radius: 8px; border: 1px solid #242942;">
            <div style="color: #8c94b0; margin-bottom: 8px;">${label}</div>
            <div style="color: #ffffff; font-size: 1.1em;">${value}</div>
          </div>
        `,
          )
          .join("")}

        <!-- CV Attachment Card -->
        <div style="background: #1a1f38; padding: 20px; border-radius: 8px; border: 1px solid #242942;">
          <div style="color: #8c94b0; margin-bottom: 8px;">CV Attachment</div>
          <div style="color: #ffffff; font-size: 1.1em; word-break: break-all;">
            <span style="display: inline-block; padding: 6px 12px; background: linear-gradient(45deg, #3a7bd5 0%, #00d2ff 100%); border-radius: 4px;">
              ${file.name} (${(file.size / 1024).toFixed(2)} KB)
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div style="background: #0d1225; padding: 20px; text-align: center; border-top: 2px solid #242942;">
    <p style="margin: 0; color: #8c94b0; font-size: 0.9em;">
      Developed by <a href="https://www.getsetdeployed.com/" target="_blank" style="color: #3a7bd5; text-decoration: none; font-weight: 500;">GetSetDeployed</a>
    </p>
  </div>
</div>`;

      // Prepare email data
      const recipientList = JSON.parse(
        process.env.NEXT_PUBLIC_RECIPIENT_LIST || "[]",
      );
      recipientList.push(userEmail); // Add the user's email to the recipient list

      const emailData = {
        id: process.env.NEXT_PUBLIC_EMAIL_ID,
        subject: `New Application for ${job.Title} - ${job.Employment_type}`,
        body: emailTemplate,
        recipient_list: recipientList,
        smtp_host: "smtp.gmail.com",
        smtp_port: 465,
        use_tls: false,
        use_ssl: true,
        email_host_user: process.env.NEXT_PUBLIC_EMAIL_HOST_USER,
        email_host_password: process.env.NEXT_PUBLIC_EMAIL_HOST_PASSWORD,
        attachments: [
          {
            filename: file.name,
            content: base64CV.split(",")[1],
            content_type: file.type,
          },
        ],
      };

      // Send email
      await axios.post(
        "https://email-client-paddlelift.onrender.com/send/",
        emailData,
      );

      // Show success toast
      toast.success("Application submitted successfully!", {
        duration: 5000,
        position: "bottom-center",
        style: {
          background: "#4BB543",
          color: "#fff",
        },
      });

      // Reset form
      setAnswers([]);
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setTimeout(() => {
        router.push("/jobs");
      }, 800);
    } catch (error) {
      console.error("Submission error:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Failed to submit application";
      setError(errorMessage);
      toast.error(errorMessage, {
        duration: 4000,
        position: "bottom-center",
        style: {
          background: "#ff4444",
          color: "#fff",
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  const questions = [
    "What is your Name?",
    "What is Your Email?",
    ...(job.Questions || []),
  ];

  return (
    <Card className="mt-8 bg-white text-black">
      <form onSubmit={handleSubmit} className="space-y-6 p-6">
        <h2 className="text-xl font-semibold">
          Apply for {job.Employment_type} at {job.Title}
        </h2>

        {questions.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Screening Questions</h3>
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border p-4"
              >
                <p className="mb-2 font-medium">{question}</p>
                <Textarea
                  placeholder="Your answer"
                  value={answers[index] || ""}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className="mt-2 bg-gray-100 min-h-[100px]"
                  required
                />
              </motion.div>
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Attach Your CV</h3>
            <p className="text-sm text-gray-500">
              Please upload your CV in PDF format (max 5MB)
            </p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf"
              className="block w-full text-sm text-slate-500
                file:mr-4 file:rounded-full file:border-0
                file:bg-violet-50 file:px-4 file:py-2
                file:text-sm file:font-semibold file:text-violet-700
                hover:file:bg-violet-100"
              required
              onChange={handleFileChange}
            />
          </div>
        </motion.div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex justify-end">
          <Button
            type="submit"
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </div>
            ) : (
              "Submit Application"
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
}
