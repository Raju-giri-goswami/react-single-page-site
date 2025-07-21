import React from "react";

const CurriculumTabs = () => {
  const careerOptions = [
    {
      image: "images/care-1.jpg",
      title: "SEO Specialist",
      description: "Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci."
    },
    {
      image: "images/care-2.jpg",
      title: "Social Media Manager",
      description: "Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci."
    },
    {
      image: "images/care-3.jpg",
      title: "Content Marketer",
      description: "Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci."
    },
    {
      image: "images/care-4.jpg",
      title: "Marketing Analyst",
      description: "Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci."
    }
  ];

  return (
    <div className="container xl:max-w-[1320px] mx-auto mt-[50px] mb-[50px]">
      <div className="high font-bold sm:text-[44px] xs:text-[25px] text-center leading-normal">
        <h2 className="leading-[1.3]">
          Top career options in<br />
          Digital Marketing
        </h2>
        <p className="sm:text-[18px] xs:text-[14px] font-normal pt-4">
          Lorem ipsum dolor sit amet consectetur Imperdiet tellus ut ornare
          pharetra.
        </p>
      </div>
      <div className="flex gap-[30px] md:flex-row flex-col pt-8 xs:text-center">
        {careerOptions.map((option, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden p-6"
          >
            <div className="grow xs:mx-auto items-center gap-[15px]">
              <div className="xs:flex xs:items-center xs:justify-center">
                <img 
                  className="w-[56px] h-[56px]" 
                  src={option.image}
                  alt={option.title}
                />
              </div>
              <h3 className="text-high sm:text-[18px] xs:text-[16px] font-medium sm:pt-4 xs:pt-1 sm:pb-4 xs:pb-1">
                {option.title}
              </h3>
              <p className="sm:text-[15px] xs:text-[14px] text-high font-normal">
                {option.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumTabs;
