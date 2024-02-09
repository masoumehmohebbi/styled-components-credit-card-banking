import { Wrapper, WrapperFooter } from "../styles/globalStyles";
import { Heading } from "./Heading";
import { Link } from "./Link";
import { SubHeading } from "./SubHeading";
import Logo from "/logo.svg";

const Footer = () => {
  return (
    <WrapperFooter>
      <div className="col-span-2">
        <Wrapper>
          <img src={Logo} alt="" />
          <SubHeading as="md">گرین‌بانک</SubHeading>
        </Wrapper>
        <SubHeading as="sm">
          قدرت کارت های اعتباری امن و ارزشمند ما را کشف کنید
        </SubHeading>
      </div>
      <ul>
        <Heading as="h6">درباره ما</Heading>
        <li>
          <Link href="#"> سرمایه گذاران </Link>
        </li>
        <li>
          <Link href="#"> امکانات </Link>
        </li>
        <li>
          <Link href="#"> امنیت </Link>
        </li>
      </ul>
      <ul>
        <Heading as="h6">محصولات</Heading>
        <li>سرمایه گذاران</li>
        <li>امکانات</li>
        <li>امنیت</li>
      </ul>
      <ul>
        <Heading as="h6"> لینک های مفید</Heading>
        <li>سرمایه گذاران</li>
        <li>امکانات</li>
        <li>امنیت</li>
      </ul>
      <ul>
        <Heading as="h6">صفحات اجتماعی</Heading>
        <li>سرمایه گذاران</li>
        <li>امکانات</li>
        <li>امنیت</li>
      </ul>
    </WrapperFooter>
  );
};

export default Footer;
