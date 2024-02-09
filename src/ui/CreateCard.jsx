import { HiArrowRight } from "react-icons/hi";
import { WrapperProcces } from "../styles/globalStyles";
import { ButtonIcon } from "./ButtonIcon";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import CreateCridietCard from "/images/createCard.svg";

const CreateCard = () => {
  return (
    <WrapperProcces>
      <img src={CreateCridietCard} alt="" />
      <div>
        <Heading as="h3">کارت اعتباری شخصی خود را طراحی کنید. </Heading>
        <SubHeading as="sm">
          شما این آزادی را دارید که طراحی کارت اعتباری خود را شخصی سازی کنید و
          تجربه ای واقعا منحصر به فرد را تضمین کنید که به شما احساس فوق العاده
          ای می دهد.
        </SubHeading>
        <ButtonIcon>
          <HiArrowRight />
          ایجاد کارت جدید
        </ButtonIcon>
      </div>
    </WrapperProcces>
  );
};

export default CreateCard;
