import React from "react";
import FAQs from "./FAQs"; // Import the FAQs component

const testimonials = [
  {
    name: "Matt Cannon",
    date: "September 1, 2023",
    feedback:
      "Lorem ipsum dolor sit amet consectetur. Arcu nisi diam eget id turpis donec et morbi. Sit eu nisl non scelerisque vestibulum pulvinar. Condimentum massa bibendum pretium tincidunt sed vel.",
    image: "./images/Ellipse-95.png",
  },
  {
    name: "Jane Doe",
    date: "August 15, 2023",
    feedback:
      "Sit eu nisl non scelerisque vestibulum pulvinar. Condimentum massa bibendum pretium tincidunt sed vel. Lorem ipsum dolor sit amet consectetur. Arcu nisi diam eget id turpis donec et morbi.",
    image: "./images/Ellipse-95.png",
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="w-full bg-white py-[50px]">
        <div className="container xl:max-w-[1320px] mx-auto mt-[50px] mb-[50px]">
          <div className="high font-bold sm:text-[44px] xs:text-[24px] text-center leading-normal">
            <h2 className="leading-[1.3]">
              What Our Students
              <br />
              Are Saying!
            </h2>
            <p className="text-[18px] xs:text-[14px] font-normal pt-4">
              Lorem ipsum dolor sit amet consectetur Imperdiet tellus ut ornare
              pharetra.
            </p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8 mt-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden p-5"
              >
                <div className="grow xs:mx-auto flex items-center gap-[15px] mb-4">
                  <img
                    className="w-[80px] h-[80px] rounded-full object-cover"
                    src={item.image}
                    alt={item.name}
                  />
                  <div className="text-high text-[20px] font-medium">
                    {item.name}
                    <p className="text-txt text-[15px] font-normal">
                      {item.date}
                    </p>
                  </div>
                </div>
                <p className="text-txt sm:text-[15px] xs:text-[14px] font-normal">
                  {item.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-[#0ACEFE] to-[#2699FB] flex justify-center items-center container xl:max-w-[1320px] mx-auto mt-[80px] mb-[80px] xs:mt-[40px] xs:mb-[40px] md:rounded-xl pt-[60px] pb-[60px] xs:pt-[30px] xs:pb-[30px]">
        <div className="w-full">
          <h4 className="sm:text-[44px] xs:text-[25px] font-bold text-center text-white leading-[1.3]">
            Are You Ready To Start <br className="sm:block xs:hidden" />Your Course?
          </h4>
          <p className="sm:text-[18px] xs:text-[16px] font-medium text-center text-white pt-3">
            Lorem ipsum dolor sit amet consectetur. Arcu nisi diam eget id <br className="sm:block xs:hidden" />
            turpis donec et morbi.
          </p>
          <div className="flex gap-[30px] pt-5 justify-center">
            <button className="bg-white text-[#101828] sm:p-[15px_50px] xs:p-[10px_30px] rounded-md sm:text-[20px] xs:text-[15px] font-bold drop-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition hover:bg-gray-100">
              Book Free Class
            </button>
          </div>
        </div>
      </section>
      <FAQs />
    </>
  );
};

export default Testimonials;
