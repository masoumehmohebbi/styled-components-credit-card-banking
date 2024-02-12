import styled from "styled-components";
import Burger from "./Burger";
import { SubHeading } from "./SubHeading";
import Logo from "/logo.svg";
import { Wrapper } from "./Wrapper";

const Nav = styled.nav`
  background: linear-gradient(
    78deg,
    rgba(31, 77, 32, 1) 0%,
    rgba(26, 30, 28, 1) 100%
  );
  padding: 0rem 1rem;
  position: fixed;
  z-index: 9999;
  top: 0px;
  height: 55px;
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0px auto;

  @media (max-width: 768px) {
    width: 100%;
    background: linear-gradient(
      78deg,
      rgba(31, 77, 32, 1) 0%,
      rgba(26, 30, 28, 1) 100%
    );
    padding: 1rem 0rem 1rem 1rem;
    position: fixed;
    top: 0px;
    height: 55px;
    display: flex;
    justify-content: space-between;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Wrapper varient="secondary">
        <img src={Logo} alt="logo" />
        <SubHeading as="sm">گرین‌بانک</SubHeading>
      </Wrapper>
      <Burger />
    </Nav>
  );
};

export default Navbar;
