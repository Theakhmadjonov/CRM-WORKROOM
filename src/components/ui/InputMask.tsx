import { IMaskInput } from "react-imask";
import "../../assets/styles/input.css";
import Button from "./Button";

interface InputMaskProps {
  label: string;
}

const InputMask = ({ label }: InputMaskProps) => {
  return (
    <>
      <div className="flex flex-col gap-y-2">
        <label className="label">{label}</label>
        <div className="w-full gap-2 flex justify-between">
          <IMaskInput
            className="input w-full"
            mask={"+{998} 00 000 00 00"}
            unmask={"+998000000000"}
            defaultValue={"+998"}
            inputMode="tel"
            minLength={17}
          />
          <Button className="flex ml-auto items-center" variant="small">
            Send
          </Button>
        </div>
      </div>
    </>
  );
};

export default InputMask;
