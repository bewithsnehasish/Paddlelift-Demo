import { Suspense } from "react";

import { getJobs } from "@/lib/api";
import { JobListSkeleton } from "@/components/job/JobListSkeleton";
import JobList from "@/components/job/JobList";
import Navbar from "@/components/Navbar";

export default async function HomePage() {
  const { job_listings } = await getJobs();

  return (
    <div className="min-h-screen bg-[#09090B] text-white flex flex-col">
      <Navbar />
      <Suspense fallback={<JobListSkeleton />}>
        {job_listings.length > 0 ? (
          <JobList initialJobs={job_listings} />
        ) : (
          <div className="flex flex-grow items-center justify-center text-xl font-semibold">
            No Jobs are listed Please Checkback after sometime.
          </div>
        )}
      </Suspense>
    </div>
  );
}
