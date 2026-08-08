import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { FeatureHighlight } from "@/components/sections/FeatureHighlight";
import { Stats } from "@/components/sections/Stats";
import { Testimonial } from "@/components/sections/Testimonial";
import { BlogGrid } from "@/components/sections/BlogGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { spendingHighlightContent } from "@/data/spendingHighlight";
import { footerDesignHighlightContent } from "@/data/footerDesignHighlight";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Services />
        <FeatureHighlight content={spendingHighlightContent} />
        <Stats />
        <FeatureHighlight content={footerDesignHighlightContent} background="white" />
        <Testimonial />
        <BlogGrid />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
