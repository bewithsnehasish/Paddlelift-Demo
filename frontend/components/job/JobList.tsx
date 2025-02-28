"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { JobListing } from "@/lib/types";
import { FilterDialog, type Filters } from "./filter-dialog";

const salaryRanges = [
  { label: "All Ranges", min: 0, max: Number.POSITIVE_INFINITY },
  { label: "Above 0", min: 1, max: Number.POSITIVE_INFINITY },
  { label: "Above 30,000", min: 30001, max: Number.POSITIVE_INFINITY },
  { label: "Above 100,000", min: 100001, max: Number.POSITIVE_INFINITY },
  { label: "Above 500,000", min: 500001, max: Number.POSITIVE_INFINITY },
];

const initialFilters: Filters = {
  skills: [],
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
  const [filteredJobs, setFilteredJobs] = useState<
    { job: JobListing; originalIndex: number }[]
  >(initialJobs.map((job, index) => ({ job, originalIndex: index })));
  const [selectedSalaryRange, setSelectedSalaryRange] = useState("all ranges");
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [uniqueIndustries, setUniqueIndustries] = useState<string[]>([]);
  const [uniqueSkills, setUniqueSkills] = useState<string[]>([]);
  const [uniqueJobLocations, setUniqueJobLocations] = useState<string[]>([]);

  useEffect(() => {
    const filtered = jobs
      .map((job, index) => ({ job, originalIndex: index })) // Store original indices
      .filter(({ job }) => {
        const matchesSalary =
          selectedSalaryRange === "all ranges" ||
          Number(job.Salary_Range[1]) >=
            salaryRanges.find(
              (range) => range.label.toLowerCase() === selectedSalaryRange,
            )!.min;

        const matchesSkills =
          filters.skills.length === 0 ||
          filters.skills.every((skill) =>
            job.Required_skills.some((jobSkill) =>
              jobSkill.toLowerCase().includes(skill.toLowerCase()),
            ),
          );

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

        const matchesYearsOfExperience = (() => {
          if (
            !Array.isArray(job.Years_of_Experience_Required) ||
            job.Years_of_Experience_Required.length !== 2
          ) {
            return false;
          }

          const [jobMin, jobMax] = job.Years_of_Experience_Required;
          const { min: filterMin, max: filterMax } = filters.yearsOfExperience;

          const rule1 = filterMin === 0 || filterMin <= jobMax;

          const rule2 = filterMin === 0 || filterMin >= jobMin;

          const rule4 = filterMax !== 0 && filterMax >= jobMin;

          return (rule1 && rule2) || rule4;
        })();

        const matchesIndustry =
          !filters.industry ||
          job.Client_Industry.toLowerCase() === filters.industry.toLowerCase();

        return (
          matchesSalary &&
          matchesSkills &&
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

  useEffect(() => {
    const industries = Array.from(
      new Set(jobs.map((job) => job.Client_Industry)),
    );
    setUniqueIndustries(industries);

    const skills = Array.from(
      new Set(jobs.flatMap((job) => job.Required_skills)),
    );
    setUniqueSkills(skills);

    const jobLocations = Array.from(
      new Set(jobs.map((job) => job.Job_Location)),
    );
    setUniqueJobLocations(jobLocations);
  }, [jobs]);

  const handleFilterApply = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="relative min-h-screen mt-32">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-[#09090B] backdrop-blur-sm">
        <div className="mx-auto max-w-6xl space-y-6 p-4 sm:p-6">
          <div className="flex flex-col items-start justify-between gap-4 border-b border-gray-800 pb-4 sm:flex-row">
            {/* Title and Filter Button */}
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <h2 className="text-xl font-semibold text-white">Recent Jobs</h2>
              <FilterDialog
                onFilterApply={handleFilterApply}
                currentFilters={filters}
                industries={uniqueIndustries}
                skills={uniqueSkills}
                jobLocations={uniqueJobLocations}
              />
            </div>
            {/* Salary Range and Job Count */}
            <div className="flex flex-col items-end gap-4 w-full sm:w-auto sm:flex-row">
              <span className="text-sm text-gray-400">
                {filteredJobs.length} jobs found
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Job Listings */}
      <div className="mx-auto max-w-6xl space-y-4 p-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(({ job, originalIndex }) => (
            <Link key={originalIndex} href={`/jobs/${originalIndex}`}>
              <Card className="bg-white transition-all hover:scale-[1.01] mb-4">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {job.Title}
                      </h3>
                      <p className="text-gray-600">{job.Client_Name}</p>
                    </div>
                    <div className="text-right">
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

                  <Badge
                    variant="secondary"
                    className="mb-2 bg-blue-100 text-blue-800"
                  >
                    {job.Currency}
                    {job.Salary_Range[0]} - {job.Currency}
                    {job.Salary_Range[1]}
                  </Badge>

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
          ))
        ) : (
          <div className="flex flex-grow items-center justify-center text-xl font-semibold text-white min-h-[50vh]">
            No Jobs are available in this filter. Please check back later.
          </div>
        )}
      </div>
    </div>
  );
}
