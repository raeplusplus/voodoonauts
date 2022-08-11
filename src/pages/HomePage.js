import { useState } from "react";
import Alumni from "../components/Alumni/Alumni";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import {
  founderHugh,
  founderLP,
  founderShingai,
  founderYvette,
  homeObjOne,
} from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection/InfoSection";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...founderShingai} />
      <InfoSection {...founderYvette} />
      <InfoSection {...founderLP} />
      <InfoSection {...founderHugh} />
      <Alumni />
      <Footer />
    </>
  );
};

export default Home;
