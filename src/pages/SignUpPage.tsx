import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import useStepProgressAuth from "../hooks/useStepProgressAuth";
import ProgressStep from "../components/ui/progress-step";
import Step1 from "../components/steps/Step1";

const SignUpPage = () => {
  const totalStep = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const { progressData, setProgressData } = useStepProgressAuth();
  const handleSavePreviusStep = () => {
    const findStep = progressData.find((step) => step.step === currentStep - 1);
    findStep.isSuccess = true;
    setProgressData([...progressData]);
  };
  const incrementCurrentStep = () => {
    if (currentStep <= 4) {
      setCurrentStep((prevState) => prevState + 1);
    }
  };
  useEffect(() => {
    if (currentStep !== 1) {
      handleSavePreviusStep();
    }
  }, [currentStep]);
  return (
    <section className="h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
      <div className="flex h-full gap-x-8">
        <div className="bg-[#3F8CFF] w-[100%] pt-[60px] rounded-[24px] max-w-[25%] pl-[40px]">
          <div className="flex flex-col gap-y-14 h-full items-start">
            <div className="mt-4 text-white gap-x-8">
              <Icon.companyLogo />
            </div>
            <p className="description text-white text-[40px] max-w-[400px]">
              Get started
            </p>
            <ProgressStep steps={progressData} currentStep={currentStep} />
          </div>
        </div>
        <div className="w-[100%] max-w-[70%] rounded-[24px]  bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex flex-col max-w-[403px] mx-auto items-center pt-[115px]">
            <span className="font-bold text-[14px] text-[#3F8CFF]">
              Step {currentStep}/{totalStep}
            </span>
            <h2 className="signin-title">
              {progressData[currentStep - 1].title}
            </h2>
            <Step1 />
          </div>
          <div className="border-t-2 border-[#E4E6EF] pt-[18px] mt-[84px]">
            <Button
              variant="small"
              className="flex gap-x-3 items-center ml-auto mr-10"
            >
              Next Step
              <Icon.rightArrowIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
