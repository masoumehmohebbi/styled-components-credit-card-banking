import GlobaloStyle, { Container } from "./styles/globalStyles";
import CreateCard from "./ui/CreateCard";
import FAQs from "./ui/FAQs";
import FindCard from "./ui/FindCard";
import Footer from "./ui/Footer";
import ManageFinance from "./ui/ManageFinance";
import Offer from "./ui/Offer";
import OurProcess from "./ui/OurProcess";
import "./index.css";
import Navbar2 from "./ui/Nav";

function App() {
  return (
    <Container>
      {/* <img className="svg" src="images/dora.svg" alt="dora" /> */}
      <div className="foo"></div>
      <GlobaloStyle />
      {/* <Navbar /> */}

      <Navbar2 />
      <OurProcess />
      <Offer />
      <CreateCard />
      <FindCard />
      <FAQs />
      <ManageFinance />
      <Footer />
    </Container>
  );
}

export default App;
