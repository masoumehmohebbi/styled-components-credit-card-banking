import { AboutBox } from "../styles/globalStyles";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";

const Offer = () => {
  return (
    <div>
      <AboutBox varient="boxPadding">
        <article>
          <Heading as="h3">16y</Heading>
          <SubHeading as="sm" varient="primary">
            تجربه
          </SubHeading>
        </article>
        <article>
          <Heading as="h3">250+</Heading>
          <SubHeading as="sm" varient="primary">
            شریک تجاری
          </SubHeading>
        </article>
        <article>
          <Heading as="h3">18+</Heading>
          <SubHeading as="sm" varient="primary">
            سال تجربه
          </SubHeading>
        </article>
        <article>
          <Heading as="h3">10.2k+</Heading>
          <SubHeading as="sm" varient="primary">
            مشتریان
          </SubHeading>
        </article>
      </AboutBox>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          padding: "50px 0px",
        }}
      >
        <Heading as="h4">ما چه پیشنهادی میدیم؟</Heading>
        <AboutBox>
          <div style={{ display: "flex" }}>
            <article>
              <Heading as="h5">گارانتی امنیتی</Heading>
              <SubHeading as="sm">
                داده ها و وجه شما به طور ایمن محافظت می شود.
              </SubHeading>
            </article>
            <img
              style={{ width: "40px", height: "40px" }}
              src="/images/offer-1.svg"
              alt=""
            />
          </div>

          <div style={{ display: "flex" }}>
            <article>
              <Heading as="h5">سرمایه گذاری</Heading>
              <SubHeading as="sm">
                داده ها و وجه شما به طور ایمن محافظت می شود.
              </SubHeading>
            </article>
            <img
              style={{ width: "40px", height: "40px" }}
              src="/images/offer-2.svg"
              alt=""
            />
          </div>

          <div style={{ display: "flex" }}>
            <article>
              <Heading as="h5">چندین متد</Heading>
              <SubHeading as="sm">
                داده ها و وجه شما به طور ایمن محافظت می شود.
              </SubHeading>
            </article>
            <img
              style={{ width: "40px", height: "40px" }}
              src="/images/offer-3.svg"
              alt=""
            />
          </div>
        </AboutBox>
      </div>
    </div>
  );
};

export default Offer;
