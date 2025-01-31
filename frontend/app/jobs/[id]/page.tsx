"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { getJobs } from "@/lib/api";
import { JobListing } from "@/lib/types";
import LoadingAnimation from "@/components/Loader";

export default function JobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [job, setJob] = useState<JobListing | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [answers, setAnswers] = useState<string[]>([]);

  React.useEffect(() => {
    const fetchJob = async () => {
      try {
        const { job_listings } = await getJobs();
        const fetchedJob = job_listings[Number.parseInt(id)];
        if (!fetchedJob) {
          notFound();
        }
        setJob(fetchedJob);
      } catch (error) {
        console.error("Failed to fetch job:", error);
        notFound();
      } finally {
        setIsLoading(false);
      }
    };
    fetchJob();
  }, [id]);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (!job) {
    return notFound();
  }

  const questions = job.Questions.split("\r\n").filter(Boolean);

  const handleAnswerChange = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Answers:", answers);
  };

  return (
    <div className="min-h-screen bg-[#09090B] p-6">
      <div className="mx-auto max-w-4xl">
        <Card className="mb-8">
          <div className="p-8">
            <div className="mb-6">
              <h1 className="mb-2 text-3xl font-bold">{job.Title}</h1>
              <p className="text-xl text-muted-foreground">
                {job.Client_Name} • {job.Client_Industry}
              </p>
            </div>

            <div className="mb-6 grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Location</div>
                <div className="font-medium">{job.Job_Location}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  Salary Range
                </div>
                <div className="font-medium">₹{job.Salary_Range}</div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Experience</div>
                <div className="font-medium">
                  {job.Experience_level} • {job.Years_of_Experience_Required}{" "}
                  years
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">Work Type</div>
                <div className="font-medium">
                  {job.Employment_type} • {job.Work_Mode}
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="mb-6">
              <h2 className="mb-4 text-xl font-semibold">Required Skills</h2>
              <div className="flex flex-wrap gap-2">
                {job.Required_skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="mb-4 text-xl font-semibold">Job Description</h2>
              <div
                className="prose prose-gray max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: job.Job_Description }}
              />
            </div>

            <div className="mb-6">
              <h2 className="mb-4 text-xl font-semibold">Requirements</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Education</div>
                  <div className="font-medium">
                    {job.Educational_Qualifications}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Certifications
                  </div>
                  <div className="font-medium">{job.Certifications}</div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="mb-4 text-xl font-semibold">Benefits</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Other Benefits
                  </div>
                  <div className="font-medium">{job.Other_Benefits}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">
                    Number of Openings
                  </div>
                  <div className="font-medium">{job.Number_of_Openings}</div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {questions.length > 0 && (
                <div className="mb-6">
                  <h2 className="mb-4 text-xl font-semibold">
                    Screening Questions
                  </h2>
                  <div className="space-y-4">
                    {questions.map((question, index) => (
                      <div key={index} className="rounded-lg border p-4">
                        <p className="mb-2 font-medium">{question}</p>
                        <Textarea
                          placeholder="Your answer"
                          value={answers[index] || ""}
                          onChange={(e) =>
                            handleAnswerChange(index, e.target.value)
                          }
                          className="mt-2"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-6">
                  <h2 className="mb-4 text-xl font-semibold">Attach Your CV</h2>
                  <p className="mb-4 text-muted-foreground">
                    Please attach your CV in PDF format. Max file size: 5MB
                  </p>
                  <input
                    type="file"
                    accept=".pdf"
                    className="block w-full text-sm text-slate-500
                      file:mr-4 file:rounded-full file:border-0
                      file:bg-violet-50 file:px-4 file:py-2
                      file:text-sm file:font-semibold file:text-violet-700
                      hover:file:bg-violet-100"
                  />
                </Card>
              </motion.div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
