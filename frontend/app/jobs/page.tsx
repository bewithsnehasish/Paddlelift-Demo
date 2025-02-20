import { Suspense } from "react";

import { getJobs } from "@/lib/api";
import { JobListSkeleton } from "@/components/job/JobListSkeleton";
import JobList from "@/components/job/JobList";
import Navbar from "@/components/Navbar";

export default async function HomePage() {
  const { job_listings } = await getJobs();

  return (
    <div className="min-h-screen bg-[#09090B]">
      <Suspense fallback={<JobListSkeleton />}>
        <Navbar />
        <JobList initialJobs={job_listings} />
      </Suspense>
    </div>
  );
}
