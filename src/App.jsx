import GlobaloStyle from "./styles/globalStyles";
import CreateCard from "./ui/CreateCard";
import FAQs from "./ui/FAQs";
import FindCard from "./ui/FindCard";
import Footer from "./ui/Footer";
import ManageFinance from "./ui/ManageFinance";
import Offer from "./ui/Offer";
import OurProcess from "./ui/OurProcess";
import "./index.css";
import Navbar from "./ui/Navbar";
import { Container } from "./ui/Container";

function App() {
  return (
    <Container>
      <div className="backgroundDora"></div>
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
