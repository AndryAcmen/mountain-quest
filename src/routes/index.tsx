import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { Recognition } from "@/components/landing/Recognition";
import { WhatItIs } from "@/components/landing/WhatItIs";
import { WhyItWorks } from "@/components/landing/WhyItWorks";
import { Outcomes } from "@/components/landing/Outcomes";
import { Program } from "@/components/landing/Program";
import { HowItGoes } from "@/components/landing/HowItGoes";
import { ForWhom } from "@/components/landing/ForWhom";
import { Guide } from "@/components/landing/Guide";
import { Reflections } from "@/components/landing/Reflections";
import { Conditions } from "@/components/landing/Conditions";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { SiteFooter } from "@/components/landing/SiteFooter";
import { StickyMobileCTA } from "@/components/landing/StickyMobileCTA";
import heroImg from "@/assets/hero-mountains.jpg";

const TITLE = "Поход к Счастью · Горный Феникс — VIP эко-тур в Приэльбрусье, 6–10 июля 2026";
const DESCRIPTION =
  "5-дневный квестовый трансформационный VIP эко-тур в Приэльбрусье. Камерная группа 4–8 человек, маршрут, практики, проводник Андрей Акмен. 6–10 июля 2026.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Recognition />
        <WhatItIs />
        <WhyItWorks />
        <Outcomes />
        <Program />
        <HowItGoes />
        <ForWhom />
        <Guide />
        <Reflections />
        <Conditions />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <SiteFooter />
      <StickyMobileCTA />
    </div>
  );
}
