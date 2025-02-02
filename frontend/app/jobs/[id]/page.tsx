import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getJobs } from "@/lib/api";
import { JobApplication } from "@/components/job/JobApplication";
import { JobDetailsSkeleton } from "@/components/job/job-details-skeleton";
import Navbar from "@/components/Navbar";

async function JobDetails({ id }: { id: string }) {
  const { job_listings } = await getJobs();
  const job = job_listings[Number.parseInt(id)];

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#09090B]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-32">
        <div className="py-8">
          <Link
            href="/jobs"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Jobs
          </Link>
          <div className="mt-4 overflow-hidden rounded-lg bg-white shadow">
            <div className="px-4 py-5 sm:p-6">
              <div className="md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                  <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    {job.Title}
                  </h2>
                  <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="font-medium">{job.Client_Name}</span>
                      <span className="mx-2">•</span>
                      <span>{job.Client_Industry}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex md:ml-4 md:mt-0">
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-blue-100 text-blue-800"
                  >
                    ₹{job.Salary_Range}
                  </Badge>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Location
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {job.Job_Location}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Experience
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {job.Experience_level} •{" "}
                      {job.Years_of_Experience_Required} years
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Work Type
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {job.Employment_type} • {job.Work_Mode}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Required Skills
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      <div className="flex flex-wrap gap-2">
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
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Job Description
                </h3>
                <div
                  className="mt-2 prose prose-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: job.Job_Description }}
                />
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Requirements
                </h3>
                <dl className="mt-2 divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Education
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {job.Educational_Qualifications}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Certifications
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {job.Certifications}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Benefits
                </h3>
                <dl className="mt-2 divide-y divide-gray-100">
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Other Benefits
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {job.Other_Benefits}
                    </dd>
                  </div>
                  <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt className="text-sm font-medium leading-6 text-gray-900">
                      Number of Openings
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                      {job.Number_of_Openings}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <JobApplication job={job} />
        </div>
      </div>
    </div>
  );
}

export default async function JobPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<JobDetailsSkeleton />}>
      <JobDetails id={params.id} />
    </Suspense>
  );
}
