import GlobaloStyle, { Container } from "./styles/globalStyles";
import CreateCard from "./ui/CreateCard";
import FAQs from "./ui/FAQs";
import FindCard from "./ui/FindCard";
import Footer from "./ui/Footer";
import ManageFinance from "./ui/ManageFinance";
import Navbar from "./ui/Navbar";
import Offer from "./ui/Offer";
import OurProcess from "./ui/OurProcess";

function App() {
  return (
    <Container>
      <img className="svg" src="images/dora.svg" alt="dora" />
      <GlobaloStyle />
      <Navbar />
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
