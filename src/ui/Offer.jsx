import { AboutBox } from "../styles/globalStyles";
import { Heading } from "./Heading";
import { SubHeading } from "./SubHeading";

const Offer = () => {
  return (
    <div>
      <AboutBox>
        <div>
          <Heading as="h3">16y</Heading>
          <SubHeading as="sm" varient="primary">
            تجربه
          </SubHeading>
        </div>
        <div>
          <Heading as="h3">250+</Heading>
          <SubHeading as="sm" varient="primary">
            شریک تجاری
          </SubHeading>
        </div>
        <div>
          <Heading as="h3">18+</Heading>
          <SubHeading as="sm" varient="primary">
            سال تجربه
          </SubHeading>
        </div>
        <div>
          <Heading as="h3">10.2k+</Heading>
          <SubHeading as="sm" varient="primary">
            مشتریان
          </SubHeading>
        </div>
      </AboutBox>
      <Heading as="h4">ما چه پیشنهادی میدیم؟</Heading>
    </div>
  );
};

export default Offer;
