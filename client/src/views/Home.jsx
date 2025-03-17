import React from "react";
import OurAllies from "../components/our_allies/Our_allies";
import AboutUs from "../components/aboutUs/AboutUs";
import OurTeam from "../components/ourTeam/OurTeam";
import ContextData from "../components/ContextData/ContextData";
import Banner from "../components/Banner/Banner";
import ServicesATV from "../components/Services_ATV/Services_ATV";
function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <ServicesATV />
      <OurTeam />
      <ContextData />
      <OurAllies />
    </div>
  );
}

export default Home;
