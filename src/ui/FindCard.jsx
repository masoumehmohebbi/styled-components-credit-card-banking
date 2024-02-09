import { HiArrowRight } from "react-icons/hi";
import { AboutBox, Wrapper, WrapperProcces } from "../styles/globalStyles";
import { ButtonIcon } from "./ButtonIcon";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";
import FindCridietCard from "/images/findCard.svg";

const FindCard = () => {
  return (
    <>
      <WrapperProcces>
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
        <img src={FindCridietCard} alt="" />
      </WrapperProcces>
      <Wrapper>
        <AboutBox varient="boxPadding">
          <article>
            <img src="/images/quotation.svg" alt="" />
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
                  style={{ width: "40px", height: "40px" }}
                  src="/images/user-1.svg"
                  alt=""
                />
              </div>
            </AboutBox>
          </article>
        </AboutBox>
        <AboutBox varient="boxPadding">
          <article>
            <img src="/images/quotation.svg" alt="" />
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
                  style={{ width: "40px", height: "40px" }}
                  src="/images/user-2.svg"
                  alt=""
                />
              </div>
            </AboutBox>
          </article>
        </AboutBox>
        <AboutBox varient="boxPadding">
          <article>
            <img src="/images/quotation.svg" alt="" />
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
                  style={{ width: "40px", height: "40px" }}
                  src="/images/user-3.svg"
                  alt=""
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
