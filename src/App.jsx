import GlobaloStyle, { Container } from "./styles/globalStyles";
import FAQs from "./ui/FAQs";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";
import Offer from "./ui/Offer";
import OurProcess from "./ui/OurProcess";

function App() {
  return (
    <Container>
      <GlobaloStyle />
      <Navbar />
      <OurProcess />
      <Offer />
      <FAQs />
      <Footer />
    </Container>
  );
}

export default App;
