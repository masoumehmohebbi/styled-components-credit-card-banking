import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  background-color: #fff;
  height: 55px;
  /* border-bottom: 2px solid #f1f1f1; */
  /* padding: 0 20px; */
  display: flex;
  justify-content: space-between;

  .logo {
    padding: 15px 0;
  }
`;

const Navbar2 = () => {
  return (
    // <Nav>
    //   <div className="logo">Nav Bar</div>
    //   <Burger />
    // </Nav>
    <Burger />
  );
};

export default Navbar2;
