import Image from "next/image";
import WorflowImg01 from "@/public/images/workflow-01.png";
import WorflowImg02 from "@/public/images/workflow-02.png";
import WorflowImg03 from "@/public/images/workflow-03.png";
import WorflowImg04 from "@/public/images/workflow-04.png";
import Spotlight from "../ui/spotlight";

export default function Workflows() {
  return (
    <section className="relative overflow-hidden bg-[#09090B] pb-10 md:pb-20">
      <div className="relative z-10 px-4 sm:px-6 lg:mx-auto lg:max-w-full">
        <div className="pb-8 md:pb-16">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-8 text-center pt-12 md:pb-16">
            <div className="inline-flex items-center gap-3 pb-3 max-w-full justify-center before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-base sm:text-xl font-bold text-transparent">
                Unleashing Potential, Together
              </span>
            </div>

            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl sm:text-4xl md:text-5xl font-semibold text-transparent">
              What We Do
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-cyan-200 px-4">
              At PaddleLift, we are dedicated to empowering businesses with top
              talent and energizing individuals to excel in their careers.
              Whether you&apos;re building a team or shaping your future,
              we&apos;re here to support every step of the journey
            </p>
          </div>

          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-4 md:grid-cols-2">
            {/* Card 1 */}
            <WorkflowCard
              image={WorflowImg01}
              alt="Workflow 01"
              tag="Recruitment"
              description="Simplifying the recruitment journey, ensuring efficient and effective talent acquisition"
            />
            {/* Card 2 */}
            <WorkflowCard
              image={WorflowImg02}
              alt="Workflow 02"
              tag="Staffing"
              description="Deploying skilled talent globally with seamless payroll management for efficient and compliant staffing solutions."
            />
            {/* Card 3 */}
            <WorkflowCard
              image={WorflowImg03}
              alt="Workflow 03"
              tag="Funding Gateway"
              description="Opening doors for startups by connecting them with global angel investors & VCs, guiding funding from pre-seed to Series B."
            />
            {/* Card 4 */}
            <WorkflowCard
              image={WorflowImg03}
              alt="Workflow 04"
              tag="HR Dynamics"
              description="Comprehensive HR management service that streamlines policy, strategies, salary benchmarking, and different analytics support."
            />
          </Spotlight>
        </div>
      </div>
    </section>
  );
}

interface WorkflowCardProps {
  image: any;
  alt: string;
  tag: string;
  description: string;
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({
  image,
  alt,
  tag,
  description,
}) => {
  return (
    <a
      className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
      href="#0"
    >
      <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
        {/* Image */}
        <div className="flex justify-center p-4">
          <Image
            className="inline-flex max-w-full h-auto"
            src={image}
            width={350}
            height={500}
            alt={alt}
          />
        </div>
        {/* Content */}
        <div className="p-4 sm:p-6">
          <div className="mb-3">
            <span className="btn-sm relative rounded-full bg-gray-800/40 px-5 py-2 text-sm font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 text-base font-bold bg-clip-text text-transparent">
                {tag}
              </span>
            </span>
          </div>
          <p className="text-xl text-white">{description}</p>
        </div>
      </div>
    </a>
  );
};
