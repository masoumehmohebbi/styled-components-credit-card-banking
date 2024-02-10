import Accordion from "./Accordion";
import { Heading } from "./Heading";

export default function FAQs() {
  return (
    <div style={{ padding: "45px 0px" }}>
      <Heading as="h4">سوالات متداول</Heading>
      <Accordion />
    </div>
  );
}
