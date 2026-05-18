import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  AttentionSection,
  FinalCtaSection,
  FormatsSection,
  HeroSection,
  MidFormSection,
  OfferStatementSection,
  PriceSection,
  ScrollingSection,
  StatementRunSection,
  WatchingSection,
} from "@/components/sections/LandingSections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <OfferStatementSection />
        <WatchingSection />
        <ScrollingSection />
        <AttentionSection />
        <StatementRunSection />
        <FormatsSection />
        <MidFormSection />
        <PriceSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
