import { Wrapper } from "../styles/globalStyles";
import { Button } from "./Button";
import { Link } from "./Link";
import { SubHeading } from "./SubHeading";
import Logo from "/logo.svg";
import styled from "styled-components";

const Ul = styled.ul`
  width: 100%;
  background: linear-gradient(
    78deg,
    rgba(31, 77, 32, 1) 0%,
    rgba(26, 30, 28, 1) 100%
  );

  right: 0px;
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1rem;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(var(--color-primary-100));
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <Wrapper varient="s">
        <Wrapper varient="logo">
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
    </Ul>
  );
};

export default RightNav;
