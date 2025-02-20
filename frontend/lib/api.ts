import type { JobsResponse } from "./types";

export async function getJobs(): Promise<JobsResponse> {
  const response = await fetch("http://paddlelift.onrender.com/jobs/", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
}
