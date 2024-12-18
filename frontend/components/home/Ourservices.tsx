import React from "react";

const services = [
  {
    title: "Recruitment",
    description:
      "Delivering top talent across industries and skill sets, from tech to non-tech, with precision and expertise.",
    icon: "👔",
    bgColor: "bg-teal-500",
  },
  {
    title: "Staffing",
    description:
      "Deploying skilled talent globally with seamless payroll management for efficient and compliant staffing solutions globally.",
    icon: "👥",
    bgColor: "bg-orange-500",
  },
  {
    title: "Funding Gateway",
    description:
      "Opening doors for startups by connecting them with global angel investors & VCs, guiding funding from pre-seed to Series B.",
    icon: "💼",
    bgColor: "bg-sky-500",
  },
  {
    title: "HR Dynamics",
    description:
      "Comprehensive HR management service that streamlines policy, strategies, salary benchmarking, etc. different analytics support.",
    icon: "📊",
    bgColor: "bg-yellow-500",
  },
];

const OurServices: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#09090B] text-white py-12 px-6 md:px-12"
    >
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
          OUR SERVICES
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Icon */}
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${service.bgColor} mb-4 text-4xl`}
            >
              {service.icon}
            </div>
            {/* Title */}
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            {/* Description */}
            <p className="text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
