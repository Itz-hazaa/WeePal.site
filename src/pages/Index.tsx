import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PilotProgram from "@/components/PilotProgram";
import Achievements from "@/components/Achievements";
import Founder from "@/components/Founder";
import Teachers from "@/components/Teachers";
import DemoClasses from "@/components/DemoClasses";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <PilotProgram />
      <Achievements />
      <Founder />
      <Teachers />
      <DemoClasses />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
