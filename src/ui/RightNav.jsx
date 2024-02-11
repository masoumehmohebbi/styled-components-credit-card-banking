import { Wrapper } from "../styles/globalStyles";
import { Button } from "./Button";
import { Link } from "./Link";
import { SubHeading } from "./SubHeading";
import Logo from "/logo.svg";
import styled from "styled-components";

const Ul = styled.ul`
  /* background: linear-gradient(
    78deg,
    rgba(31, 77, 32, 1) 0%,
    rgba(26, 30, 28, 1) 100%
  ); */

  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 1rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: rgb(var(--color-primary-100));

    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    position: fixed;
    top: 0px;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
  @media (min-width: 768px) {
    padding: 10px 0rem;
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
