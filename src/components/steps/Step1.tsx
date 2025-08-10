import { useEffect, useRef, useState } from "react";
import "../../assets/styles/input.css";
import CodeTimer from "../CodeTimer";
import Input from "../ui/Input";
import InputMask from "../ui/InputMask";
import Otpinput from "../ui/OtpInput";
import useSendOtp from "../../hooks/requests/useSendOtp";
import { toast } from "react-toastify";

const Step1 = () => {
  const [canSendOtp, setCanSendOtp] = useState<boolean>(true);
  const {
    mutateAsync,
    isSuccess: sendOtpSuccess,
    isError,
    error,
    isPending,
  } = useSendOtp();
  const ref = useRef<HTMLInputElement>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("+998950086735");
  const handleClick = () => {
    const phoneNumber = ref.current?.value;
    setPhoneNumber(phoneNumber);
    mutateAsync(phoneNumber);
  };
  useEffect(() => {
    if (sendOtpSuccess) {
      toast.success(`Sms code sended`);
      setCanSendOtp(false);
    }
  }, [sendOtpSuccess]);
  useEffect(() => {
    if (isError) {
      toast.error(error["response"].data.message);
    }
  }, [isError]);
  return (
    <div className="w-full">
      <form className="flex flex-col gap-y-[31px] mt-[33px]">
        <InputMask
          label="Mobile Number"
          handleClick={handleClick}
          isLoading={isPending}
          sendOtpSuccess={!canSendOtp}
          inputRef={ref}
        />

        {!canSendOtp && (
          <Otpinput
            setCanSendOtp={setCanSendOtp}
            phone_number={phoneNumber}
            label="Code from SMS"
          />
        )}
        {!canSendOtp && (
          <CodeTimer
            setCanSendOtp={setCanSendOtp}
            phone_number={phoneNumber}
            time={59}
          />
        )}

        <Input
          inputClassName="w-full"
          type="email"
          required={true}
          label="Email Address"
          placeholder="youremail@gmail.com"
        />
        <Input
          inputClassName="w-full"
          label="Create Password"
          type={"password"}
          required={true}
          placeholder="••••••••"
          eyeIcon={true}
        />
      </form>
    </div>
  );
};

export default Step1;
