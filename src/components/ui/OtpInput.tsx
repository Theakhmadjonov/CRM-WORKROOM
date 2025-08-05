import { useState } from "react";
import OTPInput from "react-otp-input";
import Button from "./Button";

interface InputOtpProps {
  label: string;
}

const Otpinput = ({ label }: InputOtpProps) => {
  const [otp, setOtp] = useState("");
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <label className="label">{label}</label>
        <OTPInput
          value={otp}
          containerStyle={`gap-x-[16px]`}
          inputStyle={`!w-[58px] !h-[50px] rounded-[14px] text-[#7D8592] border-2 border-[#D8E0F0]`}
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => <input {...props} />}
        />
      </div>
    </>
  );
};

export default Otpinput;
