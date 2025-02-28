import type { JobsResponse } from "./types";

export async function getJobs(): Promise<JobsResponse> {
  try {
    const response = await fetch("https://admin.paddlelift.com/jobs/", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch jobs");
    }

    const data: JobsResponse = await response.json();

    data.job_listings = Array.isArray(data.job_listings)
      ? data.job_listings.filter((job) => job.Number_of_Openings > 0)
      : [];

    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return { job_listings: [] };
  }
}
