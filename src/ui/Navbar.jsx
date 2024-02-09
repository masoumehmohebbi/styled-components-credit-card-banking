import { Wrapper } from "../styles/globalStyles";
import { Button } from "./Button";
import { Link } from "./Link";
import { SubHeading } from "./SubHeading";
import Logo from "/logo.svg";

const Navbar = () => {
  return (
    <Wrapper varient="primary">
      <Wrapper>
        <img src={Logo} alt="" />
        <SubHeading as="sm">گرین‌بانک</SubHeading>
      </Wrapper>
      <Wrapper>
        <span>
          <Link href="#">چرا ما </Link>
        </span>
        <span>
          <Link href="#">پیشنهادات</Link>
        </span>
        <span>
          <Link href="#">سوالات متداول</Link>
        </span>
        <span>
          <Link href="#"> خدمات </Link>
        </span>
      </Wrapper>
      <Button>ارتباط با ما</Button>
    </Wrapper>
  );
};

export default Navbar;
