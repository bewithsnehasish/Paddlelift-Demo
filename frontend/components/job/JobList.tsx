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
import { FilterDialog, type Filters } from "./filter-dialog";

const salaryRanges = [
  { label: "All Ranges", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "0-30,000", min: 0, max: 30000 },
  { label: "30,000-50,000", min: 30000, max: 50000 },
  { label: "50,000-80,000", min: 50000, max: 80000 },
  { label: "80,000+", min: 80000, max: Number.POSITIVE_INFINITY },
];

const initialFilters: Filters = {
  skills: [],
  position: "",
  experienceLevel: "",
  employmentType: "",
  workMode: "",
  jobLocation: "",
  yearsOfExperience: { min: 0, max: 0 },
  industry: "",
};

export default function JobList({
  initialJobs,
}: {
  initialJobs: JobListing[];
}) {
  const [jobs, setJobs] = useState<JobListing[]>(initialJobs);
  const [filteredJobs, setFilteredJobs] = useState<JobListing[]>(initialJobs);
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("all ranges");
  const [filters, setFilters] = useState<Filters>(initialFilters);

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

      const matchesSkills =
        filters.skills.length === 0 ||
        filters.skills.every((skill) =>
          job.Required_skills.some((jobSkill) =>
            jobSkill.toLowerCase().includes(skill.toLowerCase()),
          ),
        );

      const matchesPosition =
        !filters.position ||
        job.Title.toLowerCase().includes(filters.position.toLowerCase());

      const matchesExperienceLevel =
        !filters.experienceLevel ||
        job.Experience_level.toLowerCase() ===
          filters.experienceLevel.toLowerCase();

      const matchesEmploymentType =
        !filters.employmentType ||
        job.Employment_type.toLowerCase() ===
          filters.employmentType.toLowerCase();

      const matchesWorkMode =
        !filters.workMode ||
        job.Work_Mode.toLowerCase() === filters.workMode.toLowerCase();

      const matchesJobLocation =
        !filters.jobLocation ||
        job.Job_Location.toLowerCase().includes(
          filters.jobLocation.toLowerCase(),
        );

      const matchesYearsOfExperience =
        (filters.yearsOfExperience.min === 0 ||
          job.Years_of_Experience_Required >= filters.yearsOfExperience.min) &&
        (filters.yearsOfExperience.max === 0 ||
          job.Years_of_Experience_Required <= filters.yearsOfExperience.max);

      const matchesIndustry =
        !filters.industry ||
        job.Client_Industry.toLowerCase() === filters.industry.toLowerCase();

      return (
        matchesSalary &&
        matchesSkills &&
        matchesPosition &&
        matchesExperienceLevel &&
        matchesEmploymentType &&
        matchesWorkMode &&
        matchesJobLocation &&
        matchesYearsOfExperience &&
        matchesIndustry
      );
    });

    setFilteredJobs(filtered);
  }, [jobs, selectedSalaryRange, filters]);

  const handleFilterApply = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="relative mt-32 min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl space-y-6 p-6">
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-semibold text-white">Recent Posts</h2>
              <FilterDialog
                onFilterApply={handleFilterApply}
                currentFilters={filters}
              />
            </div>
            <div className="flex items-center gap-4">
              <Select
                value={selectedSalaryRange}
                onValueChange={setSelectedSalaryRange}
              >
                <SelectTrigger className="w-[180px] text-white">
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
            <Card className="bg-white transition-all hover:scale-[1.01] mb-4">
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {job.Title}
                    </h3>
                    <p className="text-gray-600">{job.Client_Name}</p>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-blue-100 text-blue-800"
                    >
                      ₹{job.Salary_Range}
                    </Badge>
                    <div className="text-sm text-gray-600">
                      {job.Employment_type}
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex flex-wrap gap-2">
                  {job.Required_skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-blue-200 text-blue-800"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="h-2 w-2 rounded-full bg-blue-500 p-0"
                    />
                    {job.Job_Location}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="h-2 w-2 rounded-full bg-blue-500 p-0"
                    />
                    {job.Work_Mode}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="h-2 w-2 rounded-full bg-blue-500 p-0"
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
