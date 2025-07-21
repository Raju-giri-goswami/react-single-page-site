import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-white py-10">
      <div className="container xl:max-w-[1320px] mx-auto">
        <div className="top-section">
          <div className="flex md:flex-row flex-col">
            <div className="basis-[60%] mx-auto md:order-1 order-2 sm:mt-[100px]">
              <h1 className="text-headingclr font-bold xs:text-center xs:text-[25px] sm:text-[52px] xs:leading-[35px] sm:leading-[64px] sm:pb-5 xs:pb-3">
                Career Opportunities in <br />
                <span className="text-headblue">Digital Marketing</span>
              </h1>
              <p className="xs:text-[15px] xs:text-center sm:text-[22px] font-normal pb-4">
                Digital marketing course so good, you only pay-after-placement
              </p>
              <ul>
                <li className="sm:text-[22px] xs:text-[14px] font-normal pb-2">
                  <svg className="w-7 h-7 inline-block text-iconcorl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd"></path>
                  </svg>
                  Specialization: Performance Marketing
                </li>
                <li className="sm:text-[22px] xs:text-[14px] font-normal pb-2">
                  <svg className="w-7 h-7 inline-block text-iconcorl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd"></path>
                  </svg>
                  Min salary of Rs 4.5 LPA
                </li>
                <li className="sm:text-[22px] xs:text-[14px] font-normal pb-2">
                  <svg className="w-7 h-7 inline-block text-iconcorl" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd"></path>
                  </svg>
                  50 seats only
                </li>
              </ul>
              <div className="flex sm:gap-[30px] xs:gap-[10px] sm:py-[30px] xs:py-[10px] pt-5 xs:justify-center">
                <button className="bg-gradient-to-r from-[#0ACEFE] to-[#2699FB] text-white xs:p-[10px_10px] sm:p-[15px_25px] md:p-[10px_10px] md:text-[18px] rounded-md xs:text-[13px] sm:text-[20px] font-medium drop-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                  Book 2 Days Demo
                </button>
                <button className="text-high border border-[#D0D5DD] text-high p-[15px_25px] xs:p-[10px_10px] sm:p-[15px_25px] md:p-[10px_10px] md:text-[18px] rounded-md xs:text-[13px] sm:text-[20px] font-medium drop-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                  <svg className="sm:w-7 sm:h-7 xs:w-5 xs:h-5 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd"></path>
                  </svg>
                  Download Curriculum
                </button>
              </div>
            </div>

            <div className="basis-[40%] md:order-2 order-1 mx-auto mt-[50px] xs:mt-[10px]">
              <div className="sm:w-[552px] sm:h-[552px] sm:bg-[#E9F5FF] rounded-full py-8">
                <form className="max-w-sm mx-auto bg-white rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] overflow-hidden py-[50px] px-5">
                  <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                    <input type="text" id="name" className="bg-gray-50 border bg-white border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your name" required />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border bg-white border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your Email" required />
                  </div>
                  <div className="mb-5">
                    <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900">Mobile Number</label>
                    <input type="number" id="mobile" className="bg-gray-50 border bg-white border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Enter your mobile number" required />
                  </div>
                  <div className="flex items-start mb-5">
                    <div className="flex items-center h-5">
                      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                    </div>
                    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
                  </div>
                  <div className="flex gap-[30px] py[30px] pt-5 justify-center">
                    <button type="submit" className="bg-gradient-to-r from-[#0ACEFE] to-[#2699FB] xs:text-[18px] xs:p-[8px_86px] text-white p-[8px_110px] rounded-md text-[16px] font-normal drop-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                      Register Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Review Section */}
        <div className="review shadow-[0_3px_10px_rgb(0,0,0,0.1)] rounded-md p-6 mt-[60px] xs-[50px]">
          <div className="flex gap-[30px] md:flex-row flex-col">
            <div className="grow xs:mx-auto text-center">
              <div className="font-bold text-[30px] text-headblue xs:text-center">
                1000+
                <p className="font-normal text-[16px] text-txt">Students Trained</p>
              </div>
            </div>

            <div className="grow xs:mx-auto">
              <div className="font-bold text-[30px] text-headblue text-center xs:text-center">
                ₹4.5 LPA
                <p className="font-normal text-[16px] text-txt">Min Salary</p>
              </div>
            </div>

            <div className="grow xs:mx-auto">
              <div className="font-bold text-[30px] text-headblue text-center xs:text-center">
                320+
                <p className="font-normal text-[16px] text-txt">Recruiting Partners</p>
              </div>
            </div>

            <div className="grow xs:mx-auto">
              <div className="font-bold text-[30px] text-headblue text-center xs:text-center">
                10:00 am
                <p className="font-normal text-[16px] text-txt">Program Timings</p>
              </div>
            </div>

            <div className="grow xs:mx-auto">
              <div className="font-bold text-[30px] text-headblue text-center xs:text-center">
                11th May
                <p className="font-normal text-[16px] text-txt">Next Batch Starts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;