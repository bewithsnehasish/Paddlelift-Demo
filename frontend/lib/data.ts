export interface Job {
  id: number;
  title: string;
  company: string;
  position: string;
  location: string;
  postedDays: number;
  type: "Freelance" | "Contract" | "Full-Time" | "Part-Time";
}

export const jobTitles = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "UI Designer",
  "UX Designer",
  "Product Manager",
  "Project Manager",
  "Content Writer",
  "Marketing Manager",
  "Sales Representative",
];

export const positions = [
  "Entry-level",
  "Mid-Level",
  "Senior-level",
  "Manager",
  "Leadership / CXO",
];

export const postedDaysOptions = [
  { value: "1", label: "Last 24 hours" },
  { value: "3", label: "Last 3 days" },
  { value: "7", label: "Last week" },
  { value: "14", label: "Last 2 weeks" },
  { value: "30", label: "Last month" },
];

export const jobTypes = [
  { id: "freelance", label: "Freelance" },
  { id: "contract", label: "Contract" },
  { id: "fulltime", label: "Full-Time" },
  { id: "parttime", label: "Part-Time" },
  { id: "internship", label: "Internship" },
] as const;

// Generate 100 mock jobs
export const generateMockJobs = (): Job[] => {
  return Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    title: jobTitles[Math.floor(Math.random() * jobTitles.length)],
    company: `Company ${i + 1}`,
    position: positions[Math.floor(Math.random() * positions.length)],
    location: ["Brussels", "Paris", "London", "Berlin", "Amsterdam"][
      Math.floor(Math.random() * 5)
    ],
    postedDays: Math.floor(Math.random() * 30) + 1,
    type: jobTypes[Math.floor(Math.random() * jobTypes.length)]
      .label as Job["type"],
  }));
};
