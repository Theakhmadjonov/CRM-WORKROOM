import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Step1 from "../components/steps/Step1";
import Step2 from "../components/steps/Step2";
import Step3 from "../components/steps/Step3";
import Step4 from "../components/steps/Step4";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import ProgressStep from "../components/ui/progress-step";
import useStepProgressAuth from "../hooks/useStepProgressAuth";

const SignUpPage = () => {
  const totalStep = 4;
  const [currentStep, setCurrentStep] = useState(1);
  const [nextStep, setNextStep] = useState<boolean>(false);
  const [isSuccess, setisSuccess] = useState(false);
  const { progressData, setProgressData } = useStepProgressAuth();
  const handleSavePreviusStep = () => {
    const findStep = progressData.find((step) => step.step === currentStep - 1);
    findStep.isSuccess = true;
    setProgressData([...progressData]);
  };
  const incrementCurrentStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prevState) => prevState + 1);
    }
  };
  useEffect(() => {
    if (currentStep !== 1) {
      handleSavePreviusStep();
    }
  }, [currentStep]);
  const getCurrentStep = () => {
    switch (currentStep) {
      case 1: {
        return <Step1 />;
      }
      case 2: {
        return <Step2 />;
      }
      case 3: {
        return <Step3 />;
      }
      case 4: {
        return <Step4 />;
      }
    }
  };

  // const incrementCurrentStep = () => {
  //   if (currentStep < totalStep) {
  //     const updatedSteps = progressData.map((step) =>
  //       step.step === currentStep ? { ...step, isSuccess: true } : step
  //     );
  //     setProgressData(updatedSteps);
  //     setCurrentStep((prev) => prev + 1);
  //   }
  // };

  // const decrementCurrentStep = () => {
  //   if (currentStep > 1) {
  //     const updatedSteps = progressData.map((step) =>
  //       step.step === currentStep - 1 ? { ...step, isSuccess: false } : step
  //     );
  //     setProgressData(updatedSteps);
  //     setCurrentStep((prev) => prev - 1);
  //   }
  // };
  return (
    // <section className="h-screen p-[20px_35px_30px_35px] bg-[#F4F9FD]">
    //   <div className="flex h-full gap-x-8">
    //     <div className="bg-[#3F8CFF] w-[100%] pt-[60px] rounded-[24px] max-w-[25%] pl-[40px]">
    //       <div className="flex flex-col gap-y-14 h-full items-start">
    //         <div className="mt-4 text-white gap-x-8">
    //           <Icon.companyLogo />
    //         </div>
    //         <p className="description text-white text-[40px] max-w-[400px]">
    //           Get started
    //         </p>
    //         <ProgressStep steps={progressData} currentStep={currentStep} />
    //       </div>
    //     </div>
    //     <div className="w-[100%] flex flex-col justify-between pb-[18px] max-w-[70%] rounded-[24px] bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
    //       <div className="flex flex-col max-w-[403px] mx-auto items-center pt-[75px]">
    //         <span className="font-bold text-[14px] text-[#3F8CFF]">
    //           Step {currentStep}/{totalStep}
    //         </span>
    //         <h2 className="signin-title text-[22px] font-bold">
    //           {progressData[currentStep - 1].title}
    //         </h2>
    //         {currentStep === 1 && <Step1 />}
    //         {currentStep === 2 && <Step2 />}
    //         {currentStep === 3 && <Step3 />}
    //         {currentStep === 4 && <Step4 />}
    //       </div>
    //       <div className="border-t-2 border-[#E4E6EF] pt-[18px] mt-10 flex items-center">
    //         {currentStep > 1 && (
    //           <button
    //             onClick={decrementCurrentStep}
    //             className="flex items-center gap-[5px] border-none text-[#3F8CFF] ml-[56px]"
    //           >
    //             <Icon.previusIcon />
    //             Previous
    //           </button>
    //         )}
    //         {currentStep === 4 ? (
    //           <Link
    //             to={"/successfull"}
    //             className="link flex gap-x-3 items-center ml-auto mr-10"
    //           >
    //             Next Step <Icon.rightArrowIcon />
    //           </Link>
    //         ) : (
    //           <Button
    //             onClick={incrementCurrentStep}
    //             disabled={false}
    //             variant="small"
    //             className={`flex gap-x-3 items-center ml-auto mr-10 ${
    //               !isSuccess && "disabled"
    //             }`}
    //           >
    //             Next Step
    //             <Icon.rightArrowIcon />
    //           </Button>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </section>

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
        <div className="w-[100%] flex flex-col justify-between max-w-[70%] rounded-[24px]  bg-white shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <div className="flex flex-col max-w-[403px] w-full mx-auto items-center pt-[55px]">
            <span className="font-bold text-[14px] text-[#3F8CFF]">
              Step {currentStep}/{totalStep}
            </span>
            <h2 className="signin-title">
              {progressData[currentStep - 1].title}
            </h2>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="flex w-full flex-col gap-y-[15px] mt-[33px]"
            >
              {getCurrentStep()}
            </form>
          </div>
          <div className="border-t-2 border-[#E4E6E8] pt-[10px] pb-[10px]">
            <Button
              variant="small"
              disabled={nextStep}
              onClick={incrementCurrentStep}
              className={`flex ml-auto mr-10 items-center gap-x-3 ${
                !nextStep ? "disabled" : ""
              }`}
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
