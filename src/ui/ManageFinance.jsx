import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import EasyManageFinance from "/images/ManageFinance.svg";
import AppStore from "/images/App_Store.svg";
import GooglePlay from "/images/Google_Play.svg";
import { Wrapper, WrapperProcces } from "./Wrapper";

const ManageFinance = () => {
  return (
    <WrapperProcces>
      <img src={EasyManageFinance} alt="Easy Manage Finance" />
      <div>
        <Heading as="h3">راه آسان برای مدیریت امور مالی </Heading>
        <SubHeading as="sm">
          استفاده آسان از برنامه موبایلی که در اندروید و ios پشتیبانی می کند.
        </SubHeading>

        <Wrapper varient="appIcons" style={{ flexDirection: "row" }}>
          <img className="app-icon" src={AppStore} alt="app store" />
          <img className="app-icon" src={GooglePlay} alt="google play" />
        </Wrapper>
      </div>
    </WrapperProcces>
  );
};

export default ManageFinance;
