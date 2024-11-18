
import HomePage from "./coffee/page";
import MenuCards from "./menucard";
import HeroSection from "./background";
import TestimonialsSection from "./testimonies";
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
