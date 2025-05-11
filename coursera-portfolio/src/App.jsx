import Header from "./components/Header";
import Landing from "./components/Landing";
import Section from "./components/Section";
import Contact from "./components/Contact";
import "./app.css";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Landing />
        <Section />
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
