import AboutMe from "../AboutMe"
import HeroSection from "../HeroSection";
import MyPorfolio from "../MyPorfolio";
import MySkills from "../MySkills"
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe"
import Footer from "../footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPorfolio />
      <Testimonial />
      <ContactMe />
      <Footer />

    </>
  );
}
