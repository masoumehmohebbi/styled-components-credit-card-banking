import { styled, css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 1rem;
  flex-wrap: wrap;
  flex-direction: column;

  justify-content: ${(props) => props.varient === "primary" && "space-between"};
  gap: ${(props) => (props.varient === "primary" ? "25px" : "10px")};

  ${(props) =>
    props.varient ===
    ("appIcons" &&
      css`
        flex-direction: row;
        padding: 10px 0.1rem;
      `)};

  @media (max-width: 768px) {
    display: ${(props) => props.varient === "logo" && "none"};

    flex-direction: ${(props) => props.varient === ("logoFooter" && "row")};

    ${(props) =>
      props.varient === "secondary" &&
      css`
        position: fixed;
        left: 15px;
        top: 1px;
        flex-direction: row;
      `};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    display: ${(props) => props.varient === "secondary" && "none"};
    ${(props) =>
      props.varient === "s" &&
      css`
        display: flex;
        justify-content: space-between;
        width: 100%;
      `};
  }

  & .app-icon {
    margin-right: 0px;
    width: 55px;
    height: 80px;
    @media (min-width: 600px) {
      width: 110px;
      height: 110px;
    }
  }
  & span {
    margin: 0px 20px;
  }
`;
export const WrapperProcces = styled.div`
  margin-top: 1rem;
  padding: 60px 1rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 60px;
  justify-items: center;

  & img {
    width: 340px;
    height: 189px;
    margin-right: ${(props) => props.varient === "proccesImg" && "-75px"};
    @media (min-width: 768px) {
      width: 540px;
      height: 289px;
    }
    @media (min-width: 1024px) {
      width: 640px;
      height: 389px;
    }
  }
`;
export const WrapperFooter = styled.footer`
  color: rgb(var(--color-secondary-0));
  padding: 50px 1rem;
  display: grid;
  gap: 60px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  & ul {
    margin: 10px 0px;
  }
  & li {
    cursor: pointer;
    z-index: 9999;
  }
  & .col-span-2 {
    grid-column: span 2 / span 2;
  }
`;
