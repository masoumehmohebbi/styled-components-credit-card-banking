import { Wrapper } from "../styles/globalStyles";
import { Button } from "./Button";
import { SubHeading } from "./SubHeading";
import Logo from "/logo.svg";

const Navbar = () => {
  return (
    <Wrapper>
      <Wrapper>
        <img src={Logo} alt="" />
        <SubHeading as="sm">گرین‌بانک</SubHeading>
      </Wrapper>
      <Wrapper>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </Wrapper>
      <Button>ارتباط با ما</Button>
    </Wrapper>
  );
};

export default Navbar;
