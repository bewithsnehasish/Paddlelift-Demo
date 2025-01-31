"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { JobListing } from "@/lib/types";

const salaryRanges = [
  { label: "All Ranges", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "0-30,000", min: 0, max: 30000 },
  { label: "30,000-50,000", min: 30000, max: 50000 },
  { label: "50,000-80,000", min: 50000, max: 80000 },
  { label: "80,000+", min: 80000, max: Number.POSITIVE_INFINITY },
];

export default function JobList({
  initialJobs,
}: {
  initialJobs: JobListing[];
}) {
  const [jobs, setJobs] = useState<JobListing[]>(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>(initialJobs);
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("all ranges");

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const matchesSalary =
        selectedSalaryRange === "all ranges" ||
        (Number.parseInt(job.Salary_Range) >=
          salaryRanges.find(
            (range) => range.label.toLowerCase() === selectedSalaryRange,
          )!.min &&
          Number.parseInt(job.Salary_Range) <=
            salaryRanges.find(
              (range) => range.label.toLowerCase() === selectedSalaryRange,
            )!.max);

      return matchesSalary;
    });

    setFilteredJobs(filtered);
  }, [jobs, selectedSalaryRange]);

  return (
    <div className="relative min-h-screen mt-28">
      {/* Header */}
      <div className="bg[#09090B]">
        <div className="mx-auto max-w-6xl space-y-6 p-6">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <h2 className="text-xl font-semibold text-white">Recent Posts</h2>
            <div className="flex items-center gap-4">
              <Select
                value={selectedSalaryRange}
                onValueChange={setSelectedSalaryRange}
              >
                <SelectTrigger className="w-[180px] bg-transparent text-white">
                  <SelectValue placeholder="Salary Range" />
                </SelectTrigger>
                <SelectContent>
                  {salaryRanges.map((range) => (
                    <SelectItem
                      key={range.label}
                      value={range.label.toLowerCase()}
                    >
                      {range.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <span className="text-sm text-gray-400">
                {filteredJobs.length} jobs found
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="mx-auto max-w-6xl space-y-4 p-6">
        {filteredJobs.map((job, index) => (
          <Link key={index} href={`/jobs/${index}`}>
            <Card className="transition-all hover:scale-[1.01] mb-6 ">
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">{job.Title}</h3>
                    <p className="text-muted-foreground">{job.Client_Name}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-2">
                      ₹{job.Salary_Range}
                    </Badge>
                    <div className="text-sm text-muted-foreground">
                      {job.Employment_type}
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {job.Required_skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="h-2 w-2 rounded-full p-0"
                    />
                    {job.Job_Location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="h-2 w-2 rounded-full p-0"
                    />
                    {job.Work_Mode}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="h-2 w-2 rounded-full p-0"
                    />
                    {job.Experience_level}
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
