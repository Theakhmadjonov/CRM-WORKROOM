import Icon from "./ui/Icon";
import person from "../assets/icons/photo.svg";

const Header = () => {
  return (
    <header className="mt-[20px] ml-[30px]">
      <div className="flex items-center justify-between">
        <div className="left flex items-center gap-[13px] bg-white rounded-[20px] w-[412px] py-[12px] pl-[19px]">
          <Icon.searchIcon />
          <input
            type="text"
            placeholder="Search"
            className="text-[#7D8592] search-input outline-none"
          />
        </div>
        <div className="right flex items-center mr-10 gap-6">
          <div className="flex items-center justify-center rounded-[14px] w-12 h-12 bg-white">
            <Icon.bellIcon />
          </div>
          <div className="flex items-center justify-center h-[48px] rounded-[15px] bg-white px-[14px] gap-x-2.5">
            <img src={person} alt="" />
            <h1 className="font-[700] text-[18px] text-[#0A1629]">
              Evan Yates
            </h1>
            <Icon.bottomArrowIcon2 />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
