import { useState } from "react";
import { HiMinus, HiPlus } from "react-icons/hi";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import { styled } from "styled-components";

const data = [
  {
    id: 1,
    title: "برای درخواست کارت اعتباری به چه امتیاز اعتباری نیاز دارم؟",
    text: "  امتیاز اعتباری مورد نیاز ممکن است بسته به کارت اعتباری خاص متفاوت باشد. به طور کلی، نمره اعتباری خوب تا عالی (معمولاً 670 یا بالاتر) شانس تأیید شما را برای کارت های اعتباری ممتاز افزایش می دهد.",
  },
  {
    id: 2,
    title: "چگونه می توانم برای کارت اعتباری آنلاین اقدام کنم؟",
    text: "  امتیاز اعتباری مورد نیاز ممکن است بسته به کارت اعتباری خاص متفاوت باشد. به طور کلی، نمره اعتباری خوب تا عالی (معمولاً 670 یا بالاتر) شانس تأیید شما را برای کارت های اعتباری ممتاز افزایش می دهد.",
  },
  {
    id: 3,
    title: "آیا هزینه های سالانه مربوط به کارت اعتباری وجود دارد؟",
    text: "  امتیاز اعتباری مورد نیاز ممکن است بسته به کارت اعتباری خاص متفاوت باشد. به طور کلی، نمره اعتباری خوب تا عالی (معمولاً 670 یا بالاتر) شانس تأیید شما را برای کارت های اعتباری ممتاز افزایش می دهد.",
  },
  {
    id: 4,
    title: "پس از تایید کارت اعتباری چقدر طول می کشد؟",
    text: "  امتیاز اعتباری مورد نیاز ممکن است بسته به کارت اعتباری خاص متفاوت باشد. به طور کلی، نمره اعتباری خوب تا عالی (معمولاً 670 یا بالاتر) شانس تأیید شما را برای کارت های اعتباری ممتاز افزایش می دهد.",
  },
  {
    id: 5,
    title: "چگونه می توانم موجودی کارت اعتباری و تراکنش های خود را بررسی کنم؟",
    text: "  امتیاز اعتباری مورد نیاز ممکن است بسته به کارت اعتباری خاص متفاوت باشد. به طور کلی، نمره اعتباری خوب تا عالی (معمولاً 670 یا بالاتر) شانس تأیید شما را برای کارت های اعتباری ممتاز افزایش می دهد.",
  },
  {
    id: 6,
    title: "اگر کارت اعتباری من گم یا دزدیده شد چه کار باید بکنم؟",
    text: "  امتیاز اعتباری مورد نیاز ممکن است بسته به کارت اعتباری خاص متفاوت باشد. به طور کلی، نمره اعتباری خوب تا عالی (معمولاً 670 یا بالاتر) شانس تأیید شما را برای کارت های اعتباری ممتاز افزایش می دهد.",
  },
];

function Accordion() {
  const [open, setOpen] = useState(null);
  const handleOpen = (id) => {
    setOpen(id === open ? null : id);
  };

  return (
    <WrapperAccordion>
      {data.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          onOpen={handleOpen}
          open={open}
        >
          {item.text}
        </AccordionItem>
      ))}
    </WrapperAccordion>
  );
}

export default Accordion;

function AccordionItem({ id, title, setOpen, open, onOpen, children }) {
  const isOpen = id === open;

  return (
    <WrapperAccordionItem
      className={`accordion-item ${isOpen ? "accordion__expanded" : ""}`}
    >
      <AccordionItemHeader onClick={() => onOpen(id)}>
        <Heading as="h6">{title}</Heading>
        {isOpen ? (
          <HiMinus className="accordion-item__chevron" />
        ) : (
          <HiPlus className="accordion-item__chevron" />
        )}
      </AccordionItemHeader>
      <AccordionItemContent className="accordion-item__content">
        <SubHeading as="sm" varient="primary">
          {children}
        </SubHeading>
      </AccordionItemContent>
    </WrapperAccordionItem>
  );
}
// Styles
const WrapperAccordion = styled.div`
  max-width: 50rem;
  border-radius: 1rem;
  overflow: hidden;
  color: rgb(var(--color-secondary-0));
`;

const AccordionItemHeader = styled.div`
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.25rem;
`;

const AccordionItemContent = styled.div`
  transition: all 0.3s ease-in-out;
  max-height: 0px;
  opacity: 0;
  overflow: hidden;
  line-height: 1.6;
  padding: 0 1rem;
`;

const WrapperAccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid #e0e2e5;
  }
  /* &.accordion__expanded {
    padding: 1rem;
    opacity: 1;
    max-height: 100vh;
    transition: all 0.2s ease-in-out;
  } */
  & AccordionItemContent {
    padding: 1rem;
    opacity: 1;
    max-height: 100vh;
    transition: all 0.2s ease-in-out;
  }
  /* &.accordion__expanded {
    rotate: 180deg;
  } */
  /* &.accordion-item__chevron {
    rotate: 180deg;
  } */
`;
