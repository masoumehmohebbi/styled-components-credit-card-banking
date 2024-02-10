import styled from "styled-components";
import Burger from "./Burger";
import { Wrapper } from "../styles/globalStyles";
import { SubHeading } from "./SubHeading";
import Logo from "/logo.svg";

const Nav = styled.nav`
  position: fixed;
  top: 0px;
  right: 0px;
  height: 55px;
  display: flex;
  width: 100%;
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

const Navbar2 = () => {
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

export default Navbar2;
