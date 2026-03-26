"use client";

import { PROJECT } from "@/lib/project-data";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";
import { SectionLabel } from "./SectionLabel";
import { TiltCard } from "./TiltCard";
import { AnimatedCounter } from "./AnimatedCounter";
import { ParallaxImage } from "./ParallaxImage";

export function Deliverables() {
  const [creative, hero, social, presentation] = PROJECT.deliverables;

  return (
    <section id="deliverables" className="relative py-32 px-6">
      <div className="luxury-divider max-w-6xl mx-auto mb-32" />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionLabel number="03" label="交付物" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 mb-28">
          <ScrollReveal delay={0.1} variant="slideRight" className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-4xl md:text-[3.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-8 font-serif">
              你會得到什麼
            </h2>
            <p className="text-[16px] text-text-secondary leading-[1.8] tracking-[-0.01em]">
              每一項交付物都經過精心打造，確保即時可用、直接上線。
            </p>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <ParallaxImage
              src={PROJECT.images.product}
              alt="Product visualization example"
              caption="Visual Asset Example"
              className="aspect-[4/3] rounded-2xl"
            />
          </div>
        </div>

        {/* Creative Direction */}
        <ScrollReveal delay={0.05}>
          <div className="flex items-baseline gap-4 mb-8">
            <h3 className="text-[22px] font-semibold text-text-primary tracking-[-0.02em]">{creative.category}</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-12 gap-5 mb-24" staggerDelay={0.1}>
          <StaggerItem className="md:col-span-7" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-5">
                  <h4 className="text-[18px] font-semibold text-text-primary tracking-[-0.01em] group-hover:text-accent transition-colors duration-500">
                    {creative.items[0].name}
                  </h4>
                  <span className="text-[11px] font-mono text-accent tracking-[0.1em]">{creative.items[0].quantity.toUpperCase()}</span>
                </div>
                <p className="text-[14px] text-text-muted leading-[1.7]">
                  {creative.items[0].description}
                </p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-5" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full flex flex-col justify-between">
                <span className="text-[11px] font-mono text-accent tracking-[0.1em]">{creative.items[1].quantity.toUpperCase()}</span>
                <div className="mt-6">
                  <h4 className="text-[16px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-500">{creative.items[1].name}</h4>
                  <p className="text-[13px] text-text-muted leading-[1.6]">{creative.items[1].description}</p>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-5" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full">
                <span className="text-[11px] font-mono text-accent/60 tracking-[0.1em] block mb-5">{creative.items[2].quantity.toUpperCase()}</span>
                <h4 className="text-[16px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-500">{creative.items[2].name}</h4>
                <p className="text-[13px] text-text-muted leading-[1.6]">{creative.items[2].description}</p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-7" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="bg-accent/[0.03] border border-accent/[0.06] rounded-2xl p-10 hover:bg-accent/[0.06] transition-all duration-500 h-full flex items-center gap-10">
                <span className="text-[56px] font-light text-accent/15 leading-none tracking-[-0.04em]">{creative.icon}</span>
                <div>
                  <h4 className="text-[16px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-500">{creative.items[3].name}</h4>
                  <p className="text-[13px] text-text-muted leading-[1.6]">{creative.items[3].description}</p>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>

        {/* Hero Visual Assets */}
        <ScrollReveal delay={0.05}>
          <div className="flex items-baseline gap-4 mb-8">
            <h3 className="text-[22px] font-semibold text-text-primary tracking-[-0.02em]">{hero.category}</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-12 gap-5 mb-24" staggerDelay={0.1}>
          <StaggerItem className="md:col-span-12" variant="scaleIn">
            <TiltCard className="group">
              <div className="bg-gradient-to-r from-accent/[0.05] to-accent/[0.02] border border-accent/[0.06] rounded-2xl p-12 hover:from-accent/[0.08] hover:to-accent/[0.04] transition-all duration-500 flex flex-col md:flex-row md:items-center gap-10">
                <div className="text-[64px] font-light text-accent/20 leading-none tracking-[-0.04em] group-hover:text-accent/35 transition-colors">5</div>
                <div className="flex-1">
                  <h4 className="text-[20px] font-semibold text-text-primary mb-3 tracking-[-0.01em] group-hover:text-accent transition-colors duration-500">{hero.items[0].name}</h4>
                  <p className="text-[14px] text-text-muted leading-[1.7]">{hero.items[0].description}</p>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-6" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full">
                <span className="text-[11px] font-mono text-accent/60 tracking-[0.1em] block mb-5">{hero.items[1].quantity.toUpperCase()}</span>
                <h4 className="text-[16px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-500">{hero.items[1].name}</h4>
                <p className="text-[13px] text-text-muted leading-[1.6]">{hero.items[1].description}</p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-6" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full">
                <span className="text-[11px] font-mono text-accent/60 tracking-[0.1em] block mb-5">{hero.items[2].quantity.toUpperCase()}</span>
                <h4 className="text-[16px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-500">{hero.items[2].name}</h4>
                <p className="text-[13px] text-text-muted leading-[1.6]">{hero.items[2].description}</p>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>

        {/* Social Content Assets */}
        <ScrollReveal delay={0.05}>
          <div className="flex items-baseline gap-4 mb-8">
            <h3 className="text-[22px] font-semibold text-text-primary tracking-[-0.02em]">{social.category}</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-12 gap-5 mb-24" staggerDelay={0.1}>
          <StaggerItem className="md:col-span-8" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-5">
                  <h4 className="text-[18px] font-semibold text-text-primary tracking-[-0.01em] group-hover:text-accent transition-colors duration-500">
                    {social.items[0].name}
                  </h4>
                  <span className="text-[11px] font-mono text-accent tracking-[0.1em]">{social.items[0].quantity.toUpperCase()}</span>
                </div>
                <p className="text-[14px] text-text-muted leading-[1.7]">{social.items[0].description}</p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-4" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full flex flex-col justify-between">
                <span className="text-[11px] font-mono text-accent tracking-[0.1em]">{social.items[1].quantity.toUpperCase()}</span>
                <div className="mt-6">
                  <h4 className="text-[16px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-500">{social.items[1].name}</h4>
                  <p className="text-[13px] text-text-muted leading-[1.6]">{social.items[1].description}</p>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-5" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="card frame bg-bg-card rounded-2xl p-10 hover:bg-bg-card-hover transition-all duration-500 h-full">
                <span className="text-[11px] font-mono text-accent/60 tracking-[0.1em] block mb-5">{social.items[2].quantity.toUpperCase()}</span>
                <h4 className="text-[16px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-500">{social.items[2].name}</h4>
                <p className="text-[13px] text-text-muted leading-[1.6]">{social.items[2].description}</p>
              </div>
            </TiltCard>
          </StaggerItem>

          <StaggerItem className="md:col-span-7" variant="scaleIn">
            <TiltCard className="group h-full">
              <div className="bg-accent/[0.03] border border-accent/[0.06] rounded-2xl p-10 hover:bg-accent/[0.06] transition-all duration-500 h-full flex items-center gap-10">
                <span className="text-[56px] font-light text-accent/15 leading-none tracking-[-0.04em]">2</span>
                <div>
                  <h4 className="text-[16px] font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors duration-500">{social.items[3].name}</h4>
                  <p className="text-[13px] text-text-muted leading-[1.6]">{social.items[3].description}</p>
                </div>
              </div>
            </TiltCard>
          </StaggerItem>
        </StaggerContainer>

        {/* Presentation / Internal Use */}
        <ScrollReveal delay={0.05}>
          <div className="flex items-baseline gap-4 mb-8">
            <h3 className="text-[22px] font-semibold text-text-primary tracking-[-0.02em]">{presentation.category}</h3>
            <div className="flex-1 h-px bg-border" />
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-5 mb-20" staggerDelay={0.1}>
          {presentation.items.map((item, i) => (
            <StaggerItem key={i} variant="scaleIn">
              <TiltCard className="group h-full">
                <div className={`rounded-2xl p-10 h-full transition-all duration-500 ${
                  i === 0
                    ? "bg-accent/[0.03] border border-accent/[0.06] hover:bg-accent/[0.06]"
                    : "card frame bg-bg-card hover:bg-bg-card-hover"
                }`}>
                  <span className="text-[11px] font-mono text-accent/60 tracking-[0.1em] block mb-6">{item.quantity.toUpperCase()}</span>
                  <h4 className="text-[16px] font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors duration-500">{item.name}</h4>
                  <p className="text-[13px] text-text-muted leading-[1.6]">{item.description}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Total */}
        <ScrollReveal delay={0.1} variant="scaleIn">
          <div className="text-center py-8">
            <div className="text-[56px] font-bold text-accent tracking-[-0.03em] mb-2">
              <AnimatedCounter value={34} suffix="+" duration={2} />
            </div>
            <div className="text-[11px] text-text-muted font-mono tracking-[0.2em] uppercase">總交付項目</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
