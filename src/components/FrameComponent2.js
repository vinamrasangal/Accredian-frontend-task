import React, { useState } from "react";
import PropTypes from "prop-types";
import ReferralForm from "./ReferralForm"; 

const FrameComponent2 = ({ className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`flex flex-col items-center justify-start pt-6 pb-16 pr-5 pl-6 box-border relative gap-20 min-h-[876px] max-w-full text-center text-6xl text-homeaccrediancom-mirage font-homeaccrediancom-roboto-bold-17 ${className}`}
    >
      <div className="w-full h-[calc(100%_-_91px)] absolute top-0 right-0 bottom-[91px] bg-aliceblue-100" />
      <div className="w-full max-w-[1387px] flex flex-col items-center gap-14 mq900:gap-7">
        <div className="flex flex-row items-center justify-center py-0 pr-6 pl-5 box-border">
          <div className="w-[321px] relative leading-[43px] font-semibold flex items-center shrink-0 mq450:text-3xl mq450:leading-[34px]">
            <span className="w-full">
              <span>{`How Do I `}</span>
              <span className="text-homeaccrediancom-royal-blue">Refer?</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start relative text-base text-black w-full max-w-[1387px]">
          <img
            className="w-full max-h-[491px] relative overflow-hidden object-cover"
            alt=""
            src="/18512590ai-1-1@2x.png"
          />
          <img
            className="h-[67px] w-[88px] absolute top-[144px] left-[20%]"
            alt=""
            src="/layer-2-00000166652077678251612620000003541000192939887504.svg"
          />
          <img
            className="h-[67.4px] w-[65.1px] absolute top-[144px] left-[50%] transform -translate-x-1/2"
            alt=""
            src="/layer-10.svg"
          />
          <img
            className="h-[67.2px] w-[65px] absolute top-[144px] right-[20%]"
            alt=""
            src="/group-22036.svg"
          />
          <div className="absolute bottom-[188px] left-[20%] leading-[22px] flex items-center justify-center w-[193px]">
            Submit referrals easily via our website’s referral section.
          </div>
          <div className="absolute bottom-[182px] left-[50%] transform -translate-x-1/2 leading-[22px] flex items-center justify-center w-[193px]">
            Earn rewards once your referral joins an Accredian program.
          </div>
          <div className="absolute bottom-[182px] right-[20%] leading-[22px] flex items-center justify-center w-[193px]">
            Both parties receive a bonus 30 days after program enrollment.
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1387px] flex flex-row items-center justify-center py-0 pr-6 pl-5 box-border text-xl text-homeaccrediancom-nero font-source-sans-pro">
        <button
          className="w-[236px] rounded-lg bg-homeaccrediancom-royal-blue flex items-center justify-center py-5 px-10 whitespace-nowrap transition duration-300 hover:bg-blue-700 cursor-pointer z-[10]"
          onClick={handleOpenModal}
        >
          <div className="flex-1 relative leading-[24px] inline-block min-w-[88px] font-source-sans-pro font-normal text-white text-lg">
            Refer Now
          </div>
        </button>
      </div>
      {isModalOpen && <ReferralForm onClose={handleCloseModal} />}
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
