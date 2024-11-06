
import HomePage from "./coffee/page";
import MenuCards from "./menucard";
import HeroSection from "./background";
import TestimonialsSection from "./testimonies";
import ContactFormMap from "./map";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <MenuCards/>
      <HeroSection/>
     <TestimonialsSection/>

     <ContactFormMap/>
    </div>
  );
}
