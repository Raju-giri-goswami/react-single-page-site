import React from "react";

const Highlights = () => {
  const highlights = [
    {
      icon: "images/course-img-1.jpg",
      title: "Assignments & Modules tests",
      description: "Test your knowledge",
    },
    {
      icon: "images/course-img-2.jpg",
      title: "Industry-recognized Certification",
      description: "Stand out to your professional",
    },
    {
      icon: "images/course-img-5.jpg",
      title: "Live classes & recorded lectures",
      description: "Best of both worlds of learning",
    },
    {
      icon: "images/course-img-4.jpg",
      title: "Downloadable Content",
      description: "With lifetime access",
    },
    {
      icon: "images/course-img-3.jpg",
      title: "6 Industry level projects",
      description: "Get practical skills",
    },
    {
      icon: "images/course-img-6.jpg",
      title: "4 Live Doubt clearing Session",
      description: "Gain a clear understanding",
    },
  ];

  return (
    <section className="high bg-[#F7FAFF] mt-[70px] py-[50px]">
      <div className="container xl:max-w-[1320px] mx-auto">
        <div className="text-hight sm:text-[36px] xs:text-[23px] font-bold">
          Key Highlights of the Course
        </div>
        <p className="text-high sm:text-[18px] xs:text-[14px] pt-3">
          Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare
          pharetra leo vestibulum at orci.
        </p>
        <div className="flex gap-[30px] md:flex-row flex-col pt-8">
          {highlights.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden p-5"
            >
              <div className="grow xs:mx-auto flex items-center gap-[15px]">
                <img
                  className="sm:w-[86px] sm:h-[86px] xs:w-[50px] xs:h-[50px]"
                  src={item.icon}
                  alt={item.title}
                />
                <div className="text-high sm:text-[20px] xs:text-[14px] font-medium">
                  {item.title}
                  <p className="text-txt text-[15px] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-[30px] md:flex-row flex-col grid md:grid-flow-col justify-stretch py-8">
          {highlights.slice(3).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden p-5"
            >
              <div className="grow xs:mx-auto flex items-center gap-[15px]">
                <img
                  className="sm:w-[86px] sm:h-[86px] xs:w-[50px] xs:h-[50px]"
                  src={item.icon}
                  alt={item.title}
                />
                <div className="text-high sm:text-[20px] xs:text-[14px] font-medium">
                  {item.title}
                  <p className="text-txt text-[15px] font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-[30px] py[30px] pt-5 justify-center">
          <button className="bg-gradient-to-r from-[#0ACEFE] to-[#2699FB] text-white sm:p-[15px_50px] xs:p-[12px_50px] rounded-md sm:text-[20px] xs:text-[15px] font-medium drop-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            Book Free Class
          </button>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
