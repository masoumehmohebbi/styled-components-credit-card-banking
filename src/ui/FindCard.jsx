import { HiArrowRight } from "react-icons/hi";
import { ButtonIcon } from "./ButtonIcon";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import FindCridietCard from "/images/findCard.svg";
import Quotate from "/images/quotation.svg";
import User1 from "/images/user-1.svg";
import User2 from "/images/user-2.svg";
import User3 from "/images/user-3.svg";
import { Wrapper, WrapperProcces } from "./Wrapper";
import { styled, css } from "styled-components";

export const AboutBox = styled.div`
  ${(props) =>
    props.varient === "primary" &&
    css`
      display: grid;
      gap: 60px;
      grid-template-columns: repeat(1, minmax(0, 1fr));

      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
      }
    `}
  ${(props) =>
    props.varient !== "primary" &&
    css`
      display: flex;
      justify-content: space-between;
    `}


  margin: 0px auto;
  align-items: center;
  padding-top: 10px;

  background-color: ${(props) =>
    props.varient === "boxPadding" && "rgb(var(--color-primary-100))"};

  padding: ${(props) => props.varient === "boxPadding" && " 10px 60px"};

  border-radius: ${(props) => props.varient === "boxPadding" && "12px"};

  gap: ${(props) => props.varient !== "boxPadding" && "45px"};

  & article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem 0rem;
  }

  & .user {
    margin: 0rem 0.7rem;
  }
  @media (min-width: 768px) {
    max-width: 878px;
  }
`;

const FindCard = () => {
  return (
    <>
      <WrapperProcces id="services">
        <div>
          <Heading as="h3">کارت اعتباری مناسب را برای خود پیدا کنید </Heading>
          <SubHeading as="sm">
            کارت اعتباری ایده آل خود را به راحتی کشف کنید. انتخاب جامع ما
            پاسخگوی هر نیاز مالی و سبک زندگی است. فرقی نمی‌کند به دنبال
            پاداش‌های برگشت نقدی، هدیه‌های سفر یا اعتبار ساخت هستید، ما کارت
            اعتباری عالی در انتظار شما هستیم. فرصت ها را آزاد کنید و کارت
            اعتباری متناسب با اهداف و آرزوهای منحصر به فرد خود را بیابید.
          </SubHeading>
          <ButtonIcon>
            <HiArrowRight />
            بیشتر بدانید
          </ButtonIcon>
        </div>
        <img src={FindCridietCard} alt="Find Cridiet Card" />
      </WrapperProcces>
      <Wrapper>
        <AboutBox varient="boxPadding">
          <article>
            <img src={Quotate} alt="quotate" />
            <SubHeading as="sm">
              جلسه عالی! دنی فوق العاده مفید بود. او توصیه های عملی را در مورد
              اینکه چگونه می توانیم خدمات lorem ip را اصلاح کنیم، به اشتراک
              گذاشت.
            </SubHeading>

            <AboutBox>
              <div style={{ display: "flex" }}>
                <article>
                  <Heading as="h5">هادی امانی</Heading>
                  <SubHeading as="sm">طراح سایت</SubHeading>
                </article>
                <img
                  className="user"
                  style={{ width: "40px", height: "40px" }}
                  src={User1}
                  alt="user 1"
                />
              </div>
            </AboutBox>
          </article>
        </AboutBox>
        <AboutBox varient="boxPadding">
          <article>
            <img src={Quotate} alt="quotation" />
            <SubHeading as="sm">
              جلسه عالی! دنی فوق العاده مفید بود. او توصیه های عملی را در مورد
              اینکه چگونه می توانیم خدمات lorem ip را اصلاح کنیم، به اشتراک
              گذاشت.
            </SubHeading>

            <AboutBox>
              <div style={{ display: "flex" }}>
                <article>
                  <Heading as="h5">هادی امانی</Heading>
                  <SubHeading as="sm">طراح سایت</SubHeading>
                </article>
                <img
                  className="user"
                  style={{ width: "40px", height: "40px" }}
                  src={User2}
                  alt="User 2"
                />
              </div>
            </AboutBox>
          </article>
        </AboutBox>
        <AboutBox varient="boxPadding">
          <article>
            <img src={Quotate} alt="quotate" />
            <SubHeading as="sm">
              جلسه عالی! دنی فوق العاده مفید بود. او توصیه های عملی را در مورد
              اینکه چگونه می توانیم خدمات lorem ip را اصلاح کنیم، به اشتراک
              گذاشت.
            </SubHeading>

            <AboutBox>
              <div style={{ display: "flex" }}>
                <article>
                  <Heading as="h5">هانیه امانی</Heading>
                  <SubHeading as="sm">طراح سایت</SubHeading>
                </article>
                <img
                  className="user"
                  style={{ width: "40px", height: "40px" }}
                  src={User3}
                  alt="User 3"
                />
              </div>
            </AboutBox>
          </article>
        </AboutBox>
      </Wrapper>
    </>
  );
};

export default FindCard;
