import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Expertise } from "@/components/Expertise";
import { CareerJourney } from "@/components/CareerJourney";
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
        <SelectedWork />
        <Expertise />
        <CareerJourney />
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
