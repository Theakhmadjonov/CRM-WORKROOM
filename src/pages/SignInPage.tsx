import Icon from "../components/ui/Icon";
import "../assets/styles/sign-in.css";
import illustration from "../assets/icons/Illustration.svg";

const SignInPage = () => {
  return (
    <section className="h-screen p-[20px_40px_30px_40px] bg-[#F4F9FD]">
      <div className="flex rounded-[24px] overflow-hidden h-full">
        <div className="bg-[#3F8CFF] w-[100%] max-w-[50%] pl-[84px]">
          <div className="flex flex-col h-full justify-around items-start">
            <div className="flex items-center mt-4 text-white gap-[30px]">
              <Icon.companyLogo />
              <h2 className="brand-title">Woorkroom</h2>
            </div>
            <p className="desc text-white text-[40px] max-w-[390px]">Your place to work Plan. Create. Control.</p>
            <img width={600} height={373} src={illustration} alt="illustration" />
          </div>
        </div>

        <div className="w-[100%] max-w-[50%] bg-[white] shadow-[0px_6px_rgba(196_203_214_0.5)]">
          <h2>kjchdnjlm</h2>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
