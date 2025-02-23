import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "lucide-react";
import { Badge } from "../ui/badge";

const experienceLevels = [
  "Entry-level",
  "Mid-Level",
  "Senior-level",
  "Manager",
  "Leadership / CXO",
];
const employmentTypes = ["Full-Time", "Part-Time", "Contract", "Freelance"];
const workModes = ["On-site", "Remote", "Hybrid"];

export interface Filters {
  skills: string[];
  position: string;
  experienceLevel: string;
  employmentType: string;
  workMode: string;
  jobLocation: string;
  yearsOfExperience: { min: number; max: number };
  industry: string;
}

interface FilterDialogProps {
  onFilterApply: (filters: Filters) => void;
  currentFilters: Filters;
  industries: string[];
  skills: string[];
  positions: string[];
  jobLocations: string[];
}

export function FilterDialog({
  onFilterApply,
  currentFilters,
  industries,
  skills,
  positions,
  jobLocations,
}: FilterDialogProps) {
  const [filters, setFilters] = useState<Filters>(currentFilters);

  const handleFilterChange = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSkillsChange = (value: string) => {
    const updatedSkills = filters.skills.includes(value)
      ? filters.skills.filter((skill) => skill !== value)
      : [...filters.skills, value];
    handleFilterChange("skills", updatedSkills);
  };

  const handleYearsOfExperienceChange = (key: "min" | "max", value: string) => {
    const numValue = value === "" ? 0 : Number.parseInt(value, 10);
    setFilters((prev) => ({
      ...prev,
      yearsOfExperience: { ...prev.yearsOfExperience, [key]: numValue },
    }));
  };

  const handleApply = () => {
    onFilterApply(filters);
  };

  const handleReset = () => {
    const resetFilters: Filters = {
      skills: [],
      position: "",
      experienceLevel: "",
      employmentType: "",
      workMode: "",
      jobLocation: "",
      yearsOfExperience: { min: 0, max: 0 },
      industry: "",
    };
    setFilters(resetFilters);
    onFilterApply(resetFilters);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filters
          {Object.values(currentFilters).some((value) =>
            Array.isArray(value)
              ? value.length > 0
              : value !== "" && value !== 0,
          ) && (
            <Badge
              variant="secondary"
              className="ml-2 h-5 w-5 rounded-full p-0"
            >
              {
                Object.values(currentFilters).filter((value) =>
                  Array.isArray(value)
                    ? value.length > 0
                    : value !== "" && value !== 0,
                ).length
              }
            </Badge>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Filter Jobs</DialogTitle>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label>Skills</Label>
            <Select
              value={filters.skills.join(",")}
              onValueChange={(value) => handleSkillsChange(value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select skills" />
              </SelectTrigger>
              <SelectContent>
                {skills.map((skill) => (
                  <SelectItem key={skill} value={skill}>
                    {skill}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="flex flex-wrap gap-2 mt-2">
              {filters.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="cursor-pointer"
                  onClick={() => handleSkillsChange(skill)}
                >
                  {skill} ×
                </Badge>
              ))}
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Position</Label>
            <Select
              value={filters.position}
              onValueChange={(value) => handleFilterChange("position", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select position" />
              </SelectTrigger>
              <SelectContent>
                {positions.map((position) => (
                  <SelectItem key={position} value={position}>
                    {position}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Experience Level</Label>
            <Select
              value={filters.experienceLevel}
              onValueChange={(value) =>
                handleFilterChange("experienceLevel", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select experience level" />
              </SelectTrigger>
              <SelectContent>
                {experienceLevels.map((level) => (
                  <SelectItem key={level} value={level.toLowerCase()}>
                    {level}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Employment Type</Label>
            <Select
              value={filters.employmentType}
              onValueChange={(value) =>
                handleFilterChange("employmentType", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select employment type" />
              </SelectTrigger>
              <SelectContent>
                {employmentTypes.map((type) => (
                  <SelectItem key={type} value={type.toLowerCase()}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Work Mode</Label>
            <Select
              value={filters.workMode}
              onValueChange={(value) => handleFilterChange("workMode", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select work mode" />
              </SelectTrigger>
              <SelectContent>
                {workModes.map((mode) => (
                  <SelectItem key={mode} value={mode.toLowerCase()}>
                    {mode}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Job Location</Label>
            <Select
              value={filters.jobLocation}
              onValueChange={(value) =>
                handleFilterChange("jobLocation", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select job location" />
              </SelectTrigger>
              <SelectContent>
                {jobLocations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Years of Experience</Label>
            <div className="flex gap-4">
              <Select
                value={filters.yearsOfExperience.min.toString()}
                onValueChange={(value) =>
                  handleYearsOfExperienceChange("min", value)
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Min" />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3, 5, 7, 10].map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}+
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select
                value={filters.yearsOfExperience.max.toString()}
                onValueChange={(value) =>
                  handleYearsOfExperienceChange("max", value)
                }
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Max" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 5, 7, 10, 15, 20].map((year) => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label>Industry</Label>
            <Select
              value={filters.industry}
              onValueChange={(value) => handleFilterChange("industry", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                {industries.map((industry) => (
                  <SelectItem key={industry} value={industry.toLowerCase()}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outline" onClick={handleReset}>
            Reset
          </Button>
          <Button onClick={handleApply}>Apply Filters</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
