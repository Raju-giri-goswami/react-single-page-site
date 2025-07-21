import React from "react";

const WhyLearnDigital = () => {
  const reasons = [
    {
      image: "images/img-01.jpg",
      title: "Learn From Industry Experts",
      description: "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis."
    },
    {
      image: "images/img-02.jpg",
      title: "Structured & Latest Curriculum",
      description: "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis."
    },
    {
      image: "images/img-03.jpg",
      title: "Highly-Engaging Live Classes",
      description: "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis."
    },
    {
      image: "images/img-04.jpg",
      title: "Work on Real Projects",
      description: "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis."
    },
    {
      image: "images/img-05.jpg",
      title: "100% Job Assistance",
      description: "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis."
    },
    {
      image: "images/img-06.jpg",
      title: "Get Certification",
      description: "Lorem ipsum dolor sit amet consectetur. Vitae suspendisse pellentesque amet porttitor facilisis dignissim felis."
    }
  ];

  return (
    <div className="bg-[#F7FAFF] sm:py-[50px] xs:py-[25px]">
      <div className="container xl:max-w-[1320px] mx-auto sm:mt-[50px] sm:mb-[50px] xs:mt-[20px] xs:mb-[20px] bg-[#F7FAFF]">
        <div className="text-hight sm:text-[36px] xs:text-[23px] font-bold text-center">
          <h4>Why Learn Digital Marketing</h4>
          <p className="text-txt sm:text-[18px] xs:text-[14px] font-normal sm:pt-4 xs:pt-2">
            Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare
            pharetra leo vestibulum at orci.
          </p>
        </div>

        <div className="flex gap-[30px] md:flex-row flex-col pt-8 xs:text-center">
          {reasons.slice(0, 3).map((reason, index) => (
            <div key={index} className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden p-6 xs:text-center">
              <div className="grow xs:mx-auto items-center gap-[15px]">
                <div className="xs:flex xs:items-center xs:justify-center">
                  <img className="w-[64px] h-[64px]" src={reason.image} alt={reason.title} />
                </div>
                <h3 className="text-high sm:text-[18px] xs:text-[15px] font-medium sm:pt-4 sm:pb-3 xs:pt-2 xs:pb-1">
                  {reason.title}
                </h3>
                <p className="sm:text-[15px] xs:text-[14px] text-high font-normal">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-[30px] md:flex-row flex-col pt-8 xs:text-center">
          {reasons.slice(3).map((reason, index) => (
            <div key={index + 3} className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden p-6">
              <div className="grow xs:mx-auto items-center gap-[15px]">
                <div className="xs:flex xs:items-center xs:justify-center">
                  <img className="w-[64px] h-[64px]" src={reason.image} alt={reason.title} />
                </div>
                <h3 className="text-high xs:text-[15px] font-medium sm:pt-4 sm:pb-3 xs:pt-2 xs:pb-1">
                  {reason.title}
                </h3>
                <p className="text-[15px] text-high font-normal">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-[30px] py[30px] pt-10 justify-center">
          <button className="bg-gradient-to-r from-[#0ACEFE] to-[#2699FB] text-white sm:p-[15px_50px] xs:p-[12px_50px] rounded-md sm:text-[20px] xs:text-[15px] font-medium drop-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
            Book Free Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyLearnDigital;
