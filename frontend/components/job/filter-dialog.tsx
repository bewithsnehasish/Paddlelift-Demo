import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  "Entry Level",
  "Mid Level",
  "Senior Level",
  "Lead",
  "Manager",
];
const employmentTypes = ["Full-Time", "Part-Time", "Contract", "Freelance"];
const workModes = ["On-site", "Remote", "Hybrid"];
const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "Education",
  "Manufacturing",
  "Retail",
  "Media",
];

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
}

export function FilterDialog({
  onFilterApply,
  currentFilters,
}: FilterDialogProps) {
  const [filters, setFilters] = useState<Filters>(currentFilters);

  const handleFilterChange = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean);
    handleFilterChange("skills", skills);
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
            <Input
              placeholder="e.g. React, Python, JavaScript"
              value={filters.skills.join(", ")}
              onChange={handleSkillsChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Position</Label>
            <Input
              placeholder="e.g. Software Engineer, Designer"
              value={filters.position}
              onChange={(e) => handleFilterChange("position", e.target.value)}
            />
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
                <SelectItem value="any">Any</SelectItem>
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
                <SelectItem value="any">Any</SelectItem>
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
                <SelectItem value="any">Any</SelectItem>
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
            <Input
              placeholder="e.g. New York, London, Remote"
              value={filters.jobLocation}
              onChange={(e) =>
                handleFilterChange("jobLocation", e.target.value)
              }
            />
          </div>
          <div className="grid gap-2">
            <Label>Years of Experience</Label>
            <div className="flex gap-4">
              <Input
                type="number"
                placeholder="Min"
                className="flex-1"
                value={filters.yearsOfExperience.min || ""}
                onChange={(e) =>
                  handleYearsOfExperienceChange("min", e.target.value)
                }
              />
              <Input
                type="number"
                placeholder="Max"
                className="flex-1"
                value={filters.yearsOfExperience.max || ""}
                onChange={(e) =>
                  handleYearsOfExperienceChange("max", e.target.value)
                }
              />
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
                <SelectItem value="any">Any</SelectItem>
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
