import React from "react";

const Highlights = () => {
  const highlights = [
    {
      icon: "images/Edit-Square.png",
      title: "Assignments & Module Tests",
      description: "Test your knowledge",
    },
    {
      icon: "images/Edit-Square.png",
      title: "Industry-recognized Certification",
      description: "Stand out to your professional",
    },
    {
      icon: "images/Edit-Square.png",
      title: "Live Classes & Recorded Lectures",
      description: "Best of both worlds of learning",
    },
    {
      icon: "images/Edit-Square.png",
      title: "Downloadable Content",
      description: "With lifetime access",
    },
    {
      icon: "images/Edit-Square.png",
      title: "6 Industry-level Projects",
      description: "Get practical skills",
    },
    {
      icon: "images/Edit-Square.png",
      title: "4 Live Doubt-clearing Sessions",
      description: "Gain a clear understanding",
    },
  ];

  return (
    <section className="bg-gray-100 py-8 px-20">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl font-bold mb-6">Key Highlights of the Course</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white shadow-lg p-6 rounded-lg flex items-center">
              <img src={item.icon} alt={item.title} className="w-12 h-12 mr-4" />
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
