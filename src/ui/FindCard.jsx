import { HiArrowRight } from "react-icons/hi";
import { WrapperProcces } from "../styles/globalStyles";
import { ButtonIcon } from "./ButtonIcon";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import FindCridietCard from "/images/findCard.svg";

const FindCard = () => {
  return (
    <WrapperProcces>
      <div>
        <Heading as="h3">کارت اعتباری مناسب را برای خود پیدا کنید </Heading>
        <SubHeading as="sm">
          کارت اعتباری ایده آل خود را به راحتی کشف کنید. انتخاب جامع ما پاسخگوی
          هر نیاز مالی و سبک زندگی است. فرقی نمی‌کند به دنبال پاداش‌های برگشت
          نقدی، هدیه‌های سفر یا اعتبار ساخت هستید، ما کارت اعتباری عالی در
          انتظار شما هستیم. فرصت ها را آزاد کنید و کارت اعتباری متناسب با اهداف
          و آرزوهای منحصر به فرد خود را بیابید.
        </SubHeading>
        <ButtonIcon>
          <HiArrowRight />
          بیشتر بدانید
        </ButtonIcon>
      </div>
      <img src={FindCridietCard} alt="" />
    </WrapperProcces>
  );
};

export default FindCard;
