"use client";

import { PROJECT } from "@/lib/project-data";
import { ScrollReveal, StaggerContainer, StaggerItem, TextReveal } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard";
import { AnimatedCounter } from "./AnimatedCounter";
import { ParallaxImage } from "./ParallaxImage";

export function Overview() {
  return (
    <section id="overview" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="01" label="項目概覽" />
        </ScrollReveal>

        {/* Image + text split */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-32">
          <ScrollReveal delay={0.1} variant="slideRight" className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-8 font-serif">
              我們的願景
            </h2>
            <p className="text-[16px] text-text-secondary leading-[1.8] tracking-[-0.01em]">
              <TextReveal delay={0.3}>
                {PROJECT.overview.summary}
              </TextReveal>
            </p>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <ParallaxImage
              src={PROJECT.images.editorial}
              alt="品牌創意方向"
              caption="Creative Direction Preview"
              className="aspect-[4/3] rounded-2xl"
            />
          </div>
        </div>

        {/* Objectives */}
        <ScrollReveal delay={0.1}>
          <div className="mb-10">
            <span className="text-[10px] font-mono tracking-[0.2em] text-text-muted uppercase">
              核心目標
            </span>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-12 gap-5" staggerDelay={0.12}>
          {/* Featured */}
          <StaggerItem className="md:col-span-7">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full">
                <span className="text-[10px] font-mono tracking-[0.2em] text-accent/50 uppercase block mb-6">01</span>
                <p className="text-[20px] text-text-primary font-medium leading-[1.5] tracking-[-0.01em] mb-4">
                  {PROJECT.overview.objectives[0]}
                </p>
                <p className="text-[13px] text-text-muted leading-[1.7]">
                  打造專屬於{PROJECT.client.name}的品牌系統，從零開始掌控自己的命運。
                </p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-5">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full flex flex-col justify-center">
                <span className="text-[10px] font-mono tracking-[0.2em] text-accent/50 uppercase block mb-6">02</span>
                <p className="text-[16px] text-text-secondary leading-[1.6] group-hover:text-text-primary transition-colors duration-500">
                  {PROJECT.overview.objectives[1]}
                </p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-5">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full flex flex-col justify-center">
                <span className="text-[10px] font-mono tracking-[0.2em] text-accent/50 uppercase block mb-6">03</span>
                <p className="text-[16px] text-text-secondary leading-[1.6] group-hover:text-text-primary transition-colors duration-500">
                  {PROJECT.overview.objectives[2]}
                </p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-7">
            <TiltCard className="group h-full">
              <div className="bg-accent/[0.04] border border-accent/[0.08] rounded-2xl p-10 hover:bg-accent/[0.07] transition-all duration-500 h-full flex items-center gap-8">
                <span className="text-[48px] font-light text-accent/15 leading-none tracking-[-0.04em]">04</span>
                <p className="text-[16px] text-text-secondary leading-[1.6] group-hover:text-text-primary transition-colors duration-500">
                  {PROJECT.overview.objectives[3]}
                </p>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>

        {/* Stats */}
        <div className="mt-28 grid md:grid-cols-12 gap-5">
          <ScrollReveal delay={0.15} variant="scaleIn" className="md:col-span-5">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 h-full flex flex-col justify-center hover:bg-bg-card-hover transition-all duration-500">
                <div className="text-[72px] font-bold text-text-primary leading-none tracking-[-0.04em] mb-3">
                  <AnimatedCounter value={PROJECT.deliverables.reduce((sum, cat) => sum + cat.items.length, 0) + PROJECT.timeline.reduce((sum, phase) => sum + phase.tasks.length, 0)} suffix="+" />
                </div>
                <div className="text-[13px] text-text-muted leading-[1.6] group-hover:text-text-secondary transition-colors duration-500">
                  完整交付項目涵蓋所有觸點
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>

          <div className="md:col-span-7 grid grid-cols-3 gap-5">
            {[
              { value: PROJECT.timeline.length, suffix: "", label: "項目階段" },
              { value: PROJECT.deliverables.reduce((sum, cat) => sum + cat.items.length, 0), suffix: "", label: "核心交付" },
              { value: PROJECT.scope.included.length, suffix: "", label: "服務項目" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.2 + i * 0.1} variant="scaleIn">
                <TiltCard className="group h-full">
                  <div className="card frame bg-bg-card rounded-2xl p-8 text-center h-full flex flex-col justify-center hover:bg-bg-card-hover transition-all duration-500">
                    <div className="text-[32px] font-bold text-text-primary mb-2 tracking-[-0.03em]">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] font-mono tracking-[0.15em] text-text-muted uppercase group-hover:text-accent/60 transition-colors duration-500">
                      {stat.label}
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
