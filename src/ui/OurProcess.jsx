import { ButtonIcon } from "./ButtonIcon";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { HiArrowRight } from "react-icons/hi";
import CreditCart from "/images/credit-cart.svg";
import { WrapperProcces } from "./Wrapper";

const OurProcess = () => {
  return (
    <WrapperProcces varient="proccesImg" id="whyUs">
      <img src={CreditCart} alt="Credit Cart" />
      <div>
        <Heading as="h2">کارت اعتباری مناسب شما پیدا شد</Heading>
        <SubHeading as="sm">
          قدرت کارت های اعتباری امن و ارزشمند ما را کشف کنید. طیف وسیعی از کارت
          های اعتباری ما را کاوش کنید و کنترل امور مالی خود را امروز در دست
          بگیرید.
        </SubHeading>
        <ButtonIcon>
          <HiArrowRight />
          شروع کنید
        </ButtonIcon>
      </div>
    </WrapperProcces>
  );
};

export default OurProcess;
