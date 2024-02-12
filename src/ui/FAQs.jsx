import Accordion from "./Accordion";
import { Heading } from "./Heading";

export default function FAQs() {
  return (
    <div id="fAQs" style={{ padding: "45px 1rem" }}>
      <Heading as="h4">سوالات متداول</Heading>
      <Accordion />
    </div>
  );
}
