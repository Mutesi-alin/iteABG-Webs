
import HomePage from "./landingpage/page";
import MenuCards from "./service";
import HeroSection from "./about";
import TestimonialsSection from "./team";
import ContactFormMap from "./map";
import DarkFooter from "./footer/indext";


export default function Home() {
  return (
    <div>
      <HomePage/>

      <HeroSection/>
      <MenuCards/> 
      <TestimonialsSection/>
    <ContactFormMap/>
    <DarkFooter/>
     </div>
  );
}
