import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { SelectedWork } from "@/components/SelectedWork";
import { Expertise } from "@/components/Expertise";
import { CareerJourney } from "@/components/CareerJourney";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { ProvenResults } from "@/components/ProvenResults";
import { Tools } from "@/components/Tools";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Process />
        <SelectedWork />
        <Expertise />
        <CareerJourney />
        <About />
        <Philosophy />
        <ProvenResults />
        <Tools />
        <CallToAction />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
