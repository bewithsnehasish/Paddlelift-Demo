export interface JobListing {
  Title: string;
  Required_skills: string[];
  Experience_level: string;
  Employment_type: string;
  Work_Mode: string;
  Job_Location: string;
  Years_of_Experience_Required: number;
  Currency: string;
  Salary_Range: string;
  Educational_Qualifications: string;
  Certifications: string;
  Other_Benefits: string;
  Number_of_Openings: number;
  Client_Name: string;
  Client_Industry: string;
  Job_Description: string;
  Questions: string;
}

export interface JobsResponse {
  job_listings: JobListing[];
}
