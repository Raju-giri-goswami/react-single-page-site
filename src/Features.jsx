import React from "react";

const Features = () => {
  const features = [
    { title: "1000+", subtitle: "Students Trained" },
    { title: "₹4.5 LPA", subtitle: "Min Salary" },
    { title: "320+", subtitle: "Recruiting Partners" },
    { title: "10:00 AM", subtitle: "Program Timings" },
    { title: "11th May", subtitle: "Next Batch Starts" },
  ];

  return (
    <div className="py-8">
      <div className="container mx-auto bg-white shadow-lg rounded-lg py-4 px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <p className="text-blue-500 text-xl font-bold">{feature.title}</p>
              <p className="text-gray-600 text-sm">{feature.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
