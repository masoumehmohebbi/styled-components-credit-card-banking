import GlobaloStyle, { Container } from "./styles/globalStyles";
import CreateCard from "./ui/CreateCard";
import FAQs from "./ui/FAQs";
import Footer from "./ui/Footer";
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
      <FAQs />
      <Footer />
    </Container>
  );
}

export default App;
