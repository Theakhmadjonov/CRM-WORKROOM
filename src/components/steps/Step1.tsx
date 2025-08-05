import "../../assets/styles/input.css";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Input from "../ui/Input";
import InputMask from "../ui/InputMask";
import Otpinput from "../ui/OtpInput";

const Step1 = () => {
  return (
    <div className="w-full">
      <form className="flex flex-col gap-y-[31px] mt-[33px]">
        <InputMask label="Mobile Number" />
        <Otpinput label="Code from SMS" />
        <Input
          inputClassName="w-full"
          type="email"
          label="Email Address"
          placeholder="youremail@gmail.com"
        />
        <Input
          inputClassName="w-full"
          label="Create Password"
          type={"password"}
          placeholder="••••••••"
          eyeIcon={true}
        />
      </form>
    </div>
  );
};

export default Step1;
