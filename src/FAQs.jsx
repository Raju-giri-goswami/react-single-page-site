import React, { useState } from 'react';

const FAQs = () => {
  const [activeAccordion, setActiveAccordion] = useState(1); // First accordion open by default

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "What is website development?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptas animi similique dignissimos debitis ut eum qui fugit, architecto, omnis reiciendis nulla doloribus ad enim eius praesentium voluptatibus adipisci temporibus. Check out this guide to learn how to and start developing websites even faster with components on top of Tailwind CSS."
    },
    {
      id: 2,
      question: "The Mission Is Clear?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsum sit consectetur esse repudiandae suscipit ab. Atque esse quis cum fugit? Praesentium quo repellendus excepturi aliquam libero, iusto inventore recusandae! Check out the based on the utility classes from Tailwind CSS and components from Flowbite."
    },
    {
      id: 3,
      question: "Fueling Skills, Igniting Careers?",
      answer: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages. However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds. Learn more about these technologies:"
    }
  ];

  return (
    <>
      <div className="bg-[#F7FAFF] sm:py-[50px] xs:py-[25px]">
        <div className="container xl:max-w-[800px] mx-auto sm:mt-[50px] sm:mb-[50px] xs:mt-[25px] xs:mb-[25px] bg-[#F7FAFF]">
          <h2 className="leading-[1.3] high font-bold sm:text-[44px] xs:text-[25px] text-center">
            Digital Marketing Course<br />
            FAQs
          </h2>
          <p className="sm:text-[18px] xs:text-[14px] font-normal pt-4 text-center">
            Lorem ipsum dolor sit amet consectetur Imperdiet tellus ut ornare
            pharetra.
          </p>
          {/* start accordion */}
          <div className="mt-8">
            {faqs.map((faq, index) => (
              <div key={faq.id} className={index > 0 ? "mt-3" : ""}>
                <h2 className="border border-b-1 border-t-0 border-l-0 border-r-0 border-b-gray-200 rounded-b-md bg-white">
                  <button
                    type="button"
                    className={`flex items-center bg-white rounded-b-md justify-between w-full p-5 font-medium rtl:text-right text-high border border-b-0 border-gray-200 rounded-t-md dark:border-gray-700 gap-3 ${
                      activeAccordion === faq.id 
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
                        : 'text-gray-500'
                    }`}
                    onClick={() => toggleAccordion(faq.id)}
                    aria-expanded={activeAccordion === faq.id}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-3 h-3 shrink-0 transition-transform duration-200 ${
                        activeAccordion === faq.id ? '' : 'rotate-180'
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5 5 1 1 5"
                      />
                    </svg>
                  </button>
                </h2>
                <div
                  className={`bg-white ${activeAccordion === faq.id ? 'block' : 'hidden'}`}
                  aria-labelledby={`accordion-collapse-heading-${faq.id}`}
                >
                  <div className="p-5 border border-b-1 border-b-gray-200 border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-b-md border-t-0">
                    <p className="text-high bg-white">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* end accordion */}

          <div className="flex gap-[30px] py[30px] pt-10 justify-center">
            <button className="bg-gradient-to-r from-[#0ACEFE] to-[#2699FB] text-white sm:p-[15px_50px] xs:p-[12px_50px] rounded-md sm:text-[20px] xs:text-[15px] font-medium drop-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
              Book Free Class
            </button>
          </div>
        </div>
        {/* end container */}
      </div>
      {/* Top Companies Hiring Section */}
      <div className="container xl:max-w-[1320px] mx-auto mt-[50px] mb-[50px]">
        <h2 className="high font-bold sm:text-[36px] xs:text-[24px] text-center leading-normal line height-1.3">
          Top Companies Hiring Digital Marketing in India
        </h2>
        <div className="flex gap-[30px] md:flex-row flex-col pt-8">
          <div className="grow xs:mx-auto flex items-center gap-[15px] justify-center">
            <img className="sm:w-[1116px] sm:h-[102px]" src="./images/image-144.png" alt="Top Companies" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQs;