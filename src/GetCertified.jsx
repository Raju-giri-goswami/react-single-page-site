import React from "react";

const GetCertified = () => {
  return (
    <div className="high bg-[#F7FAFF] mt-[70px] sm:py-[50px] xs:py-[20px]">
      <div className="container xl:max-w-[1320px] mx-auto sm:mt-[50px] sm:mb-[50px] xs:mt-[20px] xs:mb-[20px]">
        <div className="flex md:flex-row flex-col">
          <div className="basis-[50%] mx-auto md:order-1 order-2 xs:mt-5 xs:justify-center">
            <h4 className="sm:text-[36px] xs:text-[25px] text-high font-bold xs:text-center">
              Get Certified
            </h4>
            <p className="sm:text-[18px] xs:text-[14px] font-normal text-high xs:text-center">
              Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare
              pharetra leo vestibulum at orci.
            </p>

            <div className="bg-white rounded-xl shadow-md overflow-hidden p-5 mt-8">
              <div className="grow xs:mx-auto flex items-center gap-[15px]">
                <img className="sm:w-[86px] sm:h-[86px] xs:w-[70px] xs:h-[70px]" src="/images/icon-1.png" alt="Official and verified" />
                <div className="text-high sm:text-[20px] xs:text-[16px] font-medium">
                  Official and verified
                  <p className="text-txt sm:text-[15px] xs:text-[13px] font-normal">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut
                    ornare pharetra leo vestibulum at orci.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden p-5 my-8">
              <div className="grow xs:mx-auto flex items-center gap-[15px]">
                <img className="sm:w-[86px] sm:h-[86px] xs:w-[70px] xs:h-[70px]" src="/images/icon-2.png" alt="Easily shareable" />
                <div className="text-high sm:text-[20px] xs:text-[16px] font-medium">
                  Easily shareable
                  <p className="text-txt sm:text-[15px] xs:text-[13px] font-normal">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut
                    ornare pharetra leo vestibulum at orci.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden p-5">
              <div className="grow xs:mx-auto flex items-center gap-[15px]">
                <img className="sm:w-[86px] sm:h-[86px] xs:w-[70px] xs:h-[70px]" src="/images/icon-3.png" alt="Career shifting" />
                <div className="text-high sm:text-[20px] xs:text-[16px] font-medium">
                  Career shifting
                  <p className="text-txt sm:text-[15px] xs:text-[13px] font-normal">
                    Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut
                    ornare pharetra leo vestibulum at orci.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-[30px] py[30px] pt-10 xs:justify-center">
              <button className="bg-gradient-to-r from-[#0ACEFE] to-[#2699FB] text-white sm:p-[15px_50px] xs:p-[12px_50px] rounded-md sm:text-[20px] xs:text-[15px] font-medium drop-shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
                Book Free Class
              </button>
            </div>
          </div>
          <div className="basis-[50%] mx-auto md:order-2 order-1">
            <img className="mx-auto sm:h-[639px]" src="/images/image-134.png" alt="Certificate" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetCertified;
