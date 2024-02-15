import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import Footer1 from "./PortfolioContainer/Footer/Footer";
import ConnectedWithMe from "./PortfolioContainer/ConnectedWithMe/connectedWithMe";
import ContactForm from "./PortfolioContainer/ContactForm/ContactForm";
import About from "./PortfolioContainer/AboutMe/AboutMe";
import CertificateCard from './PortfolioContainer/certifiacteCard/certificateCard'
import MySkill from "./PortfolioContainer/MySkill/MySkill";
import ProjecSection from "./PortfolioContainer/ProjectSection/ProjecSection";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <MySkill/>
      <ProjecSection/>
      <ContactForm/>
      <CertificateCard/>
      <ConnectedWithMe />
      <Footer1 />
    </div>
  );
}

export default App;
