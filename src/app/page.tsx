"use client";

import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Overview } from "@/components/Overview";
import { Timeline } from "@/components/Timeline";
import { Deliverables } from "@/components/Deliverables";
import { Scope } from "@/components/Scope";
import { Investment } from "@/components/Investment";
import { NextSteps } from "@/components/NextSteps";
import { Footer } from "@/components/Footer";
import { ImageBreak } from "@/components/ImageBreak";
import { CursorGlow } from "@/components/CursorGlow";
import { WelcomeModal } from "@/components/WelcomeModal";
import { PROJECT } from "@/lib/project-data";

export default function Home() {
  return (
    <main>
      <WelcomeModal />
      <CursorGlow />
      <Navigation />
      <Hero />
      <Overview />
      <ImageBreak
        src={PROJECT.images.hero1}
        alt="品牌視覺方向"
        caption="Mood / Direction"
      />
      <Timeline />
      <Deliverables />
      <ImageBreak
        src={PROJECT.images.brutalist}
        alt="Campaign visual reference"
        caption="Visual Reference"
      />
      <Scope />
      <Investment />
      <NextSteps />
      <Footer />
    </main>
  );
}
