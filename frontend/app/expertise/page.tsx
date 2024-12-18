import React from "react";

const MaintenancePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#09090B]">
      <h1 className="text-4xl font-bold mb-4">
        This Page is Under Maintenance
      </h1>
      <p className="text-lg text-gray-600">
        We are currently working on improving our services. Please check back
        later.
      </p>
    </div>
  );
};

export default MaintenancePage;
