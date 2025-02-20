export interface ProcessStep {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  color: string;
  iconColor: string;
  gradient: string;
  icon: string;
}

export interface StepCardProps extends ProcessStep {
  index: number;
  isActive: boolean;
  onClick: () => void;
  total: number;
}

export interface ProcessTimelineProps {
  activeStep: number;
  progress: number;
}

export interface StepDetailsProps {
  step: ProcessStep;
  isVisible: boolean;
}
