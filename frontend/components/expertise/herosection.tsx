import React from "react";
import { Users, TrendingUp, FileCheck, UserCheck } from "lucide-react";

// Define the interface for the props
interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({
  title,
  description,
  icon: Icon,
}) => (
  <div className="group relative transition-all duration-300 hover:-translate-y-2">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-purple-500/30" />
    <div className="relative h-full rounded-2xl border border-white/10 bg-gray-900/40 p-8 backdrop-blur-xl">
      <div className=" flex items-center space-x-4">
        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-[#09090B] opacity-90" />
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')] bg-cover bg-center" />
    <div className="absolute inset-0 bg-gradient-to-b from-[#09090B] via-transparent to-[#09090B]" />
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
        backgroundSize: "50px 50px",
      }}
    />
  </div>
);

export default function ExpertisePage() {
  const expertiseData = [
    {
      title: "Expert Team",
      description:
        "Our squad of seasoned specialists, Tier 1 pedigree holders with 45+ years of combined expertise in talent acquisition and HR management.",
      icon: Users,
    },
    {
      title: "Proven Success",
      description:
        "Deep industry insights delivering high-quality talent & HR practices, with global scale across multiple fields and consistent success rates.",
      icon: TrendingUp,
    },
    {
      title: "Tailored Strategy",
      description:
        "Masterfully guiding from initial setup to rapid scaling, ensuring hires align with your vision and organizational goals.",
      icon: FileCheck,
    },
    {
      title: "Personalized Approach",
      description:
        "Beyond candidates, we promote your brand and identify crème talent eligible for hiring, ensuring perfect cultural and skill matches.",
      icon: UserCheck,
    },
  ];

  return (
    <div className="relative py-10 md:py-20 overflow-hidden">
      <BackgroundPattern />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 lg:px-8">
        <div className="text-left">
          <h1 className="text-4xl font-bold text-white">
            What Sets Us<span className="text-red-600"> Apart</span>
          </h1>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {expertiseData.map((item) => (
            <ExpertiseCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
